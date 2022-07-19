import { N, TestData } from "../global";
import { LeetCode } from "../src/index";

const { description, func, values }: TestData<[N[], N[]], N> = {
  description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).`,
  func: LeetCode.findMedianSortedArrays,
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

  values.map(({ input, expected, desc }) => {
    it(desc, () => {
      expect(func(...input)).toEqual(expected);
    });
  });
});
