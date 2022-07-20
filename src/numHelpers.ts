import { A, N, S } from "../global";
import { Constants } from "./constants";
import { TypeHelpers } from "./typeHelpers";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `NumberHelpers`;

const { len } = TypeHelpers;
const { RegExp, Paths, Numbers, ValueTypes } = Constants;

export const {
  ALL,
  LINE,
  CHARS_ONLY,
  NUMBERS_ONLY,
  CHARS_AND_NUMBERS,
  NOT_CHARS_AND_NUMBERS,
} = RegExp;
export const {
  DIR_ROOT,
  FILE,
  DIR,
  DIR_CURRENT,
  DIR_PREV,
  DIRNAME_SRC,
  DIRNAME_TESTS,
  DIRNAME_LOGS,
  PATHS_ROOT,
  PATHS_CURRENT,
  PATHS_SRC,
  PATHS_TESTS,
} = Paths;
export const {
  MIN,
  MAX,
  MAX_VALUE,
  MIN_VALUE,
  MAX_SAFE_VALUE,
  MIN_SAFE_VALUE,
  _RANDOM,
  RANDOM_BOOLEAN,
  RANDOM_MULT,
  RANDOM_SIZE,
  RANDOM_INT,
  RANGE_RANDOM,
  RANGE_VALUES,
  RANGE_SAFE,
  NUMS,
} = Numbers;
export const {
  UNDEFINED,
  NULL,
  BOOLEAN,
  STRING,
  NUMBER,
  ARRAY,
  OBJECT,
  FUNCTION,
  PRIMITIVES,
} = ValueTypes;

const STR = SOURCE.name;
const TYPE = typeof STR;
const OBJ = { ...SOURCE, index: 0, value: STR };
const ARR = Array(RANDOM_SIZE)
  .fill(MAX)
  .map((v) => ~~(v * _RANDOM));

export const random = Math.random;
export const _floor = Math.floor;
export const _ceil = Math.ceil;
export const _round = Math.round;
export const _abs = Math.abs;
export const _sign = Math.sign;
export const _min = Math.min;
export const _max = Math.max;
export const randomInt = (max: N = MAX, min: N = MIN) =>
  ~~(random() * (max - min)) + min;
export const randomDate = () => randomInt(Date.now(), 0);
export const randomDateStamp = () => new Date(randomDate()).toUTCString();
export const randomString = (pref: S = "key") => `_${pref}_${randomDate()}`;
export const randomID = () => `${parseInt(`${randomDate()}`, 36)}`;
export const randomIndex = (arr: A = ARR) => {
  const l = len(arr);
  if (l < 1) return 0;
  if (l < 3) return randomChoose() ? 1 : 0;
  else return randomInt(l - 1, 0);
};
export const randomElement = (arr: A = ARR) => arr[randomIndex(arr)];
export const randomSort = () => (randomBool() ? 1 : -1);
export const randomChoose = (v1: any = true, v2: any = null) =>
  randomBool() ? v1 : v2;
export const randomBool = () => random() > 0.5;
export const randomMany = (size: N = RANDOM_SIZE, nums: N[] = RANGE_RANDOM) =>
  Array(size)
    .fill(random())
    .map((v) => ~~(v * randomInt(_max(...nums), _min(...nums))));
export const randomArr = (size: N = RANDOM_SIZE, max: N = MAX, min: N = MIN) =>
  Array(size)
    .fill(random())
    .map((v) => ~~(v * randomInt(max, min)));
