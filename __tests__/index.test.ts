import { S, TestData } from "../global";
import { LeetCode } from "../src/index";

const { description, func, values }: TestData<S, S> = {
  description: `Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).`,
  func: LeetCode.findMedianSortedArrays,
  values: Object.keys(LeetCode).map((key) => ({
    input: typeof LeetCode[key],
    expected: "function",
    desc: `typeof LeetCode.${key} must be a function`,
  })),
};

describe(description, () => {
  it("Should be defined", () => {
    expect(func).toBeDefined();
  });

  values.map(({ input, expected, desc }) => {
    it(desc, () => {
      expect(input).toEqual(expected);
    });
  });
});
