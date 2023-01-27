// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

const isPalindrome = (s: string) => s === s.split("").reverse().join("")
const len = (s: string) => s.length
const longestPalindrome = (s: string) => {
	const l = len(s)
	if (l < 2) return s
	let max = 0
	let start = 0
	let end = 0
	for (let i = 0; i < l; i++) {
		for (let j = i + 1; j < l; j++) {
			const sub = s.substring(i, j + 1)
			if (len(sub) > max && isPalindrome(sub)) {
				max = len(sub)
				start = i
				end = j
			}
		}
	}
	return s.substring(start, end + 1)
}
