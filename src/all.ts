import { inspect } from "util";
import { N, O, S, A, F } from "../global";
import { Constants } from "../src/constants";

const SOURCE = Constants.getSource(__filename);
const { STRING, NUMBER, UNDEFINED, FUNCTION, ARRAY, NULL } = Constants;

/**
 ?*
 * It returns the current time in milliseconds, or the difference between the current time and the time
 * passed in as an argument
 * @param {N} [v] - The value to be passed in.
 */
export const perf = (v?: N) => (v ? performance.now() - v : performance.now());

/**
 *? This function returns the current date and time in milliseconds.
 */
export const toDateNow = (v: any = NULL) => Date.now();

/**
 *? ToDateStamp() returns a string of the current date and time in UTC format.
 */
export const toDateStamp = (v: any = NULL) =>
  new Date(Date.now()).toUTCString();

/**
 *? It returns the current date in ISO format.
 */
export const toDateISO = (v: any = NULL) => new Date(Date.now()).toISOString();

/**
 *? It returns the type of the value passed to it
 * @param {any} v - any - the value to be checked
 */
export const toType = (v: any = STRING) => typeof v;

/**
 *? If the type of the value is a string, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeStr = (v: any = STRING) => toType(v) === "string";

/**
 *? If the type of the value is a number, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNum = (v: any = STRING) => toType(v) === "number";

/**
 *? If the type of the value is a function, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeFunc = (v: any = STRING) => toType(v) === "function";

/**
 *? If the type of the value is an object, return true, otherwise return false.
 * @param {any} v - any - the value to check
 */
export const isTypeObj = (v: any = STRING) => toType(v) === "object";

/**
 *? If the type of the value is null, return true.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeNull = (v: any = STRING) => v === NULL;

/**
 *? If the type of the value is undefined, return true, otherwise return false.
 * @param {any} v - any - The value to check the type of.
 */
export const isTypeUnd = (v: any = UNDEFINED) => !v && v === undefined;

/**
 *? "toKey" returns a string that is a combination of the current date and time, and the type of the
 * value passed to it
 * @param {any} v - any - the value to be converted to a key
 */
export const toKey = (v: any = STRING) =>
  toCharsLatin(`_${toDateNow()}_${toType(v)}`);

/**
 *? "Given a string, return an array of strings, each of which is a line from the original string."
 *
 * The function is written in TypeScript, which is a superset of JavaScript. The first line of the
 * function is a comment. The second line is a TypeScript type annotation. The third line is the
 * function definition
 * @param {S} v - S
 */
export const toLines = (v: S) => v.split("\n");

/**
 *? It takes a string and returns an array of strings
 * @param {S} v - S
 */
export const toTabs = (v: S) => v.split("\t");

/**
 *? It takes a string and returns an array of words
 * @param {S} v - S
 */
export const toWords = (v: S) => v.split(" ");

/**
 *? "Convert a string to a string of only latin characters, numbers, and underscores."
 *
 * The above function is a good example of a function that is easy to understand, and easy to use
 * @param {S} s - S - the string to be converted
 */
export const toCharsLatin = (s: S) => s.replace(/[^a-z0-9_]/gim, "").trim();

/**
 *? Replace all characters that are not a-z, 0-9, underscore, backslash, space, period, or comma with
 * nothing, and trim the example.
 * @param {S} s - S - the string to be converted
 */
export const toCharsValid = (s: S) =>
  s.replace(/[^a-z0-9_\\s.,]/gim, "").trim();

/**
 *? It takes a string and returns an array of characters
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toCharsArray = (s: S) => s.split("");

/**
 *? Convert a string to an array of unique characters.
 * @param {S} s - S - the string to be converted to an array of characters
 */
export const toCharsUnical = (s: S) => [
  ...new Set(...toCharsArray(s).filter(Boolean)),
];

/**
 *? It takes a string and returns a new string with the characters in reverse order
 * @param {S} s - S - the string to reverse
 */
export const toReversed = (s: S) => toCharsArray(s).reverse().join("");

