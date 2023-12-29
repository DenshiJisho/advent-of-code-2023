import day8 from './index';

const example_input1a = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const example_input1b = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

const example_input2 = `LR

11A = (11B, XXX)
11B = (XXX, 11Z)
11Z = (11B, XXX)
22A = (22B, XXX)
22B = (22C, 22C)
22C = (22Z, 22Z)
22Z = (22B, 22B)
XXX = (XXX, XXX)`;

describe('On Day 8', () =>{
    it(`part1 a`, ()=>{
        expect(day8.solveForPartOne(example_input1a)).toBe('2');
    })
});

describe('On Day 8', () =>{
    it(`part1 b`, ()=>{
        expect(day8.solveForPartOne(example_input1b)).toBe('6');
    })
});

describe('On Day 8', () =>{
    it(`part2`, ()=>{
        expect(day8.solveForPartTwo(example_input2)).toBe('6');
    })
});
