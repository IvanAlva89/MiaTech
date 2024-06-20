const promise = (num) => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(num);
        }, 1000) 
    })
}

promise(11)
    .then(number => {
        if(number % 2 === 0) return `${number} è pari`;
        return `${number} è dispari`;
    })
    .then(result => console.log(result));