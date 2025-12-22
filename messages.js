document.getElementById("list1-header").innerHTML = `Home`;
document.getElementById("list2-header").innerHTML = `Statistics`;
document.getElementById("list3-header").innerHTML = `Contact`;
document.getElementById("list4-header").innerHTML = `Gallery`;
document.getElementById("list5-header").innerHTML = `Messages`;


document.getElementById("eng-header").innerHTML = `Eng`;
document.getElementById("arab-header").innerHTML = `Ar`;
document.getElementById("login-header").innerHTML = `Log in`;

// headerend

// prelogin


window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloaderrr").style.display = "none";
  }, 200);
});



document.getElementById("header-sec1").innerHTML = `Contact Messages`;

const searchBar = document.getElementById('searchBar');
const searchInput = document.querySelector('.search-input');

searchBar.addEventListener('click', () => {
  searchBar.classList.toggle('activee');
  searchInput.focus(); 
});

document.getElementById("title1-msg").innerHTML = `User Name`;
document.getElementById("title2-msg").innerHTML = `Email`;
document.getElementById("title3-msg").innerHTML = `Messages`;

const messagesList = document.getElementById("messagesList");
const messages = JSON.parse(localStorage.getItem("localUsers")) || [];

messages.forEach(msg => {
  const li = document.createElement("li");
  li.className = "main-row-messages-page";

  li.innerHTML = `
    <div class="container-name-mess">
      <img src="pic/pic60.png">
      <h3 class="information1-tabel-mess">${msg.name}</h3>
    </div>

    <div class="container-email-mess">
      <img src="pic/pic61.png">
      <h3 class="information2-tabel-mess">${msg.email}</h3>
    </div>

    <div class="container-messages-mess">
      <img src="pic/pic62.png">
      <h3 class="information3-tabel-mess">${msg.message}</h3>
    </div>

    <button class="cta-messages">
      <img src="pic/pic70.png">
    </button>
  `;

  messagesList.appendChild(li);
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





const navLinks = document.querySelectorAll(".link-header li");

for (let i = 0; i < navLinks.length; i++) {
    const li = navLinks[i];
    const linkHref = li.parentElement.getAttribute("href");

    if (linkHref === window.location.pathname.split("/").pop()) {
        li.classList.add("active");
    }

    else if (linkHref.startsWith("#") && window.location.pathname.split("/").pop() === "index.html") {
        const section = document.querySelector(linkHref);
        if (section) {
            window.addEventListener("scroll", () => {
                const sectionTop = section.offsetTop - 122;
                const sectionBottom = sectionTop + section.offsetHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
                    document.querySelectorAll(".list-header-text").forEach(l => l.classList.remove("active"));
                    li.classList.add("active");
                }
            });
        }
    }
}









document.addEventListener("DOMContentLoaded", () => {
  applyDirection(currentLang);
  updateText(currentLang);
});


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
  document.getElementById("header-sec1").innerHTML = data.messages_hedaer;
  document.getElementById("title1-msg").innerHTML = data.messages_title1;
  document.getElementById("title2-msg").innerHTML = data.messages_title2;
  document.getElementById("title3-msg").innerHTML = data.messages_title3;



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
  applyDirection(lang);
  updateText(lang);

}



function applyDirection(lang) {
  if (lang === "AR") {
    document.body.classList.remove("en");
    document.body.classList.add("ar");
    document.body.dir = "rtl";
  } else {
    document.body.classList.remove("ar");
    document.body.classList.add("en");
    document.body.dir = "ltr";
  }
}



