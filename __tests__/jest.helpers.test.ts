class JestCallbackCustom {
  static isTypeOfOrNull(value?: any, expected?: any) {
    if (value !== null) {
      expect(typeof value).toBe(expected);
      expect(value).toBeDefined();
      expect(value).toBeTruthy();
    } else {
      expect(value).toBeNull();
    }
  }
  static isNullOrTruthy(value?: any, expected?: any) {
    if (value !== null) {
      expect(value).toBeDefined();
      expect(value).toBeTruthy();
    } else {
      expect(value).toBeNull();
    }
  }
  static isStringWithLength(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(typeof value).toBe('string');
    expect(value).toHaveProperty('length');
    expect(value.length).toBeGreaterThan(0);
  }
  static isNumberNotNull(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(typeof value).toBe('number');
    expect(value).toBeGreaterThan(0);
    expect(value).toBeLessThan(Number.MAX_SAFE_INTEGER);
  }
  static isBooleanValue(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();

    expect(typeof value).toBe('boolean');
  }
  static isArrayWithElements(value?: any, expected?: any) {
    expect(Array.isArray(value)).toBe(true);
    expect(value).toBeInstanceOf(Array);

    expect(value).toBeDefined();
    expect(value).toHaveProperty('length');
    expect(value.length).toBeGreaterThan(0);

    expect(value).toContain(expected);
  }
  static isObjectWithProps(value?: any, expected?: any) {
    expect(typeof value).toBe('object');
    expect(value).not.toBeNull();

    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(value).toHaveProperty(expected);
  }

  static isClassMethodDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
    expect(value).toHaveProperty(expected);
    expect(value[expected]).toBeTruthy();
    expect(value[expected]).not.toBeNull();
    expect(typeof value[expected]).toBe('function');
  }

  static isClassPropertyDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
    expect(value).toHaveProperty(expected);
    expect(value[expected]).toBeTruthy();
    expect(value[expected]).not.toBeNull();
    expect(typeof value[expected]).not.toBe('function');
  }
}

class JestCallbacks {
  static toReturn(value?: any, expected?: any) {
    expect(value).toReturn();
  }

  static toThrow(value?: any, expected?: any) {
    expect(value).toThrow();
  }

  static toThrowError(value?: any, expected?: any) {
    expect(value).toThrowError();
  }

  static toThrowErrorMatchingSnapshot(value?: any, expected?: any) {
    expect(value).toThrowErrorMatchingSnapshot();
  }

  static toThrowErrorMatchingInlineSnapshot(value?: any, expected?: any) {
    expect(value).toThrowErrorMatchingInlineSnapshot();
  }

  static toHaveBeenCalled(value?: any, expected?: any) {
    expect(value).toHaveBeenCalled();
  }

  static toHaveBeenCalledWith(value?: any, expected?: any) {
    expect(value).toHaveBeenCalledWith();
  }

  static toHaveBeenLastCalledWith(value?: any, expected?: any) {
    expect(value).toHaveBeenLastCalledWith();
  }

  static toHaveLastReturnedWith(value?: any, expected?: any) {
    expect(value).toHaveLastReturnedWith();
  }

  static lastCalledWith(value?: any, expected?: any) {
    expect(value).lastCalledWith();
  }

  static lastReturnedWith(value?: any, expected?: any) {
    expect(value).lastReturnedWith();
  }

  static toBeCalled(value?: any, expected?: any) {
    expect(value).toBeCalled();
  }

  static toBeCalledWith(value?: any, expected?: any) {
    expect(value).toBeCalledWith();
  }

