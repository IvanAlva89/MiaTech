sessionStorage.setItem("number", 5);
console.log(`Valore salvato nel sessionStorage: ${sessionStorage.number}`);

sessionStorage.getItem("number");
console.log(`Valore recuperato dal sessionStorage: ${sessionStorage.number}`);

sessionStorage.removeItem("number");
console.log(`Valore rimosso dal sessionStorage: ${sessionStorage.number}`);