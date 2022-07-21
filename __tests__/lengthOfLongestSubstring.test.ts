import { lengthOfLongestSubstring as func } from "../src/lengthOfLongestSubstring"

const testValues = [
	{ input: `abcabcbb`, expected: 3 },
	{ input: `bbbbb`, expected: 1 },
	{ input: `pwwkew`, expected: 3 }
]

describe("Given a string, find the length of the longest substring without repeating characters.", () => {
	it("Should be defined", () => {
		expect(func).toBeDefined()
	})

	testValues.map(({ input, expected }, index) => {
		it(`${index}. Should return ${expected} for the ${input}`, () => {
			expect(func(input)).toEqual(expected)
		})
	})
})
