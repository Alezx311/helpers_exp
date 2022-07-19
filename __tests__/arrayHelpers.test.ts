import { N, S } from "../global";
import { ArrayHelpers } from "../src/arrayHelpers";
import { Constants } from "../src/constants";

const DESC = `ArrayHelpers`;
const MAIN = ArrayHelpers;
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

  MAIN.METHODS_ALL.map(({ desc, func, value = desc }: any, index) => {
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
