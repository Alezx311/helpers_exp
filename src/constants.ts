import { A, N, S } from "../global";

/**
 * If time is truthy, return the current time, otherwise return the current time minus the time passed
 * in.
 * @param {N} time - N
 */
export const getPerformance = (time: N = 0) => performance.now() - ~~time;

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
 * It returns an object with the following properties:
 *   - name
 *   - filename
 *   - dirname
 *   - date
 *   - datestamp
 *   - key
 *   - desc
 *
 * @param {S} name - The name of the module.
 * @returns An object with the following properties:
 *   - name
 *   - filename
 *   - dirname
 *   - date
 *   - datestamp
 *   - key
 *   - desc
 */
const getSource = (name: S = __filename) => {
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

/**
 * It takes an object with the properties index, desc, value, result, and time, and returns a string
 * with the properties formatted in a certain way
 * @param {any}  - index - the index of the test case
 */
export const logReport = ({ index, desc, value, result, time }: any) => `
\t${~~index}: ${desc}
Index: ${index}
Description: ${desc}
Value: ${value}
Result: ${result}
Time: ${time}
`;

export class Constants {
  static getStats = getStats;
  static getSource = getSource;
  static getPerformance = getPerformance;
  static logReport = logReport;

  static SOURCE = this.getSource("Constants");
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
  static ARRAY = [42, 311];
  static OBJECT = this.SOURCE;
  static FUNCTION = (v: any = true) => true;

  static PALINDROME = "abacaba";

  static KEYS: A<{ desc: S; index: N }> = Object.keys(this)
    .filter(Boolean)
    .map((desc: S, index: N) => ({
      desc,
      index,
    }));
}
