import { Constants } from "./constants"
import { A, N, O, S, F, B } from "../global"
import { inspect } from "util"
import path from "path"

const { RANDOM_SIZE, MAX, MIN, RANGE_RANDOM, CHARS_AND_NUMBERS, FUNCTION } = Constants

const { ARR, OBJ, STR, objK, objV, objE } = Constants

const SOURCE = Constants.getSource(__filename)
SOURCE.name = `Functions List`

//? Path
export const getRoot = () => process.cwd()
export const getDir = () => __filename
export const getFile = () => __dirname
export const getPathResolved = (arr: A<S> = []) => path.resolve(process.cwd(), ...arr)
export const getPathJoin = (str: S = process.cwd()) => path.join(__dirname, str)
export const getPathRelative = (str: S = process.cwd()) => path.relative(__dirname, str)

//? Random
export const random = Math.random
export const _floor = Math.floor
export const _ceil = Math.ceil
export const _round = Math.round
export const _abs = Math.abs
export const _sign = Math.sign
export const _min = Math.min
export const _max = Math.max
export const randomInt = (max: N = MAX, min: N = MIN) => ~~(random() * (max - min)) + min
export const randomDate = () => randomInt(Date.now(), 0)
export const randomDateStamp = () => new Date(randomDate()).toUTCString()
export const randomString = (pref: S = "key") => `_${pref}_${randomDate()}`
export const randomID = () => `${parseInt(`${randomDate()}`, 36)}`
export const randomIndex = (arr: A = ARR) => {
	const l = len(arr)
	if (l < 1) return 0
	if (l < 3) return randomChoose() ? 1 : 0
	else return randomInt(l - 1, 0)
}
export const randomElement = (arr: A = ARR) => arr[randomIndex(arr)]
export const randomSort = () => (randomBool() ? 1 : -1)
export const randomChoose = (v1: any = true, v2: any = null) => (randomBool() ? v1 : v2)
export const randomBool = () => random() > 0.5
export const randomMany = (size: N = RANDOM_SIZE, nums: N[] = RANGE_RANDOM) =>
	Array(size)
		.fill(random())
		.map((v) => ~~(v * randomInt(_max(...nums), _min(...nums))))
export const randomArr = (size: N = RANDOM_SIZE, max: N = MAX, min: N = MIN) =>
	Array(size)
		.fill(random())
		.map((v) => ~~(v * randomInt(max, min)))

export const getPerformance = (time: N = 0) => performance.now() - ~~time
export const getStats = (value: any = OBJ.value) => ({
	desc: toStr(value),
	type: type(value),
	size: len(value)
})

//? Converters
export const type = (value: any = STR) => typeof value
export const toTypeEqual = (v1: any = STR, v2: any = null) => type(v1) === type(v2)
export const toEqual = (v1: any = STR, v2: any = null) => v1 === v2 && toTypeEqual(v1, v2)
export const toStr = (value: any = STR, desc: S = STR) => (isStr(value) ? value : `${desc} ${value}`.trim())
export const toArr = (value: any = STR): A => (isArr(value) ? [...value] : [value])
export const toObj = (value: any = STR): O => (isObj(value) ? value : { value })
export const toBool = (value: any = STR): B => !!value
export const toNum = (value: any = STR): N => (isNum(value) ? value : ~~value)
export const toFunc = (value: any = STR): F =>
	isFunc(value)
		? value
		: function () {
				return value
		  }
