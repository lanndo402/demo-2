const diem = [8, 9, 7, 6, 10];

console.log(diem[3]);
console.log(diem.length); // số phần tử của mảng => số thứ tự = lenght -1

// gán lại giá trị cho phần tử của mảng
diem[3] = 5;
console.log(diem[3]);
// thêm vào cuối của mảng
diem.push(100);
console.log(diem);
// xóa phần tử cuối cùng của mảng
diem.pop();
console.log(diem);
// thêm vào đầu của mảng
diem.unshift(200);
console.log(diem);
// xóa phần tử đầu tiên của mảng
diem.shift();
console.log(diem);