localStorage.setItem("nome", "Phillips");
console.log(`Valore salvato nel localStorage: ${localStorage.nome}`);

localStorage.getItem("nome");
console.log(`Valore recuperato dal localStorage: ${localStorage.nome}`);

localStorage.removeItem("nome");
console.log(`Valore rimosso dal localStorage: ${localStorage.nome}`)