export const is = (value: any = STR) => !!value
export const len = (value: any = STR, def: any = false) => value?.length ?? def
export const isLen = (value: any = STR, min: N = 0) => len(value, -1) > min
export const isExists = (value: any = STR) => !isNull(value) && !isUnd(value)
export const isStr = (value: any = STR) => type(value) === "string" && isLen(value)
export const isNum = (value: any = STR) => type(value) === "number" || type(value) === "bigint"
export const isObj = (value: any = STR) => type(value) === "object" && isLen(objK(value))
export const isArr = (value: any = STR) => type(value) === "object" && Array.isArray(value) && isLen(value)
export const isNull = (value: any = STR) => value === null
export const isUnd = (value: any = STR) => type(value) === "undefined" || value === undefined
export const isFunc = (value: any = STR) => type(value) === "function" || value instanceof Function
export const isBln = (value: any = STR) => type(value) === "boolean"
export const isKey = (obj: O, key: S) => objK(obj).includes(key)
export const toInspect = (value: any = STR): S => inspect(value)
export const toInspectAll = (value: any = STR): S => inspect(value, true, 10, false)
export const toJsonPlain = (value: any = STR): S => JSON.stringify(value)
export const toJson = (value: any = STR): S => JSON.stringify(value, null, "\t")
export const toDesc = (value: any = STR, desc: S = Constants.TYPE) => `${desc ?? type(value)}: ${value}`
export const toDescKey = (key: S = OBJ.key) => `Key: ${key}`
export const toDescIndex = (index: N = OBJ.index) => `Index: ${index}`
export const toDescValue = (value: any = OBJ.value) => `Value: ${value}`
export const toDescType = (value: any = STR) => `Type: ${type(value)}`
export const toArrProps = (arr: A = ARR) =>
	arr.map((value: any, index: N) => {
		const upd = { value, index }
		const desc = toJson(upd)
		return { ...upd, desc }
	})
export const toObjProps = (obj: O = OBJ) =>
	objK(obj).map((key: S, index: N) => {
		const upd = { key, index, value: obj[key] }
		const desc = toJson(upd)
		return { ...upd, desc }
	})
export const toDescArr = (arr: A = ARR) => arr.reduce((a, value: any, index: N) => (a += `${index}. ${value}`), "")
export const toDescObjKeys = (obj: O = OBJ) =>
	objK(obj).map((key: S, index: N) => ({
		key,
		index,
		value: obj[key],
		desc: `${index}. ${key}: ${obj[key]}`
	}))
export const toDescObjValues = (obj: O = OBJ) =>
	objV(obj).map((value: any, index: N) => ({
		index,
		value,
		desc: `${index}. ${value}`
	}))
export const toDescObjEntries = (obj: O = OBJ) =>
	objE(obj).map(([key, value]: [S, any], index: N) => ({
		key,
		index,
		value,
		desc: `${index}. ${key}: ${value}`
	}))
export const toDescObj = (obj: O = OBJ) => toDescObjKeys(obj).reduce((a, { desc }) => a + "\n" + desc, "")
export const isEveryTruthy = (arr: A = ARR) => arr.every((v) => !!v === true)
export const isInclude = (arr: A = ARR, value: any = null) => arr.includes(value)
export const isEvery = (arr: A = ARR, func: F = is) => arr.every(func)
export const isSome = (arr: A = ARR, func: F = is) => arr.some(func)

export const filterBy = (arr: A = ARR, func: F = is) => arr.filter(func)
export const filterByObj = (arr: A = ARR) => arr.filter(isObj)
export const filterByValid = (arr: A = ARR) => arr.filter(Boolean)
export const filterByStrings = (arr: A = ARR) => arr.filter(String)
export const filterByNumber = (arr: A = ARR) => arr.filter(Number)
export const filterByType = (arr: A = ARR, typeStr: S = Constants.TYPE) =>
	arr.filter((value) => type(value) !== typeStr)
export const reduceTypes = (arr: A = ARR) => arr.reduce((a, value) => [...a, type(value)], [])
export const reduceDesc = (arr: A = ARR) => arr.reduce((a, value, i) => [...a, `${i}. ${value}`], [])
export const reduceTruthy = (arr: A = ARR) => arr.filter(Boolean).reduce((a, value) => [...a, value], [])
export const reduceIndexes = (arr: A = ARR) => arr.reduce((a, value, i) => [...a, i], [])
export const reduceValues = (arr: A = ARR) => arr.reduce((a, value) => [...a, value], [])
export const reduceObj = (arr: A = ARR) => arr.reduce((a, value, index) => [...a, { index, value }], [])
export const reduceObjWithDesc = (arr: A = ARR) =>
	arr.reduce((a, value, index) => [...a, { index, value, desc: toDescObjValues({ index, value }) }], [])
