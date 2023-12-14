import day3 from './index';

const example_input1 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const example_input2 = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

describe('On Day 3', () =>{
    it(`part1`, ()=>{
        expect(day3.solveForPartOne(example_input1)).toBe('4361');
    })
});

describe('On Day 3', () =>{
    it(`part2`, ()=>{
        expect(day3.solveForPartTwo(example_input2)).toBe('467835');
    })
});
