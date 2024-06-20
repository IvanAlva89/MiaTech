const mainFn = (callback) => { 
    const result = 1 + 4;  
    callback(`Il risultato è ${result}`);
}

const callbackFn = (result) => console.log(result);

mainFn(callbackFn);