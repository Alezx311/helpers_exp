import { ArrayHelpers } from "./arrayHelpers";
import { ObjectHelpers } from "./objHelpers";
import { StringHelpers } from "./stringHelpers";
import { LogHelpers } from "./logHelpers";

const METHODS_ALL = [
  ...ArrayHelpers.METHODS_ALL,
  ...ObjectHelpers.METHODS_ALL,
  ...StringHelpers.METHODS_ALL,
  ...LogHelpers.METHODS_ALL,
];

export class Helpers {
  static METHODS_ALL = METHODS_ALL;
  static METHODS_RESULTS = METHODS_ALL.map((obj: any, index: number) => ({
    ...obj,
    index,
    result: obj?.func(obj?.value),
  }));

  static Array = ArrayHelpers;
  static Object = ObjectHelpers;
  static String = StringHelpers;
  static Log = LogHelpers;
}
