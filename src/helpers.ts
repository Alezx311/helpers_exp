type N = number
type F = Function

type TObject = { [key: string]: unknown } | Record<string, unknown>

type A<T = unknown> = Array<T> | T[]
type O<K = string, V = unknown> =  K extends TObject ? { [k in keyof K]: K[k] } : K extends A<string> ? { [key: K[N]]: V } : { [key: K]: V}

const TEST_CODE = '.... . -.--   .--- ..- -.. .'
const TEST_MESSAGE = "HEY JUDE"
const strTransform = (str: string) => str.trim().toUpperCase()
const CHARS_SPECIAL = [' ', '\s', '\n', '\t']
const strReplaceNotInDict = (str: string, dict: string[], replaceSpecials: boolean = false) => str.split('').filter(char => {
	if(replaceSpecials && CHARS_SPECIAL.includes(char)) {
		return false
	}
	return dict.includes(char)
}).join('')

type StringWords<T extends string> = T extends `${infer W} ${infer R}` ? [W, ...StringWords<R>] : [T]
type StringChars<T extends string> = T extends `${infer C}${infer R}` ? [C, ...StringChars<R>] : []
type StringWith<T extends string, C extends string> = T extends `${C}${infer R}` ? `${C}${StringWithSome<R, C>}` : T
type StringWithOnly<T extends string, C extends string> = T extends `${C}${infer R}` ? StringWithOnly<R, C> : T
const strToWords = <T extends string>(str: T) => str.split(' ') as StringWords<T>
const strToChars = <T extends string>(str: T) => str.split('') as StringChars<T>
const toArray = (v?: any): typeof v extends A ? typeof v : A<typeof v> => Array.isArray(v) ? v : [v]

const isNull = (v?: any): v is null => v === null
const isUndefined = (v?: any): v is undefined => v === undefined
const isString = (v?: any): v is S => typeof v === 'string'
const isNumber = (v?: any): v is N => typeof v === 'number'
const isFunction = (v?: any): v is F => typeof v === 'function'
const isObject = (v?: any): v is O<keyof typeof v, typeof v[keyof typeof v]> => typeof v === 'object' && v !== null && !Array.isArray(v)
const isArray = (v?: any): v is A<typeof v[N]> => Array.isArray(v)
const isElement = (v?: any, arr?: any): v is typeof arr[N] => Array.isArray(v) && arr.includes(v)
const isKey = (v?: any, obj?: any): v is keyof typeof obj => isObject(obj) && isString(v) && obj[v] !== undefined
const isSubstr = (v?: any, str?: any): str is StringWith<typeof v> => isString(v) && isString(str) && str.includes(v)
const isEntry = (v?: any): v is [typeof v[0], typeof v[1]] => isArray(v) && isString(v[0]) && !isUndefined(v[1])

type Length<T> = T extends { length?: unknown } ? T["length"] : never
type ArrayElement<T> = T extends A ? T[N] : never
type ObjectEntries<T> = A<[keyof T, T[keyof T]]>
type ObjectKeys<T> = A<S<keyof T>>
type ObjectValues<T> = A<T[keyof T]>

const { keys, values, entries, fromEntries } = Object

const isStr = (v?: any): v is string => typeof v === 'string'
const isStrEvery = (v?: any, ch: string): v is StringWith<typeof ch> => typeof v === 'string'
const isStrSome = (v?: any, ch: string): v is string & `${typeof ch}` => typeof v === 'string'
const isArrayEvery = (v?: any): v is A => Array.isArray(v)
// const isDecodable = (v?: any): v is Array<any> | any[] => typeof v === 'string'
// const isEncodable = (v?: any): v is Array<any> | any[] => typeof v === 'string'
type TObjectReverseble = { [key: string]: string } | Record<string, string>
const objReverse = <T>(obj: T): T extends TObjectReverseble ? Record<T[keyof T], keyof T> : never => {
	const entriesSafe = entries(obj).filter(([k,v]) => [k,v].every(v => typeof v === 'string') )
	const result = fromEntries(entries(obj).map(([k,v]) => [v, k]))
	return result
}
const entriesArray = entries(obj).filter(el => Array.isArray(el) && typeof el[0] === 'string' && typeof el[1] === 'string')
const reversedArray = entriesArray.map(el => )
}
const DICT_DECODE = {
	' ': ' ',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'.-.-.-': '.',
	'--..--': ',',
	'..--..': '?',
	'-.-.--': '!',
	'-....-': '-',
	'-..-.': '/',
	'.--.-.': '@',
	'-.--.': '(',
	'-.--.-': ')',
} as const
const DICT_ENCODE = objReverse(DICT_DECODE) as const
	// { [k in TChar]: TCode }
type TDict = typeof DICT_DECODE
type TDictEncode = typeof DICT_ENCODE
type TCode = keyof TDict
type TChar = TDict[TCode]
const isCode = (s?: string): s is TCode => typeof s === 'string' && DICT_DECODE[s]
const isChar = (s?: string): s is TChar => typeof s === 'string' && DICT_ENCODE[s]
// const decodeChar = <T extends string>(char: T): T extends TCode ?
const MORSE_CODES = [...Object.keys(DICT_DECODE).filter(String)] as const as TCode[];
const MORSE_CHARS = [...Object.values(DICT_DECODE).filter(String)] as const as TChar[];
// type TCode<T = string> = T extends TChar ? TDictEncode[T] : never;
// type TChar<T = string> = T extends TCode ? TDictDecode[T] : never;
type TInput = S<TCode|TChar>
type TOutput<T extends TInput> = T extends TCode ? TDict[T] : T extends TChar ? TCode : S

//  const translateChar = <T extends string|TCode|TChar>(char:T):


 const morseEncode = <T extends TChar>(str: T): TCode => {

}

 const decodeMorse = (s: string) =>
  s.trim().split('   ').map(w => w.split(' ').map(l => DICT_DECODE[l]).join('')).join(' ');