import { Random, Is, Text, Constants, Expect } from '../src/utils'

const { STRING, OBJECT, LOREM, ARRAY, PRIMITIVES } = Constants

describe('Expect', () => {
  it('isDefined', () => {
    expect(Expect).toBeDefined()
  })

  it('typeEqual', () => {
    expect(Expect.typeEqual).toBeDefined()
    expect(typeof Expect.typeEqual).toBe('function')
  })

  it('typeFunction', () => {
    expect(Expect.typeFunction).toBeDefined()
    expect(typeof Expect.typeFunction).toBe('function')
  })

  it('typeBoolean', () => {
    expect(Expect.typeBoolean).toBeDefined()
    expect(typeof Expect.typeBoolean).toBe('function')
  })

  it('typeString', () => {
    expect(Expect.typeString).toBeDefined()
    expect(typeof Expect.typeString).toBe('function')
  })

  it('typeNumber', () => {
    expect(Expect.typeNumber).toBeDefined()
    expect(typeof Expect.typeNumber).toBe('function')
  })

  it('typeObject', () => {
    expect(Expect.typeObject).toBeDefined()
    expect(typeof Expect.typeObject).toBe('function')
  })

  it('typeArray', () => {
    expect(Expect.typeArray).toBeDefined()
    expect(typeof Expect.typeArray).toBe('function')
  })
})

