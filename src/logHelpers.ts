import { Constants } from "../src/constants"

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `LogHelpers`

export const getStats = () => ({
	filename: __filename,
	time: new Date().toUTCString()
})

const { log, info, dir, debug, table, error, warn, trace, group } = console

export class LogHelpers {
	static SOURCE = SOURCE

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
