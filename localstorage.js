

let messages = JSON.parse(localStorage.getItem("localUsers")) || [];

localStorage.setItem("localUsers", JSON.stringify(messages));
