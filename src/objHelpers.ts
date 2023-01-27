import { inspect } from "util"
import { N, O } from "../global"
import { Constants } from "./constants"

const { OBJ, objK } = Constants

export const SOURCE = Constants.getSource(__filename)
SOURCE.name = `ObjHelpers`

export const objInspect = (obj: O = OBJ) => inspect(obj, true, 10, false)
export const objToStr = (obj: O = OBJ) => JSON.stringify(obj, null, "\t")
export const objToStrPlain = (obj: O = OBJ) => JSON.stringify(obj)
export const mapKey = (obj: O = OBJ) =>
	objK(obj).map((key: any, index: N, obj: any) => ({
		key,
		index,
		value: obj[key]
	}))


export class ObjectHelpers {
	static SOURCE = SOURCE

	static objInspect = objInspect
	static objToStr = objToStr
	static objToStrPlain = objToStrPlain
	static mapKey = mapKey
}
