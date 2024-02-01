import { Day } from '../day';

interface coord {
  x: number,
  y: number
}

class Day11 extends Day {
  constructor () {
    super(11);
  }

  getGalaxies (input: string, expansionFactor: number): coord[] {
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
          galaxies.push({ x: i + emptyRows * (expansionFactor - 1), y: j });
        }
      }
    }
    for (let col = input.length - 1; col >= 0; col--) {
      if (nonemptyCols.has(col)) {
        continue;
      }
      for (const coord of galaxies) {
        if (coord.y > col) {
          coord.y += expansionFactor - 1;
        }
      }
    }
    return galaxies;
  }

  getDistance (a: coord, b: coord): number {
    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
  }

  solveForPartOne (input: string): string {
    const galaxies = this.getGalaxies(input, 2);
    let total = 0;
    for (let i = 0; i < galaxies.length; i++) {
      for (let j = i + 1; j < galaxies.length; j++) {
        total += this.getDistance(galaxies[i], galaxies[j]);
      }
    }
    return String(total);
  }

  solveForPartTwo (input: string): string {
    const galaxies = this.getGalaxies(input, 1000000);
    let total = 0;
    for (let i = 0; i < galaxies.length; i++) {
      for (let j = i + 1; j < galaxies.length; j++) {
        total += this.getDistance(galaxies[i], galaxies[j]);
      }
    }
    return String(total);
  }
}

export default new Day11();
