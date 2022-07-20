import { A, N, S } from "../global";
import { Constants } from "../src/constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `ArrayHelpers`;

const { RegExp, Paths, Numbers, ValueTypes } = Constants;
export const {
  ALL,
  LINE,
  CHARS_ONLY,
  NUMBERS_ONLY,
  CHARS_AND_NUMBERS,
  NOT_CHARS_AND_NUMBERS,
} = RegExp;
export const {
  DIR_ROOT,
  FILE,
  DIR,
  DIR_CURRENT,
  DIR_PREV,
  DIRNAME_SRC,
  DIRNAME_TESTS,
  DIRNAME_LOGS,
  PATHS_ROOT,
  PATHS_CURRENT,
  PATHS_SRC,
  PATHS_TESTS,
} = Paths;
export const {
  MIN,
  MAX,
  MAX_VALUE,
  MIN_VALUE,
  MAX_SAFE_VALUE,
  MIN_SAFE_VALUE,
  _RANDOM,
  RANDOM_BOOLEAN,
  RANDOM_MULT,
  RANDOM_SIZE,
  RANDOM_INT,
  RANGE_RANDOM,
  RANGE_VALUES,
  RANGE_SAFE,
  NUMS,
} = Numbers;
export const {
  UNDEFINED,
  NULL,
  BOOLEAN,
  STRING,
  NUMBER,
  ARRAY,
  OBJECT,
  FUNCTION,
  PRIMITIVES,
} = ValueTypes;
const STR = SOURCE.name;
const TYPE = typeof STR;
const OBJ = { ...SOURCE, index: 0, value: STR };
const ARR = Array(RANDOM_SIZE)
  .fill(MAX)
  .map((v) => ~~(v * _RANDOM));

export const mapByFunc = (arr: A = ARR, func = (v: any) => !!v) =>
  arr.map((value, index) => ({ value, index, func }));

export const mapByValue = (arr: A = ARR) =>
  arr.map((value, index) => ({ value, index }));

export const sortRandom = (arr: A = ARR) =>
  arr.sort((a, b) => (~~(Math.random() - 0.5) ? 1 : -1));

export const sortLength = (arr: A = ARR) =>
  arr.sort((a: any[] | S, b: any[] | S) => (a.length > b.length ? 1 : -1));

export const sortBigger = (arr: A = ARR) =>
  arr.sort((a: S | N, b: S | N) => (a > b ? 1 : -1));

export const toSorted = (arr: A = ARR) => arr.sort();

export const toMerged = (...arrs: A[]) =>
  arrs.reduce((acc, v) => [...acc, ...v], []);

export const toFlat = (...arrs: A[]) => [...arrs].flat(Infinity);

export const mapByIndex = (arr: A = ARR) =>
  arr.reduce((value, index) => ({ value, index }));

export const addIndexProp = (arr: A = ARR) =>
  arr.map((value: any, index: N) => ({
    value,
    index,
  }));

export const mapByType = (arr: A = ARR) =>
  arr.reduce((value, index) => ({ value, index, type: typeof value }));

export const toUnical = (arr: A = ARR) => [...new Set(arr)];

export const arrFilterValid = (arr: A = ARR) => arr.filter(Boolean);

export const EXAMPLES = Constants.mapExamples([
  { desc: "mapByFunc", func: mapByFunc, result: mapByFunc() },
  { desc: "mapByValue", func: mapByValue, result: mapByValue() },
  { desc: "sortRandom", func: sortRandom, result: sortRandom() },
  { desc: "sortLength", func: sortLength, result: sortLength() },
  { desc: "sortBigger", func: sortBigger, result: sortBigger() },
  { desc: "toSorted", func: toSorted, result: toSorted() },
  { desc: "toMerged", func: toMerged, result: toMerged() },
  { desc: "toFlat", func: toFlat, result: toFlat() },
  { desc: "mapByIndex", func: mapByIndex, result: mapByIndex() },
  { desc: "addIndexProp", func: addIndexProp, result: addIndexProp() },
  { desc: "mapByType", func: mapByType, result: mapByType() },
  { desc: "toUnical", func: toUnical, result: toUnical() },
  { desc: "arrFilterValid", func: arrFilterValid, result: arrFilterValid() },
]);
export class ArrayHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;
  static TEST_VALUES = { SOURCE, ARR, STR, OBJ };

  static mapByFunc = mapByFunc;
  static mapByValue = mapByValue;
  static sortRandom = sortRandom;
  static sortLength = sortLength;
  static sortBigger = sortBigger;
  static toSorted = toSorted;
  static toMerged = toMerged;
  static toFlat = toFlat;
  static mapByIndex = mapByIndex;
  static addIndexProp = addIndexProp;
  static mapByType = mapByType;
  static toUnical = toUnical;
  static arrFilterValid = arrFilterValid;
}
