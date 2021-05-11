gsap.registerPlugin(ScrollTrigger);

function init(){
  // gsap.to("#intro img", { opacity: 0, scrollTrigger: {
  //   trigger: "#intro",
  //   start: 'top top',
  //   end: "bottom center",
  //   scrub: true,
  //   markers: true
  // } } );

// TOGGLECALSS

  // gsap.set("#project02", {scrollTrigger: {
  //   trigger: "#project02",
  //   start: 'top bottom-=150',
  //   end: 'bottom center-=150',
  //   toggleClass: 'active',
  //   markers: true
  // }});

  // PARALLAX
  const parallaxTl = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: 'top bottom',
      scrub: true
    }
  });
  parallaxTl
  .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
  .from('.bcg', { duration: 2, y: '-30%' }, 0)
}

window.addEventListener('load', function(){
    init();
});
