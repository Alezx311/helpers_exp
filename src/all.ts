import { inspect } from "util";
import { A, N, O, S } from "../global";
import { Constants } from "../src/constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `AllHelpers`;

export const { STRING, UNDEFINED, FUNCTION, NULL, OBJECT, ARRAY, DESC } =
  Constants;
export const STR = `${STRING}`;
export const OBJ = { ...OBJECT };
export const ARR = [...ARRAY];

/**
 ?*
 * It returns the current time in milliseconds, or the difference between the current time and the time
 * passed in as an argument
 * @param {N} [v] - The value to be passed in.
 */
export const perf = (time: N = 0) => performance.now() - ~~time;

/**
 *? This function returns the current date and time in milliseconds.
 */
export const toDateNow = () => Date.now();

/**
 *? ToDateStamp() returns a string of the current date and time in UTC format.
 */
export const toDateStamp = () => new Date().toUTCString();

/**
 *? It returns the current date in ISO format.
 */
export const toDateISO = () => new Date().toISOString();

/**
 *? It returns the type of the value passed to it
 * @param {any} v - any - the value to be checked
 */
export const toType = (v?: any) => typeof v;

/**
 *? If the type of the value is a string, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeStr = (v?: any) => toType(v) === "string";

/**
 *? If the type of the value is a number, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNum = (v?: any) => toType(v) === "number";

/**
 *? If the type of the value is a function, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeFunc = (v?: any) => toType(v) === "function";

/**
 *? If the type of the value is an object, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeObj = (v?: any) => toType(v) === "object";

/**
 *? If the type of the value is null, return true.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNull = (v?: any) => v === NULL;

/**
 *? If the type of the value is undefined, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeUnd = (v?: any) => !v && v === undefined;

/**
 *? "toKey" returns a string that is a combination of the current date and time, and the type of the
 * value passed to it
 * @param {any} v - any - the value to be converted to a key
 */
export const toKey = (v: any) => toCharsLatin(`_${toDateNow()}_${toType(v)}`);

/**
 *? "Given a string, return an array of strings, each of which is a line from the original string."
 *
 * The function is written in TypeScript, which is a superset of JavaScript. The first line of the
 * function is a comment. The second line is a TypeScript type annotation. The third line is the
 * function definition
 * @param {S} v - S
 */
export const toLines = (v: S = "") => `${v}`.split("\n");

/**
 *? It takes a string and returns an array of strings
 * @param {S} v - S
 */
export const toTabs = (v: S = "") => `${v}`.split("\t");

/**
 *? It takes a string and returns an array of words
 * @param {S} v - S
 */
export const toWords = (v: S = "") => `${v}`.split(" ");
/**
 *? "Convert a string to a string of only latin characters, numbers, and underscores."
 *
 * The above function is a good example of a function that is easy to understand, and easy to use
 * @param {S} s - S - the string to be converted
 */
export const toCharsLatin = (s: S = "") =>
  `${s}`.replace(/[^a-z0-9_]/gim, "").trim();

/**
 *? Replace all characters that are not a-z, 0-9, underscore, backslash, space, period, or comma with
 * nothing, and trim the example.
 * @param {S} s - S - the string to be converted
 */
export const toCharsValid = (s: S = "") =>
  `${s}`.replace(/[^a-z0-9_\\s.,]/gim, "").trim();

/**
 *? It takes a string and returns an array of characters
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toCharsArray = (s: S = "") => `${s}`.split("");

/**
 *? Convert a string to an array of unique characters.
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toCharsUnical = (s: S = "") =>
  isTypeStr(s) && [...new Set(toCharsArray(`${s}`).filter(Boolean))];

/**
 *? It takes a string and returns a new string with the characters in reverse order
 * @param {S} s - S - the string to reverse
 */
export const toReversed = (s: S = "") =>
  isTypeStr(s) && toCharsArray(`${s}`).reverse().join("");

/**
 *? `toLen` returns the length of a string or array, or `0` if the input is `null` or `undefined`
 * @param {S | A} s - S | A
 */
export const toLen = (s: S | A = "") => ~~`${s}`?.length;

/**
 *? It takes a string and returns a trimmed string
 * @param {S} s - S - the input string
 */
export const toTrimmed = (s: S = "") => `${s}`.trim();

/**
 *? It takes a value and returns a stringified version of an object containing that value
 * @param {any} value - any - The value to be converted to a string.
 */
