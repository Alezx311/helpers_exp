import { Constants } from "./constants";
import { ArrayHelpers } from "./arrayHelpers";
import { FsHelpers } from "./fsHelpers";
import { FuncHelpers } from "./func";
import { LogHelpers } from "./logHelpers";
import { NumHelpers } from "./numHelpers";
import { ObjectHelpers } from "./objHelpers";
import { PathHelpers } from "./pathHelpers";
import { StringHelpers } from "./stringHelpers";
import { TypeHelpers } from "./typeHelpers";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `HelpersMain`;

export const EXAMPLES = Constants.mapExamples([
  ...Constants.EXAMPLES,
  ...FuncHelpers.EXAMPLES,
  ...ArrayHelpers.EXAMPLES,
  ...FsHelpers.EXAMPLES,
  ...LogHelpers.EXAMPLES,
  ...NumHelpers.EXAMPLES,
  ...ObjectHelpers.EXAMPLES,
  ...PathHelpers.EXAMPLES,
  ...StringHelpers.EXAMPLES,
  ...TypeHelpers.EXAMPLES,
]);

export class Helpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;
  static Constants = Constants;

  static ArrayHelpers = ArrayHelpers;
  static FsHelpers = FsHelpers;
  static LogHelpers = LogHelpers;
  static NumHelpers = NumHelpers;
  static ObjectHelpers = ObjectHelpers;
  static PathHelpers = PathHelpers;
  static StringHelpers = StringHelpers;
  static TypeHelpers = TypeHelpers;
  static FuncHelpers = FuncHelpers;
}
