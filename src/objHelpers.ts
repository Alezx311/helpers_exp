import { inspect } from "util";
import { A, N, O, S } from "../global";
import { Constants } from "../src/constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `ObjectHelpers`;

export const { STRING, OBJECT, ARRAY } = Constants.ValueTypes;
export const STR = `${STRING}`;
export const OBJ = { ...OBJECT };
export const ARR = [...ARRAY];

export const objK = (obj: O = OBJ) => Object.keys(obj);
export const objV = (obj: O = OBJ) => Object.values(obj);
export const objE = (obj: O = OBJ) => Object.entries(obj);
export const objF = (obj: O = OBJ) =>
  Object.fromEntries([[SOURCE.name, __filename]]);
export const objInspect = (obj: O = OBJ) => inspect(obj, true, 10, false);
export const objToStr = (obj: O = OBJ) => JSON.stringify(obj, null, "\t");
export const objToStrPlain = (obj: O = OBJ) => JSON.stringify(obj);
export const mapKey = (obj: O = OBJ) =>
  objK(obj).map((key: any, index: N, obj: any) => ({
    key,
    index,
    value: obj[key],
  }));

export const EXAMPLES = Constants.mapExamples([
  { desc: "objK", func: objK, result: objK(OBJECT) },
  { desc: "objV", func: objV, result: objV(OBJECT) },
  { desc: "objE", func: objE, result: objE(OBJECT) },
  { desc: "objF", func: objF, result: objF(OBJECT) },
  { desc: "objInspect", func: objInspect, result: objInspect(OBJECT) },
  { desc: "objToStr", func: objToStr, result: objToStr(OBJECT) },
  { desc: "objToStrPlain", func: objToStrPlain, result: objToStrPlain(OBJECT) },
  { desc: "mapKey", func: mapKey, result: mapKey(OBJECT) },
]);

export class ObjectHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;
  static TEST_VALUES = { SOURCE, ARR, STR, OBJ };

  static objK = objK;
  static objV = objV;
  static objE = objE;
  static objF = objF;
  static objInspect = objInspect;
  static objToStr = objToStr;
  static objToStrPlain = objToStrPlain;
  static mapKey = mapKey;
}
