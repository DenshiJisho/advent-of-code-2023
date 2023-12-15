import { Day } from '../day';

interface RangeMapping {
  source: number,
  destination: number,
  length: number
}

interface SeedRange {
  start: number,
  end: number
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

  reverseLookup (destination: number) {
    for (const mapping of this.mappings) {
      if (destination >= mapping.destination && destination < mapping.destination + mapping.length) {
        return mapping.source + (destination - mapping.destination);
      }
    }
    return destination;
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

  private getSeedRanges (seeds: number[]): SeedRange[] {
    const seedRanges = [];
    for (let i = 0; i < seeds.length; i += 2) {
      seedRanges.push({ start: seeds[i], end: seeds[i] + seeds[i + 1] - 1 }); // (start, length) => {start, end} inclusive
    }
    return seedRanges;
  }

  private buildAlmanac (input: string) {
    this.almanac = [];
    // curse CRLF line endings
    for (const section of input.matchAll(/:\r?\n(.+?)\r?\n\r?\n/sg)) {
      this.almanac.push(new AlmanacMap(section[1].split('\n')));
    }
  }

  private getLocation (seed: number): number {
    return this.almanac.reduce((source, mapping) => mapping.lookup(source), seed);
  }

  private tracebackSeed (location: number): number {
    return this.almanac.reduce((source, mapping) => mapping.reverseLookup(source), location);
  }

  private inSeedRanges (seed: number, seedRanges: SeedRange[]): boolean {
    for (const range of seedRanges) {
      if (seed >= range.start && seed <= range.end) {
        return true;
      }
    }
    return false;
  }

  solveForPartOne (input: string): string {
    const seeds: number[] = this.getSeeds(input.substring(0, input.indexOf('\n')));
    this.buildAlmanac(input.substring(input.indexOf('\n')));
    return String(seeds.map(seed => this.getLocation(seed)).reduce((min, location) => location < min ? location : min, Infinity));
  }

  solveForPartTwo (input: string): string {
    const seeds: number[] = this.getSeeds(input.substring(0, input.indexOf('\n')));
    const seedRanges: SeedRange[] = this.getSeedRanges(seeds); // [inclusive, inclusive]
    this.buildAlmanac(input.substring(input.indexOf('\n')));
    this.almanac.reverse();
    let location: number = 0;
    let seed: number;
    while (true) {
      seed = this.tracebackSeed(location);
      if (this.inSeedRanges(seed, seedRanges)) {
        break;
      }
      location++;
    }
    return String(location);
  }
}

export default new Day5();
