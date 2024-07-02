const ul = document.querySelector("ul");
const todos = ["Mangiare", "Lavare i piatti", "Studiare Javascript"];

todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo;
    ul.appendChild(li);
})