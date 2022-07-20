import { A, N, O, S } from "../global";
import { Constants } from "../src/constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `StringHelpers`;

export const { STRING, UNDEFINED, FUNCTION, NULL, OBJECT, ARRAY, DESC } =
  Constants;
export const STR = `${STRING}`;
export const OBJ = { ...OBJECT };
export const ARR = [...ARRAY];

/**
 * It returns the current time in milliseconds, or the difference between the current time and the time
 * passed in as an argument
 * @param {N} [v] - The value to be passed in.
 */
export const perf = (v?: N) => (v ? performance.now() - v : performance.now());

/**
 * This function returns the current date and time in milliseconds.
 */
export const toDateNow = (v: any = null) => Date.now();

/**
 * ToDateStamp() returns a string of the current date and time in UTC format.
 */
export const toDateStamp = (v: any = null) =>
  new Date(Date.now()).toUTCString();

/**
 * It returns the current date in ISO format.
 */
export const toDateISO = (v: any = null) => new Date(Date.now()).toISOString();

/**
 * It returns the type of the value passed to it
 * @param {any} v - any - the value to be checked
 */
export const toType = (v: any) => typeof v;

/**
 * If the type of the value is a string, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeStr = (v: any) => toType(v) === "string";

/**
 * If the type of the value is a number, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNum = (v: any) => toType(v) === "number";

/**
 * If the type of the value is a function, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeFunc = (v: any) => toType(v) === "function";

/**
 * If the type of the value is an object, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeObj = (v: any) => toType(v) === "object";

/**
 * If the type of the value is null, return true.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNull = (v: any) => v === null;

/**
 * If the type of the value is undefined, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeUnd = (v: any = UNDEFINED) => !v && v === undefined;

/**
 * "toKey" returns a string that is a combination of the current date and time, and the type of the
 * value passed to it
 * @param {any} v - any - the value to be converted to a key
 */
export const toKey = (v: any) => toCharsLatin(`_${toDateNow()}_${toType(v)}`);

/**
 * "Given a string, return an array of strings, each of which is a line from the original string."
 *
 * The function is written in TypeScript, which is a superset of JavaScript. The first line of the
 * function is a comment. The second line is a TypeScript type annotation. The third line is the
 * function definition
 * @param {S} v - S
 */
export const toLines = (v: S) => v.split("\n");

/**
 * It takes a string and returns an array of strings
 * @param {S} v - S
 */
export const toTabs = (v: S) => v.split("\t");

/**
 * It takes a string and returns an array of words
 * @param {S} v - S
 */
export const toWords = (v: S) => v.split(" ");

/**
 * "Convert a string to a string of only latin characters, numbers, and underscores."
 *
 * The above function is a good example of a function that is easy to understand, and easy to use
 * @param {S} s - S - the string to be converted
 */
export const toCharsLatin = (s: S) => s.replace(/[^a-z0-9_]/gim, "").trim();

/**
 * Replace all characters that are not a-z, 0-9, underscore, backslash, space, period, or comma with
 * nothing, and trim the example.
 * @param {S} s - S - the string to be converted
 */
export const toCharsValid = (s: S) =>
  s.replace(/[^a-z0-9_\\s.,]/gim, "").trim();

/**
 * It takes a string and returns an array of characters
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toCharsArray = (s: S) => s.split("");

/**
 * Convert a string to an array of unique characters.
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toUnical = (s: S) => [
  ...new Set(...toCharsArray(s).filter(Boolean)),
];

/**
 * It takes a string and returns a new string with the characters in reverse order
 * @param {S} s - S - the string to reverse
 */
export const toReversed = (s: S) => toCharsArray(s).reverse().join("");

/**
 * `toLen` returns the length of a string or array, or `0` if the input is `null` or `undefined`
 * @param {S | A} s - S | A
 */
export const toLen = (s: S | A) => ~~s?.length;

/**
 * It takes a string and returns a trimmed string
 * @param {S} s - S - the input string
 */
export const toTrimmed = (s: S) => s.trim();

