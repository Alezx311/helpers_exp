import { Constants, objE, objK, objV } from "./constants"
import { A, N, O, S, F, B } from "../global"
import { inspect } from "util"

const SOURCE = Constants.getSource(__filename)
SOURCE.name = `TypeHelpers`
const { STR, ARR, OBJ } = Constants

export const toType = (value: any = STR) => typeof value
export const toTypeEqual = (v1: any = STR, v2: any = v1) => toType(v1) === toType(v2)
export const toEqual = (v1: any = STR, v2: any = v1) => v1 === v2 && toTypeEqual(v1, v2)
export const toStr = (value: any = STR) => (isStr(value) ? value : `${value}`)
export const toArr = (value: any = STR): A => (isArr(value) ? [...value] : [value])
export const toObj = (value: any = STR): O => (isObj(value) ? value : { value })
export const toBool = (value: any = STR): B => !!value
export const toNum = (value: any = STR): N => (isNum(value) ? value : ~~value)
export const toFunc = (value: any = STR): F =>
	isFunc(value)
		? value
		: function () {
				return value;
		  };
export const is = (value: any = STR) => !!value
export const len = (value: A | S = STR) => value?.length
export const isLen = (value: A | S = STR) => len(value) > 0
export const isExists = (value: any = STR) => !isNull(value) && !isUnd(value)
export const isStr = (value: any = STR) => toType(value) === "string" && isLen(value)
export const isNum = (value: any = Constants.NUMBER) => toType(value) === "number" || toType(value) === "bigint"
export const isObj = (value: any = OBJ) => toType(value) === "object" && isLen(objK(value))
export const isArr = (value: any = ARR) => toType(value) === "object" && Array.isArray(value) && isLen(value)
export const isNull = (value: any = Constants.NULL) => value === null
export const isUnd = (value: any = Constants.UNDEFINED) => toType(value) === "undefined" || value === undefined
export const isFunc = (value: any = STR) => toType(value) === "function" || value instanceof Function
export const isBln = (value: any = STR) => toType(value) === "boolean"
export const isKey = (obj: O, key: S) => objK(obj).includes(key)
export const toInspect = (value: any = STR): S => inspect(value)
export const toInspectAll = (value: any = STR): S => inspect(value, true, 10, false)
export const toJsonPlain = (value: any = STR): S => JSON.stringify(value)
export const toJson = (value: any = STR): S => JSON.stringify(value, null, "\t")
export const toDesc = (value: any = STR, desc: S = Constants.TYPE) => `${desc ?? toType(value)}: ${value}`
export const toDescKey = (key: S = OBJ.key) => `Key: ${key}`
export const toDescIndex = (index: N = OBJ.index) => `Index: ${index}`
export const toDescValue = (value: any = OBJ.value) => `Value: ${value}`
export const toDescType = (value: any = STR) => `Type: ${toType(value)}`
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
export const filterByType = (arr: A = ARR, type: S = Constants.TYPE) => arr.filter((value) => toType(value) !== type)
export const reduceTypes = (arr: A = ARR) => arr.reduce((a, value) => [...a, toType(value)], [])
export const reduceDesc = (arr: A = ARR) => arr.reduce((a, value, i) => [...a, `${i}. ${value}`])
export const reduceTruthy = (arr: A = ARR) => arr.filter(Boolean).reduce((a, value) => [...a, value], [])
export const reduceIndexes = (arr: A = ARR) => arr.reduce((a, value, i) => [...a, i], [])
export const reduceValues = (arr: A = ARR) => arr.reduce((a, value) => [...a, value], [])
export const reduceObj = (arr: A = ARR) => arr.reduce((a, value, index) => [...a, { index, value }], [])
export const reduceObjWithDesc = (arr: A = ARR) =>
	arr.reduce((a, value, index) => [...a, { index, value, desc: toDescObjValues({ index, value }) }], [])
export const toKey = (key: any = OBJ.key): S => `${key}: `.trim()
export const toValue = (value: any = OBJ.name): S => `${value}`.trim()
export const toIndex = (index: any = OBJ.index): S => `${index}. `.trim()
export const toElementDesc = ({	index,	key,	value }: any = OBJ) => `${index}. ${key}: ${value}`;

export const someVariableWhichCreateMelodyWhileITypingThem = true