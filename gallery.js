document.getElementById("list1-header").innerHTML = `Home`;
document.getElementById("list2-header").innerHTML = `Statistics`;
document.getElementById("list3-header").innerHTML = `Contact`;
document.getElementById("list4-header").innerHTML = `Gallery`;
document.getElementById("list5-header").innerHTML = `Messages`;


document.getElementById("eng-header").innerHTML = `Eng`;
document.getElementById("login-header").innerHTML = `Log in`;

// headerend

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

for(i=0 ; i < secgallery.length ; i++){; 
document.getElementById("secgallerypage").innerHTML += `
                    <figure class="small-container-img">
                        <img src="${secgallery[i].img}" class="img-gallery-page">
                    </figure>
`;
}





















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