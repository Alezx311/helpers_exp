export function lengthOfLongestSubstring(str: string): number {
	let max_len = 0
	let curr = 0
	let hash: any = {}

	if (str.length < 2) {
		return str.length
	}

	for (let index = 0; index < str.length; index++) {
		let char = str[index]
		if (hash[char] == null) {
			curr += 1
		} else {
			curr = Math.min(index - hash[char], curr + 1)
		}
		max_len = Math.max(max_len, curr)
		hash[char] = index
	}

	return max_len
}
