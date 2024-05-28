const words = [];

for( let i = 0; i < 5; i++ ) {
    let promptWords = prompt("Inserisci una parola").trim();

    while( promptWords === "" || !isNaN(promptWords) ) {
        promptWords = prompt("Riprova inserendo una parola").trim();
    }

    words.push(promptWords);
}

console.log(words);

for( let i = 0; i < words.length; i++ ) {
    if( words[i].length % 2 !== 0 ) console.log(words[i]);
}
