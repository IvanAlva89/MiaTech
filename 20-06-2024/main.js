const firstPromise = () => {
    return new Promise((resolve) => {
        resolve("Prima promessa risolta")
    })
}

const secondPromise = () => {
    return new Promise((resolve) => {
        resolve("Seconda promessa risolta")
    })
}

const ThirdPromise = () => {
    return new Promise((resolve, reject) => {
        reject("Terza promessa rifiutata")
    })
}

Promise.allSettled([firstPromise(), secondPromise(), ThirdPromise()])
    .then(values => {
        values.forEach(value => {
            if(value.status === "fulfilled") console.log(value.value)
            else console.log(value.reason)
        })
    })
    