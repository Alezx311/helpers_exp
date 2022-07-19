export function longestPalindrome(str: string) {
  let longest = "";

  const logs = [{ longest, str }];

  const subStr = (s: string, i1: number, i2: number) => s.substring(i1, i2);
  const isPalindrome = (s: string) => s.split("").reverse().join("") === str;
  const isLongest = (s: string) => {
    if (isPalindrome(s) && s.length > longest.length) {
      longest = s;
    }
  };

  if (isPalindrome(str)) {
    return str;
  }

  for (let start = 0; start < str.length; start++) {
    for (let end = start + 1; start < str.length; start++) {
      const current = subStr(str, start, end);
      isLongest(current);
      logs.push({ current, longest });
    }
  }

  return longest;
}

longestPalindrome("babad");
