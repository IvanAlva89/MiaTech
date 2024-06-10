
const numbers = [1, 2];

const [firstNumber, secondNumber, thirdNumber = 3, fourthNumber = 4, fifthNumber = 5] = numbers;

console.log(firstNumber, thirdNumber, thirdNumber, fourthNumber, fifthNumber);