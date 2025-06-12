    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, Physics2DPlugin, SplitText);

// Header opacity on scroll
ScrollTrigger.create({
  start: 0,
  end: "max",
  onUpdate: (self) => {
    const scrollDirection = self.direction;
    const header = document.querySelector('header');
    
    if (scrollDirection === 1) { // Scrolling down
      gsap.to(header, { opacity: 0, duration: 0.3 });
    } else if (scrollDirection === -1) { // Scrolling up
      gsap.to(header, { opacity: 1, duration: 0.3 });
    }
  }
});
const split = new SplitText("h1", { type: "chars" });
const splitinfo1 = new SplitText(".infobox1", { type: "chars" });
const splitinfo2 = new SplitText(".infobox2", { type: "chars" });
gsap.from(split.chars, { opacity: 0, stagger: 0.05 });
gsap.from(splitinfo1.chars, { opacity: 0, stagger: 0.05 })
gsap.from(splitinfo2.chars, { opacity: 0, stagger: 0.05 })
gsap.fromTo(
  [".circle-init1", ".circle-init2"],
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 2,
    ease: "power3.out",
    stagger: 0.3
  }
);

const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section1",
      start: "top 20%",
      end: "bottom top",
      scrub: true,
toggleActions:"play, reverse, play, restart",
    }
  });

 tl1
     .from(".puppies2", {  x: -40, duration: 1,   ease: "power3.out" }, "<")
      .from(".puppies1", { xPercent: 10, duration: 1,   ease: "power3.out" }, "<")
   




.to([".circle-init1"], {
  scale: 1.4,
  
  duration: 1,
  ease: "power3.out",
  stagger: 0.3
}, 1)

.to([".circle-init2"], {
  scale: 1.4,
  
  duration: 1,
  ease: "power3.out",
  stagger: 0.3
}, 1)






 const scrollTrack = document.getElementById("scrollTrack");
const isMobile = window.innerWidth <= 768;
  // Create the looping animation timeline (paused initially)
  const scrollTimeline = gsap.timeline({ repeat: -1, paused: true })
    .to(scrollTrack, {
      xPercent: isMobile ? -100 : -80,
      ease: "linear",
        duration: isMobile ? 28 : 16
    });

  // Wrap in a ScrollTrigger-bound timeline
  const controlTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    start: "top bottom",
    end: "bottom top",
    onEnter: () => scrollTimeline.restart(true),
    onLeave: () => scrollTimeline.pause(),
    onEnterBack: () => scrollTimeline.restart(true),
    onLeaveBack: () => scrollTimeline.pause(),
  
      toggleActions: "play reverse play reverse" // animate in and out
      
  }


   
});


 controlTimeline.from("#scrollRibbon", {
    xPercent: 100,     // start off-screen to the right
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });


  const scaleMax = gsap.utils.mapRange(1, document.querySelectorAll(".image-card").length, 0.6, 1); 

const time = 3; 
const imageCards = gsap.utils.toArray(".image-card");
const circleCards = gsap.utils.toArray(".circle-card");
const floatingContainer = document.getElementById("floatingBallsContainer");
//circleCards.forEach(card => floatingContainer.appendChild(card));
circleCards.forEach((card, i) => {  
    const parent = card.parentElement;
    const centerX = parent.offsetWidth / 2 - card.offsetWidth / 2;
 const z = circleCards.length - i; 
    gsap.set(card, {
    
       position: "fixed",
  top: "100%",         // just below viewport
  left: "50%",
  xPercent: -50,
  y: 100,              // push it just below screen
  opacity: 0,
     zIndex: z,
     onUpdate: self => {
      const y = gsap.getProperty(card, "y");
      console.log("Current y:", y);
    }
    });

  });

if (isMobile) {
  circleCards.forEach(card => {
    gsap.set(card, {

      left: "50%",
      xPercent: -50,  
    
      
    });
  });

}
const step = 0.8;
gsap.set('.image-card', {
  y: (index) => 30 * index, // set offset
  transformStyle: "preserve-3d", // For the perspecitve effect
  transformPerspective: 1000, // For the perspecitve effect
  transformOrigin: "center top", 
});
gsap.set('.big-circle', {
  scale:0
});
   const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top top",
       end: `+=2400`,
      scrub: true,
      pin: true,
      pinSpacing:0,
   toggleActions: "play none restart none",
    onEnter:()=>{
 
    },
  

    }
  });
tl3.set(imageCards, {
  autoAlpha: 0,
  scale: 1,
  rotationX: -30,
  transformOrigin: "center center"
});
// === STEP 1: image-card 1 appears smoothly
tl3.to(imageCards[0], {
  autoAlpha: 1,
  rotationX: 0,
  scale: 0.98,
  duration: 0.4,
  ease: "power2.out"
}, 0 * step);

