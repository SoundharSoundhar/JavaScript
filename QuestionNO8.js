


// 8) Find whether the numbers array has any element that is divisible by 3.

var numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];

const hasDivisibleBy3 = numbers.some((num) => num % 3 === 0);

console.log(hasDivisibleBy3)