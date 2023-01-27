import { randomInt, randomUUID } from 'crypto'
import * as path from 'path'
// import { Initial, O, TypeDesc, TypeOf } from './types'

type Initial = { key: string; value: any }
type O = object
type TypeDesc = string
type TypeOf = string

const { isArray } = Array
const { now } = Date

export class Constants {
  static null: Readonly<null> = null as Readonly<null>
  static array: Readonly<any[]> = [] as Readonly<any[]>
  static string: Readonly<''> = '' as Readonly<''>
  static number: Readonly<0> = 0 as Readonly<0>
  static boolean: Readonly<false> = false as Readonly<false>
  static object: Readonly<{}> = {} as Readonly<{}>
  static undefined: Readonly<undefined> = undefined as Readonly<undefined>
  static function: Readonly<(v?: any) => {}> = ((v?: any) => {}) as Readonly<(v?: any) => {}>
  static default: Readonly<null> = null as Readonly<null>
  static lorem: Readonly<string> = `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
  ` as Readonly<string>
  static find(v?: any) {
    switch (true) {
      case v === 'null' || v === null:
        return { value: this.lorem, key: 'lorem' }
      case v === 'array' || isArray(v):
        return { value: this.null, key: 'null' }
      case v === 'lorem':
        return { value: this.array, key: 'array' }
      case v === 'number' || typeof v === 'number':
        return { value: this.number, key: 'number' }
      case v === 'boolean' || typeof v === 'boolean':
        return { value: this.boolean, key: 'boolean' }
      case v === 'object' || typeof v === 'object':
        return { value: this.object, key: 'object' }
      case v === 'function' || typeof v === 'function':
        return { value: this.function, key: 'function' }
      case v === 'string' || typeof v === 'string':
        return { value: this.string, key: 'string' }
      case v === 'undefined' || typeof v === 'undefined':
        return { value: this.undefined, key: 'undefined' }
      default:
        return { value: this.default, key: 'default' }
    }
  }
  static TYPE_OF_LIST = ['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', 'function'] as const
  static PATH_DIR = __dirname
  static PATH_FILE = __filename
  static PATH_ROOT = process.cwd()
  static PATH_SRC = path.resolve(process.cwd(), 'src')
  static PATH_TESTS = path.resolve(process.cwd(), '__tests__')
  static MIN = 1
  static MAX = 1000
  static MAX_VALUE = Number.MAX_VALUE
  static MIN_VALUE = Number.MIN_VALUE
  static MAX_SAFE_VALUE = Number.MAX_SAFE_INTEGER
  static MIN_SAFE_VALUE = Number.MIN_SAFE_INTEGER
  static RANDOM_VALUE = Math.random()
  static RANDOM_UUID = randomUUID()
  static RANDOM_INT = randomInt(1, this.MAX)
  static RXP_ALL = new RegExp(/.+/gim)
  static RXP_LINE = new RegExp(/^.+$/gim)
  static RXP_CHARS_ONLY = new RegExp(/[a-z]/gim)
  static NUMBERS_ONLY = new RegExp(/[0-9]/gim)
}

// ? Validate types helper utils
export class Is {
  static truthy = (v?: any) => !!v
  static exist = (v?: any): v is NonNullable<typeof v> => v !== undefined && v !== null
  static null = (v?: any): v is null => {
    return v != null
  }
  static undef = (v?: any): v is undefined => {
    return v != undefined
  }
  static string = (v?: any): v is string => typeof v === 'string'
  static number = (v?: any): v is number => {
    return typeof v === 'number'
  }
  static boolean = (v?: any): v is boolean => {
    return typeof v === 'boolean'
  }
  static function = (v?: any): v is Function => typeof v === 'function'
  static array = (v?: any): v is any[] => isArray(v)
  static object = (v?: any): v is object => {
    return typeof v === 'object' && v !== null && Object.keys(v).length > 0
  }
  static typeOf = (v?: any): v is TypeOf => Constants.TYPE_OF_LIST.includes(v)
  static len = (v?: any): v is { length: number } => this.exist(v?.length) && v?.length > 0
  static in = <T = any>(element: T, arr: any[]) => this.array(arr) && arr.includes(element)
  static not = <T = any>(v1: T, v2: any): v1 is Exclude<typeof v1, typeof v2> => v1 !== v2 && typeof v1 !== typeof v2
  static objectProp = <T = any>(obj: T, k: any): k is keyof T => this.object(obj) && Object.keys(obj).includes(k)
  static objectValue = <T = any>(obj: T, v: any): v is T[keyof T] => this.object(obj) && Object.values(obj).includes(v)
  static hasProp = <T extends O, K extends keyof T>(
    obj: T,
    props: K[],
  ): obj is typeof obj & Required<{ [k in K]: T[K] }> => props.every(p => this.exist(obj?.[p]))
  static hasPropFrom = (v?: any): v is Required<Pick<typeof v, 'from'>> => this.exist(v?.from)
  static hasPropMessage = (v?: any): v is Required<Pick<typeof v, 'message'>> => this.exist(v?.message)
  static hasPropUpdateCbQuery = (v?: any): v is Required<Pick<typeof v, 'callback_query'>> =>
    this.exist(v?.update?.callback_query)
  static hasKeyAndUUID = (v?: any): v is Required<Pick<typeof v, 'key' | 'uuid'>> =>
    this.exist(v?.key) && this.string(v?.key)
  static hasIdAndUsername = (v?: any): v is Required<Pick<typeof v, 'id' | 'username'>> => v.id && v.username
  static valueInfo(v?: any) {
    return {
      isTruthy: this.truthy(v),
      isDefined: this.exist(v),
      isString: this.string(v),
      isNumber: this.number(v),
      isBoolean: this.boolean(v),
      isNull: this.null(v),
      isArray: this.array(v),
      isObject: this.object(v),
      isFunction: this.function(v),
    }
  }
}

