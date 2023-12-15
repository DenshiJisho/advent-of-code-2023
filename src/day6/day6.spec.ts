import day6 from './index';

const example_input = `Time:      7  15   30
Distance:  9  40  200`;

describe('On Day 6', () =>{
    it(`part1`, ()=>{
        expect(day6.solveForPartOne(example_input)).toBe('288');
    })
});

describe('On Day 6', () =>{
    it(`part2`, ()=>{
        expect(day6.solveForPartTwo(example_input)).toBe('71503');
    })
});
