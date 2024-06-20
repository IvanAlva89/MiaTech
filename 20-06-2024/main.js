const promise = () => {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 10);
        if(number >= 5) {
            resolve(number);
        } else {
            reject(`Il numero: ${number} è minore di 5`);
        }
    })  
}

promise()
    .then(num => {
        console.log(num)
        return num * 3;
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))