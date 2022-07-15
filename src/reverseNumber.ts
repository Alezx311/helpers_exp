/**
 * It takes a number, reverses it, and returns the reversed number
 * @param {number} num - number - the number to reverse
 * @returns {number}
 */

export function reverseNumber(num: number) {
  const sign = Math.sign(num);
  const chars = `${num}`
    .split("")
    .reverse()
    .join("")
    .replace(/[^0-9]/gim, "");
  return ~~chars * sign;
}
