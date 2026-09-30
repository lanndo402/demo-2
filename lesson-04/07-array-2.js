let monHoc = ["Toán", "Lý"];
monHoc.push("Anh");
console.log(monHoc);
const monBiXoa = monHoc.pop();
console.log("Môn bị xóa là: " + monBiXoa);

monHoc.unshift("Văn"); // thêm vào đầu của mảng
console.log(monHoc);
const monBiXoa2 = monHoc.shift(); // xóa phần tử đầu tiên của mảng
console.log("Môn bị xóa là: " + monBiXoa2);

