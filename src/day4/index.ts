import { Day } from '../day';

class Day4 extends Day {
  constructor () {
    super(4);
  }

  private getCardNumbers (line: string): number[] {
    return [...line.match(/:(.+)\|/)![1].matchAll(/\d+/g)].map(x => parseInt(x[0]));
  }

  private getWinningNumbers (line: string): number[] {
    return [...line.match(/\|(.+)/)![1].matchAll(/\d+/g)].map(x => parseInt(x[0]));
  }

  private matchesCount (cardNumbers: number[], winningNumbers: number[]): number {
    return cardNumbers.filter(x => winningNumbers.includes(x)).length;
  }

  solveForPartOne (input: string): string {
    return String(input.split('\n').map(
      (card) => {
        const numberOfMatches = this.matchesCount(this.getCardNumbers(card), this.getWinningNumbers(card));
        return numberOfMatches > 0 ? 2 ** (numberOfMatches - 1) : 0;
      }
    ).reduce(
      (acc, val) => acc + val
    ));
  }

  solveForPartTwo (input: string): string {
    const copies = Array(input.split('\n').length).fill(1);
    for (const [index, card] of input.split('\n').entries()) {
      const numberOfMatches = this.matchesCount(this.getCardNumbers(card), this.getWinningNumbers(card));
      for (let i = index + 1; i < index + numberOfMatches + 1 && i < copies.length; i++) {
        copies[i] += copies[index]; // gain a copy per number of current card
      }
    }
    return String(copies.reduce((acc, val) => acc + val));
  }
}

export default new Day4();