export const replaceStr = (str: S = STR, rxp: S | RegExp = CHARS_AND_NUMBERS, replacer: S = "") =>
	str.replace(rxp, replacer)
export const replaceSpaces = (str: S = STR) => toStr(str).replace("s", "")
export const replaceTabs = (str: S = STR) => toStr(str).replace("\t", "")
export const replaceChars = (str: S = STR) => toStr(str).replace(/[a-z]/gim, "")
export const replaceNotChars = (str: S = STR) => toStr(str).replace(/[^a-z]/gim, "")
export const toUnicalKey = (str: S = STR): S => `_${Date.now()}_${replaceSpaces(str)}`
export const toElementStr = ({
	index,
	key,
	value
}: {
	index: N
	key: S
	value: any
} = OBJ) => [toStr(index, "index"), toStr(key, "key"), toStr(value, "value")].join("")

export const perf = (time: N = 0) => performance.now() - ~~time
export const toDateNow = () => Date.now()
export const toDateStamp = () => new Date().toUTCString()
export const toDateISO = () => new Date().toISOString()
export const toKey = (value: any = OBJ.value) => toCharsLatin(`_${toDateNow()}_${type(value)}`)
export const toLines = (v: S = STR) => `${v}`.split("\n")
export const toTabs = (v: S = STR) => `${v}`.split("\t")
export const toWords = (v: S = STR) => `${v}`.split(" ")
export const toCharsLatin = (s: S = STR) => `${s}`.replace(/[^a-z0-9_]/gim, "").trim()
export const toCharsValid = (s: S = STR) => `${s}`.replace(/[^a-z0-9_\\s.,]/gim, "").trim()
export const toCharsArray = (s: S = STR) => `${s}`.split("")
export const toCharsUnical = (s: S = STR) => isStr(s) && [...new Set(toCharsArray(`${s}`).filter(Boolean))]
export const toReversed = (s: S = STR) => isStr(s) && toCharsArray(`${s}`).reverse().join("")
export const toTrimmed = (s: S = STR) => `${s}`.trim()
export const toObjStr = (value: any = STR) => JSON.stringify({ value }, null, "\t")
export const toLongest = (...s: A<S | A>) => s.filter(isLen).sort(len).filter(Boolean)[0]
export const isValidStr = (s: S = STR) => len(toTrimmed(s)) > 0
export const isValidLength = (s: S = STR, min: N = MIN, max: N = MAX) => len(s) > min && len(s) < max
export const isPalindrome = (s: S = STR) => isValidStr(s) && s === toReversed(s)
export const isIncludeChars = (s: S = STR, chars: A<S> = [STR[0]]) => chars.every((c) => `${s}`.includes(c))
export const isTrimmed = (s: S = STR) => isValidStr(s) && s === toTrimmed(s)
export const toStats = (value: any = STR) => ({
	value,
	key: toKey(value),
	type: type(value)
})
export const toStrLastIndex = (s: S | A = STR) => (s.length > 0 ? ~~len(s) - 1 : 0)
export const subStr = (str: S = STR, start: N = 0, end: N = len(str) - 1) => `${str}`.substring(start, end)
export const toSubParts = (str: S = STR, max: N = 10) => {
	const parts = [str]

	for (let i = 0; i < len(str); i++) {
		for (let e = i + 1; e < len(str); e++) {
			parts.push(subStr(str, i, e))
		}
	}

	const valid = parts.map(replaceNotChars).filter((s) => is(s) && len(s) < max)

	return toUnical(valid)
}
export const strStat = (str: S = STR) => {
	const length = len(str)
	const chars = toCharsArray(str)
	const parts = toSubParts(str)

	return { str, length, chars, parts }
}
export const matchAll = (v: S = STR) => `${`${v}`.match(/.+/gim)}`
export const matchAllLatin = (v: S = STR) => `${`${v}`.match(/[a-z]+/gim)}`
export const matchAllKyr = (v: S = STR) => `${`${v}`.match(/[а-я]+/gim)}`
export const matchAllInt = (v: S = STR) => `${`${v}`.match(/[0-9]+/gim)}`
export const matchAllSpec = (v: S = STR) => `${`${v}`.match(/[\\s\\n\\t!@#$%^&*()_+]+/gim)}`
export const matchAllLines = (v: S = STR) => `${`${v}`.match(/^.+$/gim)}`
export const arrRandomElement = (arr: A = ARR) => (arr.length < 1 ? arr[0] : arr[randomInt(lastArrIndex(arr))])
export const arrFilterValid = (arr: A = ARR) => arr.filter(Boolean)
export const lastArrIndex = (arr: A = ARR) => (arr.length > 0 ? arr.length - 1 : 0)
export const arrFilterMaxLength = (arr: A = ARR, max: N = randomInt(lastArrIndex(arr))) => arr.filter((v, i) => i < max)
export const arrMapByTypes = (arr: A = ARR) => arr.map((value, index) => ({ value, index, type: type(value) }))
export const objKeys = (obj: O = OBJ) => objK(obj).filter(Boolean)
export const objValues = (obj: O = OBJ) => objV(obj).filter(Boolean)
export const objEntries = (obj: O = OBJ) => objE(obj).filter(Boolean)
export const objInspect = (obj: O = OBJ) => inspect(obj, true, 10, false)
export const objStr = (obj: O = OBJ) => JSON.stringify(obj, null, "\t")
export const mapKey = (key: any = STR, index: N = randomInt()) => ({
	key,
	index
})
export const objMap = (obj: O = OBJ) => {
	return objKeys(obj).map((v, i) => ({ ...mapKey(v, i), value: obj[v] }))
}
export const mapByFunc = (arr: A = ARR, func: F = FUNCTION) =>
	arr.map((value: any, index: N) => ({ value, index, func }))
