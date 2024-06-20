const promiseFn = (boolValue) => {
    return new Promise((resolve, reject) => {
        if(boolValue) resolve("Promessa risolta");
        else reject(new Error("Promessa rifiutata"));
    })
}

const promiseAsync = async (booleanValue) => {
    try {
        const result = await promiseFn(booleanValue);
        console.log(result);
    } catch (error) {
        console.error(error.message)
    }
}

promiseAsync(true);
promiseAsync(false);