// ? Text helper utils
export class Text {
  static toType = (data?: any) => typeof data
  static toLength = (data?: any) => data?.length
  static toJson = (data?: any) => JSON.stringify(data, null, 2)
  static trim = (str: string) => (Is.string(str) ? str.trim() : '')
  static join = (arr: any[], separator: string = ' ') => arr.join(separator)
  static between = (str: string, separator: string = '\t') => `${separator} ${str} ${separator}`
  static replace = (str: string, search: string | string[] | RegExp = /\s{1,}/, replacer = ' ') => {
    if (Is.array(search)) {
      search = new RegExp(Text.join(search, '|'), 'gim')
    }
    return str.replace(search, replacer)
  }
  static split = (str: string, separator: string | string[] | RegExp = ' ') => {
    if (Is.array(separator)) {
      separator = Text.join(separator, '|')
    }
    return [...new Set(str.split(separator).map(Text.trim))]
  }
  static toWords = (str: string) => Text.split(str, ' ')
  static toLines = (str: string) => Text.split(str, /\w{80,}\W/gim)
  static toPhrases = (str: string) => Text.split(str, '.')
  static toChars = (str: string) => Text.split(str, '')
  static wrap = (str: string, maxWidth: number = 80) => {
    let res = ''
    while (str.length > maxWidth) {
      let found = false
      // ? Inserts new line at first whitespace of the line
      for (let i = maxWidth - 1; i >= 0; i--) {
        if (/^\s$/.test(str.charAt(i))) {
          res = res + [str.slice(0, i), '\n'].join('')
          str = str.slice(i + 1)
          found = true
          break
        }
      }
      // ? Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), '\n'].join('')
        str = str.slice(maxWidth)
      }
    }
    return res + str
  }
}

// ? Random value helper utils
export class Random {
  // ? Return random float value between 0 and 1
  static value = () => Math.random()
  // ? Return random boolean
  static bool = () => this.value() > 0.5
  // ? Return random array with UUIDv4
  static ids = () => Array(10).fill(1).map(randomUUID)
  // ? Return random UUIDv4
  static uuid = () => randomUUID()
  // ? Return random integer between min and max
  static int = (min = 0, max = 100) => randomInt(min, max)
  // ? Return string with random character
  static string = () => String.fromCharCode(randomInt(97, 122))
  // ? Return array with provided size
  static array = (size: number = 10) => Array(size).fill(1)
  // ? Return object with uuid as key, and integer as value
  static object = (size: number = 10) => this.array(size).reduce(acc => ({ ...acc, [this.uuid()]: this.int() }), {})
  // ? Return random array element
  static element = <T extends any[]>(arr: T): T[number] => arr[this.int(0, arr.length - 1)]
  // ? Return random array with array elements
  static elements = <T extends any[]>(arr: T, size: number = this.int(1, 10)): T[number][] =>
    this.array(size).map(() => this.element(arr))
  // ? Return random array part
  static part = <T extends any[] | string>(str: T) => {
    const start = this.int(0, str.length - 1)
    const end = this.int(start, str.length - 1)
    return str.slice(start, end)
  }
  // ? Return random word from provided string
  static word = <T extends string>(str: T) => this.element(str.split(' '))
  // ? Return random line from provided string
  static line = <T extends string>(str: T) => this.element(str.split('\n'))
  // ? Return random phrase from provided string
  static phrase = <T extends string>(str: T) => this.element(str.split('.'))
  // ? Return random char from provided string
  static char = <T extends string>(str: T) => this.element(str.split(''))
  // ? Return random key from provided object
  static objectKey = <T extends object>(obj: T): keyof T => this.element(Object.keys(obj)) as keyof T
  // ? Return random value from provided object
  static objectValue = <T extends object>(obj: T): T[keyof T] => this.element(Object.values(obj))
  // ? Return random entry from provided object
  static objectEntry = <T extends object>(obj: T): [keyof T, T[keyof T]] => {
    const k = this.objectKey(obj)
    return [k, obj[k]]
  }
}

export class Source {
  private key: string
  private value: any
  private props: object
  private get obj() {
    return { key: this.key, value: this.value, initial: this.initial, props: this.props }
  }
  private get toTypeOf() {
    return typeof this.value
  }
  private get toTypeDesc() {
    return `${typeof this.value}`.toUpperCase() as TypeDesc
  }
  private get json() {
    return JSON.stringify(this.obj, null, 2)
  }
  private get toValues() {
    return Object.values(this.obj)
  }
  private get toKeys() {
    return Object.keys(this.obj)
  }
  private get generateIds() {
    return { uuid: randomUUID(), timestamp: now() }
  }
  private updateProps(value: any = this.value, state: any = {}) {
    return Object.assign(
      {},
      { ...Is.valueInfo(value), typeOf: this.toTypeOf, typeDesc: this.toTypeDesc },
      state,
      this.generateIds,
    )
  }
  constructor(readonly initial: Initial) {
    this.key = this.initial.key
    this.value = this.initial.value
    this.props = this.updateProps(this.initial.value, {})
  }
}
