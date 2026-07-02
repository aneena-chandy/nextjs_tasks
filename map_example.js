/*map() creates a new array by transforming each element.*/

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(number => number * number);

console.log("Original Array:", numbers);
console.log("Squared Array:", squares);