tl3.to(circleCards[0], {
  autoAlpha: 1,
  top: "50%",
  yPercent: -50,
  zIndex: 34,
  rotation: 0,
  scale: 1.2,
  ease: "power2.out",
  duration: 0.4
}, 0 * step + 0.1);

tl3.to(circleCards[0], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.in",
  duration: 0.4
}, 0 * step + 0.5);

tl3.to(imageCards[0], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.inOut",
  duration: 0.4
}, 0 * step + 0.6);

// === STEP 4: image-card 2 enters slightly before image-card 1 exits
tl3.fromTo(imageCards[1], {
  autoAlpha: 0,
  yPercent: 50,
  rotationX: -30,
  scale: 1,
  transformOrigin: "center center"
}, {
  autoAlpha: 1,
  scale: 0.98,
  yPercent: 0,
  rotationX: 0,
  duration: 0.4,
  ease: "power2.out"
}, 1 * step);

tl3.to(circleCards[1], {
  autoAlpha: 1,
  top: "50%",
  yPercent: -50,
  zIndex: 34,
  rotation: 0,
  scale: 1.2,
  ease: "power2.out",
  duration: 0.4
}, 1 * step + 0.1);

tl3.to(circleCards[1], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.in",
  duration: 0.4
}, 1 * step + 0.5);

tl3.to(imageCards[1], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.inOut",
  duration: 0.4
}, 1 * step + 0.6);

// === STEP 7: image-card 3 enters with overlap
tl3.fromTo(imageCards[2], {
  autoAlpha: 0,
  yPercent: 50,
  rotationX: -30,
  scale: 1,
  transformOrigin: "center center"
}, {
  autoAlpha: 1,
  yPercent: 0,
  rotationX: 0,
  scale: 0.98,
  duration: 0.4,
  ease: "power2.out"
}, 2 * step);

tl3.to(circleCards[2], {
  autoAlpha: 1,
  top: "50%",
  yPercent: -50,
  zIndex: 34,
  rotation: 0,
  scale: 1.2,
  ease: "power2.out",
  duration: 0.4
}, 2 * step + 0.1);

tl3.to(circleCards[2], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.in",
  duration: 0.4
}, 2 * step + 0.5);

tl3.to(imageCards[2], {
  y: window.innerHeight,
  autoAlpha: 0,
  ease: "power2.inOut",
  duration: 0.4
}, 2 * step + 0.6);


tl3.add(gsap.fromTo("#theMask1 .masker", {
  drawSVG: "0%"
}, {
  drawSVG: "100%",
  ease: "none",
  duration: 1.2 // match tl3 total duration
}), 0);

tl3.add(gsap.fromTo("#theMask1 .masker", {
  drawSVG: "100%"
}, {
  drawSVG: "0%",
  ease: "none",
  duration: 1.2 // match tl3 total duration
}), 1);


const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      start: "top -10%",
       end: "bottom center",
      scrub: false,
      pin: false,
  
       toggleActions: "play none play none",
      
}
  });


tl4.fromTo("#maskedImage", {
  clipPath: "inset(0% 0% 0% 0% round 20px)",
}, {
  clipPath: isMobile ? "inset(20% 10% round 20px)" : "inset(5% 5% round 20px)",
  ease: "power2.out",
  duration: 2
}, 0);

// Scale image inside the div
tl4.fromTo("#maskedImage img", {
  scale: 1.2
}, {
  scale: 1,
  duration: 2,
  ease: "power3.out"
}, 0);

const section5 = document.querySelector("#section5");




const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section5",
      start: "top -100px",
       end: "+=140%",
      scrub: true,
      pin: true,
     
   toggleActions: "play reset restart none",
    

    },
    
  });
 


const split1 = new SplitText(".splittitle1", { type: "chars" });
const split2 = new SplitText(".splittitle2", { type: "chars" });
tl5.from(split1.chars, {
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 2,
  ease: "power2.out"
}, "<+0.2"); // starts right after previous
  gsap.set(".big-circle1", {
           scale:0
        });
          gsap.set(".big-circle-inner", {
           scale:0
        });
tl5.from(split2.chars, {
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 2,
  ease: "power2.out"
}, "<+0.5") // starts shortly after split1

.from(".hours", {
  opacity: 0,
  
 ease: "power2.out",
  duration: 1
}, "0.1");

tl5.to(".big-circle1", {
  scale: isMobile ? 2.8 : 1,
  
  ease: "none",
  duration: 1
}, 0);
tl5.to(".big-circle-inner", {
  scale: isMobile ? 2.6 : 1,
  
  ease: "none",
  duration: 0.4
},">+0.3");


