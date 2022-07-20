import { LeetCode } from "../src/index";

const SOURCE = LeetCode.ArrayHelpers.SOURCE;
const DESC = LeetCode.ArrayHelpers.SOURCE.name;
const MAIN = LeetCode.ArrayHelpers;

describe(DESC, () => {
  it("should be defined", () => {
    expect(MAIN).toBeDefined();
    expect(DESC).toBeDefined();
    expect(MAIN.EXAMPLES).toBeDefined();
  });

  it(SOURCE.filename, () => {
    expect(SOURCE).toBeDefined();
    expect(SOURCE.filename).toBeDefined();
    expect(SOURCE.date).toBeDefined();
    expect(SOURCE.datestamp).toBeDefined();
    expect(SOURCE.dirname).toBeDefined();
    expect(SOURCE.desc).toBeDefined();
    expect(SOURCE.key).toBeDefined();
    expect(SOURCE.name).toBeDefined();
  });

  MAIN.EXAMPLES.map(({ desc, values, index, result }: any) => {
    it(desc, () => {
      const valid = desc && result;

      expect(desc).toBeDefined();
      expect(values).toBeDefined();
      expect(index).toBeDefined();
      expect(result).toBeDefined();

      expect(values).not.toBeNull();
      expect(index >= 0).not.toBeNull();
      expect(desc).not.toBeNull();
      expect(result).not.toBeNull();
      expect(valid).not.toEqual(false);
    });
  });
});
