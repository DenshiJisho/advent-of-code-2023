import day9 from './index';

const example_input = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

describe('On Day 9', () =>{
    it(`part1`, ()=>{
        expect(day9.solveForPartOne(example_input)).toBe('114');
    })
});

describe('On Day 9', () =>{
    it(`part2`, ()=>{
        expect(day9.solveForPartTwo(example_input)).toBe('2');
    })
});