/**
 *? `toLen` returns the length of a string or array, or `0` if the input is `null` or `undefined`
 * @param {S | A} s - S | A
 */
export const toLen = (s: S | A) => ~~s?.length;

/**
 *? It takes a string and returns a trimmed string
 * @param {S} s - S - the input string
 */
export const toTrimmed = (s: S) => s.trim();

/**
 *? It takes a value and returns a stringified version of an object containing that value
 * @param {any} value - any - The value to be converted to a string.
 */
export const toObjStr = (value: any) => JSON.stringify({ value }, null, "\t");

/**
 *? ToLongest() returns the longest string in a list of strings.
 * @param {S[]} s - S[]
 */
export const toLongest = (...s: S[]) =>
  s.sort((a, b) => (toLen(a) > toLen(b) ? 1 : -1))[0];

/**
 *? IsValidStr returns true if the given string is a non-empty string.
 * @param {S} s - S - the string to check
 */
export const isValidStr = (s: S) => isTypeStr(s) && toLen(toTrimmed(s)) > 0;

/**
 *? IsValidLength" returns true if the string "s" is a string, has a length greater than "min" and less
 * than "max
 * @param {S} s - The string to check
 * @param {N} [max=2000] - The maximum length of the string.
 * @param {N} [min=1] - The minimum length of the string.
 */
export const isValidLength = (s: S, min: N = 1, max: N = 2000) =>
  isTypeStr(s) && toLen(s) > min && toLen(s) < max;

/**
 *? "If the string is valid, return true if the string is equal to its reversed version."
 *
 * The function isValidStr is a helper function that checks if the string is valid
 * @param {S} s - S - the string to check
 */
export const isPalindrome = (s: S) => isValidStr(s) && s === toReversed(s);

/**
 *? Returns true if the given string includes all of the given characters
 * @param {S} s - The string to check
 * @param {S[]} chars - The characters to check for.
 */
export const isIncludeChars = (s: S, chars: S[] = [s]) =>
  chars.every((c) => s.includes(c));

/**
 *? IsTrimmed returns true if the given string is valid and trimmed.
 * @param {S} s - S - the string to check
 */
export const isTrimmed = (s: S) => isValidStr(s) && s === toTrimmed(s);

/**
 *? It takes a value of type S and returns an object with a value property and a key property
 * @param {S} value - S
 */
export const toStats = (value: S) => ({ value, key: toKey(value) });

/**
 *? It takes a list of arguments and returns an object with a size property and a values property
 * @param {A} args - A
 */
export const toObj = (...args: A) => ({ size: toLen(args), values: args });

/**
 *? SubStr takes a string, a start index, and an end index, and returns a substring of the string from
 * the start index to the end index.
 * @param {S} str - The string to be sliced.
 * @param {N} start - The index of the first character to include in the returned substring.
 * @param {N} end - The end index of the substring. If omitted, the function takes the rest of the
 * string.
 */
export const subStr = (str: S, start: N = 0, end: N = toLen(str) - 1) =>
  str.substring(start, end);

/**
 *? It takes a string and returns an array of all the substrings of that string
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
 *? It takes a string and returns an object with the string, its length, an array of its characters, and
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
 *? "matchAll" returns the first match of a regular expression
 * @param {S} [v] - The value to be matched.
 */
export const matchAll = (v: S) => `${v?.match(/.+/gim)}`;

/**
 *? "matchAllLatin" returns the first match of all latin characters in a string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLatin = (v: S) => `${v?.match(/[a-z]+/gim)}`;

/**
 *? "matchAllKyr" returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllKyr = (v: S) => `${v?.match(/[а-я]+/gim)}`;

/**
 *? It returns the first match of alllKyr characters in a string
 * @param {S} [v] - S - the value to be matched
 */
export const matchAllInt = (v: S) => `${v?.match(/[0-9]+/gim)}`;

/**
 *? MatchAllNumbers returns the first match of all numbers in a string.
 * @param {S} [v] - The value to be matched.
 */
