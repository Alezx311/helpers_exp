// * DESCRIPTION:
// Here's something near-useless to fill your time!
// Your job is to write a function that will take any value, and multiply it the specified number of times.
// If the times value is not valid, an error should be thrown.
// Assuming the times value is valid, the value should be "multiplied" accoridng to the following criteria:
// ? Number: multiply value by times.
// ? String: create a string containing value multiple times. (eg. "blah" * 3 == "blahblahblah".) Where times is 0, an empty string should be returned.
// ? Function: create a function that will run the value function multiple times.
// ? Where times is 0, the new function should call the value function 0 times.
// ? Each time the original function is called, the context and arguments should be preserved.
// ? Object (non-null-like value): create an array containing value multiple times. (This is a shallow copy, using the original object, not cloning or anything.) Where times is 0, an empty array should be returned.
// ? Anything else: should be returned as-is.
// ! NOTE: If value is a number, times can be any non-infinite number. If value is not a number, times can be any integer >= 0. If these conditions are not met, an error should be thrown.

const multiply = (value, times) => {
  if (typeof times !== 'number' && times < 0 && times === Infinity) {
    return new Error('Invalid times value');
  }

  switch (typeof value) {
    case 'number': return value * times;
    case 'string': return value.repeat(times);
    case 'function': return () => Array(times).fill(value).map(el => el())
    case 'object': return (value !== null ? Array(times).fill(value) : value);
    default: return value
  }
}