const checkParam = (param) => {
    try {
        const result = param.toUpperCase();
        console.log(result);
    } catch (err) {
        console.error("Si è verificato un problema", err.message)
    } finally {
        console.log("Operazione completata")
    }
}

checkParam();


// const checkVariable = (variable) => {
//     if(variable === 0) {
//         console.error("La variable non puo essere 0")
//     } else if(variable === 1) {
//         console.warn("Avviso: La variabile ha valore 1")
//     } else {
//         console.log("Variabile corretta")
//     }
// }

// checkVariable(1);

// try {
//     let result = 10 / 0;
        
//     if(result === Infinity) {
//         throw new Error("Il divisore non puo essere uguale a 0");
//     }

//     console.log(result);
// } catch (error) {
//     console.error("Errore: " , error.message);
// }

// const checkString = (string) => {
//     try {
//        const str = Number(string);
//        if(isNaN(str)) {
//             throw new TypeError("Il valore inserito non e un numero valido")
//        }
//        if(str === 0) {
//         throw new Error("Il valore non puo essere 0")
//        }
//     return str;
//     } catch (error) {
//         if(error instanceof TypeError) {
//             console.error("Errore di tipo :" , error.message)
//         } else {
//             console.error("Errore generico :", error.message)
//         }
//     } 
// }

// checkString("123");