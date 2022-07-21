import { N, S } from "../global"
import { Constants } from "../src/constants"
import { FuncHelpers } from "../src/func"

describe(FuncHelpers.SOURCE.desc, () => {
	const SOURCE = FuncHelpers.SOURCE
	const DESC = FuncHelpers.SOURCE.name
	const MAIN = FuncHelpers

	it("should be defined", () => {
		expect(SOURCE).toBeDefined()
		expect(MAIN).toBeDefined()
		expect(DESC).toBeDefined()
		expect(MAIN.EXAMPLES).toBeDefined()
	})

	it(SOURCE.filename, () => {
		expect(SOURCE).toBeDefined()
		expect(SOURCE.filename).toBeDefined()
		expect(SOURCE.date).toBeDefined()
		expect(SOURCE.datestamp).toBeDefined()
		expect(SOURCE.dirname).toBeDefined()
		expect(SOURCE.desc).toBeDefined()
		expect(SOURCE.key).toBeDefined()
		expect(SOURCE.name).toBeDefined()
	})

	MAIN.EXAMPLES.map(({ desc, values, index, result }: any) => {
		it(desc, () => {
			const valid = desc && result

			expect(desc).toBeDefined()
			expect(values).toBeDefined()
			expect(index).toBeDefined()
			expect(result).toBeDefined()

			expect(values).not.toBeNull()
			expect(index >= 0).not.toBeNull()
			expect(desc).not.toBeNull()
			expect(result).not.toBeNull()
			expect(valid).not.toEqual(false)
		})
	})
})

describe("From Object keys", () => {
	const SOURCE = Constants.getSource(__filename)
	SOURCE.name = __filename

	const MAIN: any = FuncHelpers
	const DESC = "FuncHelpers"

	const tryFunc = (func: any) => {
		try {
			const result = func()
			const status = true
			return { result, status, error: false }
		} catch (error) {
			return { result: error, status: false, error }
		}
	}

	const KEYS = FuncHelpers.EXAMPLES.map((v) => v.desc)

	const SORTED = [...KEYS].map((desc: keyof typeof MAIN, index: N) => {
		const value = MAIN?.[desc]
		const type = typeof value
		const isFunc = typeof value === "function"
		const results = isFunc ? tryFunc(value) : tryFunc(() => value)
		const data = {
			desc,
			index,
			value,
			type,
			isFunc,
			results
		}

		return data
	})

	const MESSAGES = SORTED.map((v) => JSON.stringify(v, null, "\t"))

	describe(DESC, () => {
		it("should be defined", () => {
			expect(MAIN).toBeDefined()
			expect(DESC).toBeDefined()
			expect(KEYS).toBeDefined()

			expect(KEYS.length).toBeGreaterThan(0)
			expect(SORTED.length).toBeGreaterThan(0)
			expect(MESSAGES.length).toBeGreaterThan(0)
		})

		it(SOURCE.filename, () => {
			expect(SOURCE).toBeDefined()
			expect(SOURCE.filename).toBeDefined()
			expect(SOURCE.date).toBeDefined()
			expect(SOURCE.datestamp).toBeDefined()
			expect(SOURCE.dirname).toBeDefined()
			expect(SOURCE.desc).toBeDefined()
			expect(SOURCE.key).toBeDefined()
			expect(SOURCE.name).toBeDefined()
		})

		MESSAGES.map((msg: S, index: N) => {
			it(`Message with index ${index}`, () => {
				expect(msg).toBeDefined()
				expect(msg).toBeTruthy()
				expect(msg.length).toBeGreaterThan(0)
			})
		})

		SORTED.map((obj: any, index: N) => {
			it(`${index}: ${obj.desc}`, () => {
				expect(obj.desc).toBeDefined()
				expect(obj.index).toBeDefined()
				expect(obj.isFunc).toBeDefined()
				expect(obj.results).toBeDefined()
				expect(obj.type).toBeDefined()

				expect(obj.desc).toBeTruthy()
				expect(obj.results).toBeTruthy()
				expect(obj.type).toBeTruthy()
			})
		})
	})
})
