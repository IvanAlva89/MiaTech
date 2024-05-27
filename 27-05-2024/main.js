let score = parseInt(prompt("Inserisci un numero tra 0 e 100"));

while( isNaN(score) || score < 0 || score > 100 ) {
    score = parseInt(prompt("Riprova inserendo un numero tra 0 e 100"));
}

switch ( typeof score === "number" ) {
    case ( score >= 90 && score <= 100 ):
        console.log(`Il tuo voto ${score} è ottimo`)
        break;

    case ( score >= 70 && score <= 89 ):
        console.log(`Il tuo voto ${score} è buono`);
        break;

    case ( score >= 60 && score <= 69 ):
        console.log(`Il tuo voto ${score} è sufficiente`);
        break;
        
    default:
        console.log(`Il tuo voto ${score} è insufficiente`);
}

// if( score >= 90 && score <= 100 ) console.log(`Il tuo voto ${score} è ottimo`);
// else if ( score >= 70 && score <= 89 ) console.log(`Il tuo voto ${score} è buono`);
// else if ( score >= 60 && score <= 69 ) console.log(`Il tuo voto ${score} è sufficiente`);
// else console.log(`Il tuo voto ${score} è insufficiente`);