import path from "path";
import { N, S } from "../global";

export const objK = Object.keys;
export const objV = Object.values;
export const objE = Object.entries;
export const objF = Object.fromEntries;

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
  const desc = JSON.stringify(values, null, "\t");
  return { ...values, key, desc };
};

export const getPerformance = (time: N = 0) => performance.now() - ~~time;
export const mapExamples = (arr: any[]) =>
  arr.map(({ desc, func, result }, index) => {
    if (!!desc && !!func) {
      return { index, desc, func, result, values: [desc, result, index] };
    } else {
      const values = [{ desc, result, index, func }];
      const obj = {
        index,
        desc: "false",
        func: () => false,
        result: false,
      };
      return { ...obj, values };
    }
  });

export const getStats = (value: S) => ({
  ...getSource(value),
  type: typeof value,
  size: value?.length ?? null,
});

export const SOURCE = getSource(__filename);
SOURCE.name = `Constants`;

export class Constants {
  static SOURCE = SOURCE;

  static getSource = getSource;
  static getPerformance = getPerformance;
  static mapExamples = mapExamples;
  static getStats = getStats;

  static objK = objK;
  static objV = objV;
  static objE = objE;
  static objF = objF;

  static NAME = SOURCE.name;
  static FILENAME = SOURCE.filename;
  static DATE = SOURCE.date;
  static DATESTAMP = SOURCE.datestamp;
  static KEY = SOURCE.key;
  static DESC = SOURCE.desc;

  static UNDEFINED = undefined;
  static NULL = null;
  static BOOLEAN = true;
  static STRING = "String";
  static NUMBER = 42;
  static ARRAY = [Constants.STRING, Constants.NUMBER];
  static OBJECT = { string: Constants.STRING, number: Constants.NUMBER };
  static FUNCTION = function () {
    return true;
  };

  static STR = SOURCE.name;
  static TYPE = typeof Constants.STR;
  static OBJ = { ...SOURCE, index: 0, value: Constants.STR };
  static ARR = Array(10)
    .fill(100)
    .map((v) => ~~(v * Math.random()));

  static PRIMITIVES = [
    { desc: "UNDEFINED", value: Constants.UNDEFINED },
    { desc: "NULL", value: Constants.NULL },
    { desc: "BOOLEAN", value: Constants.BOOLEAN },
    { desc: "STRING", value: Constants.STRING },
    { desc: "NUMBER", value: Constants.NUMBER },
    { desc: "ARRAY", value: Constants.ARRAY },
    { desc: "OBJECT", value: Constants.OBJECT },
    { desc: "FUNCTION", value: Constants.FUNCTION },
  ].map(({ desc, value }, index) => ({
    desc,
    value,
    index,
    type: typeof value,
    func: () => value,
  }));
  static PALINDROME = "abacaba";

  static ROOT = process.cwd();
  static DIR = __dirname;
  static FILE = __filename;
  static PATH_CURRENT = path.resolve(Constants.FILE);
  static PATH_SRC = path.resolve(Constants.ROOT, "src");
  static PATH_TESTS = path.resolve(Constants.ROOT, "__tests__");
  static PATH_LOGS = path.resolve(Constants.ROOT, ".logs");

  static MIN = 1;
  static MAX = 1000;
  static MAX_VALUE = Number.MAX_VALUE;
  static MIN_VALUE = Number.MIN_VALUE;
  static MAX_SAFE_VALUE = Number.MAX_SAFE_INTEGER;
  static MIN_SAFE_VALUE = Number.MIN_SAFE_INTEGER;
  static RANDOM = Math.random();
  static RANDOM_BOOLEAN = Constants.RANDOM > 0.5;
  static RANDOM_MULT = ~~(Constants.RANDOM * 1000);
  static RANDOM_SIZE = 10;
  static RANGE_RANDOM = [Constants.MIN, Constants.RANDOM, Constants.MAX];
  static RANGE_VALUES = [Constants.MIN_VALUE, Constants.MAX_VALUE];
  static RANGE_SAFE = [Constants.MIN_SAFE_VALUE, Constants.MAX_SAFE_VALUE];
  static NUMS = [...Constants.RANGE_RANDOM];

