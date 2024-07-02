const form = document.querySelector("#form");
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");

form.addEventListener("submit", (e) => {
    if(!name.value || !surname.value) alert("i campi non sono compilati");
    e.preventDefault();
})