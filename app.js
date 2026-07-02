/*Import everything*/

import User from "./user.js";
import { add, subtract, PI } from "./math.js";
import { capitalize, reverse } from "./utils.js";
import * as Calculator from "./calculator.js";
import student, { college } from "./students.js";

console.log(student("Aneena"));
console.log(college);

const user = new User("Aneena");

console.log(user.greet());

console.log("Addition:", add(10, 20));
console.log("Subtraction:", subtract(20, 10));
console.log("PI:", PI);

console.log(capitalize("javascript"));
console.log(reverse("OpenAI"));

console.log(Calculator.add(5, 3));
console.log(Calculator.multiply(5, 3));