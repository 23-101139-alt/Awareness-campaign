

if (!localStorage.getItem("localUsers")) {
  localStorage.setItem("localUsers", JSON.stringify([]));
}



// loginfuncitionnnn


const loginUsers = [
  { email: "male@gmail.com", 
    password: "123456", gender: "male" },
  { email: "female@gmail.com",
     password: "123456", gender: "female" }
];


if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(loginUsers));
}
