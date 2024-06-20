const firstAsyncFn = async () => {
    const message = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Prima promessa risolta")
        }, 2000)
    })

    return message;
}

const secondAsyncFn = async () => {
    const message = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Seconda promessa risolta")
        }, 5000)
    })

    return message;
}

const thirdAsyncFn = async () => {
    const firstResult = await firstAsyncFn();
    console.log(firstResult);

    const secondResult = await secondAsyncFn();
    console.log(secondResult);
}

thirdAsyncFn();