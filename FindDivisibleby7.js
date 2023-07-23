

// 6) Find whether the given numbers array is divisible by 7.

const numbers = [35, 14, 70, 49, 21, 56, 7, 42, 28, 63, 49];

const isDivisibleBy7 = numbers.every((num) => num % 7 === 0);

console.log(isDivisibleBy7)

