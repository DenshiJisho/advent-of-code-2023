import { Day } from "../day";

class Day1 extends Day {

    constructor(){
        super(1);
    }

    solveForPartOne(input: string): string {
        let total: number = 0;
        const regex: RegExp = /\d/g;
        let matches: RegExpMatchArray | null;
        for (const line of input.split("\n")) {
            matches = line.match(regex);
            if (!matches) {
                continue;
            }
            total += parseInt(matches[0]) * 10;
            total += parseInt(matches[matches.length - 1]);
        }
        return String(total);
    }

    solveForPartTwo(input: string): string {
        return input;
    }
}

export default new Day1;