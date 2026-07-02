/*filter() returns elements that satisfy a condition.*/

const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Original Array:", numbers);
console.log("Even Numbers:", evenNumbers);