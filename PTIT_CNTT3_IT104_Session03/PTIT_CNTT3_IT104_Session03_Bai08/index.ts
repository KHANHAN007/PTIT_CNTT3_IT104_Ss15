const toNumber = (value: number | string): number | string => {
    if (typeof value === "string") {
        const num = parseFloat(value);
        return isNaN(num) ? "invalid number" : num;
    }
    return value;
}

const add=(a: number | string, b: number | string): number | string => {
    const numA = toNumber(a);
    const numB = toNumber(b);

    if (numA === "invalid number" || numB === "invalid number") {
        return "invalid number";
    }
    return (numA as number) + (numB as number);
}
function subtract(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);

    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    return (numA as number) - (numB as number);
}
function multiply(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);

    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    return (numA as number) * (numB as number);
}function divide(a: number | string, b: number | string): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);

    if (numA === "Invalid input" || numB === "Invalid input") {
        return "Invalid input";
    }
    if ((numB as number) === 0) {
        return "Cannot divide by zero";
    }
    return (numA as number) / (numB as number);
}
console.log(`Cộng: ${add(5, 3)}`); // 8
console.log(`Cộng: ${add("10", "5")}`); // 15
console.log(`Cộng: ${add("10a", "5")}`); // Invalid input

console.log(`Trừ: ${subtract(10, 4)}`); // 6
console.log(`Trừ: ${subtract("15", "7")}`); // 8
console.log(`Trừ: ${subtract("abc", "2")}`); // Invalid input

console.log(`Nhân: ${multiply(4, 3)}`); // 12
console.log(`Nhân: ${multiply("2", "6")}`); // 12
console.log(`Nhân: ${multiply("2.5", "2")}`); // 5
console.log(`Nhân: ${multiply("xyz", "3")}`); // Invalid input

console.log(`Chia: ${divide(10, 2)}`); // 5
console.log(`Chia: ${divide("20", "4")}`); // 5
console.log(`Chia: ${divide("10", "0")}`); // Cannot divide by zero
console.log(`Chia: ${divide("abc", "2")}`); // Invalid input