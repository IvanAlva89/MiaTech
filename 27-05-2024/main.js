const expenses = [10, 28, 70, 30, 45, 100, 63];

const sumExpenses = expenses.reduce( (acc, cur) => acc + cur, 0 );

console.log(sumExpenses);

const words = ["banana", "apple", "cherry", "date"];

console.log(words.sort());