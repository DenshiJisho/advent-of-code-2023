import { Day } from '../day';

interface Draw {
  red: number,
  green: number,
  blue: number
}

class Day2 extends Day {
  MAX_RED = 12;
  MAX_GREEN = 13;
  MAX_BLUE = 14;

  constructor () {
    super(2);
  }

  private newDraw (): Draw {
    return { red: 0, green: 0, blue: 0 };
  }

  private gameRounds (game: string): Draw[] {
    const draws: String[] = game.substring(game.indexOf(':') + 1).split(';');
    let draw: Draw;
    const drawList: Draw[] = [];
    for (const drawStr of draws) {
      draw = this.newDraw();
      for (const colorAmount of drawStr.split(',').map(x => x.trim())) {
        if (colorAmount.includes('red')) {
          draw.red = parseInt(colorAmount.split(' ')[0]);
        }
        if (colorAmount.includes('green')) {
          draw.green = parseInt(colorAmount.split(' ')[0]);
        }
        if (colorAmount.includes('blue')) {
          draw.blue = parseInt(colorAmount.split(' ')[0]);
        }
      }
      drawList.push(draw);
    }
    return drawList;
  }

  private drawsAreValid (draws: Draw[]): boolean {
    return draws.filter((draw) => draw.red > this.MAX_RED || draw.green > this.MAX_GREEN || draw.blue > this.MAX_BLUE).length === 0;
  }

  solveForPartOne (input: string): string {
    let total: number = 0;
    for (const [index, game] of input.split('\n').entries()) {
      if (this.drawsAreValid(this.gameRounds(game))) {
        total += index + 1;
      }
    }
    return String(total);
  }

  private getMaxColors (draws: Draw[]): Draw {
    return draws.reduce(
      (acc, draw) => {
        acc.red = draw.red > acc.red ? draw.red : acc.red;
        acc.green = draw.green > acc.green ? draw.green : acc.green;
        acc.blue = draw.blue > acc.blue ? draw.blue : acc.blue;
        return acc;
      }, { red: 0, green: 0, blue: 0 }
    );
  }

  solveForPartTwo (input: string): string {
    let total: number = 0;
    let lowest: Draw;
    for (const game of input.split('\n')) {
      lowest = this.getMaxColors(this.gameRounds(game));
      total += lowest.red * lowest.green * lowest.blue;
    }
    return String(total);
  }
}

export default new Day2();
