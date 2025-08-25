var removeDyplicateCharaters = function (input) {
    var seen = new Set();
    var result = "";
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
};
var input1 = "banana";
var input2 = "hello world";
console.log(removeDyplicateCharaters(input1));
console.log(removeDyplicateCharaters(input2));
