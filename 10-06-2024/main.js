try {
    let result = 10 / 0;
        
    if(result === Infinity) {
        throw new Error("Il divisore non puo essere uguale a 0");
    }
    
    console.log(result);
} catch (error) {
    console.error("Errore: " , error.message);
}