/**
 * It takes a value and returns a stringified version of an object containing that value
 * @param {any} value - any - The value to be converted to a string.
 */
export const toObjStr = (value: any) => JSON.stringify({ value }, null, "\t");

/**
 * ToLongest() returns the longest string in a list of strings.
 * @param {S[]} s - S[]
 */
export const toLongest = (...s: S[]) =>
  s.sort((a, b) => (toLen(a) > toLen(b) ? 1 : -1))[0];

/**
 * IsValidStr returns true if the given string is a non-empty string.
 * @param {S} s - S - the string to check
 */
export const isValidStr = (s: S) => isTypeStr(s) && toLen(toTrimmed(s)) > 0;

/**
 * IsValidLength" returns true if the string "s" is a string, has a length greater than "min" and less
 * than "max
 * @param {S} s - The string to check
 * @param {N} [max=2000] - The maximum length of the string.
 * @param {N} [min=1] - The minimum length of the string.
 */
export const isValidLength = (s: S, min: N = 1, max: N = 2000) =>
  isTypeStr(s) && toLen(s) > min && toLen(s) < max;

/**
 * "If the string is valid, return true if the string is equal to its reversed version."
 *
 * The function isValidStr is a helper function that checks if the string is valid
 * @param {S} s - S - the string to check
 */
export const isPalindrome = (s: S) => isValidStr(s) && s === toReversed(s);

/**
 * Returns true if the given string includes all of the given characters
 * @param {S} s - The string to check
 * @param {S[]} chars - The characters to check for.
 */
export const isIncludeChars = (s: S, chars: S[] = [s]) =>
  chars.every((c) => s.includes(c));

/**
 * IsTrimmed returns true if the given string is valid and trimmed.
 * @param {S} s - S - the string to check
 */
export const isTrimmed = (s: S) => isValidStr(s) && s === toTrimmed(s);

/**
 * It takes a value of type S and returns an object with a value property and a key property
 * @param {S} value - S
 */
export const toStats = (value: S) => ({ value, key: toKey(value) });

/**
 * It takes a list of arguments and returns an object with a size property and a values property
 * @param {A} args - A
 */
export const toObj = (...args: A) => ({ size: toLen(args), values: args });

/**
 * SubStr takes a string, a start index, and an end index, and returns a substring of the string from
 * the start index to the end index.
 * @param {S} str - The string to be sliced.
 * @param {N} start - The index of the first character to include in the returned substring.
 * @param {N} end - The end index of the substring. If omitted, the function takes the rest of the
 * string.
 */
export const subStr = (str: S, start: N = 0, end: N = toLen(str) - 1) =>
  str.substring(start, end);

/**
 * It takes a string and returns an array of all the substrings of that string
 * @param {S} str - The string to split into substrings.
 * @param filter - (v: S) => boolean = isValidStr
 * @returns An array of all substrings of the input string.
 */
export const toSubParts = (str: S, filter: (v: S) => boolean = isValidStr) => {
  const parts = [str];

  for (let i = 0; i < toLen(str); i++) {
    for (let e = i + 1; e < toLen(str); e++) {
      parts.push(subStr(str, i, e));
    }
  }

  return [...new Set(...parts.filter(filter))];
};

/**
 * It takes a string and returns an object with the string, its length, an array of its characters, and
 * an array of its subparts
 * @param {S} str - The string to be analyzed.
 * @returns An object with the following properties:
 *   - str: the original string
 *   - length: the length of the string
 *   - chars: an array of the characters in the string
 *   - parts: an array of the substrings in the string
 */
export const strStat = (str: S) => {
  const length = toLen(str);
  const chars = toCharsArray(str);
  const parts = toSubParts(str);

  return { str, length, chars, parts };
};

/**
 * "matchAll" returns the first match of a regular expression
 * @param {S} [v] - The value to be matched.
 */
export const matchAll = (v: S) => `${v?.match(/.+/gim)}`;

