import { inspect } from "util";
import { N, O, S, A } from "../global";
import { Constants } from "./constants";

const { OBJ, ARR, STR } = Constants;

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `StrHelpers`;

export const toDateNow = () => Date.now();
export const toDateStamp = () => new Date(Date.now()).toUTCString();
export const toDateISO = () => new Date(Date.now()).toISOString();
export const toType = (v: any = STR) => typeof v;
export const isTypeStr = (v: any = STR) => toType(v) === "string";
export const isTypeNum = (v: any = Constants.NUMBER) => toType(v) === "number";
export const isTypeFunc = (v: any = Constants.FUNCTION) =>
  toType(v) === "function";
export const isTypeObj = (v: any = Constants.OBJECT) => toType(v) === "object";
export const isTypeNull = (v: any = Constants.NULL) => v === null;
export const isTypeUnd = (v: any = Constants.UNDEFINED) =>
  !v && v === undefined;
export const toKey = (v: any = STR) =>
  toCharsLatin(`_${toDateNow()}_${toType(v)}`);
export const toLines = (v: S = STR) => v.split("\n");
export const toTabs = (v: S = STR) => v.split("\t");
export const toWords = (v: S = STR) => v.split(" ");
export const toCharsLatin = (s: S = STR) =>
  s.replace(/[^a-z0-9_]/gim, "").trim();
export const toCharsValid = (s: S = STR) =>
  s.replace(/[^a-z0-9_\\s.,]/gim, "").trim();
export const toCharsArray = (s: S = STR) => s.split("");
export const toUnical = (s: S = STR) => [
  ...new Set(...toCharsArray(s).filter(Boolean)),
];
export const toReversed = (s: S = STR) => toCharsArray(s).reverse().join("");
export const toLen = (s: S | A = STR) => ~~s?.length;
export const toTrimmed = (s: S = STR) => s.trim();
export const toObjStr = (value: any = STR) =>
  JSON.stringify({ value }, null, "\t");
export const toLongest = (...s: S[]) =>
  s.sort((a, b) => (toLen(a) > toLen(b) ? 1 : -1))[0];
export const isValidStr = (s: S = STR) =>
  isTypeStr(s) && toLen(toTrimmed(s)) > 0;
export const isValidLength = (s: S = STR, min: N = 1, max: N = 2000) =>
  isTypeStr(s) && toLen(s) > min && toLen(s) < max;
export const isPalindrome = (s: S = STR) =>
  isValidStr(s) && s === toReversed(s);
export const isIncludeChars = (s: S = STR, chars: S[] = [""]) =>
  chars.every((c) => s.includes(c));
export const isTrimmed = (s: S = STR) => isValidStr(s) && s === toTrimmed(s);
export const toStats = (value: S = STR) => ({ value, key: toKey(value) });
export const toObj = (...args: any[]) => ({ size: toLen(args), values: args });
export const subStr = (str: S = STR, start: N = 0, end: N = toLen(str) - 1) =>
  str.substring(start, end);
export const toSubParts = (str: S = STR, filter = isValidStr) => {
  const parts = [str];
  for (let i = 0; i < toLen(str); i++) {
    for (let e = i + 1; e < toLen(str); e++) {
      parts.push(subStr(str, i, e));
    }
  }
  return [...new Set(...parts.filter(filter))];
};
export const strStat = (str: S = STR) => {
  const length = toLen(str);
  const chars = toCharsArray(str);
  const parts = toSubParts(str);
  return { str, length, chars, parts };
};
export const matchAll = (v: S = STR) => isTypeStr(v) && v.match(/.+/gim);
export const matchAllLatin = (v: S = STR) =>
  isTypeStr(v) && v.match(/[a-z]+/gim);
export const matchAllKyr = (v: S = STR) => isTypeStr(v) && v.match(/[а-я]+/gim);
export const matchAllInt = (v: S = STR) => isTypeStr(v) && v.match(/[0-9]+/gim);
export const matchAllSpec = (v: S = STR) =>
  isTypeStr(v) && v.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim);
export const matchAllLines = (v: S = STR) => isTypeStr(v) && v.match(/^.+$/gim);

