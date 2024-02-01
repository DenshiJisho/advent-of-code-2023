import { Day } from '../day';

interface coord {
  x: number,
  y: number
}

class Day11 extends Day {
  constructor () {
    super(11);
  }

  getGalaxies (input: string): coord[] {
    const galaxies: coord[] = [];
    let emptyRows: number = 0;
    const nonemptyCols: Set<number> = new Set();
    for (const [i, line] of input.split('\n').entries()) {
      if (line.indexOf('#') < 0) {
        emptyRows++;
      }
      for (let j = 0; j < line.length; j++) {
        if (line[j] === '#') {
          nonemptyCols.add(j);
          galaxies.push({ x: i + emptyRows, y: j });
        }
      }
    }
    for (let col = input.length - 1; col >= 0; col--) {
      if (nonemptyCols.has(col)) {
        continue;
      }
      for (const coord of galaxies) {
        if (coord.y > col) {
          coord.y++;
        }
      }
    }
    return galaxies;
  }

  getDistance (a: coord, b: coord): number {
    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
  }

  solveForPartOne (input: string): string {
    const galaxies = this.getGalaxies(input);
    let total = 0;
    for (let i = 0; i < galaxies.length; i++) {
      for (let j = i + 1; j < galaxies.length; j++) {
        total += this.getDistance(galaxies[i], galaxies[j]);
      }
    }
    return String(total);
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day11();
