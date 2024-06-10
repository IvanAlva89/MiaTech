const numbers = [1, 2, 3, 4, 5];

const copyNumbers = [...numbers];

numbers.push(6);

console.log(numbers);
console.log(copyNumbers);