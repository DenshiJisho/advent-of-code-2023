import { Day } from '../day';

class Day3 extends Day {
  constructor () {
    super(3);
  }

  private parseLineNumbers (row: string): RegExpMatchArray[] {
    return [...row.matchAll(/(\d+)/g)];
  }

  private parseLineSymbols (row: string): RegExpMatchArray[] {
    return [...row.matchAll(/[^\d\r.]/g)];
  }

  private lineTotal (line: string, previous: string, next: string): number {
    const symbolPositions = this.parseLineSymbols(previous).concat(
      this.parseLineSymbols(line)).concat(
      this.parseLineSymbols(next)).map(x => x.index); // All symbol indicies compacted across three lines
    return this.parseLineNumbers(line).reduce(
      (total, numberMatch) => {
        if (numberMatch.index === undefined) {
          return total;
        }
        for (const symbolIndex of symbolPositions) {
          if (symbolIndex !== undefined &&
              symbolIndex >= numberMatch.index - 1 &&
              symbolIndex <= numberMatch.index + numberMatch[0].length) {
            total += parseInt(numberMatch[0]);
            break;
          }
        }
        return total;
      }, 0
    );
  }

  private gearTotal (line: string, previous: string, next: string): number {
    const numberPositions = this.parseLineNumbers(previous).concat(
      this.parseLineNumbers(line)).concat(
      this.parseLineNumbers(next)); // All number indicies compacted across three lines
    return this.parseLineSymbols(line).map(x => x.index!).reduce(
      (total, symbolIndex) => {
        const touching: number[] = [];
        for (const numberMatch of numberPositions) {
          if (numberMatch.index !== undefined &&
              symbolIndex >= numberMatch.index - 1 &&
              symbolIndex <= numberMatch.index + numberMatch[0].length) {
            touching.push(parseInt(numberMatch[0]));
          }
        }
        if (touching.length === 2) {
          return total + touching[0] * touching[1];
        } else {
          return total;
        }
      }, 0
    );
  }

  solveForPartOne (input: string): string {
    const grid = [''].concat(input.split('\n')).concat('');
    let total: number = 0;
    for (let row = 1; row < grid.length - 1; row++) {
      total += this.lineTotal(grid[row], grid[row - 1], grid[row + 1]);
    }
    return String(total);
  }

  solveForPartTwo (input: string): string {
    const grid = [''].concat(input.split('\n')).concat('');
    let total: number = 0;
    for (let row = 1; row < grid.length - 1; row++) {
      total += this.gearTotal(grid[row], grid[row - 1], grid[row + 1]);
    }
    return String(total);
  }
}

export default new Day3();
