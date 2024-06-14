
const checkVariable = (variable) => {
    if(variable === 0) {
        console.error("La variable non puo essere 0")
    } else if(variable === 1) {
        console.warn("Avviso: La variabile ha valore 1")
    } else {
        console.log("Variabile corretta")
    }
}

checkVariable(1);




// try {
//     let result = 10 / 0;
        
//     if(result === Infinity) {
//         throw new Error("Il divisore non puo essere uguale a 0");
//     }

//     console.log(result);
// } catch (error) {
//     console.error("Errore: " , error.message);
// }

// try {
//     let string = "ciao";
//     let result = string.map(word => word.length)
//     if(!result) throw new SyntaxError("Non e un array")
//     console.log(result);
//     // else throw new Error("errore 2")
// } catch (error) {
//     if(error instanceof SyntaxError) console.log(error);

// } 