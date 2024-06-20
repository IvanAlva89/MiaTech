const API_KEY = "https://jsonplaceholder.typicode.com/posts";

const fetchData = async () => {
    try {
        const response = await fetch(API_KEY);
        if(!response.ok) throw new Error("Si e verificato un errore durante la richiesta");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Errore: ", error.message);
    }
}

fetchData();