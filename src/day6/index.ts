import { Day } from '../day';

class Day6 extends Day {
  constructor () {
    super(6);
  }

  private quadraticEquation (a: number, b: number, c: number): {x1: number, x2: number} {
    return {
      x1: (-b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a),
      x2: (-b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)
    };
  }

  private numWins (time: number, distance: number): number {
    // D = Tx - x^2 ==> 0 = -1x^2 + Tx - D
    const { x1, x2 } = this.quadraticEquation(-1, time, -distance);
    // Non-inclusive intercepts
    // ceil(x1) ==> floor(x1) + 1
    // floor(x2) ==> ceil(x2) - 1
    return Math.ceil(x2) - Math.floor(x1) - 1;
  }

  private zip (a: any[], b: any[]): any[][] {
    return a.map((val, ind) => [val, b[ind]]);
  }

  private getNumbers (line: string): string[] {
    return [...line.matchAll(/\d+/g)].map(x => x[0]);
  }

  solveForPartOne (input: string): string {
    const times = this.getNumbers(input.split('\n')[0]).map(x => parseInt(x));
    const distances = this.getNumbers(input.split('\n')[1]).map(x => parseInt(x));
    return String(this.zip(times, distances).reduce(
      (total, [time, distance]) => {
        return total * this.numWins(time, distance);
      }, 1
    ));
  }

  solveForPartTwo (input: string): string {
    const time = parseInt(this.getNumbers(input.split('\n')[0]).join(''));
    const distance = parseInt(this.getNumbers(input.split('\n')[1]).join(''));
    return String(this.numWins(time, distance));
  }
}

export default new Day6();
