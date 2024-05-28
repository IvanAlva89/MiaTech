const numbers = [1, 2, 3, 4, 5];

numbers.forEach( number => console.log(number * 2) );

const squaredNumbers = numbers.map( number => Math.pow(number, 2) );
console.log( squaredNumbers);