  static toBeDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
  }

  static toBeFalsy(value?: any, expected?: any) {
    expect(value).toBeFalsy();
  }

  static toBeNull(value?: any, expected?: any) {
    expect(value).toBeNull();
  }

  static toBeTruthy(value?: any, expected?: any) {
    expect(value).toBeTruthy();
  }

  static toBeUndefined(value?: any, expected?: any) {
    expect(value).toBeUndefined();
  }

  static toBeNaN(value?: any, expected?: any) {
    expect(value).toBeNaN();
  }

  static toHaveReturned(value?: any, expected?: any) {
    expect(value).toHaveReturned();
  }

  static toBe(value: any, expected: any) {
    expect(value).toBe(expected);
  }

  static toBeCloseTo(value: any, expected: any) {
    expect(value).toBeCloseTo(expected);
  }

  static toBeGreaterThan(value: any, expected: any) {
    expect(value).toBeGreaterThan(expected);
  }

  static toBeGreaterThanOrEqual(value: any, expected: any) {
    expect(value).toBeGreaterThanOrEqual(expected);
  }

  static toBeInstanceOf(value: any, expected: any) {
    expect(value).toBeInstanceOf(expected);
  }

  static toBeLessThan(value: any, expected: any) {
    expect(value).toBeLessThan(expected);
  }

  static toBeLessThanOrEqual(value: any, expected: any) {
    expect(value).toBeLessThanOrEqual(expected);
  }

  static toContain(value: any, expected: any) {
    expect(value).toContain(expected);
  }

  static toContainEqual(value: any, expected: any) {
    expect(value).toContainEqual(expected);
  }

  static toEqual(value: any, expected: any) {
    expect(value).toEqual(expected);
  }

  static toHaveBeenCalledTimes(value: any, expected: any) {
    expect(value).toHaveBeenCalledTimes(expected);
  }

  static toHaveBeenNthCalledWith(value: any, expected: any) {
    expect(value).toHaveBeenNthCalledWith(expected);
  }

  static toHaveLength(value: any, expected: any) {
    expect(value).toHaveLength(expected);
  }

  static toHaveNthReturnedWith(value: any, expected: any) {
    expect(value).toHaveNthReturnedWith(expected);
  }

  static toHaveProperty(value: any, expected: any) {
    expect(value).toHaveProperty(expected);
  }

  static toHaveReturnedTimes(value: any, expected: any) {
    expect(value).toHaveReturnedTimes(expected);
  }

  static toHaveReturnedWith(value: any, expected: any) {
    expect(value).toHaveReturnedWith(expected);
  }

  static toMatch(value: any, expected: any) {
    expect(value).toMatch(expected);
  }

  static toMatchObject(value: any, expected: any) {
    expect(value).toMatchObject(expected);
  }

  static toStrictEqual(value: any, expected: any) {
    expect(value).toStrictEqual(expected);
  }
}

type JestCbType = typeof JestCallbacks;
type JKey = keyof JestCbType;
type JestCb = Function | ((...v: any) => any);

type TestSource = { key: JKey; desc: any; list: TestOptions[] };
type TestOptions = { key: JKey | string; input: any; expected: any; desc: string };
type TestResults = TestOptions & { result: any; index?: number };
type Test = [string, JestCb | Test[]];

class JestHelper {
  static CB_NAMES: ReadonlyArray<JKey> = Object.keys(JestCallbacks) as ReadonlyArray<JKey>;
  static CB_SOURCES = this.CB_NAMES.map(key => ({ key, callback: JestCallbacks[key] as JestCb }));

  static errorCb(key: string) {
    return new Error(`Callback ${key} not found`);
  }

  static getOptions(opt?: any): any {
    return Object.assign({}, opt, { input: null, expected: null, index: 0 });
  }

  static getDesc(options: any): string {
    const { index, expected, input, key } = this.getOptions(options);
    const result = options?.desc ?? `${key}. ${index}: Should return ${expected} for ${input}`;
    return result;
  }

  static getCallbackByKey(key: JKey): JestCb {
    return (JestCallbacks[key] ? JestCallbacks[key] : () => this.errorCb(key)) as JestCb;
  }

  static getOne(options: TestOptions & { key: JKey }): Test {
    const desc = options?.desc ?? this.getDesc(options);
    const fn = this.getCallbackByKey(options.key);
    const testFn = () => {
      const result = fn(options?.input);
      expect(result).toBe(options?.expected);
      return { options, result };
    };
    return [desc, testFn];
  }

  static getMany(key: JKey, src: TestSource): Test {
    const tests = src.list.map(el => this.getOne({ ...el, key }));
    return [src.desc, () => tests];
  }

  static isCbName(key?: any): key is JKey {
    return this.CB_NAMES.includes(key);
  }

  static CALLBACKS = Object.keys(JestCallbacks).filter(
    key => !key.startsWith('_') && typeof JestCallbacks[key] === 'function',
  );

  static isCallbackName(key: any): key is JKey {
    return this.CALLBACKS.includes(key);
  }

  static run(key: JKey, options: TestOptions) {
    const { input, expected, desc } = this.getOptions(options);
    const fn = this.getCallbackByKey(key);
    const test = () => {
      const result = fn(input);
      expect(result).toBe(expected);
      return { input, expected, result };
    };

    return [desc, test];
  }
  static fromNamesArray(keys: JKey[]) {
    return keys.map((key, index: number) => ({
      key,
      index,
      run: (options: TestOptions) => [...this.run(key, this.getOptions(options))],
    }));
  }

