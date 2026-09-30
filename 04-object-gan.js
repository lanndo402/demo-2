const student = {name: "Lan", age:27};

console.log(student.name);
student.name = "Huy";
console.log(student.name);

// gán giá trị cho key chưa tồn tại chính là khai báo mới key đó trong object
student.isLovePlaywright = true;
console.log(student);
student.favorite = "Music";
console.log(student);

// xóa thuộc tính trong object
delete student.favorite;
console.log(student);