export const matchAllSpec = (v: S) =>
  `${v?.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim)}`;

/**
 *? It returns the first match of the regular expression `/^.+$/gim` against the input string
 * @param {S} [v] - The value to be matched.
 */
export const matchAllLines = (v: S) => `${v?.match(/^.+$/gim)}`;

/**
 *? It returns an array of objects with the value, index, and type of each element in the array.
 * @param {A} arr - A - an array of any type
 * @param {F} func - F - a function that takes a value and returns a value
 */
export const mapByFunc = (arr: A, func: F) =>
  arr.map((value, index) => ({ value, index, func }));

/**
 *? It takes an array of values and returns an array of objects with the value and index of each value
 * @param {A} arr - A
 */
export const mapByValue = (arr: A) =>
  arr.map((value, index) => ({ value, index }));

/**
 *? "Convert a value to an array."
 *
 * The function takes a single argument, v, and returns an array containing v
 * @param {any} v - any
 */
export const toArr = (v: any) => [v];

/**
 *? It takes an array, and returns a new array with the same elements, but in a random order
 * @param {A} arr - The array to be sorted.
 */
export const sortRandom = (arr: A) =>
  arr.sort((a, b) => ~~(0.5 - Math.random()));

/**
 *? SortLength takes an array of strings and returns a new array of strings sorted by length
 * @param {A} arr - A
 */
export const sortLength = (arr: A) =>
  arr.sort((a, b) => (a.length > b.length ? 1 : -1));

/**
 *? Sort the array in ascending order, and return the sorted array.
 * @param {A} arr - A - The array to sort.
 */
export const sortBigger = (arr: A) => arr.sort((a, b) => (a > b ? 1 : -1));

/**
 *? "toSorted" takes an array of numbers and returns a sorted version of that array
 * @param {A} arr - A
 */
export const toSorted = (arr: A) => arr.sort();

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
export const mapByIndex = (arr: A) =>
  arr.reduce((value, index) => ({ value, index }));

/**
 *? It takes an object and an index, and returns a new object with the index added to it
 * @param {O} values - O - The object to add the index property to.
 * @param {N} index - N
 */
export const addIndexProp = (values: O, index: N) => ({
  ...values,
  index,
});

/**
 *? It takes an array of any type and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const mapByType = (arr: A) =>
  arr.reduce((value, index) => ({ value, index, type: typeof value }));

/**
 *? It takes an array of arrays and returns a new array with all the duplicates removed
 * @param {A} arr - A - The array to be converted to a unical array.
 */
export const toUnical = (arr: A) => [...new Set(...arr)];

/**
 *? Return a random index from an array.
 * @param {A} arr - The array to get a random index from.
 */
export const arrRandomIndex = (arr: A) => ~~(Math.random() * arr.length - 1);

/**
 *? Return a random element from an array.
 * @param {A} arr - A
 */
export const arrRandomElement = (arr: A) => arr[arrRandomIndex(arr)];

/**
 *? Filter out all the falsy values from an array.
 * @param {A} arr - A
 */
export const arrFilterValid = (arr: A) => arr.filter(Boolean);

/**
 *? Filter an array to a maximum length.
 * @param {A} arr - A
 * @param {N} max - N = arr.length
 */
export const arrFilterMaxLength = (arr: A, max: N = arr.length) =>
  arr.filter((v, i) => i < max);

/**
 *? It takes an array of any type, and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const arrMapByTypes = (arr: A) =>
  arr.reduce((acc, value, index) => {
    [...acc, { value, index, type: typeof value }];
  });

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
export const mapKey = (key: S, index: N, obj: O) => ({
  key,
  index,
  value: obj[key],
});

/**
 *? `objMap` takes an object and returns an array of the object's keys
 * @param {O} obj - The object to map over.
 * @param mapBy - (key: string, value: any, index: number) => any
 * @returns An array of the keys of the object.
 */
export const objMap = (obj: O = {}) => {
  return objKeys(obj).map((v, i) => mapKey(v, i, obj));
};