  static runAll(input: any, expected: any) {
    return [
      { key: 'toReturn', input, expected, desc: 'example of toReturn' },
      { key: 'toThrow', input, expected, desc: 'example of toThrow' },
      { key: 'toThrowError', input, expected, desc: 'example of toThrowError' },
      { key: 'toThrowErrorMatchingSnapshot', input, expected, desc: 'example of toThrowErrorMatchingSnapshot' },
      {
        key: 'toThrowErrorMatchingInlineSnapshot',
        input,
        expected,
        desc: 'example of toThrowErrorMatchingInlineSnapshot',
      },
      { key: 'toHaveBeenCalled', input, expected, desc: 'example of toHaveBeenCalled' },
      { key: 'toHaveBeenCalledWith', input, expected, desc: 'example of toHaveBeenCalledWith' },
      { key: 'toHaveBeenLastCalledWith', input, expected, desc: 'example of toHaveBeenLastCalledWith' },
      { key: 'toHaveLastReturnedWith', input, expected, desc: 'example of toHaveLastReturnedWith' },
      { key: 'lastCalledWith', input, expected, desc: 'example of lastCalledWith' },
      { key: 'lastReturnedWith', input, expected, desc: 'example of lastReturnedWith' },
      { key: 'toBeCalled', input, expected, desc: 'example of toBeCalled' },
      { key: 'toBeCalledWith', input, expected, desc: 'example of toBeCalledWith' },
      { key: 'toBeDefined', input, expected, desc: 'example of toBeDefined' },
      { key: 'toBeFalsy', input, expected, desc: 'example of toBeFalsy' },
      { key: 'toBeNull', input, expected, desc: 'example of toBeNull' },
      { key: 'toBeTruthy', input, expected, desc: 'example of toBeTruthy' },
      { key: 'toBeUndefined', input, expected, desc: 'example of toBeUndefined' },
      { key: 'toBeNaN', input, expected, desc: 'example of toBeNaN' },
      { key: 'toHaveReturned', input, expected, desc: 'example of toHaveReturned' },
      { key: 'toBe', input, expected, desc: 'example of toBe' },
      { key: 'toBeCloseTo', input, expected, desc: 'example of toBeCloseTo' },
      { key: 'toBeGreaterThan', input, expected, desc: 'example of toBeGreaterThan' },
      { key: 'toBeGreaterThanOrEqual', input, expected, desc: 'example of toBeGreaterThanOrEqual' },
      { key: 'toBeInstanceOf', input, expected, desc: 'example of toBeInstanceOf' },
      { key: 'toBeLessThan', input, expected, desc: 'example of toBeLessThan' },
      { key: 'toBeLessThanOrEqual', input, expected, desc: 'example of toBeLessThanOrEqual' },
      { key: 'toContain', input, expected, desc: 'example of toContain' },
      { key: 'toContainEqual', input, expected, desc: 'example of toContainEqual' },
      { key: 'toEqual', input, expected, desc: 'example of toEqual' },
      { key: 'toHaveBeenCalledTimes', input, expected, desc: 'example of toHaveBeenCalledTimes' },
      { key: 'toHaveBeenNthCalledWith', input, expected, desc: 'example of toHaveBeenNthCalledWith' },
      { key: 'toHaveLength', input, expected, desc: 'example of toHaveLength' },
      { key: 'toHaveNthReturnedWith', input, expected, desc: 'example of toHaveNthReturnedWith' },
      { key: 'toHaveProperty', input, expected, desc: 'example of toHaveProperty' },
      { key: 'toHaveReturnedTimes', input, expected, desc: 'example of toHaveReturnedTimes' },
      { key: 'toHaveReturnedWith', input, expected, desc: 'example of toHaveReturnedWith' },
      { key: 'toMatch', input, expected, desc: 'example of toMatch' },
      { key: 'toMatchObject', input, expected, desc: 'example of toMatchObject' },
      { key: 'toStrictEqual', input, expected, desc: 'example of toStrictEqual' },
    ].map(obj => this.getOne(this.getOptions(obj)));
  }
}

import * as is from '../src/is';