export const toObjStr = (value: any) => JSON.stringify({ value }, null, "\t");

/**
 *? ToLongest() returns the longest string in a list of strings.
 * @param {S[]} s - S[]
 */
export const toLongest = (...s: A<S | A>) =>
  s.sort((a, b) => (toLen(a) > toLen(b) ? 1 : -1))[0];

/**
 *? IsValidStr returns true if the given string is a non-empty string.
 * @param {S} s - S - the string to check
 */
export const isValidStr = (s: S = "") => toLen(toTrimmed(s)) > 0;

/**
 *? IsValidLength" returns true if the string "s" is a string, has a length greater than "min" and less
 * than "max
 * @param {S} s - The string to check
 * @param {N} [max=2000] - The maximum length of the string.
 * @param {N} [min=1] - The minimum length of the string.
 */
export const isValidLength = (s: S = "", min: N = 1, max: N = 2000) =>
  toLen(s) > min && toLen(s) < max;

/**
 *? "If the string is valid, return true if the string is equal to its reversed version."
 *
 * The function isValidStr is a helper function that checks if the string is valid
 * @param {S} s - S - the string to check
 */
export const isPalindrome = (s: S = "") => isValidStr(s) && s === toReversed(s);

/**
 *? Returns true if the given string includes all of the given characters
 * @param {S} s - The string to check
 * @param {S[]} chars - The characters to check for.
 */
export const isIncludeChars = (s: S = "", chars: S[] = [""]) =>
  chars.every((c) => `${s}`.includes(c));

/**
 *? IsTrimmed returns true if the given string is valid and trimmed.
 * @param {S} s - S - the string to check
 */
export const isTrimmed = (s: S = "") => isValidStr(s) && s === toTrimmed(s);

/**
 *? It takes a value of type S and returns an object with a value property and a key property
 * @param {S} value - S
 */
export const toStats = (value: any) => ({
  value,
  key: toKey(value),
  type: toType(value),
});

/**
 *? It takes a list of arguments and returns an object with a size property and a values property
 * @param {A} args - A
 */
export const toObj = (...args: any[]) => ({ size: toLen(args), values: args });

/**
 * "If the argument is a string and has a length greater than zero, return the argument, otherwise
 * return an empty string."
 *
 * The function is a bit more complicated than that, but that's the gist of it
 * @param {S} [s] - S = ""
 */
export const toStr = (s: any = "") => `${s}`.trim();

/**
 * Return the last index of a string.
 * @param {S} [s] - S = ""
 */
export const toStrLastIndex = (s: S | A = "") =>
  s.length > 0 ? ~~toLen(s) - 1 : 0;

/**
 *? SubStr takes a string, a start index, and an end index, and returns a substring of the string from
 * the start index to the end index.
 * @param {S} str - The string to be sliced.
 * @param {N} start - The index of the first character to include in the returned substring.
 * @param {N} end - The end index of the substring. If omitted, the function takes the rest of the
 * string.
 */
export const subStr = (
  str: S = "",
  start: N = 0,
  end: N = toStrLastIndex(str)
) => `${str}`.substring(~~start, ~~end);

/**
 *? It takes a string and returns an array of all the substrings of that string
 * @param {S} str - The string to split into substrings.
 * @param filter - (v:S) => boolean = isValidStr
 * @returns An array of all substrings of the input string.
 */
export const toSubParts = (str: S = "") => {
  const parts = [`${str}`];

  for (let i = 0; i < toLen(str); i++) {
    for (let e = i + 1; e < toLen(str); e++) {
      parts.push(subStr(str, i, e));
    }
  }

  return toUnical(parts);
};

/**
 *? It takes a string and returns an object with the string, its length, an array of its characters, and
 * an array of its subparts
 * @param {S} str - The string to be analyzed.
 * @returns An object with the following properties:
 *   - str: the original string
 *   - length: the length of the string
 *   - chars: an array of the characters in the string
 *   - parts: an array of the substrings in the string
 */
export const strStat = (str: S = "") => {
  const length = toLen(str);
  const chars = toCharsArray(str);
  const parts = toSubParts(str);

  return { str, length, chars, parts };
};

/**
 *? "matchAll" returns the first match of a regular expression
 * @param {S} [v] - The value to be matched.
 */
export const matchAll = (v: S = "") => `${`${v}`.match(/.+/gim)}`;

