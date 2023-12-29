import { Day } from '../day';

interface Node {
  name: string,
  left: string,
  right: string
}

class Day8 extends Day {
  constructor () {
    super(8);
  }

  private buildNetwork (nodes: string[]): Map<string, Node> {
    const network: Map<string, Node> = new Map();
    let matches: RegExpMatchArray;
    let node: Node;
    for (const line of nodes) {
      matches = [...line.matchAll(/(\w\w\w) = \((\w\w\w), (\w\w\w)\)/g)][0];
      node = { name: matches[1], left: matches[2], right: matches[3] };
      network.set(node.name, node);
    }
    return network;
  }

  private walk (network: Map<string, Node>, directions: string, start: string, end: (node: string) => boolean): number {
    let steps = 0;
    let currentNode = start;
    while (!end(currentNode)) {
      if (directions[steps % directions.length] === 'L') {
        currentNode = network.get(currentNode)!.left;
      } else {
        currentNode = network.get(currentNode)!.right;
      }
      steps++;
    }
    return steps;
  }

  private leastCommonMultiple (nums: number[]): number {
    const gcf = (a: number, b: number): number => b === 0 ? a : gcf(b, a % b);
    const lcm = (a: number, b: number): number => a / gcf(a, b) * b;
    return nums.reduce(lcm, 1);
  }

  solveForPartOne (input: string): string {
    const directions = input.split('\n')[0].trim();
    const network = this.buildNetwork(input.split('\n').slice(2));
    return String(this.walk(network, directions, 'AAA', (node) => node === 'ZZZ'));
  }

  solveForPartTwo (input: string): string {
    const directions = input.split('\n')[0].trim();
    const network = this.buildNetwork(input.split('\n').slice(2));
    return String(
      this.leastCommonMultiple(
        [...network.entries()]
          .filter(([key, _]) => key[2] === 'A')
          .map(([name, _]) => this.walk(network, directions, name, (node) => node.at(-1) === 'Z'))
      )
    );
  }
}

export default new Day8();
