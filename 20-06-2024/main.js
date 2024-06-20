const promise = () => {
    return new Promise((resolve, reject) => {
        const messageError = "Si è verificato un errore";
        reject(messageError);
    })  
}

promise()
    .then(result => console.log(result))
    .catch(error => console.error(error))