class JestCallbackCustom {
  static isTypeOfOrNull(value?: any, expected?: any) {
    if (value !== null) {
      expect(typeof value).toBe(expected);
      expect(value).toBeDefined();
      expect(value).toBeTruthy();
    } else {
      expect(value).toBeNull();
    }
  }
  static isNullOrTruthy(value?: any, expected?: any) {
    if (value !== null) {
      expect(value).toBeDefined();
      expect(value).toBeTruthy();
    } else {
      expect(value).toBeNull();
    }
  }
  static isStringWithLength(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(typeof value).toBe('string');
    expect(value).toHaveProperty('length');
    expect(value.length).toBeGreaterThan(0);
  }
  static isNumberNotNull(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(typeof value).toBe('number');
    expect(value).toBeGreaterThan(0);
    expect(value).toBeLessThan(Number.MAX_SAFE_INTEGER);
  }
  static isBooleanValue(value?: any, expected?: any) {
    expect(value).not.toBeNull();
    expect(value).toBeDefined();

    expect(typeof value).toBe('boolean');
  }
  static isArrayWithElements(value?: any, expected?: any) {
    expect(Array.isArray(value)).toBe(true);
    expect(value).toBeInstanceOf(Array);

    expect(value).toBeDefined();
    expect(value).toHaveProperty('length');
    expect(value.length).toBeGreaterThan(0);

    expect(value).toContain(expected);
  }
  static isObjectWithProps(value?: any, expected?: any) {
    expect(typeof value).toBe('object');
    expect(value).not.toBeNull();

    expect(value).toBeDefined();
    expect(value).toBeTruthy();

    expect(value).toHaveProperty(expected);
  }

  static isClassMethodDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
    expect(value).toHaveProperty(expected);
    expect(value[expected]).toBeTruthy();
    expect(value[expected]).not.toBeNull();
    expect(typeof value[expected]).toBe('function');
  }

  static isClassPropertyDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
    expect(value).toHaveProperty(expected);
    expect(value[expected]).toBeTruthy();
    expect(value[expected]).not.toBeNull();
    expect(typeof value[expected]).not.toBe('function');
  }
}

class JestCallbacks {
  static toReturn(value?: any, expected?: any) {
    expect(value).toReturn();
  }

  static toThrow(value?: any, expected?: any) {
    expect(value).toThrow();
  }

  static toThrowError(value?: any, expected?: any) {
    expect(value).toThrowError();
  }

  static toThrowErrorMatchingSnapshot(value?: any, expected?: any) {
    expect(value).toThrowErrorMatchingSnapshot();
  }

  static toThrowErrorMatchingInlineSnapshot(value?: any, expected?: any) {
    expect(value).toThrowErrorMatchingInlineSnapshot();
  }

  static toHaveBeenCalled(value?: any, expected?: any) {
    expect(value).toHaveBeenCalled();
  }

  static toHaveBeenCalledWith(value?: any, expected?: any) {
    expect(value).toHaveBeenCalledWith();
  }

  static toHaveBeenLastCalledWith(value?: any, expected?: any) {
    expect(value).toHaveBeenLastCalledWith();
  }

  static toHaveLastReturnedWith(value?: any, expected?: any) {
    expect(value).toHaveLastReturnedWith();
  }

  static lastCalledWith(value?: any, expected?: any) {
    expect(value).lastCalledWith();
  }

  static lastReturnedWith(value?: any, expected?: any) {
    expect(value).lastReturnedWith();
  }

  static toBeCalled(value?: any, expected?: any) {
    expect(value).toBeCalled();
  }

  static toBeCalledWith(value?: any, expected?: any) {
    expect(value).toBeCalledWith();
  }

  static toBeDefined(value?: any, expected?: any) {
    expect(value).toBeDefined();
  }

  static toBeFalsy(value?: any, expected?: any) {
    expect(value).toBeFalsy();
  }

  static toBeNull(value?: any, expected?: any) {
    expect(value).toBeNull();
  }

  static toBeTruthy(value?: any, expected?: any) {
    expect(value).toBeTruthy();
  }

  static toBeUndefined(value?: any, expected?: any) {
    expect(value).toBeUndefined();
  }

  static toBeNaN(value?: any, expected?: any) {
    expect(value).toBeNaN();
  }

  static toHaveReturned(value?: any, expected?: any) {
    expect(value).toHaveReturned();
  }

  static toBe(value: any, expected: any) {
    expect(value).toBe(expected);
  }