  static ALL = new RegExp(/.+/gim);
  static LINE = new RegExp(/^.+$/gim);
  static CHARS_ONLY = new RegExp(/[a-z]/gim);
  static NUMBERS_ONLY = new RegExp(/[0-9]/gim);
  static CHARS_AND_NUMBERS = new RegExp(/[a-z0-9]/gim);
  static NOT_CHARS_AND_NUMBERS = new RegExp(/[^a-z0-9]/gim);

  static get _RANDOM() {
    return ~~(Math.random() * (Constants.MAX - Constants.MIN) + Constants.MIN);
  }

  static EXAMPLES = mapExamples([
    {
      desc: "getSource",
      func: () => Constants.getSource,
      result: Constants.getSource,
    },
    {
      desc: "getStats",
      func: () => Constants.getStats,
      result: Constants.getStats,
    },
    {
      desc: "getPerformance",
      func: () => Constants.getPerformance,
      result: Constants.getPerformance,
    },
    { desc: "objK", func: () => Constants.objK, result: Constants.objK },
    { desc: "objV", func: () => Constants.objV, result: Constants.objV },
    { desc: "objE", func: () => Constants.objE, result: Constants.objE },
    { desc: "objF", func: () => Constants.objF, result: Constants.objF },
    {
      desc: "UNDEFINED",
      func: () => Constants.UNDEFINED,
      result: Constants.UNDEFINED,
    },
    { desc: "NULL", func: () => Constants.NULL, result: Constants.NULL },
    {
      desc: "BOOLEAN",
      func: () => Constants.BOOLEAN,
      result: Constants.BOOLEAN,
    },
    { desc: "STRING", func: () => Constants.STRING, result: Constants.STRING },
    { desc: "NUMBER", func: () => Constants.NUMBER, result: Constants.NUMBER },
    { desc: "ARRAY", func: () => Constants.ARRAY, result: Constants.ARRAY },
    { desc: "OBJECT", func: () => Constants.OBJECT, result: Constants.OBJECT },
    {
      desc: "FUNCTION",
      func: () => Constants.FUNCTION,
      result: Constants.FUNCTION,
    },

    { desc: "NAME", func: () => Constants.NAME, result: Constants.NAME },
    {
      desc: "FILENAME",
      func: () => Constants.FILENAME,
      result: Constants.FILENAME,
    },
    { desc: "DATE", func: () => Constants.DATE, result: Constants.DATE },
    {
      desc: "DATESTAMP",
      func: () => Constants.DATESTAMP,
      result: Constants.DATESTAMP,
    },
    { desc: "KEY", func: () => Constants.KEY, result: Constants.KEY },
    { desc: "DESC", func: () => Constants.DESC, result: Constants.DESC },
    {
      desc: "UNDEFINED",
      func: () => Constants.UNDEFINED,
      result: Constants.UNDEFINED,
    },
    { desc: "NULL", func: () => Constants.NULL, result: Constants.NULL },
    {
      desc: "BOOLEAN",
      func: () => Constants.BOOLEAN,
      result: Constants.BOOLEAN,
    },
    { desc: "STRING", func: () => Constants.STRING, result: Constants.STRING },
    { desc: "NUMBER", func: () => Constants.NUMBER, result: Constants.NUMBER },
    { desc: "ARRAY", func: () => Constants.ARRAY, result: Constants.ARRAY },
    { desc: "OBJECT", func: () => Constants.OBJECT, result: Constants.OBJECT },
    {
      desc: "FUNCTION",
      func: () => Constants.FUNCTION,
      result: Constants.FUNCTION,
    },
    { desc: "STR", func: () => Constants.STR, result: Constants.STR },
    { desc: "TYPE", func: () => Constants.TYPE, result: Constants.TYPE },
    { desc: "OBJ", func: () => Constants.OBJ, result: Constants.OBJ },
    { desc: "ARR", func: () => Constants.ARR, result: Constants.ARR },
    {
      desc: "PRIMITIVES",
      func: () => Constants.PRIMITIVES,
      result: Constants.PRIMITIVES,
    },
    {
      desc: "PALINDROME",
      func: () => Constants.PALINDROME,
      result: Constants.PALINDROME,
    },
    { desc: "ROOT", func: () => Constants.ROOT, result: Constants.ROOT },
    { desc: "DIR", func: () => Constants.DIR, result: Constants.DIR },
    { desc: "FILE", func: () => Constants.FILE, result: Constants.FILE },
    {
      desc: "PATH_CURRENT",
      func: () => Constants.PATH_CURRENT,
      result: Constants.PATH_CURRENT,
    },
    {
      desc: "PATH_SRC",
      func: () => Constants.PATH_SRC,
      result: Constants.PATH_SRC,
    },
    {
      desc: "PATH_TESTS",
      func: () => Constants.PATH_TESTS,
      result: Constants.PATH_TESTS,
    },
    {
      desc: "PATH_LOGS",
      func: () => Constants.PATH_LOGS,
      result: Constants.PATH_LOGS,
    },
    { desc: "MIN", func: () => Constants.MIN, result: Constants.MIN },
    { desc: "MAX", func: () => Constants.MAX, result: Constants.MAX },
    {
      desc: "MAX_VALUE",
      func: () => Constants.MAX_VALUE,
      result: Constants.MAX_VALUE,
    },
    {
      desc: "MIN_VALUE",
      func: () => Constants.MIN_VALUE,
      result: Constants.MIN_VALUE,
    },
    {
      desc: "MAX_SAFE_VALUE",
      func: () => Constants.MAX_SAFE_VALUE,
      result: Constants.MAX_SAFE_VALUE,
    },
    {
      desc: "MIN_SAFE_VALUE",
      func: () => Constants.MIN_SAFE_VALUE,
      result: Constants.MIN_SAFE_VALUE,
    },
    { desc: "RANDOM", func: () => Constants.RANDOM, result: Constants.RANDOM },
    {
      desc: "RANDOM_BOOLEAN",
      func: () => Constants.RANDOM_BOOLEAN,
      result: Constants.RANDOM_BOOLEAN,
    },
    {
      desc: "RANDOM_MULT",
      func: () => Constants.RANDOM_MULT,
      result: Constants.RANDOM_MULT,
    },
    {
      desc: "RANDOM_SIZE",
      func: () => Constants.RANDOM_SIZE,
      result: Constants.RANDOM_SIZE,
    },
    {
      desc: "RANGE_RANDOM",
      func: () => Constants.RANGE_RANDOM,
      result: Constants.RANGE_RANDOM,
    },
    {
      desc: "RANGE_VALUES",
      func: () => Constants.RANGE_VALUES,
      result: Constants.RANGE_VALUES,
    },
    {
      desc: "RANGE_SAFE",
      func: () => Constants.RANGE_SAFE,
      result: Constants.RANGE_SAFE,
    },
    { desc: "NUMS", func: () => Constants.NUMS, result: Constants.NUMS },
    { desc: "ALL", func: () => Constants.ALL, result: Constants.ALL },
    { desc: "LINE", func: () => Constants.LINE, result: Constants.LINE },
    {
      desc: "CHARS_ONLY",
      func: () => Constants.CHARS_ONLY,
      result: Constants.CHARS_ONLY,
    },
    {
      desc: "NUMBERS_ONLY",
      func: () => Constants.NUMBERS_ONLY,
      result: Constants.NUMBERS_ONLY,
    },
    {
      desc: "CHARS_AND_NUMBERS",
      func: () => Constants.CHARS_AND_NUMBERS,
      result: Constants.CHARS_AND_NUMBERS,
    },
    {
      desc: "NOT_CHARS_AND_NUMBERS",
      func: () => Constants.NOT_CHARS_AND_NUMBERS,
      result: Constants.NOT_CHARS_AND_NUMBERS,
    },
  ]);
}
