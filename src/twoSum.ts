/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * @param {number[]} input - an array of numbers
 * @param {number} target - the target number
 * @returns {[number, number]}
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */
export function twoSum(input: number[], target: number): [number, number] {
	const isValid = (value: number, index: number) => input.some((v, i) => value + v === target && i !== index)
	const mapped = input.map((value, index) => ({
		value,
		index,
		isValid: isValid(value, index)
	}))
	const [r1, r2] = mapped
		.filter((v) => v.isValid)
		.map((v) => v.index)
		.sort((a, b) => (a > b ? 1 : -1))
	return [r1, r2]
}
