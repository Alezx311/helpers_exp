import { randomInt, randomUUID } from 'crypto'

type Iterable = { [Symbol.iterator]: any }

const isExist = (v?: any) => v !== undefined && v !== null
const isTruthy = (v?: any) => !!v && ['string', 'number', 'boolean', 'object'].includes(typeof v)

//^ =====>    Constructors    <=====

/**
 * * Number which can be iterated with spread syntax
 *
 * @class IterableNumber
 * @typedef {IterableNumber}
 * @extends {Number}
 * @example
 * const num = new IterableNumber(1337)
 * console.log([...num]) // <--- '[ 1, 3, 3, 7]'
 */
export class IterableNumber extends Number {
  *[Symbol.iterator]() {
    for (let digit of [...`${this}`].map(d => Number.parseInt(d))) {
      yield digit
    }
  }
}

/**
 * * Iterates over object keys and values
 *
 * @class IterableObject
 * @typedef {IterableObject}
 * @extends {Object}
 * @example
 * const obj = new IterableObject({ a: 1, b: 2, c: 3 })
 * console.log([ ...obj]) // [ { a: 1 }, { b: 2 }, { c: 3 }]
 */
export class IterableObject extends Object {
  *[Symbol.iterator]() {
    for (let k of Object.keys(this)) {
      yield { [k as keyof this]: this[k as keyof this] }
    }
  }
}

//^ =====>    Helpers    <=====

/**
 * * Return true if given value has iterable properties
 *
 * @param {?*} [v]
 * @returns {v is { [Symbol.iterator]: any }}
 */
export const hasIterator = (v?: any): v is Iterable =>
  (!!v && v[Symbol.iterator] !== undefined) || Object.getOwnPropertySymbols(v).includes(Symbol.iterator)

/**
 * * Create array with range from 1 to given size
 *
 * @template T
 * @param {number} size - size of sequence
 * @param {number} [start=1] - start integer, 1 by default
 * @returns {number[]}
 * @example
 * const sequence_3_from_2 = getArray(3, 2) // <--- [2,3,4]
 * const sequence5 = getArray(5) // <--- [1,2,3,4,5]
 * const sequence10 = getArray(10) // <--- [1,2,3,4,5,6,7,8,9,10]
 */
export const getArray = (size: number, start: number = 1): number[] =>
  Array(size)
    .fill(start)
    .map((v, i: number) => i + v)

/**
 * * Return typeof value or 'Object' for objects, 'Array' for arrays and 'Null' for null
 *
 * @param {*} v
 * @returns {string}
 */
export const getType = (v: any): string => {
  if (v === undefined) return 'undefined'
  if (v === null) return 'Null'
  if (Array.isArray(v)) return 'Array'
  const tp = typeof v
  return typeof v === 'object' ? `Object` : tp
}

/**
 * * Convert value to iterable.
 *
 * @template T
 * @param {unknown} [value=null] If value can not converted, array with single element will be returned
 * @returns {}
 */
export const getIterable = <T extends unknown>(value: T): Iterable => {
  if (hasIterator(value)) return value

  if (typeof value === 'number') return new IterableNumber(value)
  if (typeof value === 'object' && value !== null) return new IterableObject(value)

  return [value]
}

//^ =====>    Generators    <=====

/**
 * * Yield value n times
 *
 * @param {any} value
 * @param {number} repeats - number of repeats, Infinity for infinite loop
 * @returns {Generator<T>}
 */
export function* yieldValue(value: any, repeats: number): Generator<any, void, unknown> {
  let counter = 0
  while (counter < repeats) {
    yield value
    counter += 1
  }
}

/**
 * * Yields random elements from array
 *
 * @template T extends any[]
 * @param {T} value
 * @returns {Generator<T>}
 */
export function* yieldElementRandom<T>(value: T[]): Generator<T> {
  while (true) {
    yield value[randomInt(value.length - 1)]
  }
}

/**
 * * Loop through array elements
 *
 * @template T extends any[]
 * @param {T} value
 * @returns {Generator<T>}
 */
export function* yieldElementLooped<T>(value: T[]): Generator<T> {
  let i = 0
  while (true) {
    yield value[i]
    i = i < value.length ? i + 1 : 0
  }
}

/**
 * * Generator for iterate Integers
 *
 * @param {number} [start=0] Start of iterating range
 * @param {number} [end=Infinity] End of iterating range
 * @returns {Generator<number, void, unknown >}
 */
