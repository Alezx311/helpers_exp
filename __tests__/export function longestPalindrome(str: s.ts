const getLen = (str: string) => ~~str.length;
const isPalindrome = (s: string) =>
  !!getLen(s) && s === s.split("").reverse().join("");
const getLongest = (s1: string, s2: string) =>
  getLen(s1) > getLen(s2) ? s1 : s2;

export function longestPalindrome(str: string) {
  const subStr = (i1: number, i2: number) => str.substring(i1, i2);
  const palindromes = [];
  const len = getLen(str);

  if (isPalindrome(str)) {
    return str;
  }

  for (let start = 0; start < len; start++) {
    for (let end = start + 1; start < len; start++) {
      palindromes.push(subStr(start, end));
    }
  }

  const result = palindromes.filter(isPalindrome).reduce(getLongest);

  return result;
}

console.log(longestPalindrome("babad"));
