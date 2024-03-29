import { A, N, S } from "../global"
import { Constants } from "../src/constants"
export const { ARR, OBJ, STR, objK } = Constants

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `ArrayHelpers`

export const mapByFunc = (arr: A = ARR, func = (v: any) => !!v) => arr.map((value, index) => ({ value, index, func }))
export const mapByValue = (arr: A = ARR) => arr.map((value, index) => ({ value, index }))
export const sortRandom = (arr: A = ARR) => arr.sort((a, b) => (~~(Math.random() - 0.5) ? 1 : -1))
export const sortLength = (arr: A = ARR) => arr.sort((a: any[] | S, b: any[] | S) => (a.length > b.length ? 1 : -1))
export const sortBigger = (arr: A = ARR) => arr.sort((a: S | N, b: S | N) => (a > b ? 1 : -1))
export const toSorted = (arr: A = ARR) => arr.sort()
export const toMerged = (...arrs: A[]) => arrs.reduce((acc, v) => [...acc, ...v], [])
export const toFlat = (...arrs: A[]) => [...arrs].flat(Infinity)
export const mapByIndex = (arr: A = ARR) => arr.reduce((value, index) => ({ value, index }))
export const addIndexProp = (arr: A = ARR) =>
	arr.map((value: any, index: N) => ({
		value,
		index
	}))
export const mapByType = (arr: A = ARR) => arr.reduce((value, index) => ({ value, index, type: typeof value }))
export const toUnical = (arr: A = ARR) => [...new Set(arr)]
export const arrFilterValid = (arr: A = ARR) => arr.filter(Boolean)


export class ArrayHelpers {
	static SOURCE = SOURCE

	static mapByFunc = mapByFunc
	static mapByValue = mapByValue
	static sortRandom = sortRandom
	static sortLength = sortLength
	static sortBigger = sortBigger
	static toSorted = toSorted
	static toMerged = toMerged
	static toFlat = toFlat
	static mapByIndex = mapByIndex
	static addIndexProp = addIndexProp
	static mapByType = mapByType
	static toUnical = toUnical
	static arrFilterValid = arrFilterValid
}
