document.addEventListener("DOMContentLoaded", function(){

  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;


      entry.target.classList.add("show");
      observer.unobserve(entry.target);


    });

  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("open");
    navMenu.classList.toggle("active");


});
