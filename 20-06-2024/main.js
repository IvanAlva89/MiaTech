const promise = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(6);
        }, 1000) 
    })
}

promise()
    .then(number => number * 2)
    .then(newNumber => newNumber + 3)
    .then(result => console.log(`Il risultato finale è ${result}`));