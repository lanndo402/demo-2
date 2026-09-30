const student = { name:"Lan", age: 28};
console.log(student.name);

student.name = "Lim";
console.log(student.name);

console.log(student);
student.favorite = 'Music';

console.log(student);

delete student.favorite;
console.log(student);


