const API_URL = "https://jsonplaceholder.typicode.com/posts";

fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// const API_URL = "https://api.example.com/data";
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// const mergedUrl = API_URL + proxyUrl;

// fetch(mergedUrl)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Errore:', error.message));

// const fetchData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         if(!response.ok) throw new Error("Si e verificato un errore durante la richiesta");
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error(error.message);
//     }
// }

// fetchData();

// const API_KEY = "https://jsonplaceholder.typicode.com/posts";

// const fetchData = async () => {
//     try {
//         const response = await fetch(API_KEY);
//         if(!response.ok) throw new Error("Si e verificato un errore durante la richiesta");
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error(error.message)
//     }
// }

// fetchData();

// const API_KEY = "https://jsonplaceholder.typicode.com/posts";

// const postData = async () => {
//     try {
//         const response = await fetch(API_KEY, {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 title: "New title",
//                 body: "Lorem ipsum lorem ipsum lorem ipsum",
//                 userId: 1
//             })
//         });
//         if(!response.ok) throw new Error("Si e verificato un errore durante la richiesta");
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.error(error.message)
//     }
// }

// postData();

// const firstFn = (callback) => {
//     setTimeout(() => {
//         console.log("Prima operazione eseguita");
//         callback("Risultato prima funzione");
//     }, 2000)
// }

// const secondFn = (firstResult, callback) => {
//     setTimeout(() => {
//         console.log("Seconda operazione eseguita: " , firstResult);
//         callback("Risultato seconda funzione")  
//     }, 3000)
// }

// const thirdFn = () => {
//     firstFn((firstResult) => {
//         secondFn(firstResult, (secondResult) => {
//             console.log("Operazioni completate" , secondResult)
//         })
//     });
// }

// thirdFn();






// const API_KEY = "https://jsonplaceholder.typicode.com/posts";

// const fetchData = async () => {
//     try {
//         const response = await fetch(API_KEY);
//         if(!response.ok) throw new Error("Si e verificato un errore durante la richiesta");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Errore: ", error.message);
//     }
// }

// fetchData();