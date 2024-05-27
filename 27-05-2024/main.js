let word = prompt("Inserisci una parola che contenga minimo 5 caratteri ").trim();

do {
    word = prompt("Riprova Inserendo una parola che contenga minimo 5 caratteri").trim()
} while (word.length < 5);

console.log(word);