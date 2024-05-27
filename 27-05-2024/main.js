let number = 8;

{
    let number = 9;
    console.log(number);
    //  Questa variabile locale number esiste solo all'interno di questo blocco di codice e quindi posso dichiararla e assegnarle il valore 9
}

console.log(number);

let outside = 1;

{
    let inside = 2;
    console.log(inside);
    console.log(outside);
}

console.log(inside); // Mostrerà un ReferenceError in consola in quanto la variable inside è solo visibile all'interno del blocco di codice.
console.log(outside);