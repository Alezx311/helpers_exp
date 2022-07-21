import { reverseNumber } from "../src/reverseNumber"

const testValues = [
	{ input: 7, expected: 7 },
	{ input: 42, expected: 24 },
	{ input: 311, expected: 113 },
	{ input: 65536, expected: 63556 },
	{ input: -1, expected: -1 },
	{ input: 0, expected: 0 },
	{ input: -78236487, expected: -78463287 }
]

describe("reverseNumber testing", () => {
	it("Should be defined", () => {
		expect(reverseNumber).toBeDefined()
	})

	testValues.map(({ input, expected }, index) => {
		it(`${index}: Should return ${expected} for the ${input}`, () => {
			expect(reverseNumber(input)).toEqual(expected)
		})
	})
})
