import { twoSum } from "../src/twoSum";
type TestValues = { input: [number[], number]; expected: [number, number] };
const testValues: TestValues[] = [
  { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
  { input: [[3, 3], 6], expected: [0, 1] },
  { input: [[3, 2, 4], 6], expected: [1, 2] },
];

describe("twoSum", () => {
  it("Should be defined", () => {
    expect(twoSum).toBeDefined();
  });

  testValues.map(({ input, expected }, index) => {
    const [nums, target] = input;
    it(`${index}: Must return ${expected} for ${nums} and ${target} target`, () => {});
    expect(twoSum(nums, target)).toEqual(expected);
  });
});