export function* yieldInteger(start: number = 0, end: number = Infinity): Generator<number> {
  let counter = start
  while (counter <= end) {
    yield counter
    counter += 1
  }
}

/**
 * * Generator function for iterating objects.
 *
 * @param {{[k:string]: unknown}} obj Object to iterate
 * @returns {Generator<{ key: string, value: unknown }, void, unknown >}
 */
export function* yieldObject(obj: { [k: string]: unknown }): Generator<{ key: string; value: unknown }, void, unknown> {
  for (let key in obj) {
    yield { key, value: obj[key] }
  }
}

/**
 * * Iterates over array values, and flattify it
 *
 * @template T extends any[]
 * @param {T[]} arr
 * @returns {T[number]}
 */
export function* yieldElementFlat<T extends any[]>(value: T): any {
  for (let v in value) {
    if (Array.isArray(v)) yield* yieldElementFlat(v)
    if (hasIterator(v)) yield* v
    else yield v
  }
}

/**
 * Generate basic database record
 *
 * @template T extends { prefix: string; initial: { [k: string]: unknown } | false }
 * @param {T} options
 * @returns {Generator<any, void, unknown>}
 */
export function* yieldDatabaseEntity<T extends { prefix: string; initial?: { [k: string]: unknown } | false }>(
  options?: T,
): Generator<any, void, unknown> {
  const prefix = options?.prefix || 'random'
  const initial = options?.initial || { deleted_at: null }

  const generate = () => {
    const now = Date.now()
    return {
      ...initial,
      created_at: now,
      updated_at: now,
      deleted_at: null,
      uuid: randomUUID(),
      key: `key_${prefix}_${randomInt(now)}_${now}`,
    }
  }

  while (true) {
    yield generate()
  }
}

//^ =====>    Tests and examples    <=====

/**
 * * Return generator function results, and filter it
 *
 * @param {*} fn generator function instance
 * @param {number} [repeats=100] Number of iterations, 100 by default
 * @returns {{ count: number; values: any[]; }}
 * @examples
 * const InfinityTest = testIterable(yieldInteger())
 * const Min3MaxInfinityTest = testIterable(yieldInteger(3))
 * const MinDefaultMax7Test = testIterable(yieldInteger(0, 7), 100)
 * const Min3Max7Test = testIterable(yieldInteger(3, 7), 100)
 * const iterateObjectTest = testIterable(yieldObject(TEST_OBJ), 100)
 * const iterateObjectRandomTest = testIterable(yieldObjectRecordRandom(TEST_OBJ), 100)
 * const iterateObjectLoopedTest = testIterable(yieldObjectRecordLoop(TEST_OBJ), 100)
 */
export function examplesFromIterable(fn: any, repeats: number = 100): { count: number; values: any[] } {
  let i = 0
  const values: any[] = []
  while (i <= repeats) {
    const step = fn.next()
    if (step.done) break
    values.push(step.value)
    i += 1
  }
  return { count: i, values }
}

// TODO Rewrite for different cases
function examplesFromYieldFunctions(size: number = 10) {
  const genDatabaseEntity = yieldDatabaseEntity()

  const ENTITY = genDatabaseEntity.next().value
  const ENTITY_KEYS = Object.keys(ENTITY)
  const ENTITY_VALUES = Object.keys(ENTITY)
  const ENTITY_ENTRIES = Object.entries(ENTITY)

  const genValue = yieldValue(Math.random(), 7)
  const genElementRandom = yieldElementRandom(ENTITY_KEYS)
  const genElementLooped = yieldElementLooped(ENTITY_KEYS)
  const genInteger = yieldInteger(237563390)
  const genObject = yieldObject(ENTITY)
  const genElementFlat = yieldElementFlat([ENTITY_KEYS, [ENTITY_VALUES, [ENTITY_ENTRIES]]])

  return getArray(size).map((_, index: number) => {
    return {
      index,
      yieldValue: genValue.next().value,
      yieldElementRandom: genElementRandom.next().value,
      yieldElementLooped: genElementLooped.next().value,
      yieldInteger: genInteger.next().value,
      yieldObject: genObject.next().value,
      yieldElementFlat: genElementFlat.next().value,
      yieldDatabaseEntity: genDatabaseEntity.next().value,
    }
  })
}
