const firstPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta")
        }, 2000)
    })
}

const secondPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta")
        }, 5000)
    })
}

Promise.all([firstPromise(), secondPromise()])
    .then(values => {
        console.log(values[0])
        console.log(values[1])
    })
    