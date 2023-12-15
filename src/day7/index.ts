import { Day } from '../day';

enum HAND_TYPE {
  HIGH_CARD = 1,
  ONE_PAIR,
  TWO_PAIR,
  THREE_KIND,
  FULL_HOUSE,
  FOUR_KIND,
  FIVE_KIND
}

interface Hand {
  cards: string,
  bid: number
}

class Day7 extends Day {
  cardRanks: Map<string, number>;

  constructor () {
    super(7);
    this.cardRanks = new Map([
      ['1', 1],
      ['2', 2],
      ['3', 3],
      ['4', 4],
      ['5', 5],
      ['6', 6],
      ['7', 7],
      ['8', 8],
      ['9', 9],
      ['T', 10],
      ['J', 11],
      ['Q', 12],
      ['K', 13],
      ['A', 14]
    ]);
  }

  private getHandRank (hand: Hand): number {
    const cardGroups: Map<string, number> = new Map();
    // Group cards by rank
    for (const card of hand.cards) {
      cardGroups.set(card, (cardGroups.get(card) ?? 0) + 1);
    }
    switch (cardGroups.size) {
      case 1: {
        return HAND_TYPE.FIVE_KIND;
      }
      case 2: {
        if ([...cardGroups.values()].some(x => x === 4)) {
          return HAND_TYPE.FOUR_KIND;
        } else {
          return HAND_TYPE.FULL_HOUSE;
        }
      }
      case 3: {
        if ([...cardGroups.values()].some(x => x === 3)) {
          return HAND_TYPE.THREE_KIND;
        } else {
          return HAND_TYPE.TWO_PAIR;
        }
      }
      case 4: {
        return HAND_TYPE.ONE_PAIR;
      }
      case 5: {
        return HAND_TYPE.HIGH_CARD;
      }
      default: {
        return 0;
      }
    }
  }

  private calcHandStrength (hand: Hand): number {
    // Convert hand to base 14
    let total: number = 0;
    for (let index = 0; index < hand.cards.length; index++) {
      total += (this.cardRanks.get(hand.cards[index]) ?? 0) * (14 ** (hand.cards.length - index - 1));
    }
    // leading term is based on hand type
    total += this.getHandRank(hand) * (14 ** hand.cards.length)
    return total;
  }

  solveForPartOne (input: string): string {
    const hands: Hand[] = input.split('\n').map(
      (line) => ({ cards: line.split(' ')[0], bid: parseInt(line.split(' ')[1]) })
    );
    return String(
      hands.map(
        (hand) => ({ strength: this.calcHandStrength(hand), bid: hand.bid })
      ).sort(
        (a, b) => a.strength - b.strength
      ).reduce(
        (total, hand, index) => total + (hand.bid * (index + 1)), 0
      )
    );
  }

  solveForPartTwo (input: string): string {
    return input;
  }
}

export default new Day7();
