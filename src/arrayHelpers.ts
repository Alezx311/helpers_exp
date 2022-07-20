import { A, N, S } from "../global";
import { Constants } from "../src/constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `ArrayHelpers`;

export const { STRING, OBJECT, ARRAY, DESC } = Constants;
export const STR = `${STRING}`;
export const OBJ = { ...OBJECT };
export const ARR = [...ARRAY];

/**
 * It returns an array of objects with the value, index, and type of each element in the array.
 * @param {A} arr - A - an array of any type
 * @param {F} func - F - a function that takes a value and returns a value
 */
export const mapByFunc = (arr: A, func: () => any) =>
  arr.map((value, index) => ({ value, index, func }));

/**
 * It takes an array of values and returns an array of objects with the value and index of each value
 * @param {A} arr - A
 */
export const mapByValue = (arr: A) =>
  arr.map((value, index) => ({ value, index }));

/**
 * "Convert a value to an array."
 *
 * The function takes a single argument, v, and returns an array containing v
 * @param {any} v - any
 */
export const toArr = (v: any) => [v];

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
  arr.sort((a: any[] | S, b: any[] | S) => (a.length > b.length ? 1 : -1));

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
  arr.reduce((value, index) => ({ value, index, type: typeof value }));

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
  arr.length <= 1 ? 0 : ~~(Math.random() * arr.length - 1);

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
export const arrFilterMaxLength = (arr: any[] = [], max: N = arr.length - 1) =>
  arr.filter((v, i) => i < max);

/**
 *? It takes an array of any type, and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const arrMapByTypes = (arr: any[] = []) =>
  arr.map((value, index) => ({ value, index, type: typeof value }));

export const EXAMPLES = Constants.mapExamples([
  {
    desc: "mapByFunc",
    func: mapByFunc,
    result: mapByFunc(ARR, (v?: any) => v),
  },
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
]);
export class ArrayHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;
  static TEST_VALUES = { SOURCE, DESC, ARR, STR, OBJ };

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
  static arrRandomElement = arrRandomElement;
  static arrFilterValid = arrFilterValid;
  static arrFilterMaxLength = arrFilterMaxLength;
  static arrMapByTypes = arrMapByTypes;
}
