const firstPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta")
        }, 4000)
    })
}

const secondPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta")
        }, 2000)
    })
}

Promise.race([firstPromise(), secondPromise()])
    .then(value => console.log(value))
    