/*reduce() combines all elements into a single value.*/

const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("Numbers:", numbers);
console.log("Total:", total);