import day8 from './index';

const example_input1 = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const example_input2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

describe('On Day 8', () =>{
    it(`part1`, ()=>{
        expect(day8.solveForPartOne(example_input1)).toBe('2');
    })
});

describe('On Day 8', () =>{
    it(`part1 2`, ()=>{
        expect(day8.solveForPartOne(example_input2)).toBe('6');
    })
});
