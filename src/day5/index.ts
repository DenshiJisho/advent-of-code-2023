import { Day } from '../day';

interface RangeMapping {
  source: number,
  destination: number,
  length: number
}

class AlmanacMap {
  mappings: RangeMapping[];

  constructor (input: string[]) {
    this.mappings = input.map(
      (line) => {
        const [destination, source, length] = line.split(' ', 3).map(x => parseInt(x));
        return { source: source, destination: destination, length: length };
      }
    );
  }

  lookup (source: number): number {
    for (const mapping of this.mappings) {
      if (source >= mapping.source && source < mapping.source + mapping.length) {
        return source + (mapping.destination - mapping.source);
      }
    }
    return source;
  }
}

class Day5 extends Day {
  almanac: AlmanacMap[];

  constructor () {
    super(5);
    this.almanac = [];
  }

  private getSeeds (line: string): number[] {
    return line.substring(line.indexOf(' ') + 1).split(' ').map(x => parseInt(x));
  }

  private buildAlmanac (input: string) {
    // curse CRLF line endings
    for (const section of input.matchAll(/:\r?\n(.+?)\r?\n\r?\n/sg)) {
      this.almanac.push(new AlmanacMap(section[1].split('\n')));
    }
  }

  private getLocation (seed: number): number {
    return this.almanac.reduce((source, mapping) => mapping.lookup(source), seed);
  }

  solveForPartOne (input: string): string {
    const seeds: number[] = this.getSeeds(input.substring(0, input.indexOf('\n')));
    this.buildAlmanac(input.substring(input.indexOf('\n')));
    return String(seeds.map(seed => this.getLocation(seed)).reduce((min, location) => location < min ? location : min, Infinity));
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day5();
