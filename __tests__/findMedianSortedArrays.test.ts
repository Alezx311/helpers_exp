import { N, TestData } from "../global";
import { Helpers } from "../src/index";

const { description, func, values }: any = {
  description: `findMedianSortedArrays`,
  func: Helpers.findMedianSortedArrays,
  values: [
    {
      input: [[3], [-1, -2]],
      expected: -1,
      desc: `merged array = [-2,-1,3] and median is -1`,
    },
    {
      input: [[1, 3], [2]],
      expected: 2.0,
      desc: `merged array = [1,2,3] and median is 2.`,
    },
    {
      input: [
        [1, 2],
        [3, 4],
      ],
      expected: 2.5,
      desc: `merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.`,
    },
    {
      input: [
        [2, 3, 3, 5],
        [7, 10],
      ],
      expected: 4,
      desc: `merged array = [2, 3, 3, 5,7,10] and median is 4.`,
    },
    {
      input: [
        [1, 3],
        [2, 7],
      ],
      expected: 2.5,
      desc: `merged array = [1,2,3,7] and median is 2.5`,
    },
  ],
};

describe(description, () => {
  it("Should be defined", () => {
    expect(func).toBeDefined();
  });

  values.map(({ input, expected, desc }: any, index: number) => {
    it(desc, () => {
      const result = func(input[0], input[1]);

      expect(input[0]).toBeTruthy();
      expect(input[1]).toBeTruthy();
      expect(expected).toBeTruthy();
      expect(result).toBeTruthy();
      expect(result).toEqual(expected);
    });
  });
});