  static toBeCloseTo(value: any, expected: any) {
    expect(value).toBeCloseTo(expected);
  }

  static toBeGreaterThan(value: any, expected: any) {
    expect(value).toBeGreaterThan(expected);
  }

  static toBeGreaterThanOrEqual(value: any, expected: any) {
    expect(value).toBeGreaterThanOrEqual(expected);
  }

  static toBeInstanceOf(value: any, expected: any) {
    expect(value).toBeInstanceOf(expected);
  }

  static toBeLessThan(value: any, expected: any) {
    expect(value).toBeLessThan(expected);
  }

  static toBeLessThanOrEqual(value: any, expected: any) {
    expect(value).toBeLessThanOrEqual(expected);
  }

  static toContain(value: any, expected: any) {
    expect(value).toContain(expected);
  }

  static toContainEqual(value: any, expected: any) {
    expect(value).toContainEqual(expected);
  }

  static toEqual(value: any, expected: any) {
    expect(value).toEqual(expected);
  }

  static toHaveBeenCalledTimes(value: any, expected: any) {
    expect(value).toHaveBeenCalledTimes(expected);
  }

  static toHaveBeenNthCalledWith(value: any, expected: any) {
    expect(value).toHaveBeenNthCalledWith(expected);
  }

  static toHaveLength(value: any, expected: any) {
    expect(value).toHaveLength(expected);
  }

  static toHaveNthReturnedWith(value: any, expected: any) {
    expect(value).toHaveNthReturnedWith(expected);
  }

  static toHaveProperty(value: any, expected: any) {
    expect(value).toHaveProperty(expected);
  }

  static toHaveReturnedTimes(value: any, expected: any) {
    expect(value).toHaveReturnedTimes(expected);
  }

  static toHaveReturnedWith(value: any, expected: any) {
    expect(value).toHaveReturnedWith(expected);
  }

  static toMatch(value: any, expected: any) {
    expect(value).toMatch(expected);
  }

  static toMatchObject(value: any, expected: any) {
    expect(value).toMatchObject(expected);
  }

  static toStrictEqual(value: any, expected: any) {
    expect(value).toStrictEqual(expected);
  }
}

type JestCbType = typeof JestCallbacks;
type JKey = keyof JestCbType;
type JestCb = Function | ((...v: any) => any);

type TestSource = { key: JKey; desc: any; list: TestOptions[] };
type TestOptions = { key: JKey | string; input: any; expected: any; desc: string };
type TestResults = TestOptions & { result: any; index?: number };
type Test = [string, JestCb | Test[]];

class JestHelper {
  static CB_NAMES: ReadonlyArray<JKey> = Object.keys(JestCallbacks) as ReadonlyArray<JKey>;
  static CB_SOURCES = this.CB_NAMES.map(key => ({ key, callback: JestCallbacks[key] as JestCb }));

  static errorCb(key: string) {
    return new Error(`Callback ${key} not found`);
  }

  static getOptions(opt?: any): any {
    return Object.assign({}, opt, { input: null, expected: null, index: 0 });
  }

  static getDesc(options: any): string {
    const { index, expected, input, key } = this.getOptions(options);
    const result = options?.desc ?? `${key}. ${index}: Should return ${expected} for ${input}`;
    return result;
  }

  static getCallbackByKey(key: JKey): JestCb {
    return (JestCallbacks[key] ? JestCallbacks[key] : () => this.errorCb(key)) as JestCb;
  }

  static getOne(options: TestOptions & { key: JKey }): Test {
    const desc = options?.desc ?? this.getDesc(options);
    const fn = this.getCallbackByKey(options.key);
    const testFn = () => {
      const result = fn(options?.input);
      expect(result).toBe(options?.expected);
      return { options, result };
    };
    return [desc, testFn];
  }

  static getMany(key: JKey, src: TestSource): Test {
    const tests = src.list.map(el => this.getOne({ ...el, key }));
    return [src.desc, () => tests];
  }

  static isCbName(key?: any): key is JKey {
    return this.CB_NAMES.includes(key);
  }

  static CALLBACKS = Object.keys(JestCallbacks).filter(
    key => !key.startsWith('_') && typeof JestCallbacks[key] === 'function',
  );

  static isCallbackName(key: any): key is JKey {
    return this.CALLBACKS.includes(key);
  }

