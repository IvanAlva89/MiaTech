// const message = () => console.log("This message is printed every 1 second");

// const clearMessage = setInterval(message, 1000);

// setTimeout(() => {
//     clearInterval(clearMessage)
// }, 5000);


const numbers = [1, 2];

const [firstNumber, secondNumber, thirdNumber = 3, fourthNumber = 4, fifthNumber = 5] = numbers;

console.log(firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber);