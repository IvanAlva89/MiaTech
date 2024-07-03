const createCookie = (key, value) => {
    localStorage.setItem(key, value);
    console.log("Cookie salvato nel localStorage");
    sessionStorage.setItem(key, value);
    console.log("Cookie salvato nel sessionStorage");
}
const getCookie = () => {
    const localValue = localStorage.getItem("miaAcademy");
    console.log(localValue);
    const sessionValue = sessionStorage.getItem("miaAcademy");
    console.log(sessionValue);
}

const removeCookie = () => {
    localStorage.removeItem("miaAcademy");
    sessionStorage.removeItem("miaAcademy");
}

createCookie("miaAcademy", true);
getCookie();
removeCookie();


// const form = document.querySelector("#form");
// const name = document.querySelector("#name");
// const surname = document.querySelector("#surname");

// form.addEventListener("submit", (e) => {
//     if(!name.value || !surname.value) alert("i campi non sono compilati");
//     e.preventDefault();
// })