/**
 * "matchAllLatin" returns the first match of all latin characters in a string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLatin = (v: S) => `${v?.match(/[a-z]+/gim)}`;

/**
 * "matchAllKyr" returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllKyr = (v: S) => `${v?.match(/[а-я]+/gim)}`;

/**
 * It returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllInt = (v: S) => `${v?.match(/[0-9]+/gim)}`;

/**
 * MatchAllNumbers returns the first match of all numbers in a string.
 * @param {S} [v] - The value to be matched.
 */
export const matchAllSpec = (v: S) =>
  `${v?.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim)}`;

/**
 * It returns the first match of the regular expression `/^.+$/gim` against the input string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLines = (v: S) => `${v?.match(/^.+$/gim)}`;

export const EXAMPLES = Constants.mapExamples([
  { desc: "perf", func: perf, result: perf() },
  { desc: "toDateNow", func: toDateNow, result: toDateNow() },
  { desc: "toDateStamp", func: toDateStamp, result: toDateStamp() },
  { desc: "toDateISO", func: toDateISO, result: toDateISO() },
  { desc: "toType", func: toType, result: toType(STR) },
  { desc: "isTypeStr", func: isTypeStr, result: isTypeStr(STR) },
  { desc: "isTypeNum", func: isTypeNum, result: isTypeNum(1) },
  { desc: "isTypeFunc", func: isTypeFunc, result: isTypeFunc(FUNCTION) },
  { desc: "isTypeObj", func: isTypeObj, result: isTypeObj(OBJ) },
  { desc: "isTypeNull", func: isTypeNull, result: isTypeNull(NULL) },
  { desc: "isTypeUnd", func: isTypeUnd, result: isTypeUnd(UNDEFINED) },
  { desc: "toKey", func: toKey, result: toKey(STR) },
  { desc: "toLines", func: toLines, result: toLines(STR) },
  { desc: "toTabs", func: toTabs, result: toTabs(STR) },
  { desc: "toWords", func: toWords, result: toWords(STR) },
  { desc: "toCharsLatin", func: toCharsLatin, result: toCharsLatin(STR) },
  { desc: "toCharsValid", func: toCharsValid, result: toCharsValid(STR) },
  { desc: "toCharsArray", func: toCharsArray, result: toCharsArray(STR) },
  { desc: "toUnical", func: toUnical, result: toUnical(STR) },
  { desc: "toReversed", func: toReversed, result: toReversed(STR) },
  { desc: "toLen", func: toLen, result: toLen(STR) },
  { desc: "toTrimmed", func: toTrimmed, result: toTrimmed(STR) },
  { desc: "toObjStr", func: toObjStr, result: toObjStr(STR) },
  { desc: "toLongest", func: toLongest, result: toLongest(STR) },
  { desc: "isValidStr", func: isValidStr, result: isValidStr(STR) },
  { desc: "isValidLength", func: isValidLength, result: isValidLength(STR) },
  {
    desc: "isPalindrome",
    func: isPalindrome,
    result: isPalindrome(Constants.PALINDROME),
  },
  { desc: "isIncludeChars", func: isIncludeChars, result: isIncludeChars(STR) },
  { desc: "isTrimmed", func: isTrimmed, result: isTrimmed(STR) },
  { desc: "toStats", func: toStats, result: toStats(STR) },
  { desc: "toObj", func: toObj, result: toObj(STR) },
  { desc: "subStr", func: subStr, result: subStr(STR) },
  { desc: "toSubParts", func: toSubParts, result: toSubParts(STR) },
  { desc: "strStat", func: strStat, result: strStat(STR) },
  { desc: "matchAll", func: matchAll, result: matchAll(STR) },
  { desc: "matchAllLatin", func: matchAllLatin, result: matchAllLatin(STR) },
  { desc: "matchAllKyr", func: matchAllKyr, result: matchAllKyr(STR) },
  { desc: "matchAllInt", func: matchAllInt, result: matchAllInt(STR) },
  { desc: "matchAllSpec", func: matchAllSpec, result: matchAllSpec(STR) },
  { desc: "matchAllLines", func: matchAllLines, result: matchAllLines(STR) },
]);

export class StringHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;
  static TEST_VALUES = { SOURCE, DESC, ARR, STR, OBJ };

  static perf = perf;
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
