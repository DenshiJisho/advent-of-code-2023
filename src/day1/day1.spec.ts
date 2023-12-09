import day1 from './index';

const example_input1 = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const example_input2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

describe('On Day 1', () =>{
    it(`part1 example`, ()=>{
        expect(day1.solveForPartOne(example_input1)).toBe("142");
    })
});

describe('On Day 1', () =>{
    it(`part2 example`, ()=>{
        expect(day1.solveForPartTwo(example_input2)).toBe("281");
    })
});