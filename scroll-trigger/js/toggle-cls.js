gsap.registerPlugin(ScrollTrigger);

function init(){

//TOGGLECALSS
// Add active class on particular section and remove on scroll.
  gsap.set("#project02", {scrollTrigger: {
    trigger: "#project02",
    start: 'top bottom-=150',
    end: 'bottom center-=150',
    toggleClass: 'active',
    markers: true
  }});

}

window.addEventListener('load', function(){
    init();
});
