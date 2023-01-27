import { randomInt, randomUUID } from 'crypto'
import path from 'path'

const objK = Object.keys
const objV = Object.values
const objE = Object.entries
const objF = Object.fromEntries

export class Constants {
  static UNDEFINED = undefined
  static NULL = null
  static BOOLEAN = true
  static STRING = 'String'
  static NUMBER = 42
  static ARRAY = [this.STRING, this.NUMBER]
  static OBJECT = { string: this.STRING, number: this.NUMBER }
  static FUNCTION = function () {
    return true
  }

  static LOREM = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
`

  static PRIMITIVES = [
    { key: 'UNDEFINED', value: this.UNDEFINED },
    { key: 'NULL', value: this.NULL },
    { key: 'BOOLEAN', value: this.BOOLEAN },
    { key: 'STRING', value: this.STRING },
    { key: 'NUMBER', value: this.NUMBER },
    { key: 'ARRAY', value: this.ARRAY },
    { key: 'OBJECT', value: this.OBJECT },
    { key: 'LOREM', value: this.LOREM },
    { key: 'FUNCTION', value: this.FUNCTION },
  ].map(src => {
    return {
      ...src,
      typeOf: typeof src.value,
      isTruthy: !!src.value,
      callback: function () {
        return src.value
      },
      is: function (v?: any) {
        return v === src.value || typeof v === typeof src.value
      },
      description: `Key: ${src.key}, Value: ${src.value}, TypeOf: ${typeof src.value}`,
    }
  })

  static TYPEOF = this.PRIMITIVES.reduce((acc, { typeOf }) => [...acc, typeOf], [])

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
  static RXP_NUMBERS_ONLY = new RegExp(/[0-9]/gim)
  static RXP_CHARS_AND_NUMBERS = new RegExp(/[a-z0-9]/gim)
  static RXP_NOT_CHARS_AND_NUMBERS = new RegExp(/[^a-z0-9]/gim)

  static KEYS = objK(this)
}

export default Constants
