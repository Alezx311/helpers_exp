import { ListNode, ListNodeHelpers, addTwoNumbers } from "../src/listNode";

type TestValues = { input: [ListNode, ListNode]; expected: ListNode };
const testValues: TestValues[] = [
  {
    // Input: l1 = [2,4,3], l2 = [5,6,4]
    // Output: [7,0,8]
    // expected: [7, 0, 8],
    // Explanation: 342 + 465 = 807.
    input: [
      // ListNodeHelpers.valueToList([2, 4, 3]),
      // ListNodeHelpers.valueToList([5, 6, 4]),
      ListNodeHelpers.valueToList(243),
      ListNodeHelpers.valueToList(564),
    ],
    expected: ListNodeHelpers.valueToList(708),
  },
];

const {
  listToValue,
  valueToList,
  converter,
  LIST_NODE_EMPTY,
  LIST_NODE_SIMPLE,
} = ListNodeHelpers;

describe("addTwoNumbers", () => {
  testValues.map(({ input, expected }, index) => {
    const [list1, list2] = input;
    const result = addTwoNumbers(list1, list2);

    if (result !== expected) {
      const asValues = {
        list1: listToValue(list1),
        list2: listToValue(list2),
        result: listToValue(result),
        expected: listToValue(expected),
      };
      const details = {
        asValues,
        asLists: { list1, list2, result, expected },
        isTrue: false,
      };
      console.warn(details);
    }

    it(`${index}: Should return ${expected} on [${list1}, ${list2}]`, () => {
      expect(result).toEqual(expected);
    });
  });
});

describe("ListNodeHelpers", () => {
  it("ListNodeHelpers and addTwoNumbers should be defined", () => {
    expect(ListNodeHelpers).toBeDefined();
    expect(addTwoNumbers).toBeDefined();
  });

  it("ListNodeHelpers.LIST_NODE_EMPTY", () => {
    const list = LIST_NODE_EMPTY;
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(ListNode);
    expect(list.val).toEqual(0);
    expect(list.next).toEqual(null);
  });

  it("ListNodeHelpers.LIST_NODE_SIMPLE", () => {
    const list = LIST_NODE_SIMPLE;
    expect(list).toBeDefined();
    expect(list).toBeInstanceOf(ListNode);
    expect(list.val).toEqual(42);
    expect(list.next).toBeInstanceOf(ListNode);
  });

  it("ListNodeHelpers.converter", () => {
    expect(converter).toBeDefined();
    expect(typeof converter).toEqual("function");
    expect(converter(311)).toEqual([3, 1, 1]);
    expect(converter(311, false)).toEqual([3, 1, 1]);
    expect(converter(311, true)).toEqual([1, 1, 3]);
    expect(converter([5, 8, 1, 2])).toEqual(5812);
    expect(converter([5, 8, 1, 2], false)).toEqual(5812);
    expect(converter([5, 8, 1, 2], true)).toEqual(2185);
  });

  it("ListNodeHelpers.listToValue", () => {
    expect(listToValue).toBeDefined();
    expect(typeof listToValue).toEqual("function");
  });

  it("ListNodeHelpers.valueToList", () => {
    expect(valueToList).toBeDefined();
    expect(typeof valueToList).toEqual("function");
  });

  it("ListNodeHelpers.sum", () => {
    expect(ListNodeHelpers.sum).toBeDefined();
    expect(typeof ListNodeHelpers.sum).toEqual("function");
  });
});
