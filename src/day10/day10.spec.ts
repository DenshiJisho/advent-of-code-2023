import day10 from './index';

const example_input = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

describe('On Day 10', () =>{
    it(`part1`, ()=>{
        expect(day10.solveForPartOne(example_input)).toBe('8');
    })
});
