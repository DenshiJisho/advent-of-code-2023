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

  private walk (network: Map<string, Node>, directions: string): number {
    let steps = 0;
    let currentNode = 'AAA';
    while (currentNode !== 'ZZZ') {
      if (directions[steps % directions.length] === 'L') {
        currentNode = network.get(currentNode)!.left;
      } else {
        currentNode = network.get(currentNode)!.right;
      }
      steps++;
    }
    return steps;
  }

  solveForPartOne (input: string): string {
    const directions = input.split('\n')[0].trim();
    const network = this.buildNetwork(input.split('\n').slice(2));
    return String(this.walk(network, directions));
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day8();