tl5.add(gsap.fromTo("#theMask2 .masker", {
  drawSVG: "0%"
}, {
  drawSVG: "100%",
  ease: "none",
  duration: 2.4 // match tl3 total duration
}), 0);
gsap.fromTo(
  "#theMask2 .masker1",
  { drawSVG: "0%" },
  {
    drawSVG: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: "#section5",
      start: "top top",
      end: "+=200%",
      scrub: true
    }
  }
);




const circleAnim = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "top top",
    end: "+=4400", // matches tl3
    scrub: true
  }
});
const fullDuration = 2.4; // match the tl3 timeline range
circleAnim.to(".big-circle", {
  scale: isMobile ? 0.8 : 1.3,
  ease: "none",
  duration: fullDuration * 0.25
}, 0);

circleAnim.to(".dogcat", {
  scale: isMobile ? 1.2 : 2.5,
  ease: "none",
  duration: fullDuration * 0.25
}, 0.1);

circleAnim.to(".dogcat", {
  scale: isMobile ? 1.7 : 3,
  ease: "none",
  duration: fullDuration * 0.25
}, 0.5);

circleAnim.to(".big-circle", {
  scale: isMobile ? 0.3 : 1,
  ease: "none",
  duration: fullDuration * 0.25
}, 1);

circleAnim.to(".dogcat", {
  scale: isMobile ? 1 : 2,
  ease: "none",
  duration: fullDuration * 0.25
}, 1.5);

 const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section6",
      start: "top 20%",
      end: isMobile ? "+=1200" : "+=2400",
      scrub:false,
      pin: false,
    }
  });


const maskedImage2 = document.querySelector("#maskedImage2");



tl6.fromTo("#maskedImage2", {
  clipPath: "inset(0% 0% 0% 0% round 40px)",
}, {
 clipPath: isMobile ? "inset(20% 10% round 20px)" : "inset(5% 5% round 20px)",
  ease: "power2.out",
  duration: 1
}, 0);

// Scale image inside the div
tl6.fromTo("#maskedImage2 img", {
  scale: 1.2
}, {
  scale: 1,
  duration: 2,
  ease: "power3.out"
}, 0);
tl6.fromTo(".google", {
  scale: 1
}, {
  scale: 1.4,
  duration: 2,
  ease: "power3.out"
}, 0);
const split3 = new SplitText(".splittitle3", { type: "chars" });
tl6.from(split1.chars, {
  opacity: 0,
  y: 20,
  stagger: 0.05,
  duration: 1,
  ease: "power2.out"
}); 

 //ottuk
 const { Engine, World, Bodies, Runner } = Matter;

  let engine, world, runner;
  let animationFrame;
  const section = document.querySelector("#section6");
  const reviews = Array.from(section.querySelectorAll(".google-review"));
  const radius = 50;

  function createPhysicsWorld() {
    engine = Engine.create();
    world = engine.world;
    runner = Runner.create();

    const boundsHeight = section.offsetHeight;

    const floor = Bodies.rectangle(window.innerWidth / 2, boundsHeight - 90, window.innerWidth, 60, { isStatic: true });
    const wallL = Bodies.rectangle(-10, boundsHeight / 2, 50, boundsHeight, { isStatic: true });
    const wallR = Bodies.rectangle(window.innerWidth + 10, boundsHeight / 2, 50, boundsHeight, { isStatic: true });
    World.add(world, [floor, wallL, wallR]);

    const bubbles = reviews.map((el) => {
      el.style.opacity = "1"; el.style.display = "block";
      const percentX = parseFloat(el.dataset.x || "50");
      const x = (percentX / 100) * window.innerWidth;
      const y = -150 - Math.random() * 100;
const { Body } = Matter;
      const body = Bodies.circle(x, y, radius, {
        restitution: 0.9,
        friction: 0.05,
        frictionAir: 0.01,
        density: 0.001
      });
Body.setVelocity(body, {
  x: gsap.utils.random(-1, 1),    // slight random horizontal wiggle
  y: gsap.utils.random(5, 12)     // randomized initial fall speed
});
      World.add(world, body);
      return { el, body };
    });

    function animate() {
      bubbles.forEach(({ el, body }) => {
        el.style.transform = `translate(${body.position.x - radius}px, ${body.position.y - radius}px)`;
      });
      animationFrame = requestAnimationFrame(animate);
    }

    Runner.run(runner, engine);
    animate();
  }

  function clearPhysicsWorld() {
  if (engine) {
    cancelAnimationFrame(animationFrame);
    Runner.stop(runner);
    World.clear(world);
    Engine.clear(engine);
    engine = null;
    world = null;
    runner = null;
  }

  reviews.forEach(el => {
    el.style.transition = "";
    el.style.opacity = "0";
  });

  gsap.set(reviews, { clearProps: "transform,y" }); // ✅ this line fixes it
}

