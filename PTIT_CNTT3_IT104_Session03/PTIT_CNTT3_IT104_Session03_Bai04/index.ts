let str: string = "2";
let num: number = 2;
// @ts-ignore
console.log(str == num); // true, không ép chặt nên chỉ kiểm tra giá trị
// @ts-ignore
console.log(str === num);//false. kiểm tra chặt nên kiểm tra cả kiểu dữ liệu