  static run(key: JKey, options: TestOptions) {
    const { input, expected, desc } = this.getOptions(options);
    const fn = this.getCallbackByKey(key);
    const test = () => {
      const result = fn(input);
      expect(result).toBe(expected);
      return { input, expected, result };
    };

    return [desc, test];
  }
  static fromNamesArray(keys: JKey[]) {
    return keys.map((key, index: number) => ({
      key,
      index,
      run: (options: TestOptions) => [...this.run(key, this.getOptions(options))],
    }));
  }

  static runAll(input: any, expected: any) {
    return [
      { key: 'toReturn', input, expected, desc: 'example of toReturn' },
      { key: 'toThrow', input, expected, desc: 'example of toThrow' },
      { key: 'toThrowError', input, expected, desc: 'example of toThrowError' },
      { key: 'toThrowErrorMatchingSnapshot', input, expected, desc: 'example of toThrowErrorMatchingSnapshot' },
      {
        key: 'toThrowErrorMatchingInlineSnapshot',
        input,
        expected,
        desc: 'example of toThrowErrorMatchingInlineSnapshot',
      },
      { key: 'toHaveBeenCalled', input, expected, desc: 'example of toHaveBeenCalled' },
      { key: 'toHaveBeenCalledWith', input, expected, desc: 'example of toHaveBeenCalledWith' },
      { key: 'toHaveBeenLastCalledWith', input, expected, desc: 'example of toHaveBeenLastCalledWith' },
      { key: 'toHaveLastReturnedWith', input, expected, desc: 'example of toHaveLastReturnedWith' },
      { key: 'lastCalledWith', input, expected, desc: 'example of lastCalledWith' },
      { key: 'lastReturnedWith', input, expected, desc: 'example of lastReturnedWith' },
      { key: 'toBeCalled', input, expected, desc: 'example of toBeCalled' },
      { key: 'toBeCalledWith', input, expected, desc: 'example of toBeCalledWith' },
      { key: 'toBeDefined', input, expected, desc: 'example of toBeDefined' },
      { key: 'toBeFalsy', input, expected, desc: 'example of toBeFalsy' },
      { key: 'toBeNull', input, expected, desc: 'example of toBeNull' },
      { key: 'toBeTruthy', input, expected, desc: 'example of toBeTruthy' },
      { key: 'toBeUndefined', input, expected, desc: 'example of toBeUndefined' },
      { key: 'toBeNaN', input, expected, desc: 'example of toBeNaN' },
      { key: 'toHaveReturned', input, expected, desc: 'example of toHaveReturned' },
      { key: 'toBe', input, expected, desc: 'example of toBe' },
      { key: 'toBeCloseTo', input, expected, desc: 'example of toBeCloseTo' },
      { key: 'toBeGreaterThan', input, expected, desc: 'example of toBeGreaterThan' },
      { key: 'toBeGreaterThanOrEqual', input, expected, desc: 'example of toBeGreaterThanOrEqual' },
      { key: 'toBeInstanceOf', input, expected, desc: 'example of toBeInstanceOf' },
      { key: 'toBeLessThan', input, expected, desc: 'example of toBeLessThan' },
      { key: 'toBeLessThanOrEqual', input, expected, desc: 'example of toBeLessThanOrEqual' },
      { key: 'toContain', input, expected, desc: 'example of toContain' },
      { key: 'toContainEqual', input, expected, desc: 'example of toContainEqual' },
      { key: 'toEqual', input, expected, desc: 'example of toEqual' },
      { key: 'toHaveBeenCalledTimes', input, expected, desc: 'example of toHaveBeenCalledTimes' },
      { key: 'toHaveBeenNthCalledWith', input, expected, desc: 'example of toHaveBeenNthCalledWith' },
      { key: 'toHaveLength', input, expected, desc: 'example of toHaveLength' },
      { key: 'toHaveNthReturnedWith', input, expected, desc: 'example of toHaveNthReturnedWith' },
      { key: 'toHaveProperty', input, expected, desc: 'example of toHaveProperty' },
      { key: 'toHaveReturnedTimes', input, expected, desc: 'example of toHaveReturnedTimes' },
      { key: 'toHaveReturnedWith', input, expected, desc: 'example of toHaveReturnedWith' },
      { key: 'toMatch', input, expected, desc: 'example of toMatch' },
      { key: 'toMatchObject', input, expected, desc: 'example of toMatchObject' },
      { key: 'toStrictEqual', input, expected, desc: 'example of toStrictEqual' },
    ].map(obj => this.getOne(this.getOptions(obj)));
  }
}
