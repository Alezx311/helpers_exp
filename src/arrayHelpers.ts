import { inspect } from "util";
import { N, O, S, A, F } from "../global";
import { Constants } from "../src/constants";

const { ARRAY } = Constants;
const SOURCE = Constants.getSource();

/**
 * It returns an array of objects with the value, index, and type of each element in the array.
 * @param {A} arr - A - an array of any type
 * @param {F} func - F - a function that takes a value and returns a value
 */
export const mapByFunc = (arr: A, func: F) =>
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
 * It takes an array, and returns a new array with the same elements, but in a random order
 * @param {A} arr - The array to be sorted.
 */
export const sortRandom = (arr: A) =>
  arr.sort((a, b) => ~~(0.5 - Math.random()));

/**
 * SortLength takes an array of strings and returns a new array of strings sorted by length
 * @param {A} arr - A
 */
export const sortLength = (arr: A) =>
  arr.sort((a, b) => (a.length > b.length ? 1 : -1));

/**
 * Sort the array in ascending order, and return the sorted array.
 * @param {A} arr - A - The array to sort.
 */
export const sortBigger = (arr: A) => arr.sort((a, b) => (a > b ? 1 : -1));

/**
 * "toSorted" takes an array of numbers and returns a sorted version of that array
 * @param {A} arr - A
 */
export const toSorted = (arr: A) => arr.sort();

/**
 * It takes an array of arrays and returns a single array with all the elements of the original arrays
 * @param {A[]} arrs - A[]
 */
export const toMerged = (...arrs: A[]) =>
  arrs.reduce((acc, v) => [...acc, ...v], []);

/**
 * It takes an array of arrays and returns a single array with all the elements of the original arrays
 * @param {A[]} arrs - A[]
 */
export const toFlat = (...arrs: A[]) => [...arrs].flat(Infinity);

/**
 * It takes an array and returns an array of objects with the value and index of each item in the
 * original array
 * @param {A} arr - A
 */
export const mapByIndex = (arr: A) =>
  arr.reduce((value, index) => ({ value, index }));

/**
 * It takes an object and an index, and returns a new object with the index added to it
 * @param {O} values - O - The object to add the index property to.
 * @param {N} index - N
 */
export const addIndexProp = (values: O, index: N) => ({
  ...values,
  index,
});

/**
 * It takes an array of any type and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const mapByType = (arr: A) =>
  arr.reduce((value, index) => ({ value, index, type: typeof value }));

/**
 * It takes an array of arrays and returns a new array with all the duplicates removed
 * @param {A} arr - A - The array to be converted to a unical array.
 */
export const toUnical = (arr: A) => [...new Set(...arr)];

/**
 * "toLen" takes an array and returns its length
 * @param {A} arr - A
 */
export const toLen = (arr: A) => arr.length;

/**
 * Return a random index from an array.
 * @param {A} arr - The array to get a random index from.
 */
export const arrRandomIndex = (arr: A) => ~~(Math.random() * arr.length - 1);

/**
 * Return a random element from an array.
 * @param {A} arr - A
 */
export const arrRandomElement = (arr: A) => arr[arrRandomIndex(arr)];

/**
 * Filter out all the falsy values from an array.
 * @param {A} arr - A
 */
export const arrFilterValid = (arr: A) => arr.filter(Boolean);

/**
 * Filter an array to a maximum length.
 * @param {A} arr - A
 * @param {N} max - N = arr.length
 */
export const arrFilterMaxLength = (arr: A, max: N = arr.length) =>
  arr.filter((v, i) => i < max);

/**
 * It takes an array of any type, and returns an array of objects with the value, index, and type of
 * each item in the array
 * @param {A} arr - A
 */
export const arrMapByTypes = (arr: A) =>
  arr.reduce((acc, value, index) => {
    [...acc, { value, index, type: typeof value }];
  });

export const METHODS_ALL = [
  { desc: "mapByFunc", func: mapByFunc, value: SOURCE },
  { desc: "mapByValue", func: mapByValue, value: SOURCE },
  { desc: "toArr", func: toArr, value: SOURCE },
  { desc: "sortRandom", func: sortRandom, value: SOURCE },
  { desc: "sortLength", func: sortLength, value: SOURCE },
  { desc: "sortBigger", func: sortBigger, value: SOURCE },
  { desc: "toSorted", func: toSorted, value: SOURCE },
  { desc: "toMerged", func: toMerged, value: SOURCE },
  { desc: "toFlat", func: toFlat, value: SOURCE },
  { desc: "mapByIndex", func: mapByIndex, value: SOURCE },
  { desc: "addIndexProp", func: addIndexProp, value: SOURCE },
  { desc: "mapByType", func: mapByType, value: SOURCE },
  { desc: "toUnical", func: toUnical, value: SOURCE },
  { desc: "toLen", func: toLen, value: SOURCE },
  { desc: "arrRandomIndex", func: arrRandomIndex, value: SOURCE },
  { desc: "arrRandomElement", func: arrRandomElement, value: SOURCE },
  { desc: "arrFilterValid", func: arrFilterValid, value: SOURCE },
  { desc: "arrFilterMaxLength", func: arrFilterMaxLength, value: SOURCE },
  { desc: "arrMapByTypes", func: arrMapByTypes, value: SOURCE },
].map(addIndexProp);

export class ArrayHelpers {
  static METHODS_ALL = METHODS_ALL;
  static METHODS_SIZE = METHODS_ALL.length;

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
  static mapByType = mapByType;
  static toUnical = toUnical;
  static toLen = toLen;
  static arrRandomIndex = arrRandomIndex;
  static arrRandomElement = arrRandomElement;
  static arrFilterValid = arrFilterValid;
  static arrFilterMaxLength = arrFilterMaxLength;
  static arrMapByTypes = arrMapByTypes;
}
