import { Helpers } from "../src/index"

const SOURCE = Helpers.ArrayHelpers.SOURCE
const DESC = Helpers.ArrayHelpers.SOURCE.name
const MAIN = Helpers.ArrayHelpers

describe(DESC, () => {
	it("should be defined", () => {
		expect(MAIN).toBeDefined()
		expect(DESC).toBeDefined()
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
})
