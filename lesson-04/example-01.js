const number = [2,4,6,8,9];
const double = number.map(num => [num *2]);

console.log(double);
console.log(number);

///////
const firstEven = number.find(num => num % 2 === 0)
console.log(firstEven); // trả về phần tử đầu tiên chia hết cho 2

const greaterThanSix = number.find(num => num > 6);
console.log(greaterThanSix); // trả về 8
// ko tìm thấy  
const negative = number.find(num => num < 0);
console.log(negative); // trả undefinded