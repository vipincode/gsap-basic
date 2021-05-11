gsap.registerPlugin(ScrollTrigger);

function init(){
  gsap.to(['#intro h1', '#intro p'], {
    autoAlpha: 0, // fade in and out on scroll.
    ease: 'none',
    scrollTrigger: {
      trigger: '#intro .content',
      start: 'top top+=5%',
      pin: true,
      scrub: true,
      markers: true,
    }
  })
}

window.addEventListener('load', function(){
    init();
});
