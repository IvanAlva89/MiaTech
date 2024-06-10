
const sum = (...args) => args.reduce((acc, curr) => acc + curr);

console.log(sum(21, 80));
console.log(sum(1, 2, 3, 4, 5));