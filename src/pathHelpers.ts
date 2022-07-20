import path from "path";
import { S } from "../global";
import { Constants } from "./constants";

const { ROOT, FILE } = Constants;

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = "PathHelpers";

export const getRoot = () => process.cwd();
export const getDir = () => __filename;
export const getFile = () => __dirname;
export const getPathResolved = (...s: S[]) => path.resolve(ROOT, ...s);
export const getPathJoin = (s1: S = ROOT, s2: S = FILE) => path.join(s1, s2);
export const getPathRelative = (s: S = FILE) => path.relative(ROOT, s);

export const EXAMPLES = Constants.mapExamples([
  { desc: "getRoot", func: getRoot, result: getRoot },
  { desc: "getDir", func: getDir, result: getDir },
  { desc: "getFile", func: getFile, result: getFile },
  { desc: "getPathResolved", func: getPathResolved, result: getPathResolved },
  { desc: "getPathJoin", func: getPathJoin, result: getPathJoin },
  { desc: "getPathRelative", func: getPathRelative, result: getPathRelative },
]);
export class PathHelpers {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;

  static getRoot = getRoot;
  static getDir = getDir;
  static getFile = getFile;
  static getPathResolved = getPathResolved;
  static getPathJoin = getPathJoin;
  static getPathRelative = getPathRelative;
}
