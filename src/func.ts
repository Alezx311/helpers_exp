import { Constants } from "./constants";
import { A, N, O, S, F, B } from "../global";
import { inspect } from "util";
import path from "path";

const { RANDOM_SIZE, MAX, MIN, RANGE_RANDOM, CHARS_AND_NUMBERS, FUNCTION } =
  Constants;

const { ARR, OBJ, STR, objK, objV, objE } = Constants;

const SOURCE = Constants.getSource(__filename);
SOURCE.name = `Functions List`;

//? Path
export const getRoot = () => process.cwd();
export const getDir = () => __filename;
export const getFile = () => __dirname;
export const getPathResolved = (arr: A<S> = []) =>
  path.resolve(process.cwd(), ...arr);
export const getPathJoin = (str: S = process.cwd()) =>
  path.join(__dirname, str);
export const getPathRelative = (str: S = process.cwd()) =>
  path.relative(__dirname, str);

//? Random
export const random = Math.random;
export const _floor = Math.floor;
export const _ceil = Math.ceil;
export const _round = Math.round;
export const _abs = Math.abs;
export const _sign = Math.sign;
export const _min = Math.min;
export const _max = Math.max;
export const randomInt = (max: N = MAX, min: N = MIN) =>
  ~~(random() * (max - min)) + min;
export const randomDate = () => randomInt(Date.now(), 0);
export const randomDateStamp = () => new Date(randomDate()).toUTCString();
export const randomString = (pref: S = "key") => `_${pref}_${randomDate()}`;
export const randomID = () => `${parseInt(`${randomDate()}`, 36)}`;
export const randomIndex = (arr: A = ARR) => {
  const l = len(arr);
  if (l < 1) return 0;
  if (l < 3) return randomChoose() ? 1 : 0;
  else return randomInt(l - 1, 0);
};
export const randomElement = (arr: A = ARR) => arr[randomIndex(arr)];
export const randomSort = () => (randomBool() ? 1 : -1);
export const randomChoose = (v1: any = true, v2: any = null) =>
  randomBool() ? v1 : v2;
export const randomBool = () => random() > 0.5;
export const randomMany = (size: N = RANDOM_SIZE, nums: N[] = RANGE_RANDOM) =>
  Array(size)
    .fill(random())
    .map((v) => ~~(v * randomInt(_max(...nums), _min(...nums))));
export const randomArr = (size: N = RANDOM_SIZE, max: N = MAX, min: N = MIN) =>
  Array(size)
    .fill(random())
    .map((v) => ~~(v * randomInt(max, min)));

export const getPerformance = (time: N = 0) => performance.now() - ~~time;
export const getStats = (value: any = OBJ.value) => ({
  desc: toStr(value),
  type: type(value),
  size: len(value),
});

//? Converters
export const type = (value: any = STR) => typeof value;
export const toTypeEqual = (v1: any = STR, v2: any = null) =>
  type(v1) === type(v2);
export const toEqual = (v1: any = STR, v2: any = null) =>
  v1 === v2 && toTypeEqual(v1, v2);
export const toStr = (value: any = STR, desc: S = STR) =>
  isStr(value) ? value : `${desc} ${value}`.trim();
export const toArr = (value: any = STR): A =>
  isArr(value) ? [...value] : [value];
export const toObj = (value: any = STR): O =>
  isObj(value) ? value : { value };
export const toBool = (value: any = STR): B => !!value;
export const toNum = (value: any = STR): N => (isNum(value) ? value : ~~value);
export const toFunc = (value: any = STR): F =>
  isFunc(value)
    ? value
    : function () {
        return value;
      };
export const is = (value: any = STR) => !!value;
export const len = (value: any = STR, def: any = false) => value?.length ?? def;
export const isLen = (value: any = STR, min: N = 0) => len(value, -1) > min;
export const isExists = (value: any = STR) => !isNull(value) && !isUnd(value);
export const isStr = (value: any = STR) =>
  type(value) === "string" && isLen(value);
