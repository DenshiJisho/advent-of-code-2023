import day7 from './index';

const example_input = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

describe('On Day 7', () =>{
    it(`part1`, ()=>{
        expect(day7.solveForPartOne(example_input)).toBe('6440');
    })
});

describe('On Day 7', () =>{
    it(`part2`, ()=>{
        expect(day7.solveForPartTwo(example_input)).toBe('5905');
    })
});
