const promise = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve("Promessa risolta dopo 2 secondi");
        }, 2000)
    })
}

promise().then(message => console.log(message));