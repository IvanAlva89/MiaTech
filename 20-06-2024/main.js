const asyncFn = async () => {
    const message = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promessa risolta dopo 3 secondi")
        }, 3000)
    })

    return message;
}
    
asyncFn().then(message => console.log(message));