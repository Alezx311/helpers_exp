import { Constants } from "../src/constants";
import * as funcList from "../src/func";
import { A, N, O, S, F, B } from "../global";

const SOURCE = Constants.getSource(__filename);
SOURCE.name = __filename;
const MAIN: any = funcList;
const DESC = "funcList";

const tryFunc = (func: any) => {
  try {
    const result = func();
    const status = true;
    return { result, status, error: false };
  } catch (error) {
    console.error(error);
    return { result: error, status: false, error };
  }
};

const KEYS = [
  ...Constants.objK({
    ...funcList,
  }).filter(String),
] as any[];
// console.info(`KEYS Size: ${KEYS.length}`);
// console.table(KEYS);

const SORTED = [...KEYS].map((desc: keyof typeof funcList, index: N) => {
  const value = funcList?.[desc];
  const type = typeof value;
  const isFunc = typeof value === "function";
  const results = isFunc ? tryFunc(value) : tryFunc(() => value);
  const data = {
    desc,
    index,
    value,
    type,
    isFunc,
    results,
  };

  return data;
});
// console.info(`SORTED Size: ${SORTED.length}`);
// console.table(SORTED);

const MESSAGES = SORTED.map((v) => JSON.stringify(v, null, "\t"));
// console.info(`MESSAGES Size: ${MESSAGES.length}`);
// console.table(MESSAGES);

describe(DESC, () => {
  it("should be defined", () => {
    expect(MAIN).toBeDefined();
    expect(DESC).toBeDefined();
    expect(KEYS).toBeDefined();

    expect(KEYS.length).toBeGreaterThan(0);
    expect(SORTED.length).toBeGreaterThan(0);
    expect(MESSAGES.length).toBeGreaterThan(0);
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

  MESSAGES.map((msg: S, index: N) => {
    it(`Message with index ${index}`, () => {
      // console.info(msg);

      expect(msg).toBeDefined();
      expect(msg).toBeTruthy();
      expect(msg.length).toBeGreaterThan(0);
    });
  });

  SORTED.map((obj: any, index: N) => {
    it(`${index}: ${obj.desc}`, () => {
      expect(obj.desc).toBeDefined();
      expect(obj.index).toBeDefined();
      expect(obj.isFunc).toBeDefined();
      expect(obj.results).toBeDefined();
      expect(obj.type).toBeDefined();

      expect(obj.desc).toBeTruthy();
      expect(obj.results).toBeTruthy();
      expect(obj.type).toBeTruthy();
    });
  });
});
