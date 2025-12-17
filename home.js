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





// function animateOnScroll(selector) {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle('animate', entry.isIntersecting);
//         });
//     });

//     document.querySelectorAll(selector).forEach(el => observer.observe(el));
// }

// animateOnScroll('.big-img-sec1');







window.addEventListener("load", () => {

  setTimeout(() => {


    document.querySelector(".preloaderrr").style.display = "none";

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          obs.unobserve(entry.target); // play once
        }
      });
    }, {
      threshold: 0.3
    });

    document.querySelectorAll(
      ".big-img-sec1, .img-decoration1-sec1, .img-decoration2-sec1, .img-decoration3-sec1, .img-decoration4-sec1, .img-decoration5-sec1, .img-decoration6-sec1, .img-decoration7-sec1, .img-decoration8-sec1"
    ).forEach(el => observer.observe(el));

  }, 3000); 

});







