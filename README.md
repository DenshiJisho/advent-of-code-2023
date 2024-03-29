# Advent of Code 2023

My personal attempts and solutions for 2023's [Advent of Code](https://adventofcode.com/)

* Day 1 [[Problem]](https://adventofcode.com/2023/day/1) [[Solution Code]](/src/day1/index.ts)
  * Part 1 :heavy_check_mark:
    * Combine and add first and last digits in strings
  * Part 2 :heavy_check_mark:
    * Now includes names of digits ("one", "two") in addition to actual digits

* Day 2 [[Problem]](https://adventofcode.com/2023/day/2) [[Solution Code]](/src/day2/index.ts)
  * Part 1 :heavy_check_mark:
    * Determine whether games consisted of valid draws from a bag of colored cubes
  * Part 2 :heavy_check_mark:
    * Determine fewest cubes of each color could have been used in each game

* Day 3 [[Problem]](https://adventofcode.com/2023/day/3) [[Solution Code]](/src/day3/index.ts)
  * Part 1 :heavy_check_mark:
    * Sum numbers adjacent to symbols in a grid
  * Part 2 :heavy_check_mark:
    * Sum product of pairs of numbers joined by symbols

* Day 4 [[Problem]](https://adventofcode.com/2023/day/4) [[Solution Code]](/src/day4/index.ts)
  * Part 1 :heavy_check_mark:
    * Match card numbers to winning numbers to score exponentially based on number of matches
  * Part 2 :heavy_check_mark:
    * Matches generate copies of future cards, find number of cards

* Day 5 [[Problem]](https://adventofcode.com/2023/day/5) [[Solution Code]](/src/day5/index.ts)
  * Part 1 :heavy_check_mark:
    * Follow mappings of numbers to find smallest final outcome
  * Part 2 :heavy_check_mark:
    * Now with ranges of inputs

* Day 6 [[Problem]](https://adventofcode.com/2023/day/6) [[Solution Code]](/src/day6/index.ts)

  Initially, I simply used Wolfram Alpha as a calculator to complete this day, as the solutions can be found as intersections with quadratic equations, and the input is rather small.
  I went back later in the day to implement these as programs.
  * Part 1 :heavy_check_mark:
    * Find number of charge times that send car at least a certain distance
  * Part 2 :heavy_check_mark:
    * Inputs are now concated to make one larger input

* Day 7 [[Problem]](https://adventofcode.com/2023/day/7) [[Solution Code]](/src/day7/index.ts)
  * Part 1 :heavy_check_mark:
    * Rank poker hands and score based on bid * rank
  * Part 2 :heavy_check_mark:
    * Jacks are now wildcard jokers

* Day 8 [[Problem]](https://adventofcode.com/2023/day/8) [[Solution Code]](/src/day8/index.ts)
  * Part 1 :heavy_check_mark:
    * Walk a graph using directions
  * Part 2 :heavy_check_mark:
    * Multiple walks along the graph that need to end simultaneously at endpoints

* Day 9 [[Problem]](https://adventofcode.com/2023/day/9) [[Solution Code]](/src/day9/index.ts)
  * Part 1 :heavy_check_mark:
    * Find next term in list of sequences
  * Part 2 :heavy_check_mark:
    * Find previous term in list of sequences

* Day 10 [[Problem]](https://adventofcode.com/2023/day/10) [[Solution Code]](/src/day10/index.ts)

  I like to write my solutions to handle all theoretical inputs and not make assumptions based on the specific input I'm given. However, to save some time, lines, and complexity,
  I ignore the shape of the starting point in my boundary detection algorithm, which can only be made in half of the possible S values, but is the case in the puzzle input.
  * Part 1 :heavy_check_mark:
    * Find furthest point on path
  * Part 2 :heavy_check_mark:
    * Find space enclosed within path

* Day 11 [[Problem]](https://adventofcode.com/2023/day/11) [[Solution Code]](/src/day11/index.ts)
  * Part 1 :heavy_check_mark:
    * Expand grid of points and sum all shortest distances
  * Part 2 :heavy_check_mark:
    * Larger expansion factor

Using [LBognanni's AoC template node framework](https://github.com/LBognanni/adventofcode-typescript-starter)