export const EXAMPLES = Constants.mapExamples([
  { desc: "toDateNow", func: toDateNow, result: toDateNow() },
  { desc: "toDateStamp", func: toDateStamp, result: toDateStamp() },
  { desc: "toDateISO", func: toDateISO, result: toDateISO() },
  { desc: "toType", func: toType, result: toType() },
  { desc: "isTypeStr", func: isTypeStr, result: isTypeStr() },
  { desc: "isTypeNum", func: isTypeNum, result: isTypeNum() },
  { desc: "isTypeFunc", func: isTypeFunc, result: isTypeFunc() },
  { desc: "isTypeObj", func: isTypeObj, result: isTypeObj() },
  { desc: "isTypeNull", func: isTypeNull, result: isTypeNull() },
  { desc: "isTypeUnd", func: isTypeUnd, result: isTypeUnd() },
  { desc: "toKey", func: toKey, result: toKey() },
  { desc: "toLines", func: toLines, result: toLines() },
  { desc: "toTabs", func: toTabs, result: toTabs() },
  { desc: "toWords", func: toWords, result: toWords() },
  { desc: "toCharsLatin", func: toCharsLatin, result: toCharsLatin() },
  { desc: "toCharsValid", func: toCharsValid, result: toCharsValid() },
  { desc: "toCharsArray", func: toCharsArray, result: toCharsArray() },
  { desc: "toUnical", func: toUnical, result: toUnical() },
  { desc: "toReversed", func: toReversed, result: toReversed() },
  { desc: "toLen", func: toLen, result: toLen() },
  { desc: "toTrimmed", func: toTrimmed, result: toTrimmed() },
  { desc: "toObjStr", func: toObjStr, result: toObjStr() },
  { desc: "toLongest", func: toLongest, result: toLongest() },
  { desc: "isValidStr", func: isValidStr, result: isValidStr() },
  { desc: "isValidLength", func: isValidLength, result: isValidLength() },
  { desc: "isPalindrome", func: isPalindrome, result: isPalindrome() },
  { desc: "isIncludeChars", func: isIncludeChars, result: isIncludeChars() },
  { desc: "isTrimmed", func: isTrimmed, result: isTrimmed() },
  { desc: "toStats", func: toStats, result: toStats() },
  { desc: "toObj", func: toObj, result: toObj() },
  { desc: "subStr", func: subStr, result: subStr() },
  { desc: "toSubParts", func: toSubParts, result: toSubParts() },
  { desc: "strStat", func: strStat, result: strStat() },
  { desc: "matchAll", func: matchAll, result: matchAll() },
  { desc: "matchAllLatin", func: matchAllLatin, result: matchAllLatin() },
  { desc: "matchAllKyr", func: matchAllKyr, result: matchAllKyr() },
  { desc: "matchAllInt", func: matchAllInt, result: matchAllInt() },
  { desc: "matchAllSpec", func: matchAllSpec, result: matchAllSpec() },
  { desc: "matchAllLines", func: matchAllLines, result: matchAllLines() },
]);
export class StringHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;

  static TEST_VALUES = { SOURCE, ARR, STR, OBJ };

  static toDateNow = toDateNow;
  static toDateStamp = toDateStamp;
  static toDateISO = toDateISO;
  static toType = toType;
  static isTypeStr = isTypeStr;
  static isTypeNum = isTypeNum;
  static isTypeFunc = isTypeFunc;
  static isTypeObj = isTypeObj;
  static isTypeNull = isTypeNull;
  static isTypeUnd = isTypeUnd;
  static toKey = toKey;
  static toLines = toLines;
  static toTabs = toTabs;
  static toWords = toWords;
  static toCharsLatin = toCharsLatin;
  static toCharsValid = toCharsValid;
  static toCharsArray = toCharsArray;
  static toUnical = toUnical;
  static toReversed = toReversed;
  static toLen = toLen;
  static toTrimmed = toTrimmed;
  static toObjStr = toObjStr;
  static toLongest = toLongest;
  static isValidStr = isValidStr;
  static isValidLength = isValidLength;
  static isPalindrome = isPalindrome;
  static isIncludeChars = isIncludeChars;
  static isTrimmed = isTrimmed;
  static toStats = toStats;
  static toObj = toObj;
  static subStr = subStr;
  static toSubParts = toSubParts;
  static strStat = strStat;
  static matchAll = matchAll;
  static matchAllLatin = matchAllLatin;
  static matchAllKyr = matchAllKyr;
  static matchAllInt = matchAllInt;
  static matchAllSpec = matchAllSpec;
  static matchAllLines = matchAllLines;
}
