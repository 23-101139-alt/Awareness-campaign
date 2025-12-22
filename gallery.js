document.getElementById("list1-header").innerHTML = `Home`;
document.getElementById("list2-header").innerHTML = `Statistics`;
document.getElementById("list3-header").innerHTML = `Contact`;
document.getElementById("list4-header").innerHTML = `Gallery`;
document.getElementById("list5-header").innerHTML = `Messages`;


document.getElementById("eng-header").innerHTML = `Eng`;
document.getElementById("arab-header").innerHTML = `Ar`;
document.getElementById("login-header").innerHTML = `Log in`;

// headerend
  document.getElementById("change").addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
// prelogin


window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloaderrr").style.display = "none";
  }, 200);
});


// sec-galleryyy

 document.getElementById("haeder-gallery").innerHTML = `Gallery`;
 document.getElementById("parag-gallery").innerHTML = `Discover highlights from our 
 awareness campaign and see how our message came to life through real moments and 
 real people.`;




let secgallery = [
  {
  img: "pic/pic75.png",
  },
  {
  img: "pic/pic76.png",
  },
  {
  img: "pic/pic77.png",
  },
  {
  img: "pic/pic78.png",
  },
  {
  img: "pic/pic79.png",
  },
  {
  img: "pic/pic80.png",
  },
  {
  img: "pic/pic81.png",
  },
  {
  img: "pic/pic82.png",
  },
  {
  img: "pic/pic83.png",
  },

]

function loadGallery() {
  const container = document.getElementById("secgallerypage");
  container.innerHTML = "";

  for (let i = 0; i < secgallery.length; i++) {
    container.innerHTML += `
      <figure class="small-container-img">
        <img 
          src="${secgallery[i].img}" 
          class="img-gallery-page"
          onclick="openLightbox('${secgallery[i].img}')"
        >
      </figure>
    `;
  }


const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('animate', entry.isIntersecting);
  });
});
document.querySelectorAll('.img-gallery-page').forEach(el => observer5.observe(el));





}






function openLightbox(imgSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = imgSrc;
  lightbox.style.display = "flex";
}


function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}



document.addEventListener("DOMContentLoaded", loadGallery);

















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


  document.getElementById("haeder-gallery").innerHTML = data.hedaer_gallery;
  document.getElementById("parag-gallery").innerHTML = data.para_gallery;

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





