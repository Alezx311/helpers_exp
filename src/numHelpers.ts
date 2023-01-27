import { A, N, S } from "../global"
import { Constants } from "./constants"
import { len } from "./typeHelpers"

const { MAX, MIN, RANDOM_SIZE, RANGE_RANDOM, ARRAY } = Constants

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `NumHelpers`

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
export const randomIndex = (arr: A = ARRAY) => {
	const l = len(arr)
	if (l < 1) return 0
	if (l < 3) return randomChoose() ? 1 : 0
	else return randomInt(l - 1, 0)
}
export const randomElement = (arr: A = ARRAY) => arr[randomIndex(arr)]
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



export class NumHelpers {
	static SOURCE = SOURCE

	static random = random
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
}
