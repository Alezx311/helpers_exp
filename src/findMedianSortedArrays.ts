export function findMedianSortedArrays(arr1: number[], arr2: number[]): number {
  const merged = [...arr1, ...arr2].sort((a, b) => (a > b ? 1 : -1));
  const len = merged.length;
  const ind = ~~(len / 2);

  if (len % 2 !== 0) {
    return merged[ind];
  } else {
    return (merged[ind] + merged[ind - 1]) / 2;
  }
}
