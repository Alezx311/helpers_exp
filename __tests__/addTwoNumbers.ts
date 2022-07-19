import { N, TestData } from "../global";
import { LeetCode } from "../src/index";

const { description, func, values }: TestData<[N[], N[]], N[]> = {
  description: "Add Two Numbers",
  func: LeetCode.addTwoNumbers,
  values: [
    {
      input: [
        [2, 4, 3],
        [5, 6, 4],
      ],
      expected: [7, 0, 8],
    },
  ],
};

describe(description, () => {
  it("Should be defined", () => {
    expect(func).toBeDefined();
  });

  values.map(({ input, expected, desc }) => {
    it(desc, () => {
      expect(func(...input)).toEqual(expected);
    });
  });
});