let physicsCreated = false;
ScrollTrigger.create({
  trigger: "#section6",
  start: "top 25%",
  onEnter: () => {
    if (!physicsCreated) {
      clearPhysicsWorld();
      createPhysicsWorld();
      physicsCreated = true;
      console.log("Physics created");
    }
  },
  onEnterBack: () => {
    if (!physicsCreated) {
      clearPhysicsWorld();
      createPhysicsWorld();
      physicsCreated = true;
      console.log("Physics re-created");
    }
  },
  
  onLeaveBack: () => {
  cancelAnimationFrame(animationFrame);
  if (runner) Matter.Runner.stop(runner);

  gsap.to(reviews, {
    y: window.innerHeight + 300,
    duration: () => gsap.utils.random(0.6, 1.4),
    delay: () => gsap.utils.random(0, 0.4),
    ease: "power2.in",
    overwrite: true
  });
  physicsCreated = false;
}
});


 //dotuk
 
  const menuBtn = document.getElementById('menuCircle');
  const menuCircle = document.getElementById('menuCircle');
  let menuOpen = false;
  const lines = document.querySelectorAll('.bars .line');
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        // Rotate lines to form an X
        gsap.to(lines[0], { rotation: 45, y: 6, duration: 0.3 });
        gsap.to(lines[1], { rotation: 135, y: -16, duration: 0.3 });
  
        // Add open class to trigger the overlay
        menuCircle.classList.add('open');
     
        // Create a clone of the menuCircle for the animation
        const menuClone = menuCircle.cloneNode(true);
        menuClone.id = "menuCircleClone";
        menuClone.classList.add("circle-clone");
        document.body.appendChild(menuClone);
        
        // Position and style the clone
        gsap.set(menuClone, {
            position: "fixed",
            top: menuCircle.getBoundingClientRect().top + "px",
            left: menuCircle.getBoundingClientRect().left + "px",
            width: menuCircle.offsetWidth + "px",
            height: menuCircle.offsetHeight + "px",
            zIndex: 9999,
            backgroundColor: "#167DFF",
            borderRadius: "50%"
        });
        
        // Hide the original menuCircle
        gsap.set(menuCircle, { opacity: 0 });
        
        // Animate the clone to full size
        // Use responsive sizing based on screen width
        const cloneSize = window.innerWidth < 768 ? "120vw" : "70vh";
        
        gsap.to(menuClone, {
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            width: cloneSize,
            height: cloneSize,
            borderRadius: "50%",
            ease: "elastic.out(1, 0.5)",
            duration: 1
        });
        
        // Show menu items and logo in the clone
        const menuItems = menuClone.querySelector('ul');
        const menuLogo = menuClone.querySelector('img');
        if (menuItems && menuLogo) {
          menuOpen=true
            gsap.to([menuItems, menuLogo], {
                opacity: 1,
                duration: 0.2,
                delay: 0.5
            });
        }


        menuOpen = true;
    } else {
        // Get the clone
        const menuClone = document.getElementById('menuCircleClone');
        
        // Hide menu items and logo in the clone
        const menuItems = menuClone.querySelector('ul');
        const menuLogo = menuClone.querySelector('img');
        if (menuItems && menuLogo) {
            gsap.to([menuItems, menuLogo], {
                opacity: 0,
                duration: 0.2
            });
        }
        
        // Remove open class to hide the overlay
        menuCircle.classList.remove('open');
        
        // Reset lines to original position
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3 });

        // Animate the clone back to original position and then remove it
        gsap.to(menuClone, {
            top: menuCircle.getBoundingClientRect().top + "px",
            left: menuCircle.getBoundingClientRect().left + "px",
            width: "60px",
            height: "60px",
            borderRadius: "100%",
            ease: "power2.inOut",
            duration: 0.5,
            onComplete: function() {
                // Show the original menuCircle
                gsap.set(menuCircle, { opacity: 1 });
                // Remove the clone
                menuClone.parentNode.removeChild(menuClone);
            }
        });
        
        menuOpen = false;
    }
  });
  window.addEventListener("load", () => {
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});
window.addEventListener("resize", () => {
  ScrollTrigger.refresh(true);

  // Optional: reset flag so physics re-creates on next scroll into view
  physicsCreated = false;

  // Optionally hide and reset reviews
  reviews.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "";
  });
});