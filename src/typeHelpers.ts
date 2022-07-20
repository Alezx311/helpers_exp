import { ArrayHelpers } from "./arrayHelpers";
import { ObjectHelpers } from "./objHelpers";
import { StringHelpers } from "./stringHelpers";
import { LogHelpers } from "./logHelpers";
import { Constants } from "./constants";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `TypeHelpers`;

export const EXAMPLES = Constants.mapExamples([
  ...ArrayHelpers.EXAMPLES,
  ...ObjectHelpers.EXAMPLES,
  ...StringHelpers.EXAMPLES,
  ...LogHelpers.EXAMPLES,
]);

export class TypeHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;

  static Array = ArrayHelpers;
  static Object = ObjectHelpers;
  static String = StringHelpers;
  static Log = LogHelpers;
}
