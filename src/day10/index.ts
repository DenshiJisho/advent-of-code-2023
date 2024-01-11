import { Day } from '../day';

interface coordinate{
  i: number,
  j: number
}

class Maze {
  s: coordinate = { i: 0, j: 0 }
  location: coordinate = { i: 0, j: 0 }
  grid: string[][]

  // Symbol, previous movement -> direction
  directions: { [key: string]: string } = {
    '|N': 'N',
    '|S': 'S',
    '-E': 'E',
    '-W': 'W',
    'LS': 'E',
    'LW': 'N',
    'JS': 'W',
    'JE': 'N',
    '7E': 'S',
    '7N': 'W',
    'FN': 'E',
    'FW': 'S'
  }

  constructor (mazeText: string) {
    let index: number;
    this.grid = mazeText.split('\n').map(
      (line, lineNumber) => {
        index = line.indexOf('S');
        if (index >= 0) {
          this.s = { i: lineNumber, j: index };
        }
        return Array.from(line.trim());
      }
    );
    this.location = { i: this.s.i, j: this.s.j };
  }

  public atS (): boolean {
    return this.location.i === this.s.i && this.location.j === this.s.j;
  }

  public nextDirection (symbol: string, cameFrom: string): string {
    return this.directions[symbol.concat(cameFrom)];
  }

  public move (direction: string) {
    if (direction === 'N') {
      this.location.i -= 1;
    } else if (direction === 'S') {
      this.location.i += 1;
    } else if (direction === 'E') {
      this.location.j += 1;
    } else if (direction === 'W') {
      this.location.j -= 1;
    }
  }

  // Returns point next to S along with direction taken to get there
  public getStart (): [coordinate, string] {
    const i = this.s.i;
    const j = this.s.j;
    if (this.grid[i - 1][j] === '|' ||
        this.grid[i - 1][j] === 'F' ||
        this.grid[i - 1][j] === '7') {
      return [{ i: i - 1, j: j }, 'N'];
    }
    if (this.grid[i + 1][j] === '|' ||
        this.grid[i + 1][j] === 'J' ||
        this.grid[i + 1][j] === 'L') {
      return [{ i: i + 1, j: j }, 'S'];
    }
    return [{ i: i, j: j + 1 }, 'E'];
  }

  // Returns distance of walk from S back to S
  public walk (): number {
    let direction: string;
    let distance: number = 1;
    [this.location, direction] = this.getStart();
    while (!this.atS()) {
      direction = this.nextDirection(this.grid[this.location.i][this.location.j], direction);
      this.move(direction);
      distance += 1;
    }
    return distance;
  }
}

class Day10 extends Day {
  constructor () {
    super(10);
  }

  solveForPartOne (input: string): string {
    return String(new Maze(input).walk() / 2);
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day10();
