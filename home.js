document.getElementById("list1-header").innerHTML = `Home`;
document.getElementById("list2-header").innerHTML = `Statistics`;
document.getElementById("list3-header").innerHTML = `Contact`;
document.getElementById("list4-header").innerHTML = `Gallery`;
document.getElementById("list5-header").innerHTML = `Messages`;


document.getElementById("eng-header").innerHTML = `Eng`;
document.getElementById("login-header").innerHTML = `Log in`;

// headerend
document.getElementById("small-text-sec1").innerHTML = `Save Water Today for a Thirsty Tomorrow.`;
document.getElementById("big-text-sec1").innerHTML = `Every Drop Counts!`;

document.getElementById("para-sec1").innerHTML = `Water waste is becoming a serious issue, and many people don’t realize how quickly small daily habits can drain our limited resources. Every drop we save helps protect our future.`;

document.getElementById("para2-sec1").innerHTML = `This campaign encourages everyone to use water wisely and make simple changes that truly matter. Together, we can reduce waste and keep our water supply safe for the next generations.`;


// prelogin

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".preloaderrr").style.display = "none";
  }, 3000);
});






window.addEventListener("load", () => {
  setTimeout(() => {

    document.querySelector(".preloaderrr").style.display = "none";

    const sec1Elements = document.querySelectorAll(
      ".big-img-sec1, .img-decoration1-sec1, .img-decoration2-sec1, .img-decoration3-sec1, .img-decoration4-sec1, .img-decoration5-sec1, .img-decoration6-sec1, .img-decoration7-sec1, .img-decoration8-sec1"
    );


    sec1Elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) el.classList.add("animate");
    });


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); 
        }
      });
    }, { threshold: 0.3 });

    sec1Elements.forEach(el => observer.observe(el));
    
  }, 3000); 
});




function animateOnScroll(selector) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate', entry.isIntersecting);
        });
    });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

animateOnScroll('.img-decoration-sec2 ');

// sec2




let cardssec2 = [
  {
    imgbg: "pic/pic21.png",
   paragraph: `Most overuse happens 
    because people aren’t aware of how 
    much water everyday tasks actually
     consume. Awareness is the first step 
     toward smarter, sustainable habits.`,
    header:`Overuse Water`,
  },
    {
    imgbg: "pic/pic23.png",
    paragraph: `Over the past decade, water availability 
    in Egypt has steadily decreased due to population growth
    , climate change, and inefficient usage.`,
    header:`Water Shortage`,
  },
]

for(i=0 ; i < cardssec2.length ; i++){; 
document.getElementById("cards-sec2").innerHTML += `
                        <div class="card-sec2">
                            <div class="sub-info-card-sec2">
                                <figure class="figure-sec2">
                                    <img src="${cardssec2[i].imgbg}">
                                    <h3 class="numb-sec2" id="numb-sec2"></h3>
                                </figure>
                                <div class="text-cont-sec2">
                                    <h2 class="subtitles-sec2">${cardssec2[i].header}</h2>
                                    <p class="para1-sec2">${cardssec2[i].paragraph}</p>
                                    <nav class="link-sec2">
                                         <h3 class="link-text">Read more</h3>
                                        <img src="pic/pic22.png" class="small-dropdown-sec2">
                                    </nav>
                                </div>
                            </div>
                        </div>
`;
}



document.getElementById("header-sec2").innerHTML = `Water Statistics`;
document.getElementById("para-sec2").innerHTML = `Our water usage 
habits shape the world around us more than we realize. These 
statistics offer a quick look at how much water is lost every
 day—and how small changes in behavior can make a powerful
  difference.`;
document.getElementById("numb-sec2").innerHTML = `68%`;
document.getElementById("orange-bar-text1").innerHTML = `Keep Water`;
document.getElementById("orange-bar-text2").innerHTML = `AquaCare`;

document.getElementById("title-box3-sec2").innerHTML = `Limited Water`;

document.getElementById("para-box3-sec2").innerHTML = `Only a small portion of the world’s water is safe to drink. Protecting and conserving this limited resource is essential for communities and the environment.`;

document.getElementById("link-box3-text2").innerHTML = `Read more`;






function setupReadMore() {
    const readMoreLinks = document.querySelectorAll('.link-sec2');

    readMoreLinks.forEach(link => {
        const para = link.closest('.text-cont-sec2').querySelector('.para1-sec2');
        const fullText = para.textContent.trim();
    const limit = 54; 

        para.dataset.full = fullText;

        if (fullText.length > limit) {
            para.dataset.short = fullText.substring(0, limit) + '...';
            para.textContent = para.dataset.short;
        }

        const linkText = link.querySelector('.link-text');
    if (linkText) linkText.textContent = 'Read more';

    link.addEventListener('click', (e) => {
            e.preventDefault();
            if (para.textContent === para.dataset.short) {
                 para.textContent = para.dataset.full;
                link.querySelector('.link-text').textContent = 'Read less';
            } else {
                para.textContent = para.dataset.short;
                link.querySelector('.link-text').textContent = 'Read more';
            }
        });
    });
}
setupReadMore();



