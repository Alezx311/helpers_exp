import { A, N, S } from "../global";

export const getSource = (name: S = __filename) => {
  const values = {
    name,
    root: process.cwd(),
    filename: __filename,
    dirname: __dirname,
    date: Date.now(),
    datestamp: new Date().toUTCString(),
  };
  const key = `${Date.now()}_${values.filename}`;
  const desc = `
\t Created at: ${values.datestamp}
\t Filepath: ${values.filename}
\t Key: ${key}
\t Module Name: ${values.name}
`;
  return { ...values, key, desc };
};

export const SOURCE = getSource(__filename);
SOURCE.name = `Constants`;

export const getPerformance = (time: N = 0) => performance.now() - ~~time;
export const mapExamples = (arr: any[]) =>
  arr.map(({ desc, func, result }, index) => {
    if (!!desc && !!func) {
      return {
        index,
        desc,
        func,
        result,
        values: [desc, result, index],
      };
    } else {
      return {
        index,
        desc: "Falsy",
        func: () => false,
        result: false,
        values: [{ desc, result, index, func }],
      };
    }
  });

/**
 * It returns an object with the source of the value and the type and size of the value
 * @param {S} value - The value to get stats for.
 */
export const getStats = (value: S) => ({
  ...getSource(value),
  type: typeof value,
  size: value?.length ?? null,
});

/**
 * It takes an object with the properties index, desc, value, result, and time, and returns a string
 * with the properties formatted in a certain way
 * @param {any}  - index - the index of the test case
 */
export const logReport = ({
  index = 0,
  desc = SOURCE.name,
  value = SOURCE.filename,
  result = true,
  time = getPerformance(),
}: any) => `
\t${~~index}: ${desc}
Index: ${index}
Description: ${desc}
Value: ${value}
Result: ${result}
Time: ${time}
`;

export const EXAMPLES = mapExamples([
  { desc: "getStats", func: getStats, result: getStats(SOURCE.name) },
  { desc: "getSource", func: getSource, result: SOURCE },
  { desc: "getPerformance", func: getPerformance, result: getPerformance() },
  { desc: "logReport", func: logReport, result: logReport(SOURCE) },
]);

class RegExps {
  static ALL = new RegExp(/.+/gim);
  static LINE = new RegExp(/^.+$/gim);
  static CHARS_ONLY = new RegExp(/[a-z]/gim);
  static NUMBERS_ONLY = new RegExp(/[0-9]/gim);
  static CHARS_AND_NUMBERS = new RegExp(/[a-z0-9]/gim);
  static NOT_CHARS_AND_NUMBERS = new RegExp(/[^a-z0-9]/gim);
}

class Paths {
  static DIR_ROOT = process.cwd();
  static FILE = __filename;
  static DIR = __dirname;
  static DIR_CURRENT = "./";
  static DIR_PREV = "../";
  static DIRNAME_SRC = "src";
  static DIRNAME_TESTS = "__tests__";
  static DIRNAME_LOGS = ".logs";
  static PATHS_ROOT = [this.DIR_ROOT, this.DIR_CURRENT];
  static PATHS_CURRENT = [this.FILE, this.DIR_CURRENT];
  static PATHS_SRC = [this.DIR_ROOT, this.DIR_CURRENT, this.DIRNAME_SRC];
  static PATHS_TESTS = [this.DIR_ROOT, this.DIR_CURRENT, this.DIRNAME_TESTS];
}

class Numbers {
  static get _RANDOM() {
    return ~~(Math.random() * (this.MAX - this.MIN) + this.MIN);
  }

  static MIN = 1;
  static MAX = 1000;
  static MAX_VALUE = Number.MAX_VALUE;
  static MIN_VALUE = Number.MIN_VALUE;
  static MAX_SAFE_VALUE = Number.MAX_SAFE_INTEGER;
  static MIN_SAFE_VALUE = Number.MIN_SAFE_INTEGER;
  static RANDOM = Math.random();
  static RANDOM_BOOLEAN = this.RANDOM > 0.5;
  static RANDOM_MULT = ~~(this.RANDOM * 1000);
  static RANDOM_SIZE = 10;
  static RANDOM_INT = this._RANDOM;
  static RANGE_RANDOM = [this.MIN, this.RANDOM, this.RANDOM_INT, this.MAX];
  static RANGE_VALUES = [this.MIN_VALUE, this.MAX_VALUE];
  static RANGE_SAFE = [this.MIN_SAFE_VALUE, this.MAX_SAFE_VALUE];
  static NUMS = [...this.RANGE_RANDOM];
}

class ValueTypes {
  static UNDEFINED = undefined;
  static NULL = null;
  static BOOLEAN = true;
  static STRING = "String";
  static NUMBER = 42;
  static ARRAY = [this.STRING, this.NUMBER];
  static OBJECT = { string: this.STRING, number: this.NUMBER };
  static FUNCTION = function () {
    return true;
  };

  static PRIMITIVES = [
    { desc: "UNDEFINED", value: this.UNDEFINED },
    { desc: "NULL", value: this.NULL },
    { desc: "BOOLEAN", value: this.BOOLEAN },
    { desc: "STRING", value: this.STRING },
    { desc: "NUMBER", value: this.NUMBER },
    { desc: "ARRAY", value: this.ARRAY },
    { desc: "OBJECT", value: this.OBJECT },
    { desc: "FUNCTION", value: this.FUNCTION },
  ].map(({ desc, value }, index) => ({
    desc,
    value,
    index,
    type: typeof value,
    func: () => value,
  }));

  static PALINDROME = "abacaba";
}

export class Constants {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;

  static RegExp = RegExps;
  static Paths = Paths;
  static Numbers = Numbers;
  static ValueTypes = ValueTypes;

  static mapExamples = mapExamples;
  static getStats = getStats;
  static getSource = getSource;
  static getPerformance = getPerformance;
  static logReport = logReport;

  static objK = Object.keys;
  static objV = Object.values;
  static objE = Object.entries;
  static objF = Object.fromEntries;

  static NAME: S = this.SOURCE.name;
  static FILENAME: S = this.SOURCE.filename;
  static DATE: N = this.SOURCE.date;
  static DATESTAMP: S = this.SOURCE.datestamp;
  static KEY: S = this.SOURCE.key;
  static DESC: S = this.SOURCE.desc;

  static EXCLUDE_KEYS = [
    "EXAMPLE",
    "EXCLUDE_KEYS",
    "KEYS",
    "VALUES",
    "ENTRIES",
  ];
  static KEYS: A<{ desc: S; index: N }> = this.objK(Constants)
    .filter((v) => !this.EXCLUDE_KEYS.includes(v))
    .map((desc: S, index: N) => ({ desc, index }));

  static VALUES: A<{ value: any; index: N }> = this.objV(Constants)
    .filter((v) => typeof v !== "function")
    .map((value: any, index: N) => ({ value, index }));

  static ENTRIES: A<{ key: S; value: any; index: N }> = this.objE(Constants)
    .filter(
      ([k, v]) => !this.EXCLUDE_KEYS.includes(k) && typeof v !== "function"
    )
    .map(([key, value]: [S, any], index: N) => ({ key, value, index }));
}
