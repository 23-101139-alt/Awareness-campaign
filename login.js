document.getElementById("list1-header").innerHTML = `Home`;
document.getElementById("list2-header").innerHTML = `Statistics`;
document.getElementById("list3-header").innerHTML = `Contact`;
document.getElementById("list4-header").innerHTML = `Gallery`;
document.getElementById("list5-header").innerHTML = `Messages`;


document.getElementById("eng-header").innerHTML = `Eng`;
document.getElementById("arab-header").innerHTML = `Ar`;
document.getElementById("login-header").innerHTML = `Log in`;

// headerend



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



// footer

document.getElementById("para-footer").innerHTML = `Empowering 
communities worldwide to protect and preserve our most precious
 resource.`;

 document.getElementById("title1-footer").innerHTML = `Explore`;
document.getElementById("list1-footer").innerHTML = `Home page`;
document.getElementById("list2-footer").innerHTML = `Gallery`;
document.getElementById("list3-footer").innerHTML = `Messages`;
document.getElementById("list4-footer").innerHTML = `Blogs`;
document.getElementById("list5-footer").innerHTML = `News`;

 document.getElementById("title2-footer").innerHTML = `Legal`;
document.getElementById("list6-footer").innerHTML = `Terms & Conditions`;
document.getElementById("list7-footer").innerHTML = `Cookies`;
document.getElementById("list8-footer").innerHTML = `Privacy Policy`;

document.getElementById("last-text-footer").innerHTML = `@2025,DropSaver,AllRightsReservedbyDropSaver`;


function updateText(lang) {
  const data = langData[lang];

  document.getElementById("eng-header").innerHTML = data.engHeader;
  document.getElementById("arab-header").innerHTML = data.arabHeader;
  document.getElementById("login-header").innerHTML = data.loginHeader;
  document.getElementById("list1-header").innerHTML = data.list1Header;
  document.getElementById("list2-header").innerHTML = data.list2Header;
  document.getElementById("list3-header").innerHTML = data.list3Header;
  document.getElementById("list4-header").innerHTML = data.list4Header;
  document.getElementById("list5-header").innerHTML = data.list5Header;


 document.getElementById("header-login").innerHTML = data.login_hedaerr;
 document.getElementById("placeholder-log-in-page").innerHTML = data.login_form1;
 document.getElementById("placeholder2-log-in-page").innerHTML = data.login_form2;
document.getElementById("forgot").innerHTML = data.login_form3;
document.getElementById("remember-textt").innerHTML = data.login_form4;
document.getElementById("button-text-1").innerHTML = data.cta_loginn;



document.getElementById("para-footer").innerHTML = data. para_footer;
document.getElementById("title1-footer").innerHTML = data. list1_footer;
document.getElementById("list1-footer").innerHTML = data. list2_footer;
document.getElementById("list2-footer").innerHTML = data. list3_footer;
document.getElementById("list3-footer").innerHTML = data. list4_footer;
document.getElementById("list4-footer").innerHTML = data. list5_footer;
document.getElementById("list5-footer").innerHTML = data. list6_footer;

document.getElementById("title2-footer").innerHTML = data. list7_footer;
document.getElementById("list6-footer").innerHTML = data. list8_footer;
document.getElementById("list7-footer").innerHTML = data. list9_footer;
document.getElementById("list8-footer").innerHTML = data. list10_footer;
document.getElementById("last-text-footer").innerHTML = data. verysmalltextfooter;
}




updateText(currentLang);


function changeLang(lang) {
    currentLang = lang; 
  localStorage.setItem("language", lang);
  updateText(lang);
  if (lang === "AR") {
    document.body.classList.remove("en");
    document.body.classList.add("ar");
  } else {
    document.body.classList.remove("ar");
    document.body.classList.add("en");
  }
  document.body.dir = lang === "AR" ? "rtl" : "ltr";

}


