animateOnScroll('.card-sec2');
animateOnScroll('.card2-sec2');




// sec3



document.getElementById("header-sec3").innerHTML = "Campaign in Action";


const flkty = new Flickity('.row-sec3', {
  cellAlign: 'center',
  contain: true,
  wrapAround: true, 
  prevNextButtons: true, 
  pageDots: true,   
  draggable: true
});


animateOnScroll('.img1-scroll-bar');




// sec4


document.getElementById("header-sec4").innerHTML = `Take Action Today`;
document.getElementById("para-sec4").innerHTML = `Every small step counts in saving water. By making simple changes in your daily life, you can help conserve this precious resource .`;




let cardssec4 = [
  {
  img: "pic/pic31.png",
  title: `Fix Leaks`,
  paragraph:`Repair dripping taps and pipes.`,
  },
    {
  img: "pic/pic32.png",
  title: `Turn Off & Save`,
  paragraph:`turning off taps and reduce shower time.`,
  },
     {
  img: "pic/pic33.png",
  title: `Avoid Throwing Waste`,
  paragraph:`Keep rivers and seas clean.`,
  },
]

for(i=0 ; i < cardssec4.length ; i++){; 
document.getElementById("cards-sec4").innerHTML += `

                            <div class="row-sec4">
                                <figure class="circle-sec4">
                                    <img src="${cardssec4[i].img}">
                                </figure>
                                <div class="cont-text-row-sec4">
                                    <h2  class="subtitles-sec4">${cardssec4[i].title}</h2>
                                    <p class="para-sec4-roww">${cardssec4[i].paragraph}</p>
                                </div>
                            </div>
`;
}


document.getElementById("cta-sec4").innerHTML = `View More Details`;



animateOnScroll('.img-sec4-big');
animateOnScroll('.img2-sec4-big');




// sec5
function animateSec5() {
  animateOnScroll('.circle1-sec5');
  animateOnScroll('.circle2-sec5');
  animateOnScroll('.circle3-sec5');
}


let sec5Content = [
  {
    header: "Did You Know?",
    parag1: "More than 2 billion people worldwide do not have access to safe and reliable drinking water services at their home.",
    bg1:"pic/pic36.png",
    bg2:"pic/pic37.png",
    bg3:"pic/pic38.png",
  },
  {
    header: "Water Fact",
    parag1: "Agriculture uses around 70 percent of the world’s freshwater supply, making it the largest consumer globally.",
    bg1:"pic/pic43.png",
    bg2:"pic/pic44.png",
    bg3:"pic/pic45.png",
  },
  {
    header: "Freshwater Reality",
    parag1: "Only a small fraction of Earth’s water is fresh and suitable for human use, making conservation essential.",
    bg1:"pic/pic46.png",
    bg2:"pic/pic47.png",
    bg3:"pic/pic48.png",
  },
  {
  header: "Water Insight",
  parag1: "Nearly one third of the world’s population lives in areas affected by water stress, where demand is close to or exceeds available supply.",
  bg1:"pic/pic49.png",
  bg2:"pic/pic50.png",
  bg3:"pic/pic51.png",
},
{
  header: "Quick Water Fact",
  parag1: "Producing everyday items like clothes and food requires large amounts of water, often far more than people realize in daily life.",
  bg1:"pic/pic52.png",
  bg2:"pic/pic53.png",
  bg3:"pic/pic54.png",
},
{
  header: "Water Truth",
  parag1: "Simple actions such as fixing leaks and reducing waste can save thousands of liters of water per household every year.",
  bg1:"pic/pic55.png",
  bg2:"pic/pic56.png",
  bg3:"pic/pic57.png",
}
];

const container = document.getElementById("sec5-container");
function renderRandomFact() {
  const randomIndex = Math.floor(Math.random() * sec5Content.length);
  const randomContent = sec5Content[randomIndex];

  container.innerHTML = `
    <div class="content-sec5">
      <h1 class="header-sec5">${randomContent.header}</h1>
      <p class="para-sec5">${randomContent.parag1}</p>

      <button class="cta-sec5" id="new-fact-btn">
        <span class="cta-text-sec5">New Fact</span>
      </button>
    </div>

    <figure class="circle1-sec5" style="background-image:url(${randomContent.bg1});">
      <img src="pic/pic40.png" class="img-decoration2-sec5">
    </figure>

    <figure class="circle2-sec5" style="background-image:url(${randomContent.bg2});"></figure>

    <figure class="circle3-sec5" style="background-image:url(${randomContent.bg3});">
      <img src="pic/pic39.png"  class="img-decoration1-sec5">
    </figure>
  `;

  requestAnimationFrame(() => {
    document
      .querySelectorAll('.circle1-sec5, .circle2-sec5, .circle3-sec5')
      .forEach(el => el.classList.remove('animate'));

    animateSec5();
  });

  document
    .getElementById("new-fact-btn")
    .addEventListener("click", renderRandomFact);
}


renderRandomFact();
animateSec5();















