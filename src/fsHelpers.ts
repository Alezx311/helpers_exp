import fs from "fs"
import path from "path"
import { S } from "../global"
import { Constants } from "./constants"

const SOURCE = Constants.getSource(__filename)
SOURCE.name = `fsHelpers`

export const FILE = __filename
export const DIR = __dirname
export const ROOT = process.cwd()
export const LOG_DIR = path.resolve(ROOT, ".logs")
export const LOG_FILE = path.resolve(LOG_DIR, "fs.txt")
export const TEST_FILE = path.resolve(LOG_DIR, "_testFile.txt")

export const readDir = (path: S) => fs.readdirSync(path, { encoding: "utf8" })
export const readFile = (path: S) => fs.readFileSync(path, { encoding: "utf8" })
export const isExists = (path: S) => fs.existsSync(path)
export const fileStats = (path: S) => fs.statSync(path)
export const appendFile = (path: S, data: S = "append test") => {
	fs.appendFileSync(path, data, { encoding: "utf8" })
	return true
}
export const writeFile = (path: S, data: S = "write test") => {
	fs.writeFileSync(path, data, { encoding: "utf8" })
	return true
}
export const removeFile = (path: S) => {
	fs.rmSync(path)
	return true
}

export const getContent = () => {
	const SRC_CONTENT = readDir(DIR)
	const LOG_CONTENT = readFile(LOG_FILE)
	const LOG_IS_EXISTS = isExists(LOG_FILE)
	const LOG_STATS = fileStats(LOG_FILE)
	const CONTENT = JSON.stringify({ SRC_CONTENT, LOG_CONTENT, LOG_IS_EXISTS, LOG_STATS }, null, "\t")

	return { SRC_CONTENT, LOG_CONTENT, LOG_IS_EXISTS, LOG_STATS, CONTENT }
}

export const testFileSystem = () => {
	const { CONTENT } = getContent()

	const isExistsResult = isExists(FILE)
	console.info("isExistsResult", isExistsResult)

	const fileStatsResult = fileStats(FILE)
	console.info("fileStatsResult", fileStatsResult)

	const readDirResult = readDir(FILE)
	console.info("readDirResult", readDirResult)

	const readFileResult = readFile(FILE)
	console.info("readFileResult", readFileResult)

	removeFile(LOG_FILE)
	console.info("removeFileResult", readDir(LOG_DIR))

	writeFile(LOG_FILE, LOG_FILE)
	console.info("writeFileResult", readFile(LOG_FILE))

	appendFile(LOG_FILE, CONTENT)
	console.info("appendFileResult", readFile(LOG_FILE))

	return true
}

export const EXAMPLES = Constants.mapExamples([
	{ desc: "isExists", func: isExists, result: isExists(FILE) },
	{ desc: "fileStats", func: fileStats, result: fileStats(FILE) },
	{ desc: "readDir", func: readDir, result: readDir(FILE) },
	{ desc: "readFile", func: readFile, result: readFile(FILE) },
	{
		desc: "writeFile",
		func: writeFile,
		result: writeFile(TEST_FILE, "Write Test")
	},
	{
		desc: "appendFile",
		func: appendFile,
		result: appendFile(TEST_FILE, "Append Test")
	},
	{ desc: "removeFile", func: removeFile, result: removeFile(TEST_FILE) },
	{ desc: "getContent", func: getContent, result: getContent() },
	{ desc: "testFileSystem", func: testFileSystem, result: testFileSystem() }
])

export class FsHelpers {
	static SOURCE = SOURCE
	static EXAMPLES = EXAMPLES

	static FILE = FILE
	static DIR = DIR
	static ROOT = ROOT
	static LOG_DIR = LOG_DIR
	static LOG_FILE = LOG_FILE
	static TEST_FILE = TEST_FILE

	static readDir = readDir
	static readFile = readFile
	static isExists = isExists
	static fileStats = fileStats
	static appendFile = appendFile
	static writeFile = writeFile
	static removeFile = removeFile
	static getContent = getContent
	static testFileSystem = testFileSystem
}
