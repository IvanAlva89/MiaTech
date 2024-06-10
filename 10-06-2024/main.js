const message = () => console.log("This message is printed every 1 second");

const clearMessage = setInterval(message, 1000);

setTimeout(() => {
    clearInterval(clearMessage)
}, 5000);
