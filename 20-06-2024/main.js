const somma = (num1, num2, callback) => {
    const result = num1 + num2;
    console.log(`Il risultato è: ${result}`);
    callback();
}

const myCallback = () => console.log("Callback Eseguita");

somma(1, 8, myCallback);