export const isNum = (value: any = STR) =>
  type(value) === "number" || type(value) === "bigint";
export const isObj = (value: any = STR) =>
  type(value) === "object" && isLen(objK(value));
export const isArr = (value: any = STR) =>
  type(value) === "object" && Array.isArray(value) && isLen(value);
export const isNull = (value: any = STR) => value === null;
export const isUnd = (value: any = STR) =>
  type(value) === "undefined" || value === undefined;
export const isFunc = (value: any = STR) =>
  type(value) === "function" || value instanceof Function;
export const isBln = (value: any = STR) => type(value) === "boolean";
export const isKey = (obj: O, key: S) => objK(obj).includes(key);
export const toInspect = (value: any = STR): S => inspect(value);
export const toInspectAll = (value: any = STR): S =>
  inspect(value, true, 10, false);
export const toJsonPlain = (value: any = STR): S => JSON.stringify(value);
export const toJson = (value: any = STR): S =>
  JSON.stringify(value, null, "\t");
export const toDesc = (value: any = STR, desc: S = Constants.TYPE) =>
  `${desc ?? type(value)}: ${value}`;
export const toDescKey = (key: S = OBJ.key) => `Key: ${key}`;
export const toDescIndex = (index: N = OBJ.index) => `Index: ${index}`;
export const toDescValue = (value: any = OBJ.value) => `Value: ${value}`;
export const toDescType = (value: any = STR) => `Type: ${type(value)}`;
export const toArrProps = (arr: A = ARR) =>
  arr.map((value: any, index: N) => {
    const upd = { value, index };
    const desc = toJson(upd);
    return { ...upd, desc };
  });
export const toObjProps = (obj: O = OBJ) =>
  objK(obj).map((key: S, index: N) => {
    const upd = { key, index, value: obj[key] };
    const desc = toJson(upd);
    return { ...upd, desc };
  });
export const toDescArr = (arr: A = ARR) =>
  arr.reduce((a, value: any, index: N) => (a += `${index}. ${value}`), "");
export const toDescObjKeys = (obj: O = OBJ) =>
  objK(obj).map((key: S, index: N) => ({
    key,
    index,
    value: obj[key],
    desc: `${index}. ${key}: ${obj[key]}`,
  }));
export const toDescObjValues = (obj: O = OBJ) =>
  objV(obj).map((value: any, index: N) => ({
    index,
    value,
    desc: `${index}. ${value}`,
  }));
export const toDescObjEntries = (obj: O = OBJ) =>
  objE(obj).map(([key, value]: [S, any], index: N) => ({
    key,
    index,
    value,
    desc: `${index}. ${key}: ${value}`,
  }));
export const toDescObj = (obj: O = OBJ) =>
  toDescObjKeys(obj).reduce((a, { desc }) => a + "\n" + desc, "");
export const isEveryTruthy = (arr: A = ARR) => arr.every((v) => !!v === true);
export const isInclude = (arr: A = ARR, value: any = null) =>
  arr.includes(value);
export const isEvery = (arr: A = ARR, func: F = is) => arr.every(func);
export const isSome = (arr: A = ARR, func: F = is) => arr.some(func);

export const filterBy = (arr: A = ARR, func: F = is) => arr.filter(func);
export const filterByObj = (arr: A = ARR) => arr.filter(isObj);
export const filterByValid = (arr: A = ARR) => arr.filter(Boolean);
export const filterByStrings = (arr: A = ARR) => arr.filter(String);
export const filterByNumber = (arr: A = ARR) => arr.filter(Number);
export const filterByType = (arr: A = ARR, typeStr: S = Constants.TYPE) =>
  arr.filter((value) => type(value) !== typeStr);
export const reduceTypes = (arr: A = ARR) =>
  arr.reduce((a, value) => [...a, type(value)], []);
export const reduceDesc = (arr: A = ARR) =>
  arr.reduce((a, value, i) => [...a, `${i}. ${value}`]);
export const reduceTruthy = (arr: A = ARR) =>
  arr.filter(Boolean).reduce((a, value) => [...a, value], []);
export const reduceIndexes = (arr: A = ARR) =>
  arr.reduce((a, value, i) => [...a, i], []);
export const reduceValues = (arr: A = ARR) =>
  arr.reduce((a, value) => [...a, value], []);
export const reduceObj = (arr: A = ARR) =>
  arr.reduce((a, value, index) => [...a, { index, value }], []);
export const reduceObjWithDesc = (arr: A = ARR) =>
  arr.reduce(
    (a, value, index) => [
      ...a,
      { index, value, desc: toDescObjValues({ index, value }) },
    ],
    []
  );
export const replaceStr = (
  str: S = STR,
  rxp: S | RegExp = CHARS_AND_NUMBERS,
  replacer: S = ""
) => str.replace(rxp, replacer);
export const replaceSpaces = (str: S = STR) => toStr(str).replace("s", "");
export const replaceTabs = (str: S = STR) => toStr(str).replace("\t", "");
export const replaceChars = (str: S = STR) =>
  toStr(str).replace(/[a-z]/gim, "");
export const replaceNotChars = (str: S = STR) =>
  toStr(str).replace(/[^a-z]/gim, "");
export const toUnicalKey = (str: S = STR): S =>
  `_${Date.now()}_${replaceSpaces(str)}`;
export const toElementStr = ({
  index,
  key,
  value,
}: {
  index: N;
  key: S;
  value: any;
} = OBJ) =>
  [toStr(index, "index"), toStr(key, "key"), toStr(value, "value")].join("");

export const perf = (time: N = 0) => performance.now() - ~~time;
export const toDateNow = () => Date.now();
export const toDateStamp = () => new Date().toUTCString();
export const toDateISO = () => new Date().toISOString();
export const toKey = (value: any = OBJ.value) =>
  toCharsLatin(`_${toDateNow()}_${type(value)}`);
export const toLines = (v: S = STR) => `${v}`.split("\n");
export const toTabs = (v: S = STR) => `${v}`.split("\t");
export const toWords = (v: S = STR) => `${v}`.split(" ");
export const toCharsLatin = (s: S = STR) =>
  `${s}`.replace(/[^a-z0-9_]/gim, "").trim();
export const toCharsValid = (s: S = STR) =>
  `${s}`.replace(/[^a-z0-9_\\s.,]/gim, "").trim();
export const toCharsArray = (s: S = STR) => `${s}`.split("");
export const toCharsUnical = (s: S = STR) =>
  isStr(s) && [...new Set(toCharsArray(`${s}`).filter(Boolean))];
export const toReversed = (s: S = STR) =>
  isStr(s) && toCharsArray(`${s}`).reverse().join("");
export const toTrimmed = (s: S = STR) => `${s}`.trim();
export const toObjStr = (value: any = STR) =>
  JSON.stringify({ value }, null, "\t");
export const toLongest = (...s: A<S | A>) =>
  s.filter(isLen).sort(len).filter(Boolean)[0];
export const isValidStr = (s: S = STR) => len(toTrimmed(s)) > 0;
export const isValidLength = (s: S = STR, min: N = MIN, max: N = MAX) =>
  len(s) > min && len(s) < max;
export const isPalindrome = (s: S = STR) =>
  isValidStr(s) && s === toReversed(s);
export const isIncludeChars = (s: S = STR, chars: A<S> = [STR[0]]) =>
  chars.every((c) => `${s}`.includes(c));
export const isTrimmed = (s: S = STR) => isValidStr(s) && s === toTrimmed(s);
export const toStats = (value: any = STR) => ({
  value,
  key: toKey(value),
  type: type(value),
});
export const toStrLastIndex = (s: S | A = STR) =>
  s.length > 0 ? ~~len(s) - 1 : 0;
export const subStr = (str: S = STR, start: N = 0, end: N = len(str) - 1) =>
  `${str}`.substring(start, end);
