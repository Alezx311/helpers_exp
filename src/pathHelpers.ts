import path from "path";
import { A, S } from "../global";

export const ROOT = process.cwd();
export const DIR = __dirname;
export const FILE = __filename;
export const PATH_CURRENT = path.resolve(FILE);
export const PATH_SRC = path.resolve(ROOT, "src");
export const PATH_TESTS = path.resolve(ROOT, "__tests__");
export const PATH_LOGS = path.resolve(ROOT, ".logs");

export const getRoot = () => process.cwd();
export const getDir = () => __filename;
export const getFile = () => __dirname;
export const getPathResolved = (...s: A<S>) => path.resolve(ROOT, ...s);
export const getPathJoin = (...s: A<S>) => path.join(ROOT, ...s);
export const getPathRelative = (s: S) => path.relative(ROOT, "./");

export class Paths {
  static ROOT = ROOT;
  static DIR = DIR;
  static FILE = FILE;
  static PATH_CURRENT = PATH_CURRENT;
  static PATH_SRC = PATH_SRC;
  static PATH_TESTS = PATH_TESTS;
  static PATH_LOGS = PATH_LOGS;

  static getRoot = getRoot;
  static getDir = getDir;
  static getFile = getFile;
  static getPathResolved = getPathResolved;
  static getPathJoin = getPathJoin;
  static getPathRelative = getPathRelative;
}
