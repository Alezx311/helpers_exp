"use strict";
// На вход функции подается целое число со знаком, необходимо вернуть число, в котором цифры идут в обратном порядке. Отрицательные числа должны остаться отрицательными.
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseNumber = void 0;
function reverseNumber(num) {
    const sign = Math.sign(num);
    const chars = `${num}`
        .split("")
        .reverse()
        .join("")
        .replace(/[^0-9]/gim, "");
    return ~~chars * sign;
}
exports.reverseNumber = reverseNumber;
