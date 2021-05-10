// Basics, adding property in GSAP.
// To study uncomment one by one and see action.

// gsap.to("ul li", { y: 20, duration: 3});
// gsap.to("h2", { backgroundColor: '#cc2156', duration: 3});

// Let use dealy property

// gsap.to('h2', {
//   backgroundColor: '#cc2156',
//   duration: 3,
//   delay: 2,       // It is running 2 seconds after the pageload.Meaning it wait 2 second ang then start animating
// });

// Let add some easng effect on list item.

// gsap.to('ul li', {
//   duration: 0.7,
//   x: 40,
//   ease: "power2.in",
//   stagger: 0.3  // `li` Moving or animating in a sequence.
// });

// Let add animation in that item come from another place and end at oringinal place

// gsap.from("ul li", {
//   duration: 0.7,
//   x: -40,
//   ease: "power2.out",
//   stagger: 0.3,
//   repeat: 2,
//   repeatDelay: 1 // add delay in between after one repaet. means one animation happen then 1 second gap then another animation happen.
// });

// Let demonstrate `yoyo` property
// `yoyo` Replay the tween in reverse order.
// gsap.to("ul li:last-child", {
//   duration: 0.7,
//   y: 40,
//   ease: "power2.out",
//   repeat: -1,
//   repeatDelay: 1,
//   yoyoEase: "none" // Apply on rewind back.
// });

// FromTo property
gsap.fromTo("header", {x: -40}, {
  x: 40,
  duration: 0.7,
  ease: "power2.out",
  repeat: 3,
  yoyo: true,
});

gsap.set("ul", { y: 100 });













