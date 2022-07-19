import { N, S } from "../global";
import { ObjectHelpers } from "../src/objHelpers";
import { Constants } from "../src/constants";

const DESC = `ObjectHelpers`;
const MAIN = ObjectHelpers;
const perf = Constants.getPerformance;

const check = (result: any) => {
  let time = perf();

  expect(result).toBeDefined();
  expect(result).toBeTruthy();

  time = perf(time);
};

describe(DESC, () => {
  it(`${DESC} should be defined`, () => {
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