export const mapByValue = (arr: A = ARR) => arr.map((value: any, index: N) => ({ value, index }))
export const sortRandom = (arr: A = ARR) => arr.sort(randomSort)
export const sortLength = (arr: A = ARR) => arr.sort((a: A | S, b: A | S) => (len(a) > len(b) ? 1 : -1))
export const sortBigger = (arr: A = ARR) => arr.sort((a: S | N, b: S | N) => (a > b ? 1 : -1))
export const toSorted = (arr: A = ARR) => arr.sort()
export const toMerged = (arr1: A = ARR, arr2: A = ARR) => [...arr1, ...arr2]
export const toFlat = (arr: A = ARR) => arr.flat()
export const mapFunc = (value: any = STR, index: N = 0, func: F = toObj) => func(value)
export const addPropIndex = (arr: A = ARR) =>
	arr.map((value: any, index: N) => ({
		value,
		index
	}))
export const addPropType = (arr: A = ARR) =>
	arr.map((value: any, index: N) => ({
		value,
		index,
		type: type(value)
	}))
export const mapByType = (arr: A = ARR) => arr.map((value) => type(value))
export const toUnical = (arr: A = ARR) => [...new Set(arr)]
export const arrRandomIndex = (arr: A = ARR) => randomIndex(arr)