describe('Constants', () => {
  it('isDefined', () => {
    expect(Constants).toBeDefined()
  })

  it(`Constants.UNDEFINED`, () => {
    const value = Constants.UNDEFINED
    expect(value).toBeUndefined()
  })

  it(`Constants.NULL`, () => {
    const value = Constants.NULL
    expect(value).toBeNull()
  })

  it(`Constants.BOOLEAN`, () => {
    const value = Constants.BOOLEAN

    expect(value).toBeDefined()
    expect(typeof value).toBe('boolean')
  })

  it(`Constants.STRING`, () => {
    const value = Constants.STRING

    expect(value).toBeDefined()
    expect(typeof value).toBe('string')
  })

  it(`Constants.NUMBER`, () => {
    const value = Constants.NUMBER

    expect(value).toBeDefined()
    expect(typeof value).toBe('number')
  })

  it(`Constants.ARRAY`, () => {
    const value = Constants.ARRAY

    expect(value).toBeDefined()
    expect(Array.isArray).toBe(true)
  })

  it(`Constants.OBJECT`, () => {
    const value = Constants.OBJECT

    expect(value).toBeDefined()
    expect(typeof value).toBe('object')
  })

  it(`Constants.FUNCTION`, () => {
    const value = Constants.FUNCTION

    expect(value).toBeDefined()
    expect(typeof value).toBe('function')
  })

  it(`Constants.PRIMITIVES`, () => {
    const value = Constants.PRIMITIVES

    expect(value).toBeDefined()

    value.map(src => {
      expect(src).toBeDefined()

      expect(src.key).toBeDefined()
      expect(src.typeOf).toBeDefined()
      expect(src.description).toBeDefined()
      expect(src.callback).toBeDefined()

      expect(typeof src.typeOf).toBe('string')
      expect(typeof src.description).toBe('string')
      expect(typeof src.callback).toBe('function')
      expect(typeof src.key).toBe('string')
      expect(typeof src.value).toBe(src.typeOf)
    })
  })

  it(`Constants.TYPEOF`, () => {
    const value = Constants.TYPEOF

    expect(value).toBeDefined()
  })

  it(`Constants.PATH_DIR`, () => {
    const value = Constants.PATH_DIR

    expect(value).toBeDefined()
  })

  it(`Constants.PATH_FILE`, () => {
    const value = Constants.PATH_FILE

    expect(value).toBeDefined()
  })

  it(`Constants.PATH_ROOT`, () => {
    const value = Constants.PATH_ROOT

    expect(value).toBeDefined()
  })

  it(`Constants.PATH_SRC`, () => {
    const value = Constants.PATH_SRC

    expect(value).toBeDefined()
  })

  it(`Constants.PATH_TESTS`, () => {
    const value = Constants.PATH_TESTS

    expect(value).toBeDefined()
  })

  it(`Constants.MIN`, () => {
    const value = Constants.MIN

    expect(value).toBeDefined()
  })

  it(`Constants.MAX`, () => {
    const value = Constants.MAX

    expect(value).toBeDefined()
  })

  it(`Constants.MAX_VALUE`, () => {
    const value = Constants.MAX_VALUE

    expect(value).toBeDefined()
  })

  it(`Constants.MIN_VALUE`, () => {
    const value = Constants.MIN_VALUE

    expect(value).toBeDefined()
  })

  it(`Constants.MAX_SAFE_VALUE`, () => {
    const value = Constants.MAX_SAFE_VALUE

    expect(value).toBeDefined()
  })

  it(`Constants.MIN_SAFE_VALUE`, () => {
    const value = Constants.MIN_SAFE_VALUE

    expect(value).toBeDefined()
  })

  it(`Constants.RANDOM_VALUE`, () => {
    const value = Constants.RANDOM_VALUE

    expect(value).toBeDefined()
  })

  it(`Constants.RANDOM_UUID`, () => {
    const value = Constants.RANDOM_UUID

    expect(value).toBeDefined()
  })

  it(`Constants.RANDOM_INT`, () => {
    const value = Constants.RANDOM_INT

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_ALL`, () => {
    const value = Constants.RXP_ALL

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_LINE`, () => {
    const value = Constants.RXP_LINE

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_CHARS_ONLY`, () => {
    const value = Constants.RXP_CHARS_ONLY

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_NUMBERS_ONLY`, () => {
    const value = Constants.RXP_NUMBERS_ONLY

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_CHARS_AND_NUMBERS`, () => {
    const value = Constants.RXP_CHARS_AND_NUMBERS

    expect(value).toBeDefined()
  })

  it(`Constants.RXP_NOT_CHARS_AND_NUMBERS`, () => {
    const value = Constants.RXP_NOT_CHARS_AND_NUMBERS

    expect(value).toBeDefined()
  })
})

describe('Random', () => {
  it('isDefined', () => {
    expect(Random).toBeDefined()
  })

  it('Random.value -> Return random float value between 0 and 1', () => {
    const fn = Random.value

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(typeof result).toBe('number')
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(1)
  })

  it('Random.bool -> Return random boolean', () => {
    const fn = Random.bool

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(typeof result).toBe('boolean')
    expect([true, false]).toContain(result)
  })

  it('Random.ids -> Return random array with UUIDv4', () => {
    const fn = Random.ids

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)

    expect(result.length).toBeGreaterThanOrEqual(1)

    result.map(element => {
      expect(typeof element).toBe('string')
      expect(element).toHaveLength(36)
    })
  })

  it('Random.uuid -> Return random UUIDv4', () => {
    const fn = Random.uuid

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(result).toHaveLength(36)
  })

  it('Random.int -> Return random integer between min and max', () => {
    const fn = Random.int

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(311, 777)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('number')
    expect(result).toBeGreaterThanOrEqual(311)
    expect(result).toBeLessThanOrEqual(777)
  })

  it('Random.string -> Return string with random character', () => {
    const fn = Random.string

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
  })

  it('Random.array -> Return array with provided size', () => {
    const fn = Random.array

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
  })

  it('Random.object -> Return object with uuid as key, and integer as value', () => {
    const fn = Random.object

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn()

    expect(result).toBeTruthy()
    expect(typeof result).toBe('object')
  })

  it('Random.element -> Return random array element', () => {
    const fn = Random.element

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const inputs = ['el1', 'el2', 'el3']
    const result = fn(inputs)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(inputs).toContain(result)
  })

  it('Random.elements -> Return random array with array elements', () => {
    const fn = Random.elements

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const inputs = ['el1', 'el2', 'el3']
    const result = fn(inputs, 3)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
    expect(typeof result).toBe('string')
    expect(result.length).toBe(3)
    expect(result.every(el => inputs.includes(el))).toBe(true)
  })

  it('Random.part -> Return random array part', () => {
    const fn = Random.part

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const inputs = ['el1', 'el2', 'el3']
    const result = fn(inputs)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
  })

  it('Random.word -> Return random word from provided string', () => {
    const fn = Random.word

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(Constants.LOREM)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(Constants.LOREM).toContain(result)
  })

  it('Random.line -> Return random line from provided string', () => {
    const fn = Random.line

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(Constants.LOREM)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(Constants.LOREM).toContain(result)
  })

  it('Random.phrase -> Return random phrase from provided string', () => {
    const fn = Random.phrase

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(Constants.LOREM)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(Constants.LOREM).toContain(result)
  })

  it('Random.char -> Return random char from provided string', () => {
    const fn = Random.char

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(Constants.LOREM)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('string')
    expect(Constants.LOREM).toContain(result)
  })

  it('Random.objectKey -> Return random key from provided object', () => {
    const fn = Random.objectKey

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const input = Constants.OBJECT
    const result = fn(input)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('object')
    expect(Object.keys(input)).toContain(result)
  })

  it('Random.objectValue -> Return random value from provided object', () => {
    const fn = Random.objectValue

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const input = Constants.OBJECT
    const result = fn(input)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('object')
    expect(Object.values(input)).toContain(result)
  })

  it('Random.objectEntry -> Return random entry from provided object', () => {
    const fn = Random.objectEntry

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const input = Constants.OBJECT
    const result = fn(input)

    expect(result).toBeTruthy()
    expect(typeof result).toBe('object')
    expect(Object.entries(input)).toContain(result)
  })
})

describe('Text', () => {
  it('isDefined', () => {
    expect(Text).toBeDefined()
  })

  it('Text.toType', () => {
    const fn = Text.toType

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(({ value }) => {
      const result = fn(value)

      expect(result).toBeTruthy()
      expect(result).toBe(typeof value)
    })
  })

  it('Text.toLength', () => {
    const fn = Text.toLength

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM)

    expect(result).toBe(LOREM.length)
  })

  it('Text.toJson', () => {
    const fn = Text.toJson

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    expect(typeof fn(OBJECT)).toBe('string')
  })

  it('Text.toPretty', () => {
    const fn = Text.toPretty

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    expect(typeof fn(OBJECT)).toBe('string')
  })

  it('Text.trim', () => {
    const fn = Text.trim

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM)

    expect(result).toBe(LOREM.trim())
  })

  it('Text.join', () => {
    const fn = Text.join

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const char = ' -> '
    const result = fn(ARRAY, char)

    expect(result).toBe(ARRAY.join(char))
  })

  it('Text.between', () => {
    const fn = Text.between

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(STRING)
    const rxp = new RegExp(`.+${STRING}.+`, 'i')

    expect(result).toMatch(rxp)
  })

  it('Text.replace', () => {
    const fn = Text.replace

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM, 'Lorem', 'Replaced')

    expect(result).toBe(LOREM.replace('Lorem', 'Replaced'))
  })

  it('Text.split', () => {
    const fn = Text.split

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(STRING, '')

    expect(result).toBeTruthy()
    expect(result).toHaveLength(STRING.split('').length)
    expect(Array.isArray(result)).toBe(true)
  })

  it('Text.toWords', () => {
    const fn = Text.toWords

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(1)
  })

  it('Text.toLines', () => {
    const fn = Text.toLines

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(1)
  })

  it('Text.toPhrases', () => {
    const fn = Text.toPhrases

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(1)
  })

  it('Text.toChars', () => {
    const fn = Text.toChars

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(STRING)

    expect(result).toBeTruthy()
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBeGreaterThan(1)
  })

  it('Text.wrap', () => {
    const fn = Text.wrap

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const result = fn(LOREM, 10)

    expect(typeof result).toBe('string')
    expect(result).not.toBe(LOREM)
    expect(result.length).toBeGreaterThan(1)
  })

  it('Text.writeBackup', () => {
    const fn = Text.writeBackup

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')
  })
})

describe('Is', () => {
  it('isDefined', () => {
    expect(Is).toBeDefined()
  })

  it('Is.in', () => {
    const fn = Is.in

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    expect(fn(PRIMITIVES[0], PRIMITIVES)).toBe(true)
    expect(fn('unknown element', PRIMITIVES)).toBe(false)
  })

  it('Is.exist', () => {
    const fn = Is.exist

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(src.value !== null && src.value !== undefined)
    })
  })

  it('Is.len', () => {
    const fn = Is.len

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(src.value?.length > 0)
    })
  })

  it('Is.string', () => {
    const fn = Is.string

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(typeof src.value === 'string')
    })
  })

  it('Is.number', () => {
    const fn = Is.number

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(typeof src.value === 'number')
    })
  })

  it('Is.boolean', () => {
    const fn = Is.boolean

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(typeof src.value === 'boolean')
    })
  })

  it('Is.func', () => {
    const fn = Is.func

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(typeof src.value === 'function')
    })
  })

  it('Is.object', () => {
    const fn = Is.object

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(typeof src.value === 'object')
    })
  })

  it('Is.array', () => {
    const fn = Is.array

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    PRIMITIVES.forEach(src => {
      const result = fn(src.value)
      expect(typeof result).toBe('boolean')
      expect(result).toBe(Array.isArray(src.value))
    })
  })

  it('Is.objectProp', () => {
    const fn = Is.objectProp

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const inputs = Object.keys(Constants)

    expect(inputs.every(k => fn(k, Constants))).toBe(true)
    expect(fn('invalid prop', Constants)).toBe(false)
  })

  it('Is.objectValue', () => {
    const fn = Is.objectValue

    expect(fn).toBeDefined()
    expect(typeof fn).toBe('function')

    const inputs = Object.values(Constants)

    expect(inputs.every(v => fn(v, Constants))).toBe(true)
    expect(fn('invalid value', Constants)).toBe(false)
  })
})
