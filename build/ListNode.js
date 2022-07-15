"use strict";
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTwoNumbers = exports.ListNodeHelpers = exports.ListNode = void 0;
//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// ListNode Class
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
exports.ListNode = ListNode;
// Helpers Class
class ListNodeHelpers {
    // Examples For fast checks
    static LIST_NODE_EMPTY = new ListNode();
    static LIST_NODE_SIMPLE = new ListNode(42, this.LIST_NODE_EMPTY);
    // Convert ListNode to number
    static listToValue = (list, acc = []) => {
        // Update values accumulator
        const current = list.val !== null ? [...acc, list.val] : acc;
        // Transfer accumulator to next list if it exists
        if (list.next instanceof ListNode) {
            return this.listToValue(list.next, current);
        }
        // Transform accumulator to integer if it is last list
        return ~~`${current.reverse().join("")}`;
    };
    // Convert number to ListNode
    static valueToList = (value) => {
        const values = `${value}`.split("").reverse();
        const list = values.reduce((a, v) => new ListNode(~~v, a), this.LIST_NODE_EMPTY);
        return list;
    };
    static sum = (l1, l2) => {
        const value1 = this.listToValue(l1);
        const value2 = this.listToValue(l2);
        const result = this.valueToList(value1 + value2);
        return result;
    };
}
exports.ListNodeHelpers = ListNodeHelpers;
function addTwoNumbers(l1, l2) {
    return ListNodeHelpers.sum(l1, l2);
}
exports.addTwoNumbers = addTwoNumbers;
