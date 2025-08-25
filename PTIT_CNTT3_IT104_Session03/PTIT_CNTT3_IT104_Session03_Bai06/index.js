var num1 = 20;
var num2 = 5;
var num3;
var num4 = "10";
var num5 = true;
num3 = num1 + num2;
console.log(num3);
num3 = num1 - num2;
console.log(num3);
num3 = num1 * num2;
console.log(num3);
num3 = num1 / num2;
console.log(num3);
console.log("C\u1ED9ng string v\u00E0 boolean: ".concat(num4 + num5)); //"10true"
//trong js/ts, khi dùng toán tử + giữa string và boolean, boolean tự động chuyển thành string,
//toán tử + với string sẽ thực hiện nối chuổi
