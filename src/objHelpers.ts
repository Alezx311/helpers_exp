import { inspect } from "util";
import { N, O, S } from "../global";
import { Constants } from "../src/constants";

const { OBJECT } = Constants;

/**
 * "Return an array of the keys of an object, but only if they are truthy."
 *
 * The function is a little more complicated than that, but that's the gist of it
 * @param {O} obj - O - the object to get the keys from
 */
export const objKeys = (obj: O = {}) => Object.keys(obj).filter(Boolean);

/**
 * "Return an array of the values of an object, filtering out any falsy values."
 *
 * The function takes an object as an argument and returns an array of the values of that object. The
 * values are filtered to remove any falsy values
 * @param {O} obj - O - the object to get the values from
 */
export const objValues = (obj: O = {}) => Object.values(obj).filter(Boolean);

/**
 * It takes an object and returns an array of its key-value pairs
 * @param {O} obj - O - The object to get the entries from.
 */
export const objEntries = (obj: O = {}) => Object.entries(obj).filter(Boolean);

/**
 * It returns a string representation of the object, with a maximum depth of 10, and without colors
 * @param {O} obj - The object to inspect.
 */
export const objInspect = (obj: O = {}) => inspect(obj, true, 10, false);

/**
 * It takes an object and returns a string representation of that object
 * @param {O} obj - The object to be stringified
 */
export const objStr = (obj: O = {}) => JSON.stringify(obj, null, "\t");

/**
 * It takes a key, an index, and an object, and returns an object with the key, index, and value of the
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
 * `objMap` takes an object and returns an array of the object's keys
 * @param {O} obj - The object to map over.
 * @param mapBy - (key: string, value: any, index: number) => any
 * @returns An array of the keys of the object.
 */
export const objMap = (obj: O = {}) => {
  return objKeys(obj).map((v, i) => mapKey(v, i, obj));
};

export const METHODS_ALL = [
  { desc: "objKeys", func: objKeys, value: OBJECT },
  { desc: "objValues", func: objValues, value: OBJECT },
  { desc: "objEntries", func: objEntries, value: OBJECT },
  { desc: "objInspect", func: objInspect, value: OBJECT },
  { desc: "objStr", func: objStr, value: OBJECT },
  { desc: "mapKey", func: mapKey, value: OBJECT },
  { desc: "objMap", func: objMap, value: OBJECT },
];

export class ObjectHelpers {
  static METHODS_ALL = METHODS_ALL;
  static METHODS_SIZE = METHODS_ALL.length;
  static objKeys = objKeys;
  static objValues = objValues;
  static objEntries = objEntries;
  static objInspect = objInspect;
  static objStr = objStr;
  static mapKey = mapKey;
  static objMap = objMap;
}