/**
 *? "matchAllLatin" returns the first match of all latin characters in a string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLatin = (v: S = "") => `${`${v}`.match(/[a-z]+/gim)}`;

/**
 *? "matchAllKyr" returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllKyr = (v: S = "") => `${`${v}`.match(/[а-я]+/gim)}`;

/**
 *? It returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllInt = (v: S = "") => `${`${v}`.match(/[0-9]+/gim)}`;

/**
 *? MatchAllNumbers returns the first match of all numbers in a string.
 * @param {S} [v] - The value to be matched.
 */
export const matchAllSpec = (v: S = "") =>
  `${`${v}`.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim)}`;

/**
 *? It returns the first match of the regular expression `/^.+$/gim` against the input string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLines = (v: S = "") => `${`${v}`.match(/^.+$/gim)}`;

/**
 *? It returns an array of objects with the value, index, and type of each element in the array.
 * @param {A} arr - A - an array of any type
 * @param {F} func - F - a function that takes a value and returns a value
 */
export const mapByFunc = (arr: any[] = [], obj: O = {}) => arr;
//   [...arr].map((value, index) => ({ value, index, obj }));
/**
 *? It takes an array of values and returns an array of objects with the value and index of each value
 * @param {A} arr - A
 */
export const mapByValue = (arr: any[] = []) => arr;
//   if (!!arr && ~~arr?.length > 0) {
//     return arr.reduce((acc, value) => [...acc, { value }], []);
//   } else {
//     return [];
//   }
// };

/**
 *? "Convert a value to an array."
 *
 * The function takes a single argument, v, and returns an array containing v
 * @param {any} v - any
 */
export const toArr = (v: any) => (isTypeObj(v) && !!toLen(v) ? v : [v]);

/**
 *? It takes an array, and returns a new array with the same elements, but in a random order
 * @param {A} arr - The array to be sorted.
 */
export const sortRandom = (arr: any[] = []) =>
  arr.sort((a, b) => (~~(Math.random() - 0.5) ? 1 : -1));

/**
 *? SortLength takes an array of strings and returns a new array of strings sorted by length
 * @param {A} arr - A
 */
export const sortLength = (arr: any[] = []) =>
  arr.sort((a: any[] | S, b: any[] | S) => (toLen(a) > toLen(b) ? 1 : -1));

/**
 *? Sort the array in ascending order, and return the sorted array.
 * @param {A} arr - A - The array to sort.
 */
export const sortBigger = (arr: any[] = []) =>
  arr.sort((a: S | N, b: S | N) => (a > b ? 1 : -1));

/**
 *? "toSorted" takes an array of numbers and returns a sorted version of that array
 * @param {A} arr - A
 */
export const toSorted = (arr: any[] = []) => arr.sort();

/**
 *? It takes an array of arrays and returns a single array with all the elements of the original arrays
 * @param {A[]} arrs - A[]
 */
export const toMerged = (...arrs: A[]) =>
  arrs.reduce((acc, v) => [...acc, ...v], []);

/**
 *? It takes an array of arrays and returns a single array with all the elements of the original arrays
 * @param {A[]} arrs - A[]
 */
export const toFlat = (...arrs: A[]) => [...arrs].flat(Infinity);

/**
 *? It takes an array and returns an array of objects with the value and index of each item in the
 * original array
 * @param {A} arr - A
 */
export const mapByIndex = (arr: any[] = []) =>
  arr.reduce((value, index) => ({ value, index }));

/**
 *? It takes an object and an index, and returns a new object with the index added to it
 * @param {O} values - O - The object to add the index property to.
 * @param {N} index - N
 */
export const addIndexProp = (arr: any[] = []) =>
  arr.map((value: any, index: N) => ({
    value,
    index,
  }));

/**
 *? It takes an array of any type and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const mapByType = (arr: any[] = []) =>
  arr.reduce((value, index) => ({ value, index, type: toType(value) }));

/**
 *? It takes an array of arrays and returns a new array with all the duplicates removed
 * @param {A} arr - A - The array to be converted to a unical array.
 */
export const toUnical = (arr: any[] = []) => [...new Set(arr)];

/**
 *? Return a random index from an array.
 * @param {A} arr - The array to get a random index from.
 */
export const arrRandomIndex = (arr: any[] = []) =>
  arr.length <= 1 ? 0 : ~~(Math.random() * toStrLastIndex(arr)) - 1;

