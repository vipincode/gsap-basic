gsap.registerPlugin(ScrollTrigger);

function init(){
  const projects = document.querySelectorAll('.project');

  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: project.querySelector('img'),
        start: 'top bottom-=300',
        end: 'top center',
        toggleActions: 'play none none reverse',
        scrub: true,
        // onUpdate: (self) => console.log(self.progress),
        // onUpdate: ({progress, direction, isActive, getVelocity}) => console.log(progress, direction, isActive, getVelocity() ),
        onToggle: () => { console.log('toggle'); },
        markers: true
      }
    })
  });

}

window.addEventListener('load', function(){
    init();
});
