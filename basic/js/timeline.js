const runStart = () => {
  console.log("onStart");
}
const runUpdate = () => {
  console.log("onUpdate");
}
const runComplete = () => {
  console.log("onComplete");
}
const timeline = gsap.timeline({
  duration: 1,
  paused: true,
  onStart: runStart,
  onUpdate: runUpdate,
  onComplete: runComplete
});

timeline
  .from("body", {
    backgooundColor: "#fff",
    duration: 1.7,
    ease: "none"
  })
  .fromTo( ['h1', '.intro'],
    {
      opacity: 0,
      y: -20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
      duration: 4
    },
    // "-=1" // bring tween 1 second forwaord.[overlat previous tween]
    //"+=2" // add second gap working same ways as delay
     "-=0.5"
    //"myLable" // add same label at two places then both tween play same time.
  )
  .from(['img', 'h2'], {
    opacity: 0,
    ease: "none",
    duration: 2.8,
  })
  .fromTo( "ul li",
    {
      opacity: 0,
      y: -20
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    },
    //"myLable"
  )

const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnResume = document.getElementById("btnResume");
const btnReverse = document.getElementById("btnReverse");
const btnSpeedUp = document.getElementById("btnSpeedUp");
const btnSlowDown = document.getElementById("btnSlowDown");
const btnSeek = document.getElementById("btnSeek");
const btnProgress = document.getElementById("btnProgress");
const btnRestart = document.getElementById("btnRestart");

btnPlay.addEventListener("click", () => {
  timeline.play();
});
btnPause.addEventListener("click", () => {
  timeline.pause();
});
btnResume.addEventListener("click", () => {
  timeline.resume();
});
btnResume.addEventListener("click", () => {
  timeline.reverse();
});
btnSpeedUp.addEventListener("click", () => {
  timeline.timeScale(2);
});
btnSlowDown.addEventListener("click", () => {
  timeline.timeScale(0.5);
});
btnSeek.addEventListener("click", () => {
  timeline.seek(1.5); // jump to a lable , or in middle.
});
btnProgress.addEventListener("click", () => {
  timeline.progress(0.5);
});
btnRestart.addEventListener("click", () => {
  timeline.restart(); // always jump in middle
});

// See cheet sheet for another method.