/**
 *? Return a random element from an array.
 * @param {A} arr - A
 */
export const arrRandomElement = (arr: any[]) =>
  arr[arrRandomIndex(arr)] || arr[0];

/**
 *? Filter out all the falsy values from an array.
 * @param {A} arr - A
 */
export const arrFilterValid = (arr: any[] = []) => arr.filter(Boolean);

/**
 *? Filter an array to a maximum length.
 * @param {A} arr - A
 * @param {N} max - N = arr.length
 */
export const arrFilterMaxLength = (arr: any[] = [], max: N = toLen(arr) - 1) =>
  arr.filter((v, i) => i < max);

/**
 *? It takes an array of any type, and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const arrMapByTypes = (arr: any[] = []) =>
  arr.map((value, index) => ({ value, index, type: toType(value) }));

/**
 *? "Return an array of the keys of an object, but only if they are truthy."
 *
 * The function is a little more complicated than that, but that's the gist of it
 * @param {O} obj - O - the object to get the keys from
 */
export const objKeys = (obj: O = {}) => Object.keys(obj).filter(Boolean);

/**
 *? "Return an array of the values of an object, filtering out any falsy values."
 *
 * The function takes an object as an argument and returns an array of the values of that object. The
 * values are filtered to remove any falsy values
 * @param {O} obj - O - the object to get the values from
 */
export const objValues = (obj: O = {}) => Object.values(obj).filter(Boolean);

/**
 *? It takes an object and returns an array of its key-value pairs
 * @param {O} obj - O - The object to get the entries from.
 */
export const objEntries = (obj: O = {}) => Object.entries(obj).filter(Boolean);

/**
 *? It returns a string representation of the object, with a maximum depth of 10, and without colors
 * @param {O} obj - The object to inspect.
 */
export const objInspect = (obj: O = {}) => inspect(obj, true, 10, false);

/**
 *? It takes an object and returns a string representation of that object
 * @param {O} obj - The object to be stringified
 */
export const objStr = (obj: O = {}) => JSON.stringify(obj, null, "\t");

/**
 *? It takes a key, an index, and an object, and returns an object with the key, index, and value of the
 * object at that key
 * @param {S} key - The key of the current element being processed in the array.
 * @param {N} index - The index of the current item in the array.
 * @param {O} obj - The object you want to map over.
 */
export const mapKey = (key: S, index: N = 0) => ({ key, index });

/**
 *? `objMap` takes an object and returns an array of the object's keys
 * @param {O} obj - The object to map over.
 * @param mapBy - (key: string, value: any, index: number) => any
 * @returns An array of the keys of the object.
 */
export const objMap = (obj: O = {}) => {
  return objKeys(obj).map((v, i) => ({ ...mapKey(v, i), value: obj[v] }));
};

