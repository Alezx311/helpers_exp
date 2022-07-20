import { LeetCode } from "../src/index";

const SOURCE = LeetCode.AllHelpers.SOURCE;
const DESC = LeetCode.AllHelpers.SOURCE.name;
const MAIN = LeetCode.AllHelpers;

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
      const valid = !!values;

      expect(desc).toBeDefined();
      expect(values).toBeDefined();
      expect(index).toBeDefined();
      expect(result).toBeDefined();
      expect(valid).toBeDefined();

      expect(values).toBeTruthy();
      expect(desc).toBeTruthy();
      expect(index >= 0).toBeTruthy();
      expect(result).toBeTruthy();
      expect(valid).toBeTruthy();
    });
  });
});