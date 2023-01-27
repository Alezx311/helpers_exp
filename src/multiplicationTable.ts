// Your task, is to create NxN multiplication table,
// of size provided in parameter.
// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

const getSequence = (size, start = 1) => Array(size).fill(start).map((v, i) => v * (i + 1))
const getTable = (size) => Array(size).fill(1).map((v, i) => getSequence(size, v * (i + 1)))

console.log(getTable(1));
console.log(getTable(2));
console.log(getTable(3));
console.log(getTable(4));
console.log(getTable(5));
