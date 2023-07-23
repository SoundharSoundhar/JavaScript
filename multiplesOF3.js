

// 5) Create a new array with elements from the numbers array that are multiples of three.

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];

const multiplesOfThree = numbers.filter((num) => num % 3 === 0);

console.log(multiplesOfThree)