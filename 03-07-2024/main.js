const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeStatus = document.getElementById("darkModeStatus");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    darkModeStatus.innerHTML = document.body.classList.contains("dark") ? "Disattiva dark mode" : "Attiva dark mode";
});