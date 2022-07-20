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
  static ARRAY = [this.STRING, this.NUMBER];
  static OBJECT = { string: this.STRING, number: this.NUMBER };
  static FUNCTION = function () {
    return true;
  };

  static STR = SOURCE.name;
  static TYPE = typeof this.STR;
  static OBJ = { ...SOURCE, index: 0, value: this.STR };
  static ARR = Array(10)
    .fill(100)
    .map((v) => ~~(v * Math.random()));

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

  static ROOT = process.cwd();
  static DIR = __dirname;
  static FILE = __filename;
  static PATH_CURRENT = path.resolve(this.FILE);
  static PATH_SRC = path.resolve(this.ROOT, "src");
  static PATH_TESTS = path.resolve(this.ROOT, "__tests__");
  static PATH_LOGS = path.resolve(this.ROOT, ".logs");

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
  static RANGE_RANDOM = [this.MIN, this.RANDOM, this.MAX];
  static RANGE_VALUES = [this.MIN_VALUE, this.MAX_VALUE];
  static RANGE_SAFE = [this.MIN_SAFE_VALUE, this.MAX_SAFE_VALUE];
  static NUMS = [...this.RANGE_RANDOM];

  static ALL = new RegExp(/.+/gim);
  static LINE = new RegExp(/^.+$/gim);
  static CHARS_ONLY = new RegExp(/[a-z]/gim);
  static NUMBERS_ONLY = new RegExp(/[0-9]/gim);
  static CHARS_AND_NUMBERS = new RegExp(/[a-z0-9]/gim);
  static NOT_CHARS_AND_NUMBERS = new RegExp(/[^a-z0-9]/gim);

  static KEYS = [
    { desc: "NAME", result: this.NAME },
    { desc: "FILENAME", result: this.FILENAME },
    { desc: "DATE", result: this.DATE },
    { desc: "DATESTAMP", result: this.DATESTAMP },
    { desc: "KEY", result: this.KEY },
    { desc: "DESC", result: this.DESC },
    { desc: "UNDEFINED", result: this.UNDEFINED },
    { desc: "NULL", result: this.NULL },
    { desc: "BOOLEAN", result: this.BOOLEAN },
    { desc: "STRING", result: this.STRING },
    { desc: "NUMBER", result: this.NUMBER },
    { desc: "ARRAY", result: this.ARRAY },
    { desc: "OBJECT", result: this.OBJECT },
    { desc: "FUNCTION", result: this.FUNCTION },
    { desc: "STR", result: this.STR },
    { desc: "TYPE", result: this.TYPE },
    { desc: "OBJ", result: this.OBJ },
    { desc: "ARR", result: this.ARR },
    { desc: "PRIMITIVES", result: this.PRIMITIVES },
    { desc: "PALINDROME", result: this.PALINDROME },
    { desc: "ROOT", result: this.ROOT },
    { desc: "DIR", result: this.DIR },
    { desc: "FILE", result: this.FILE },
    { desc: "PATH_CURRENT", result: this.PATH_CURRENT },
    { desc: "PATH_SRC", result: this.PATH_SRC },
    { desc: "PATH_TESTS", result: this.PATH_TESTS },
    { desc: "PATH_LOGS", result: this.PATH_LOGS },
    { desc: "MIN", result: this.MIN },
    { desc: "MAX", result: this.MAX },
    { desc: "MAX_VALUE", result: this.MAX_VALUE },
    { desc: "MIN_VALUE", result: this.MIN_VALUE },
    { desc: "MAX_SAFE_VALUE", result: this.MAX_SAFE_VALUE },
    { desc: "MIN_SAFE_VALUE", result: this.MIN_SAFE_VALUE },
    { desc: "RANDOM", result: this.RANDOM },
    { desc: "RANDOM_BOOLEAN", result: this.RANDOM_BOOLEAN },
    { desc: "RANDOM_MULT", result: this.RANDOM_MULT },
    { desc: "RANDOM_SIZE", result: this.RANDOM_SIZE },
    { desc: "RANGE_RANDOM", result: this.RANGE_RANDOM },
    { desc: "RANGE_VALUES", result: this.RANGE_VALUES },
    { desc: "RANGE_SAFE", result: this.RANGE_SAFE },
    { desc: "NUMS", result: this.NUMS },
    { desc: "ALL", result: this.ALL },
    { desc: "LINE", result: this.LINE },
    { desc: "CHARS_ONLY", result: this.CHARS_ONLY },
    { desc: "NUMBERS_ONLY", result: this.NUMBERS_ONLY },
    { desc: "CHARS_AND_NUMBERS", result: this.CHARS_AND_NUMBERS },
    { desc: "NOT_CHARS_AND_NUMBERS", result: this.NOT_CHARS_AND_NUMBERS },
  ].map((desc: any, result: any) => {
    const func: () => any = function () {
      return result;
    };
    return { desc, result, func };
  });

  static get _RANDOM() {
    return ~~(Math.random() * (this.MAX - this.MIN) + this.MIN);
  }

  static EXAMPLES = mapExamples([
    {
      desc: "getSource",
      func: () => this.getSource,
      result: this.getSource,
    },
    {
      desc: "getStats",
      func: () => this.getStats,
      result: this.getStats,
    },
    {
      desc: "getPerformance",
      func: () => this.getPerformance,
      result: this.getPerformance,
    },
    { desc: "objK", func: () => this.objK, result: this.objK },
    { desc: "objV", func: () => this.objV, result: this.objV },
    { desc: "objE", func: () => this.objE, result: this.objE },
    { desc: "objF", func: () => this.objF, result: this.objF },
    {
      desc: "UNDEFINED",
      func: () => this.UNDEFINED,
      result: this.UNDEFINED,
    },
    { desc: "NULL", func: () => this.NULL, result: this.NULL },
    {
      desc: "BOOLEAN",
      func: () => this.BOOLEAN,
      result: this.BOOLEAN,
    },
    { desc: "STRING", func: () => this.STRING, result: this.STRING },
    { desc: "NUMBER", func: () => this.NUMBER, result: this.NUMBER },
    { desc: "ARRAY", func: () => this.ARRAY, result: this.ARRAY },
    { desc: "OBJECT", func: () => this.OBJECT, result: this.OBJECT },
    {
      desc: "FUNCTION",
      func: () => this.FUNCTION,
      result: this.FUNCTION,
    },

    { desc: "NAME", func: () => this.NAME, result: this.NAME },
    {
      desc: "FILENAME",
      func: () => this.FILENAME,
      result: this.FILENAME,
    },
    { desc: "DATE", func: () => this.DATE, result: this.DATE },
    {
      desc: "DATESTAMP",
      func: () => this.DATESTAMP,
      result: this.DATESTAMP,
    },
    { desc: "KEY", func: () => this.KEY, result: this.KEY },
    { desc: "DESC", func: () => this.DESC, result: this.DESC },
    {
      desc: "UNDEFINED",
      func: () => this.UNDEFINED,
      result: this.UNDEFINED,
    },
    { desc: "NULL", func: () => this.NULL, result: this.NULL },
    {
      desc: "BOOLEAN",
      func: () => this.BOOLEAN,
      result: this.BOOLEAN,
    },
    { desc: "STRING", func: () => this.STRING, result: this.STRING },
    { desc: "NUMBER", func: () => this.NUMBER, result: this.NUMBER },
    { desc: "ARRAY", func: () => this.ARRAY, result: this.ARRAY },
    { desc: "OBJECT", func: () => this.OBJECT, result: this.OBJECT },
    {
      desc: "FUNCTION",
      func: () => this.FUNCTION,
      result: this.FUNCTION,
    },
    { desc: "STR", func: () => this.STR, result: this.STR },
    { desc: "TYPE", func: () => this.TYPE, result: this.TYPE },
    { desc: "OBJ", func: () => this.OBJ, result: this.OBJ },
    { desc: "ARR", func: () => this.ARR, result: this.ARR },
    {
      desc: "PRIMITIVES",
      func: () => this.PRIMITIVES,
      result: this.PRIMITIVES,
    },
    {
      desc: "PALINDROME",
      func: () => this.PALINDROME,
      result: this.PALINDROME,
    },
    { desc: "ROOT", func: () => this.ROOT, result: this.ROOT },
    { desc: "DIR", func: () => this.DIR, result: this.DIR },
    { desc: "FILE", func: () => this.FILE, result: this.FILE },
    {
      desc: "PATH_CURRENT",
      func: () => this.PATH_CURRENT,
      result: this.PATH_CURRENT,
    },
    {
      desc: "PATH_SRC",
      func: () => this.PATH_SRC,
      result: this.PATH_SRC,
    },
    {
      desc: "PATH_TESTS",
      func: () => this.PATH_TESTS,
      result: this.PATH_TESTS,
    },
    {
      desc: "PATH_LOGS",
      func: () => this.PATH_LOGS,
      result: this.PATH_LOGS,
    },
    { desc: "MIN", func: () => this.MIN, result: this.MIN },
    { desc: "MAX", func: () => this.MAX, result: this.MAX },
    {
      desc: "MAX_VALUE",
      func: () => this.MAX_VALUE,
      result: this.MAX_VALUE,
    },
    {
      desc: "MIN_VALUE",
      func: () => this.MIN_VALUE,
      result: this.MIN_VALUE,
    },
    {
      desc: "MAX_SAFE_VALUE",
      func: () => this.MAX_SAFE_VALUE,
      result: this.MAX_SAFE_VALUE,
    },
    {
      desc: "MIN_SAFE_VALUE",
      func: () => this.MIN_SAFE_VALUE,
      result: this.MIN_SAFE_VALUE,
    },
    { desc: "RANDOM", func: () => this.RANDOM, result: this.RANDOM },
    {
      desc: "RANDOM_BOOLEAN",
      func: () => this.RANDOM_BOOLEAN,
      result: this.RANDOM_BOOLEAN,
    },
    {
      desc: "RANDOM_MULT",
      func: () => this.RANDOM_MULT,
      result: this.RANDOM_MULT,
    },
    {
      desc: "RANDOM_SIZE",
      func: () => this.RANDOM_SIZE,
      result: this.RANDOM_SIZE,
    },
    {
      desc: "RANGE_RANDOM",
      func: () => this.RANGE_RANDOM,
      result: this.RANGE_RANDOM,
    },
    {
      desc: "RANGE_VALUES",
      func: () => this.RANGE_VALUES,
      result: this.RANGE_VALUES,
    },
    {
      desc: "RANGE_SAFE",
      func: () => this.RANGE_SAFE,
      result: this.RANGE_SAFE,
    },
    { desc: "NUMS", func: () => this.NUMS, result: this.NUMS },
    { desc: "ALL", func: () => this.ALL, result: this.ALL },
    { desc: "LINE", func: () => this.LINE, result: this.LINE },
    {
      desc: "CHARS_ONLY",
      func: () => this.CHARS_ONLY,
      result: this.CHARS_ONLY,
    },
    {
      desc: "NUMBERS_ONLY",
      func: () => this.NUMBERS_ONLY,
      result: this.NUMBERS_ONLY,
    },
    {
      desc: "CHARS_AND_NUMBERS",
      func: () => this.CHARS_AND_NUMBERS,
      result: this.CHARS_AND_NUMBERS,
    },
    {
      desc: "NOT_CHARS_AND_NUMBERS",
      func: () => this.NOT_CHARS_AND_NUMBERS,
      result: this.NOT_CHARS_AND_NUMBERS,
    },
  ]);
}