export const toSubParts = (str: S = STR, max: N = 10) => {
  const parts = [str];

  for (let i = 0; i < len(str); i++) {
    for (let e = i + 1; e < len(str); e++) {
      parts.push(subStr(str, i, e));
    }
  }

  const valid = parts.map(replaceNotChars).filter((s) => is(s) && len(s) < max);

  return toUnical(valid);
};
export const strStat = (str: S = STR) => {
  const length = len(str);
  const chars = toCharsArray(str);
  const parts = toSubParts(str);

  return { str, length, chars, parts };
};
export const matchAll = (v: S = STR) => `${`${v}`.match(/.+/gim)}`;
export const matchAllLatin = (v: S = STR) => `${`${v}`.match(/[a-z]+/gim)}`;
export const matchAllKyr = (v: S = STR) => `${`${v}`.match(/[а-я]+/gim)}`;
export const matchAllInt = (v: S = STR) => `${`${v}`.match(/[0-9]+/gim)}`;
export const matchAllSpec = (v: S = STR) =>
  `${`${v}`.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim)}`;
export const matchAllLines = (v: S = STR) => `${`${v}`.match(/^.+$/gim)}`;
export const arrRandomElement = (arr: A = ARR) =>
  arr.length < 1 ? arr[0] : arr[randomInt(lastArrIndex(arr))];
export const arrFilterValid = (arr: A = ARR) => arr.filter(Boolean);
export const lastArrIndex = (arr: A = ARR) =>
  arr.length > 0 ? arr.length - 1 : 0;
export const arrFilterMaxLength = (
  arr: A = ARR,
  max: N = randomInt(lastArrIndex(arr))
) => arr.filter((v, i) => i < max);
export const arrMapByTypes = (arr: A = ARR) =>
  arr.map((value, index) => ({ value, index, type: type(value) }));
export const objKeys = (obj: O = OBJ) => objK(obj).filter(Boolean);
export const objValues = (obj: O = OBJ) => objV(obj).filter(Boolean);
export const objEntries = (obj: O = OBJ) => objE(obj).filter(Boolean);
export const objInspect = (obj: O = OBJ) => inspect(obj, true, 10, false);
export const objStr = (obj: O = OBJ) => JSON.stringify(obj, null, "\t");
export const mapKey = (key: S, index: N = randomInt()) => ({ key, index });
export const objMap = (obj: O = OBJ) => {
  return objKeys(obj).map((v, i) => ({ ...mapKey(v, i), value: obj[v] }));
};
export const mapByFunc = (arr: A, func: F = FUNCTION) =>
  arr.map((value: any, index: N) => ({ value, index, func }));
export const mapByValue = (arr: A) =>
  arr.map((value: any, index: N) => ({ value, index }));
export const sortRandom = (arr: A = ARR) => arr.sort(randomSort);
export const sortLength = (arr: A = ARR) =>
  arr.sort((a: A | S, b: A | S) => (len(a) > len(b) ? 1 : -1));
export const sortBigger = (arr: A = ARR) =>
  arr.sort((a: S | N, b: S | N) => (a > b ? 1 : -1));
export const toSorted = (arr: A = ARR) => arr.sort();
export const toMerged = (arr1: A = ARR, arr2: A = ARR) =>
  [...arr1, ...arr2].reduce((acc, v) => [...acc, ...v], []);
export const toFlat = (arr: A = ARR) => arr.flat();
export const mapFunc = (value: any = STR, index: N = 0, func: F = toObj) =>
  func(value);
export const addPropIndex = (arr: A = ARR) =>
  arr.map((value: any, index: N) => ({
    value,
    index,
  }));
export const addPropType = (arr: A = ARR) =>
  arr.map((value: any, index: N) => ({
    value,
    index,
    type: type(value),
  }));
export const mapByType = (arr: A = ARR) => arr.map((value) => type(value));
export const toUnical = (arr: A = ARR) => [...new Set(arr)];
export const arrRandomIndex = (arr: A = ARR) => randomIndex(arr);
