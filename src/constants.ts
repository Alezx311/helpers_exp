import { A, N, S } from "../global";

export const getSource = (name: S = __filename) => {
  const values = {
    name,
    filename: __filename,
    dirname: __dirname,
    date: Date.now(),
    datestamp: new Date(Date.now()).toUTCString(),
  };
  const key = `${Date.now()}_${values.filename}`;
  const desc = `
\t Created at: ${values.datestamp}
\t Filepath: ${values.filename}
\t Key: ${key}
\t Module Name: ${values.name}
`;
  return { ...values, key, desc };
};

export const SOURCE = getSource(__filename);
SOURCE.name = `Constants`;

/**
 * If time is truthy, return the current time, otherwise return the current time minus the time passed
 * in.
 * @param {N} time - N
 */
export const getPerformance = (time: N = 0) => performance.now() - ~~time;

/**
 * It takes an object with four properties, and returns an object with four properties
 * @param  - `desc` is the description of the example.
 * @param {N} index - The index of the current item in the array.
 */

export const EX = { desc: SOURCE.desc, func: () => true, result: true };
export const mapExamples = (arr: any[]) =>
  arr.map(({ desc, func, result }, index) => {
    if (!!desc && !!func) {
      return {
        index,
        desc,
        func,
        result,
        values: [desc, result, index],
      };
    } else {
      return {
        index,
        desc: "Falsy",
        func: () => false,
        result: false,
        values: [{ desc, result, index, func }],
      };
    }
  });

/**
 * It returns an object with the source of the value and the type and size of the value
 * @param {S} value - The value to get stats for.
 */
export const getStats = (value: S) => ({
  ...getSource(value),
  type: typeof value,
  size: value?.length ?? null,
});

/**
 * It takes an object with the properties index, desc, value, result, and time, and returns a string
 * with the properties formatted in a certain way
 * @param {any}  - index - the index of the test case
 */
export const logReport = ({
  index = 0,
  desc = SOURCE.name,
  value = SOURCE.filename,
  result = true,
  time = getPerformance(),
}: any) => `
\t${~~index}: ${desc}
Index: ${index}
Description: ${desc}
Value: ${value}
Result: ${result}
Time: ${time}
`;

export const EXAMPLES = mapExamples([
  { desc: "getStats", func: getStats, result: getStats(SOURCE.name) },
  { desc: "getSource", func: getSource, result: SOURCE },
  { desc: "getPerformance", func: getPerformance, result: getPerformance() },
  { desc: "logReport", func: logReport, result: logReport(SOURCE) },
]);

export class Constants {
  static SOURCE = SOURCE;

  static mapExamples = mapExamples;
  static getStats = getStats;
  static getSource = getSource;
  static getPerformance = getPerformance;
  static logReport = logReport;

  static NAME: S = this.SOURCE.name;
  static FILENAME: S = this.SOURCE.filename;
  static DATE: N = this.SOURCE.date;
  static DATESTAMP: S = this.SOURCE.datestamp;
  static KEY: S = this.SOURCE.key;
  static DESC: S = this.SOURCE.desc;

  static UNDEFINED = undefined;
  static NULL = null;
  static BOOLEAN = true;
  static STRING = "Message";
  static NUMBER = 42;
  static ARRAY = [1, 311, 42, true];
  static OBJECT = { num: 42, value: 311 };
  static FUNCTION = () => {};
  static PRIMITIVES = [
    { desc: "UNDEFINED", value: this.UNDEFINED },
    { desc: "NULL", value: this.NULL },
    { desc: "BOOLEAN", value: this.BOOLEAN },
    { desc: "STRING", value: this.STRING },
    { desc: "NUMBER", value: this.NUMBER },
    { desc: "ARRAY", value: this.ARRAY },
    { desc: "OBJECT", value: this.OBJECT },
    { desc: "FUNCTION", value: this.FUNCTION },
  ];

  static PALINDROME = "abacaba";
  static KEYS: A<{ desc: S; index: N }> = Object.keys(this)
    .filter(Boolean)
    .map((desc: S, index: N) => ({ desc, index }));

  static EXAMPLES = EXAMPLES;
}
