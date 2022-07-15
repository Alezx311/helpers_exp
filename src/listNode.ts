export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Helpers Class
export class ListNodeHelpers {
  // Examples For fast checks
  static LIST_NODE_EMPTY = new ListNode();
  static LIST_NODE_SIMPLE = new ListNode(42, this.LIST_NODE_EMPTY);

  // Convert number to array, or array of numbers to integer
  static converter = <T extends number>(value: T | T[], rev?: boolean) => {
    if (typeof value === "number") {
      const arr = `${value}`.split("").map((v) => ~~v);
      return rev !== true ? arr : arr.reverse();
    } else {
      const splitted = rev !== true ? value.join("") : value.reverse().join("");
      return ~~splitted;
    }
  };
  // Convert ListNode to number
  static listToValue = (list: ListNode, acc: number[] = []): number => {
    // Update values accumulator
    const current = list.val !== null ? [...acc, list.val] : acc;
    // Transfer accumulator to next list if it exists
    if (list.next instanceof ListNode) {
      return this.listToValue(list.next, current);
    }
    // Transform accumulator to integer if it is last list
    return this.converter(current) as number;
  };

  // Convert number to ListNode
  static valueToList = (value: number): ListNode => {
    const values = this.converter(value) as number[];
    const list = values.reduce(
      (a, v) => new ListNode(~~v, a),
      this.LIST_NODE_EMPTY
    );
    return list;
  };

  // Calculate sum for two given lists and return result as a new list
  static sum = (l1: ListNode, l2: ListNode) => {
    const value1 = this.listToValue(l1);
    const value2 = this.listToValue(l2);
    const result = this.valueToList(value1 + value2);

    return result;
  };
}

/**
 * "Given two linked lists, return a linked list that is the sum of the two input linked lists."
 * @param {ListNode} l1 - ListNode
 * @param {ListNode} l2 - ListNode = {
 * @returns A ListNode
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 */
export function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  return ListNodeHelpers.sum(l1, l2);
}
