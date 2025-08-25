const removeDyplicateCharaters = (input: string): string => {
    let seen: Set<string> = new Set();
    let result: string = "";
    for (let char of input) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

let input1: string = "banana";
let input2: string = "hello world";

console.log(removeDyplicateCharaters(input1));
console.log(removeDyplicateCharaters(input2));
