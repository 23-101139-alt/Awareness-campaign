document.getElementById("header-login").innerHTML = `Log In to Your Account`;
    document.getElementById("placeholder-log-in-page").innerHTML = `Email Address:`;
document.getElementById("placeholder2-log-in-page").innerHTML = `Password:`;
document.getElementById("forgot").innerHTML = `Forgot password`;
    document.getElementById("remember-textt").innerHTML = `Remember me`;
document.getElementById("button-text-1").innerHTML = `Log in`;

const errorMsg = document.getElementById("error-msg");
errorMsg.style.display = "none";


window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloaderrr").style.display = "none";
  }, 3000);
});




const form = document.querySelector(".container-login-page");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  let matchedUser = null;

  for (let i = 0; i < users.length; i++) {
    if (
      users[i].email === email &&
      users[i].password === password
    ) {
      matchedUser = users[i];
      break;
    }
  }

  if (matchedUser) {
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    window.location.href = "index.html";
  } else {
    errorMsg.textContent = "Incorrect email or password";
    errorMsg.style.display = "block";
  }
});