export const EXAMPLES = Constants.mapExamples([
	{ desc: "getRoot", func: getRoot, result: getRoot() },
	{ desc: "getDir", func: getDir, result: getDir() },
	{ desc: "getFile", func: getFile, result: getFile() },
	{ desc: "getPathResolved", func: getPathResolved, result: getPathResolved() },
	{ desc: "getPathJoin", func: getPathJoin, result: getPathJoin() },
	{ desc: "getPathRelative", func: getPathRelative, result: getPathRelative() },
	{ desc: "random", func: random, result: random() },
	{ desc: "_floor", func: _floor, result: _floor(random()) },
	{ desc: "_ceil", func: _ceil, result: _ceil(random()) },
	{ desc: "_round", func: _round, result: _round(random()) },
	{ desc: "_abs", func: _abs, result: _abs(random()) },
	{ desc: "_sign", func: _sign, result: _sign(random()) },
	{ desc: "_min", func: _min, result: _min(...RANGE_RANDOM) },
	{ desc: "_max", func: _max, result: _max(...RANGE_RANDOM) },
	{ desc: "randomInt", func: randomInt, result: randomInt() },
	{ desc: "randomDate", func: randomDate, result: randomDate() },
	{ desc: "randomDateStamp", func: randomDateStamp, result: randomDateStamp() },
	{ desc: "randomString", func: randomString, result: randomString() },
	{ desc: "randomID", func: randomID, result: randomID() },
	{ desc: "randomIndex", func: randomIndex, result: randomIndex() },
	{ desc: "randomElement", func: randomElement, result: randomElement() },
	{ desc: "randomSort", func: randomSort, result: randomSort() },
	{ desc: "randomChoose", func: randomChoose, result: randomChoose() },
	{ desc: "randomBool", func: randomBool, result: randomBool() },
	{ desc: "randomMany", func: randomMany, result: randomMany() },
	{ desc: "randomArr", func: randomArr, result: randomArr() },
	{ desc: "getPerformance", func: getPerformance, result: getPerformance() },
	{ desc: "getStats", func: getStats, result: getStats() },
	{ desc: "type", func: type, result: type() },
	{ desc: "toTypeEqual", func: toTypeEqual, result: toTypeEqual() },
	{ desc: "toEqual", func: toEqual, result: toEqual() },
	{ desc: "toStr", func: toStr, result: toStr() },
	{ desc: "toArr", func: toArr, result: toArr() },
	{ desc: "toObj", func: toObj, result: toObj() },
	{ desc: "toBool", func: toBool, result: toBool() },
	{ desc: "toNum", func: toNum, result: toNum() },
	{ desc: "toFunc", func: toFunc, result: toFunc() },
	{ desc: "is", func: is, result: is() },
	{ desc: "len", func: len, result: len() },
	{ desc: "isLen", func: isLen, result: isLen() },
	{ desc: "isExists", func: isExists, result: isExists() },
	{ desc: "isStr", func: isStr, result: isStr() },
	{ desc: "isNum", func: isNum, result: isNum() },
	{ desc: "isObj", func: isObj, result: isObj() },
	{ desc: "isArr", func: isArr, result: isArr() },
	{ desc: "isNull", func: isNull, result: isNull() },
	{ desc: "isUnd", func: isUnd, result: isUnd() },
	{ desc: "isFunc", func: isFunc, result: isFunc() },
	{ desc: "isBln", func: isBln, result: isBln() },
	{ desc: "isKey", func: isKey, result: isKey(OBJ, "name") },
	{ desc: "toInspect", func: toInspect, result: toInspect() },
	{ desc: "toInspectAll", func: toInspectAll, result: toInspectAll() },
	{ desc: "toJsonPlain", func: toJsonPlain, result: toJsonPlain() },
	{ desc: "toJson", func: toJson, result: toJson() },
	{ desc: "toDesc", func: toDesc, result: toDesc() },
	{ desc: "toDescKey", func: toDescKey, result: toDescKey() },
	{ desc: "toDescIndex", func: toDescIndex, result: toDescIndex() },
	{ desc: "toDescValue", func: toDescValue, result: toDescValue() },
	{ desc: "toDescType", func: toDescType, result: toDescType() },
	{ desc: "toArrProps", func: toArrProps, result: toArrProps() },
	{ desc: "toObjProps", func: toObjProps, result: toObjProps() },
	{ desc: "toDescArr", func: toDescArr, result: toDescArr() },
	{ desc: "toDescObjKeys", func: toDescObjKeys, result: toDescObjKeys() },
	{ desc: "toDescObjValues", func: toDescObjValues, result: toDescObjValues() },
	{
		desc: "toDescObjEntries",
		func: toDescObjEntries,
		result: toDescObjEntries()
	},
	{ desc: "toDescObj", func: toDescObj, result: toDescObj() },
	{ desc: "isEveryTruthy", func: isEveryTruthy, result: isEveryTruthy() },
	{ desc: "isInclude", func: isInclude, result: isInclude() },
	{ desc: "isEvery", func: isEvery, result: isEvery() },
	{ desc: "isSome", func: isSome, result: isSome() },
	{ desc: "filterBy", func: filterBy, result: filterBy() },
	{ desc: "filterByObj", func: filterByObj, result: filterByObj() },
	{ desc: "filterByValid", func: filterByValid, result: filterByValid() },
	{ desc: "filterByStrings", func: filterByStrings, result: filterByStrings() },
	{ desc: "filterByNumber", func: filterByNumber, result: filterByNumber() },
	{ desc: "filterByType", func: filterByType, result: filterByType() },
	{ desc: "reduceTypes", func: reduceTypes, result: reduceTypes() },
	{ desc: "reduceDesc", func: reduceDesc, result: reduceDesc() },
	{ desc: "reduceTruthy", func: reduceTruthy, result: reduceTruthy() },
	{ desc: "reduceIndexes", func: reduceIndexes, result: reduceIndexes() },
	{ desc: "reduceValues", func: reduceValues, result: reduceValues() },
	{ desc: "reduceObj", func: reduceObj, result: reduceObj() },
	{
		desc: "reduceObjWithDesc",
		func: reduceObjWithDesc,
		result: reduceObjWithDesc()
	},
	{ desc: "replaceStr", func: replaceStr, result: replaceStr() },
	{ desc: "replaceSpaces", func: replaceSpaces, result: replaceSpaces() },
	{ desc: "replaceTabs", func: replaceTabs, result: replaceTabs() },
	{ desc: "replaceChars", func: replaceChars, result: replaceChars() },
	{ desc: "replaceNotChars", func: replaceNotChars, result: replaceNotChars() },
	{ desc: "toUnicalKey", func: toUnicalKey, result: toUnicalKey() },
	{ desc: "toElementStr", func: toElementStr, result: toElementStr() },
	{ desc: "perf", func: perf, result: perf() },
	{ desc: "toDateNow", func: toDateNow, result: toDateNow() },
	{ desc: "toDateStamp", func: toDateStamp, result: toDateStamp() },
	{ desc: "toDateISO", func: toDateISO, result: toDateISO() },
	{ desc: "toKey", func: toKey, result: toKey() },
	{ desc: "toLines", func: toLines, result: toLines() },
	{ desc: "toTabs", func: toTabs, result: toTabs() },
	{ desc: "toWords", func: toWords, result: toWords() },
	{ desc: "toCharsLatin", func: toCharsLatin, result: toCharsLatin() },
	{ desc: "toCharsValid", func: toCharsValid, result: toCharsValid() },
	{ desc: "toCharsArray", func: toCharsArray, result: toCharsArray() },
	{ desc: "toCharsUnical", func: toCharsUnical, result: toCharsUnical() },
	{ desc: "toReversed", func: toReversed, result: toReversed() },
	{ desc: "toTrimmed", func: toTrimmed, result: toTrimmed() },
	{ desc: "toObjStr", func: toObjStr, result: toObjStr() },
	{ desc: "toLongest", func: toLongest, result: toLongest() },
	{ desc: "isValidStr", func: isValidStr, result: isValidStr() },
	{ desc: "isValidLength", func: isValidLength, result: isValidLength() },
	{ desc: "isPalindrome", func: isPalindrome, result: isPalindrome() },
	{ desc: "isIncludeChars", func: isIncludeChars, result: isIncludeChars() },
	{ desc: "isTrimmed", func: isTrimmed, result: isTrimmed() },
	{ desc: "toStats", func: toStats, result: toStats() },
	{ desc: "toStrLastIndex", func: toStrLastIndex, result: toStrLastIndex() },
	{ desc: "subStr", func: subStr, result: subStr() },
	{ desc: "toSubParts", func: toSubParts, result: toSubParts() },
	{ desc: "strStat", func: strStat, result: strStat() },
	{ desc: "matchAll", func: matchAll, result: matchAll() },
	{ desc: "matchAllLatin", func: matchAllLatin, result: matchAllLatin() },
	{ desc: "matchAllKyr", func: matchAllKyr, result: matchAllKyr() },
	{ desc: "matchAllInt", func: matchAllInt, result: matchAllInt() },
	{ desc: "matchAllSpec", func: matchAllSpec, result: matchAllSpec() },
	{ desc: "matchAllLines", func: matchAllLines, result: matchAllLines() },
	{
		desc: "arrRandomElement",
		func: arrRandomElement,
		result: arrRandomElement()
	},
	{ desc: "arrFilterValid", func: arrFilterValid, result: arrFilterValid() },
	{ desc: "lastArrIndex", func: lastArrIndex, result: lastArrIndex() },
	{
		desc: "arrFilterMaxLength",
		func: arrFilterMaxLength,
		result: arrFilterMaxLength()
	},
	{ desc: "arrMapByTypes", func: arrMapByTypes, result: arrMapByTypes() },
	{ desc: "objKeys", func: objKeys, result: objKeys() },
	{ desc: "objValues", func: objValues, result: objValues() },
	{ desc: "objEntries", func: objEntries, result: objEntries() },
	{ desc: "objInspect", func: objInspect, result: objInspect() },
	{ desc: "objStr", func: objStr, result: objStr() },
	{ desc: "objMap", func: objMap, result: objMap() },
	{ desc: "mapKey", func: mapKey, result: ARR.map((v, i) => mapKey(v, i)) },
	{
		desc: "mapByFunc",
		func: mapByFunc,
		result: mapByFunc(ARR, is)
	},
	{
		desc: "mapByValue",
		func: mapByValue,
		result: mapByValue(ARR)
	},
	{ desc: "sortRandom", func: sortRandom, result: sortRandom() },
	{ desc: "sortLength", func: sortLength, result: sortLength() },
	{ desc: "sortBigger", func: sortBigger, result: sortBigger() },
	{ desc: "toSorted", func: toSorted, result: toSorted() },
	{ desc: "toMerged", func: toMerged, result: toMerged() },
	{ desc: "toFlat", func: toFlat, result: toFlat() },
	{ desc: "mapFunc", func: mapFunc, result: mapFunc() },
	{ desc: "addPropIndex", func: addPropIndex, result: addPropIndex() },
	{ desc: "addPropType", func: addPropType, result: addPropType() },
	{ desc: "mapByType", func: mapByType, result: mapByType() },
	{ desc: "toUnical", func: toUnical, result: toUnical() },
	{ desc: "arrRandomIndex", func: arrRandomIndex, result: arrRandomIndex() }
])