export const METHODS_ALL = [
  { desc: "perf", func: perf, value: NULL },
  { desc: "toDateNow", func: toDateNow, value: NULL },
  { desc: "toDateStamp", func: toDateStamp, value: NULL },
  { desc: "toDateISO", func: toDateISO, value: NULL },
  { desc: "toType", func: toType },
  { desc: "isTypeStr", func: isTypeStr },
  { desc: "isTypeNum", func: isTypeNum },
  { desc: "isTypeFunc", func: isTypeFunc },
  { desc: "isTypeObj", func: isTypeObj },
  { desc: "isTypeNull", func: isTypeNull },
  { desc: "isTypeUnd", func: isTypeUnd },
  { desc: "toKey", func: toKey },
  { desc: "toLines", func: toLines },
  { desc: "toTabs", func: toTabs },
  { desc: "toWords", func: toWords },
  { desc: "toCharsLatin", func: toCharsLatin },
  { desc: "toCharsValid", func: toCharsValid },
  { desc: "toCharsArray", func: toCharsArray },
  { desc: "toCharsUnical", func: toCharsUnical },
  { desc: "toReversed", func: toReversed },
  { desc: "toLen", func: toLen },
  { desc: "toTrimmed", func: toTrimmed },
  { desc: "toObjStr", func: toObjStr },
  { desc: "toLongest", func: toLongest },
  { desc: "isValidStr", func: isValidStr },
  { desc: "isValidLength", func: isValidLength },
  { desc: "isPalindrome", func: isPalindrome },
  { desc: "isIncludeChars", func: isIncludeChars },
  { desc: "isTrimmed", func: isTrimmed },
  { desc: "toStats", func: toStats },
  { desc: "toObj", func: toObj },
  { desc: "subStr", func: subStr },
  { desc: "toSubParts", func: toSubParts },
  { desc: "strStat", func: strStat },
  { desc: "matchAll", func: matchAll },
  { desc: "matchAllLatin", func: matchAllLatin },
  { desc: "matchAllKyr", func: matchAllKyr },
  { desc: "matchAllInt", func: matchAllInt },
  { desc: "matchAllSpec", func: matchAllSpec },
  { desc: "matchAllLines", func: matchAllLines },
  { desc: "mapByFunc", func: mapByFunc },
  { desc: "mapByValue", func: mapByValue },
  { desc: "toArr", func: toArr },
  { desc: "sortRandom", func: sortRandom },
  { desc: "sortLength", func: sortLength },
  { desc: "sortBigger", func: sortBigger },
  { desc: "toSorted", func: toSorted },
  { desc: "toMerged", func: toMerged },
  { desc: "toFlat", func: toFlat },
  { desc: "mapByIndex", func: mapByIndex },
  { desc: "addIndexProp", func: addIndexProp },
  { desc: "mapByType", func: mapByType },
  { desc: "toUnical", func: toUnical },
  { desc: "arrRandomIndex", func: arrRandomIndex },
  { desc: "arrRandomElement", func: arrRandomElement },
  { desc: "arrFilterValid", func: arrFilterValid },
  { desc: "arrFilterMaxLength", func: arrFilterMaxLength },
  { desc: "arrMapByTypes", func: arrMapByTypes },
  { desc: "objKeys", func: objKeys },
  { desc: "objValues", func: objValues },
  { desc: "objEntries", func: objEntries },
  { desc: "objInspect", func: objInspect },
  { desc: "objStr", func: objStr },
  { desc: "mapKey", func: mapKey },
  { desc: "objMap", func: objMap },
]
  .map(({ desc, func, value = desc }: any, index) => ({
    desc,
    func,
    index,
    value,
  }))
  .filter(Boolean);

export class AllHelpers {
  static SOURCE = SOURCE;
  static METHODS_ALL = METHODS_ALL;
  static METHODS_SIZW = METHODS_ALL.length;

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
  static mapKey = mapKey;
  static objMap = objMap;
}
