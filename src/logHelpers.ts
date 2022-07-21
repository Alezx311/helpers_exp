import { Constants } from "../src/constants"

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `LogHelpers`

export const getStats = () => ({
	filename: __filename,
	time: new Date().toUTCString()
})

const { log, info, dir, debug, table, error, warn, trace, group } = console

export const EXAMPLES = Constants.mapExamples([
	{ desc: "log", func: log, result: true },
	{ desc: "info", func: info, result: true },
	{ desc: "dir", func: dir, result: true },
	{ desc: "debug", func: debug, result: true },
	{ desc: "table", func: table, result: true },
	{ desc: "error", func: error, result: true },
	{ desc: "warn", func: warn, result: true },
	{ desc: "trace", func: trace, result: true },
	{ desc: "group", func: group, result: true }
])

export class LogHelpers {
	static SOURCE = SOURCE
	static EXAMPLES = EXAMPLES

	static getStats = getStats

	static log = console.log
	static info = console.info
	static dir = console.dir
	static debug = console.debug
	static table = console.table
	static error = console.error
	static warn = console.warn
	static trace = console.trace
	static group = console.group
}
