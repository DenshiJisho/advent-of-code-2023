import day1 from './index';

const example_input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

describe('On Day 1', () =>{
    it(`part1 example`, ()=>{
        expect(day1.solveForPartOne(example_input)).toBe("142");
    })
});