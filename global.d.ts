export type F = () => {} | { (): {} };
export type TestData<T1, T2> = {
  description: string;
  func: F | any;
  values: A<{ input: T1; expected: T2; desc?: S }>;
};
export type S = string;
export type N = number;
export type A<T = any> = Array<T>;
export type O = Record<S, unknown>;
export enum MESSAGES {
  DESCRIPTION = "Description",
  EMPTY = "",
  ARGUMENTS_ARRAY = "Arguments Array",
  FILENAME = "Filename",
  DIRNAME = "Directory",
  STRING = "String",
  MESSAGE = "Message",
  VALUE = "Value",
  TYPE = "Type",
  KEY = "Key",
  STATS = "Stats",
  TIME = "Time",
  LENGTH = "Length",
  CHARS = "Chars",
  INDEX = "Index",
  UNKNOWN = "Unknown",
  GENERATED = "Generated",
  EXAMPLE = "Example",
}

const DESC = MESSAGES.FILENAME;
const VALUE = __filename;
const TIME = new Date().toUTCString();
const MESSAGE = `${DESC} | ${VALUE} | ${TIME}`;