export class FuncHelpers {
	static SOURCE = SOURCE
	static EXAMPLES = EXAMPLES

	static getRoot = getRoot
	static getDir = getDir
	static getFile = getFile
	static getPathResolved = getPathResolved
	static getPathJoin = getPathJoin
	static getPathRelative = getPathRelative
	static random = random
	static _floor = _floor
	static _ceil = _ceil
	static _round = _round
	static _abs = _abs
	static _sign = _sign
	static _min = _min
	static _max = _max
	static randomInt = randomInt
	static randomDate = randomDate
	static randomDateStamp = randomDateStamp
	static randomString = randomString
	static randomID = randomID
	static randomIndex = randomIndex
	static randomElement = randomElement
	static randomSort = randomSort
	static randomChoose = randomChoose
	static randomBool = randomBool
	static randomMany = randomMany
	static randomArr = randomArr
	static getPerformance = getPerformance
	static getStats = getStats
	static type = type
	static toTypeEqual = toTypeEqual
	static toEqual = toEqual
	static toStr = toStr
	static toArr = toArr
	static toObj = toObj
	static toBool = toBool
	static toNum = toNum
	static toFunc = toFunc
	static is = is
	static len = len
	static isLen = isLen
	static isExists = isExists
	static isStr = isStr
	static isNum = isNum
	static isObj = isObj
	static isArr = isArr
	static isNull = isNull
	static isUnd = isUnd
	static isFunc = isFunc
	static isBln = isBln
	static isKey = isKey
	static toInspect = toInspect
	static toInspectAll = toInspectAll
	static toJsonPlain = toJsonPlain
	static toJson = toJson
	static toDesc = toDesc
	static toDescKey = toDescKey
	static toDescIndex = toDescIndex
	static toDescValue = toDescValue
	static toDescType = toDescType
	static toArrProps = toArrProps
	static toObjProps = toObjProps
	static toDescArr = toDescArr
	static toDescObjKeys = toDescObjKeys
	static toDescObjValues = toDescObjValues
	static toDescObjEntries = toDescObjEntries
	static toDescObj = toDescObj
	static isEveryTruthy = isEveryTruthy
	static isInclude = isInclude
	static isEvery = isEvery
	static isSome = isSome
	static filterBy = filterBy
	static filterByObj = filterByObj
	static filterByValid = filterByValid
	static filterByStrings = filterByStrings
	static filterByNumber = filterByNumber
	static filterByType = filterByType
	static reduceTypes = reduceTypes
	static reduceDesc = reduceDesc
	static reduceTruthy = reduceTruthy
	static reduceIndexes = reduceIndexes
	static reduceValues = reduceValues
	static reduceObj = reduceObj
	static reduceObjWithDesc = reduceObjWithDesc
	static replaceStr = replaceStr
	static replaceSpaces = replaceSpaces
	static replaceTabs = replaceTabs
	static replaceChars = replaceChars
	static replaceNotChars = replaceNotChars
	static toUnicalKey = toUnicalKey
	static toElementStr = toElementStr
	static perf = perf
	static toDateNow = toDateNow
	static toDateStamp = toDateStamp
	static toDateISO = toDateISO
	static toKey = toKey
	static toLines = toLines
	static toTabs = toTabs
	static toWords = toWords
	static toCharsLatin = toCharsLatin
	static toCharsValid = toCharsValid
	static toCharsArray = toCharsArray
	static toCharsUnical = toCharsUnical
	static toReversed = toReversed
	static toTrimmed = toTrimmed
	static toObjStr = toObjStr
	static toLongest = toLongest
	static isValidStr = isValidStr
	static isValidLength = isValidLength
	static isPalindrome = isPalindrome
	static isIncludeChars = isIncludeChars
	static isTrimmed = isTrimmed
	static toStats = toStats
	static toStrLastIndex = toStrLastIndex
	static subStr = subStr
	static toSubParts = toSubParts
	static strStat = strStat
	static matchAll = matchAll
	static matchAllLatin = matchAllLatin
	static matchAllKyr = matchAllKyr
	static matchAllInt = matchAllInt
	static matchAllSpec = matchAllSpec
	static matchAllLines = matchAllLines
	static arrRandomElement = arrRandomElement
	static arrFilterValid = arrFilterValid
	static lastArrIndex = lastArrIndex
	static arrFilterMaxLength = arrFilterMaxLength
	static arrMapByTypes = arrMapByTypes
	static objKeys = objKeys
	static objValues = objValues
	static objEntries = objEntries
	static objInspect = objInspect
	static objStr = objStr
	static objMap = objMap
	static mapKey = mapKey
	static mapByFunc = mapByFunc
	static mapByValue = mapByValue
	static sortRandom = sortRandom
	static sortLength = sortLength
	static sortBigger = sortBigger
	static toSorted = toSorted
	static toMerged = toMerged
	static toFlat = toFlat
	static mapFunc = mapFunc
	static addPropIndex = addPropIndex
	static addPropType = addPropType
	static mapByType = mapByType
	static toUnical = toUnical
	static arrRandomIndex = arrRandomIndex
}
