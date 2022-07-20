import { addTwoNumbers } from "./addTwoNumbers";
import { findMedianSortedArrays } from "./findMedianSortedArrays";
import { lengthOfLongestSubstring } from "./lengthOfLongestSubstring";
import { longestPalindrome } from "./longestPalindrome";
import { reverseNumber } from "./reverseNumber";
import { AllHelpers } from "./all";
import { ArrayHelpers } from "./arrayHelpers";
import { Constants } from "./constants";
import { TypeHelpers } from "./typeHelpers";
import { LogHelpers } from "./logHelpers";
import { ObjectHelpers } from "./objHelpers";
import { StringHelpers } from "./stringHelpers";

export const SOURCE = Constants.getSource(__filename);
SOURCE.name = `LeetCode`;

export const EXAMPLES = Constants.mapExamples([
  ...AllHelpers.EXAMPLES,
  ...ArrayHelpers.EXAMPLES,
  ...Constants.EXAMPLES,
  ...TypeHelpers.EXAMPLES,
  ...LogHelpers.EXAMPLES,
  ...ObjectHelpers.EXAMPLES,
  ...StringHelpers.EXAMPLES,
]);

export class LeetCode {
  static SOURCE = SOURCE;
  static EXAMPLES = EXAMPLES;

  static addTwoNumbers = addTwoNumbers;
  static findMedianSortedArrays = findMedianSortedArrays;
  static lengthOfLongestSubstring = lengthOfLongestSubstring;
  static longestPalindrome = longestPalindrome;
  static reverseNumber = reverseNumber;

  static Constants = Constants;

  static AllHelpers = AllHelpers;
  static ArrayHelpers = ArrayHelpers;
  static TypeHelpers = TypeHelpers;
  static LogHelpers = LogHelpers;
  static ObjectHelpers = ObjectHelpers;
  static StringHelpers = StringHelpers;
}
