import { N, S } from "../global";
import { StringHelpers } from "../src/stringHelpers";
import { Constants } from "../src/constants";

const DESC = `StringHelpers`;
const MAIN = StringHelpers;
const perf = MAIN.perf;

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
    ({ desc, func, value }: { desc: S; func: any; value: any }, index: N) => {
      it(`${index}: ${desc}`, () => {
        const result = func(value || desc);
        check(result);
      });
    }
  );
});
