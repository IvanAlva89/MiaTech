const promise = () => {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if(number >= 5) {
            resolve(number);
        } else {
            reject(`Il numero: ${number} è minore di 5`);
        }
    })
}

promise()
    .then(result => result * 2)
    .then(finalResult => {
        console.log(finalResult);
        throw new Error("Errore durante l'elaborazione del risultato finale");
    })
    .catch(error => console.error(error))