export const EXAMPLES = Constants.mapExamples([
  { desc: "SOURCE", func: Constants.getSource, result: SOURCE },
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
  { desc: "toLines", func: toLines, result: toLines(DESC) },
  { desc: "toTabs", func: toTabs, result: toTabs(DESC) },
  { desc: "toWords", func: toWords, result: toWords(DESC) },
  { desc: "toCharsLatin", func: toCharsLatin, result: toCharsLatin(DESC) },
  { desc: "toCharsValid", func: toCharsValid, result: toCharsValid(DESC) },
  { desc: "toCharsArray", func: toCharsArray, result: toCharsArray(DESC) },
  { desc: "toCharsUnical", func: toCharsUnical, result: toCharsUnical(DESC) },
  { desc: "toReversed", func: toReversed, result: toReversed(DESC) },
  { desc: "toLen", func: toLen, result: toLen(DESC) },
  { desc: "toTrimmed", func: toTrimmed, result: toTrimmed(DESC) },
  { desc: "toObjStr", func: toObjStr, result: toObjStr(DESC) },
  { desc: "toLongest", func: toLongest, result: toLongest(STR, DESC) },
  { desc: "isValidStr", func: isValidStr, result: isValidStr(DESC) },
  { desc: "isValidLength", func: isValidLength, result: isValidLength(DESC) },
  { desc: "isPalindrome", func: isPalindrome, result: isPalindrome("ababa") },
  {
    desc: "isIncludeChars",
    func: isIncludeChars,
    result: isIncludeChars(DESC, ["a"]),
  },
  { desc: "isTrimmed", func: isTrimmed, result: isTrimmed(STR) },
  { desc: "toStats", func: toStats, result: toStats(DESC) },
  { desc: "toObj", func: toObj, result: toObj(DESC) },
  { desc: "toStr", func: toStr, result: toStr(STR) },
  { desc: "toStrLastIndex", func: toStrLastIndex, result: toStrLastIndex(STR) },
  { desc: "subStr", func: subStr, result: subStr(STR) },
  { desc: "toSubParts", func: toSubParts, result: toSubParts(DESC) },
  { desc: "strStat", func: strStat, result: strStat(DESC) },
  { desc: "matchAll", func: matchAll, result: matchAll(DESC) },
  { desc: "matchAllLatin", func: matchAllLatin, result: matchAllLatin(DESC) },
  { desc: "matchAllKyr", func: matchAllKyr, result: matchAllKyr(DESC) },
  { desc: "matchAllInt", func: matchAllInt, result: matchAllInt(DESC) },
  { desc: "matchAllSpec", func: matchAllSpec, result: matchAllSpec(DESC) },
  { desc: "matchAllLines", func: matchAllLines, result: matchAllLines(DESC) },
  { desc: "mapByFunc", func: mapByFunc, result: mapByFunc(ARR, OBJ) },
  { desc: "mapByValue", func: mapByValue, result: mapByValue(ARR) },
  { desc: "toArr", func: toArr, result: toArr(ARR) },
  { desc: "sortRandom", func: sortRandom, result: sortRandom(ARR) },
  { desc: "sortLength", func: sortLength, result: sortLength(ARR) },
  { desc: "sortBigger", func: sortBigger, result: sortBigger(ARR) },
  { desc: "toSorted", func: toSorted, result: toSorted(ARR) },
  { desc: "toMerged", func: toMerged, result: toMerged(ARR) },
  { desc: "toFlat", func: toFlat, result: toFlat(ARR) },
  { desc: "mapByIndex", func: mapByIndex, result: mapByIndex(ARR) },
  { desc: "addIndexProp", func: addIndexProp, result: addIndexProp(ARR) },
  { desc: "mapByType", func: mapByType, result: mapByType(ARR) },
  { desc: "toUnical", func: toUnical, result: toUnical(ARR) },
  { desc: "arrRandomIndex", func: arrRandomIndex, result: arrRandomIndex(ARR) },
  {
    desc: "arrRandomElement",
    func: arrRandomElement,
    result: arrRandomElement(ARR),
  },
  { desc: "arrFilterValid", func: arrFilterValid, result: arrFilterValid(ARR) },
  {
    desc: "arrFilterMaxLength",
    func: arrFilterMaxLength,
    result: arrFilterMaxLength(ARR),
  },
  { desc: "arrMapByTypes", func: arrMapByTypes, result: arrMapByTypes(ARR) },
  { desc: "objKeys", func: objKeys, result: objKeys(OBJ) },
  { desc: "objValues", func: objValues, result: objValues(OBJ) },
  { desc: "objEntries", func: objEntries, result: objEntries(OBJ) },
  { desc: "objInspect", func: objInspect, result: objInspect(OBJ) },
  { desc: "objStr", func: objStr, result: objStr(OBJ) },
  { desc: "objMap", func: objMap, result: objMap(OBJ) },
]);
export class AllHelpers {
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
  static toCharsUnical = toCharsUnical;
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
  static toStr = toStr;
  static toStrLastIndex = toStrLastIndex;
  static subStr = subStr;
  static toSubParts = toSubParts;
  static strStat = strStat;
  static matchAll = matchAll;
  static matchAllLatin = matchAllLatin;
  static matchAllKyr = matchAllKyr;
  static matchAllInt = matchAllInt;
  static matchAllSpec = matchAllSpec;
  static matchAllLines = matchAllLines;
  static mapByFunc = mapByFunc;
  static mapByValue = mapByValue;
  static toArr = toArr;
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
  static arrRandomIndex = arrRandomIndex;
  static arrRandomElement = arrRandomElement;
  static arrFilterValid = arrFilterValid;
  static arrFilterMaxLength = arrFilterMaxLength;
  static arrMapByTypes = arrMapByTypes;
  static objKeys = objKeys;
  static objValues = objValues;
  static objEntries = objEntries;
  static objInspect = objInspect;
  static objStr = objStr;
  static objMap = objMap;
}
