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

  MAIN.METHODS_ALL.map(
    ({
      desc,
      func,
      value,
      index,
    }: {
      desc: S;
      func: any;
      value: any;
      index: N;
    }) => {
      it(`${index}: ${desc}`, () => {
        const result = func(value || desc);
        check(result);
      });
    }
  );
});
