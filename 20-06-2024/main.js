const promise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout( () => {
                resolve("Promessa risolta dopo 2 secondi");
            }, 2000)
        } else {
            reject("La condizione non è soddisfatta ");
        }
    })
}

promise()
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Azione completata indipendentemente dall'esito della promessa"));