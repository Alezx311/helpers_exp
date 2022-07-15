import { LeetCodeSolutions } from "../src/index";

describe("LeetCodeSolutions index class", () => {
  it("Should be defined", () => {
    expect(LeetCodeSolutions).toBeDefined();
  });

  it(`Should addTwoNumbers methods to be defined`, () => {
    expect(LeetCodeSolutions.addTwoNumbers).toBeDefined();
  });

  it(`Should reverseNumber methods to be defined`, () => {
    expect(LeetCodeSolutions.reverseNumber).toBeDefined();
  });

  it(`Should twoSum methods to be defined`, () => {
    expect(LeetCodeSolutions.twoSum).toBeDefined();
  });
});
