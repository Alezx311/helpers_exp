/**
 * It returns an object with two properties, filename and time
 */
export const getStats = () => ({
  filename: __filename,
  time: new Date().toUTCString(),
});

const { log, info, dir, debug, table, error, warn, trace, group } = console;

export const METHODS_ALL = [
  { desc: "log", func: log },
  { desc: "info", func: info },
  { desc: "dir", func: dir },
  { desc: "debug", func: debug },
  { desc: "table", func: table },
  { desc: "error", func: error },
  { desc: "warn", func: warn },
  { desc: "trace", func: trace },
  { desc: "group", func: group },
];

/**
 * It takes a string as an argument, and then calls the `getStats` function to get the stats object,
 * and then it loops through the `METHODS_ALL` array, and calls each function in the array, passing in
 * the stats object and the string argument
 * @param {string} value - string - This is the value that will be logged.
 */
export const all = (value: string) => {
  const stats = getStats();
  METHODS_ALL.map(({ desc, func }, index) => {
    func({ message: `${index}: Example of ${desc} log`, stats, value });
  });
};