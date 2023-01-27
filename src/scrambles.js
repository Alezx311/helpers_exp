// ? Description:
// Complete the function scramble(s1, s2)
// that returns true if a portion of s1 characters
// can be rearranged to match s2, otherwise returns false.

// ? Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.

// ? Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const strToObj = str => str.split('').reduce((a, v) => {
  a[v] = a[v] ? a[v] + 1 : 1
  return a
}, {})

const scramble = (s1, s2) => {
  const [o1, o2] = [strToObj(s1), strToObj(s2)]

  for (let k in o2) {
    if (!o1[k] || o1[k] < o2[k]) return false;
  }

  return true;
}