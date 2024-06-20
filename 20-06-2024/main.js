const promise = (boolean) => {
    return new Promise((resolve, reject) => {
        if(typeof boolean === "boolean") resolve(boolean)
        reject(new Error(`${boolean} non è un valore booleano`))
    })  
}

promise("ciao")
    .then(result => console.log(`Il parametro ${result} è un valore booleano`))
    .catch(error => console.error(error.message))