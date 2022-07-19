import { N, S } from "../global";
import { AllHelpers } from "../src/all";
import { Constants } from "../src/constants";

const DESC = `AllHelpers`;
const MAIN = AllHelpers;
const perf = Constants.getPerformance;

describe(DESC, () => {
  it("should be defined", () => {
    expect(MAIN).toBeDefined();
  });

  MAIN.METHODS_ALL.map(({ desc, func, value = desc }, index) => {
    it(desc, () => {
      let time = perf();

      expect(desc).toBeDefined();
      // expect(func).toBeDefined();
      // expect(index).toBeDefined();
      // expect(value).toBeDefined();
      // expect(result).toBeDefined();

      time = perf(time);

      console.info({ index, desc, time, value });
    });
  });
});
