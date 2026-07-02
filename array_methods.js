/*A single file demonstrating all three methods together.*/

const students = [
    { id: 1, name: "Aneena", marks: 85 },
    { id: 2, name: "John", marks: 62 },
    { id: 3, name: "Alice", marks: 91 },
    { id: 4, name: "David", marks: 74 }
];

// map()
const studentNames = students.map(student => student.name);

console.log("Student Names:");
console.log(studentNames);

// filter()
const passedStudents = students.filter(student => student.marks >= 75);

console.log("\nPassed Students:");
console.log(passedStudents);

// reduce()
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);

console.log("\nTotal Marks:");
console.log(totalMarks);

const averageMarks = totalMarks / students.length;

console.log("\nAverage Marks:");
console.log(averageMarks);

