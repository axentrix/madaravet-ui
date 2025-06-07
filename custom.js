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
    scale: 1.5,
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

    }
  });

 tl1
     .from(".puppies2", {  x: -40, duration: 1,   ease: "power3.out" }, "<")
      .from(".puppies1", { xPercent: 10, duration: 1,   ease: "power3.out" }, "<")
   




.to([".circle-init1"], {
  scale: 2,
  
  duration: 2,
  ease: "power3.out",
  stagger: 0.3
}, 1)

.to([".circle-init2"], {
  scale: 2,
  
  duration: 2,
  ease: "power3.out",
  stagger: 0.3
}, 1)






 const scrollTrack = document.getElementById("scrollTrack");

  // Create the looping animation timeline (paused initially)
  const scrollTimeline = gsap.timeline({ repeat: -1, paused: true })
    .to(scrollTrack, {
      xPercent: -50,
      ease: "linear",
      duration: 10
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

const time = 2; 
const imageCards = gsap.utils.toArray(".image-card");
const circleCards = gsap.utils.toArray(".circle-card");
const floatingContainer = document.getElementById("floatingBallsContainer");
//circleCards.forEach(card => floatingContainer.appendChild(card));

gsap.set('.image-card', {
  y: (index) => 30 * index, // set offset
  transformStyle: "preserve-3d", // For the perspecitve effect
  transformPerspective: 1000, // For the perspecitve effect
  transformOrigin: "center top", 
});

   const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section3",
      start: "top top",
       end: `${window.innerHeight * 4} top`,
      scrub: true,
      pin: true,
      pinSpacing:0,
   toggleActions: "play none restart none",
  onLeave: () => {
  const section3 = document.querySelector("#section3");
  const section5 = document.querySelector("#section4");
  const section3Top = section3.getBoundingClientRect().top + window.scrollY;
  const section6Top = section5.getBoundingClientRect().bottom + window.scrollY;


  circleCards.forEach((card, i) => {

       const cardHeight = card.offsetHeight;
    const fallY = section6Top - section3Top - cardHeight/2;

    const randomX = gsap.utils.random(-150, 150);
    const randomDuration = gsap.utils.random(1.2, 2.5);

   gsap.set(card, {
      clearProps: true,
      position: "fixed",
      top: card.getBoundingClientRect().top + window.scrollY + "px",
      left: card.getBoundingClientRect().left + window.scrollX + "px",
      xPercent: 0,
      yPercent: 0,
      zIndex: 9999
    });

    gsap.to(card, {
      y: fallY,
      x: randomX,
      ease: "bounce.out",
      duration: randomDuration,
      rotation: 360,
      
    });
  });
},
   onEnterBack: () => {
   circleCards.forEach((card, i) => {
    gsap.set(card, {
      clearProps: "all",
      xPercent: -40,
      yPercent: -50,
      scale: 1,
      opacity: 1,
      position: "absolute",
      zIndex: "", 
    });
  
    // Optionally reset timeline playhead:
    tl3.progress(0);
  });
},

    }
  });


// Loop and animate each card + circle pair together
imageCards.forEach((imgCard, i) => {
  const circleCard = circleCards[i];
  const inTime = i * 2;
  const exitTime = inTime + 1.2;

  tl3.from(imgCard, {
    y: window.innerHeight,
    rotationX: -30,
    duration: 2,
    ease: "power2.out"
  }, inTime);

  if (circleCard) {
    tl3.from(circleCard, {
      x: -500,
      scale: 0.8,
      opacity: 0,
      duration: 1.8,
      ease: "power2.out"
    }, inTime);

    const innerElements = circleCard.querySelectorAll(".circle, img, p");
    tl3.from(innerElements, {
      opacity: 0,
      y: 30,
      scale: 0.2,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2
    }, inTime + 0.4);
  }

  // EXIT — start fading before next one fully enters
  tl3.to(imgCard, {
    y: window.innerHeight,
    scale: 0.8,
    rotationX: -30,
    opacity: 0,
    duration: 2,
    ease: "power2.in"
  }, exitTime);
});

