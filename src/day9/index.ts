import { Day } from '../day';

class Day9 extends Day {
  constructor () {
    super(9);
  }

  private getDifferences (sequence: number[]): number[] {
    const differences: number[] = [];
    for (let i = 0; i < sequence.length - 1; i++) {
      differences.push(sequence[i + 1] - sequence[i]);
    }
    return differences;
  }

  private getNextNumber (sequence: number[]): number {
    if (sequence.every(x => x === 0)) {
      return 0;
    }
    return this.getNextNumber(this.getDifferences(sequence)) + sequence.at(-1)!;
  }

  solveForPartOne (input: string): string {
    return String(
      input.split('\n').map(
        x => this.getNextNumber(x.trim().split(/\s/).map(x => parseInt(x)))
      ).reduce(
        (acc, val) => acc + val, 0
      )
    );
  }

  solveForPartTwo (input: string): string {
    return String(
      input.split('\n').map(
        x => this.getNextNumber(x.trim().split(/\s/).map(x => parseInt(x)).reverse())
      ).reduce(
        (acc, val) => acc + val, 0
      )
    );
  }
}

export default new Day9();
