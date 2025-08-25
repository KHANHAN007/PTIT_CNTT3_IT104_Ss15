var toNumber = function (value) {
    if (typeof value === "string") {
        var num = parseFloat(value);
        return isNaN(num) ? "invalid number" : num;
    }
    return value;
};
var add = function (a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === "invalid number" || numB === "invalid number") {
        return "invalid number";
    }
    return numA + numB;
};
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    return numA - numB;
}
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    return numA * numB;
}
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    if (numB === 0) {
        return "Cannot divide by zero";
    }
    return numA / numB;
}
console.log("C\u1ED9ng: ".concat(add(5, 3))); // 8
console.log("C\u1ED9ng: ".concat(add("10", "5"))); // 15
console.log("C\u1ED9ng: ".concat(add("10a", "5"))); // Invalid input
console.log("Tr\u1EEB: ".concat(subtract(10, 4))); // 6
console.log("Tr\u1EEB: ".concat(subtract("15", "7"))); // 8
console.log("Tr\u1EEB: ".concat(subtract("abc", "2"))); // Invalid input
console.log("Nh\u00E2n: ".concat(multiply(4, 3))); // 12
console.log("Nh\u00E2n: ".concat(multiply("2", "6"))); // 12
console.log("Nh\u00E2n: ".concat(multiply("2.5", "2"))); // 5
console.log("Nh\u00E2n: ".concat(multiply("xyz", "3"))); // Invalid input
console.log("Chia: ".concat(divide(10, 2))); // 5
console.log("Chia: ".concat(divide("20", "4"))); // 5
console.log("Chia: ".concat(divide("10", "0"))); // Cannot divide by zero
console.log("Chia: ".concat(divide("abc", "2"))); // Invalid input