circleCards.forEach((circleCard, i) => {
  const offset = gsap.utils.random(-300, 300); // x movement
  const spin = offset * 2; // correlate spin with distance

  tl3.to(circleCard, {
    x: `+=${offset}`,
    rotation: `+=${spin}`,
    scale: 1.05,
    duration: 1.4,
    ease: "power3.out" // ease-out = decelerating = inertia feel
  }, `+=${i * 0.1}`);
});

tl3.fromTo(
  "#theMask1 .masker",
  { drawSVG: "0%" },
  { drawSVG: "100%", ease: "none", duration: 4 }
);

tl3.from(".big-circle", {
  scale: 0,
  
  ease: "none",
  duration: imageCards.length * 3 // full duration of timeline
}, "-1");


tl3.fromTo(
  "#theMask2 .masker1",
  { drawSVG: "0%" },
  { drawSVG: "100%", ease: "none", duration: 6 },
  "+1" // start after .draw1 finishes
);



tl3.to(
  ".dogcat",
  {
    scale: 1.4,         // or your desired scale
    duration: 2.2,      // adjust as needed
    ease: "power3.out"
  
  },
  ">" // this ensures it starts after all previous animations in tl3
);


const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section4",
      start: "top top",
       end: "bottom center",
      scrub: true,
      pin: false,
  
       toggleActions: "play none restart none",
      
}
  });


tl4.fromTo("#maskedImage", {
  clipPath: "inset(20% 20% 20% 20% round 80px)",
}, {
  clipPath: "inset(0% 0% 0% 0% round 0px)",
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


function dropCirclesToBottom() {
  const section5Top = section5.getBoundingClientRect().top + window.scrollY;
  const section5Bottom = section5.getBoundingClientRect().bottom + window.scrollY;

  circleCards.forEach((card) => {
    const cardHeight = card.offsetHeight;
    const currentTop = card.getBoundingClientRect().top + window.scrollY;
    const distanceToBottom = section5Bottom - currentTop - cardHeight;

    gsap.set(card, {
      clearProps: true,
      position: "absolute",
      zIndex: 1000
    });

    gsap.to(card, {
      y: distanceToBottom,
      ease: "bounce.out",
      duration: gsap.utils.random(1.2, 2.2),
      rotation: gsap.utils.random(100, 300)
    });
  });
}



const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section5",
      start: "top top",
       end: "bottom top",
      scrub: true,
      pin: true,
     
   toggleActions: "play reset restart none",
    

    },
    
  });
tl5.add(() => {
  circleCards.forEach(card => {
    gsap.set(card, {
      clearProps: "all",
      position: "absolute",
      zIndex: "",
      top: "",
      left: "",
      x: 0,
      y: 0,
      rotation: 0
    });
  });
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
});

tl5.from(".big-circle1", {
  scale: 0,
  
  ease: "none",
  duration: 3
});
tl5.from(".big-circle-inner", {
  scale: 0,
  
  ease: "none",
  duration: 3
});






circleCards.forEach((card, i) => {
  const randomX = gsap.utils.random(-200, 200);
  const randomRotation = gsap.utils.random(-180, 180);

  tl5.from(card, {
    x: randomX,
    rotation: randomRotation,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  }, "<+0.3"); // slightly after titles
});

const tl6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section6",
      start: "top top",
       end: "bottom top",
      scrub: true,
      pin: false,
  
       toggleActions: "play none restart none"
    }
  
  });


tl6.fromTo("#maskedImage2", {
  clipPath: "inset(20% 20% 20% 20% round 80px)",
}, {
  clipPath: "inset(0% 0% 0% 0% round 0px)",
  ease: "power2.out",
  duration: 2
}, 0);

// Scale image inside the div
tl6.fromTo("#maskedImage2 img", {
  scale: 1.2
}, {
  scale: 1,
  duration: 2,
  ease: "power3.out"
}, 0);

 
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
        const cloneSize = window.innerWidth < 768 ? "90vw" : "70vh";
        
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
