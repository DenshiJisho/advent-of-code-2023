import { Day } from "../day";

class Day1 extends Day {

    private NUMBERS: {[name:string]: number} = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    constructor(){
        super(1);
    }

    private matchToInt(match: string): number {
        if (match in this.NUMBERS) {
            return this.NUMBERS[match];
        } else {
            return parseInt(match);
        }
    }

    private calibrate(lines: string[], regex: RegExp): number {
        let matches: string[];
        return lines.reduce(
            (acc, val) => {
                matches = Array.from(val.matchAll(regex), x => x[1]); // extractcapture groups
                if (matches) {
                    acc += this.matchToInt(matches[0]) * 10;
                    acc += this.matchToInt(matches[matches.length - 1]);
                }
                return acc;
            }, 0 // initial value
        );
    }

    solveForPartOne(input: string): string {
        return String(this.calibrate(input.split("\n"), /(\d)/g));
    }

    solveForPartTwo(input: string): string {
        let regex = RegExp(`(?=(${Object.keys(this.NUMBERS).join('|')}|\\d))`, 'g'); // names, digits, global match, positive lookahead for overlaps
        return String(this.calibrate(input.split("\n"), regex));
    }
}

export default new Day1;