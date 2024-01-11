import day10 from './index';

const example_input1 = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const example_input2a = `...........
.S-------7.
.|F-----7|.
.||.....||.
.||.....||.
.|L-7.F-J|.
.|..|.|..|.
.L--J.L--J.
...........`;

const example_input2b = `FF7FSF7F7F7F7F7F---7
L|LJ||||||||||||F--J
FL-7LJLJ||||||LJL-77
F--JF--7||LJLJ7F7FJ-
L---JF-JLJ.||-FJLJJ7
|F|F-JF---7F7-L7L|7|
|FFJF7L7F-JF7|JL---7
7-L-JL7||F7|L7F-7F7|
L.L7LFJ|||||FJL7||LJ
L7JLJL-JLJLJL--JLJ.L`;

describe('On Day 10', () =>{
    it(`part1`, ()=>{
        expect(day10.solveForPartOne(example_input1)).toBe('8');
    })
});

describe('On Day 10', () =>{
    it(`part2`, ()=>{
        expect(day10.solveForPartTwo(example_input2a)).toBe('4');
    })
});

describe('On Day 10', () =>{
    it(`part2`, ()=>{
        expect(day10.solveForPartTwo(example_input2b)).toBe('10');
    })
});
