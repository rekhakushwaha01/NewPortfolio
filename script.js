//about
 const lines = ["Hello World! Let's write some magic.", "Eat. Sleep. Code. Repeat.", "I turn coffee into code"]; // Lines to display
        const typewriterElement = document.querySelector('.typewriter');
        let currentLine = 0; // Index of the current line
        let charIndex = 0; // Index of the current character
        let isErasing = false; // State for erasing

        function typeEffect() {
            const currentText = lines[currentLine];

            if (isErasing) {
                // Erase characters
                charIndex--;
                typewriterElement.textContent = currentText.slice(0, charIndex);
                if (charIndex === 0) {
                    isErasing = false; // Switch to typing
                    currentLine = (currentLine + 1) % lines.length; // Move to the next line
                }
            } else {
                // Type characters
                charIndex++;
                typewriterElement.textContent = currentText.slice(0, charIndex);
                if (charIndex === currentText.length) {
                    isErasing = true; // Start erasing after typing
                }
            }

            // Adjust typing/erasing speed
            const speed = isErasing ? 50 : 100; // Faster erasing
            setTimeout(typeEffect, speed);
        }

        // Start the typewriter effect
        typeEffect();
var scales = [{ scale: 1.6 }, { scale: 0.2 }, { scale: 1 }];

gsap.to('.get', {
  motionPath: {
    path: scales, 
    curviness: 0
  }, 
  duration: 2, 
  ease: "none",
  repeat: 1,
  repeatDelay: 1
});

gsap.to('.golf', {
  motionPath: {
    path: scales, 
    curviness: 2
  }, 
  duration: 2, 
  ease: "none",
  repeat: 1,
  repeatDelay: 1
});
gsap.to('.bubble', {
  motionPath: {
    path: scales, 
    curviness: 4
  }, 
  duration: 2, 
  ease: "none",
  repeat: 1,
  repeatDelay: 1
});
gsap.to('.time', {
  motionPath: {
    path: scales,
    curviness: 6
  }, 
  duration: 2, 
  ease: "none",
  repeat: 1,
  repeatDelay: 1
});
//skills
gsap.to(".html", {
  x: 200,

})
// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
let mm = gsap.matchMedia();

// this user has no preference set, so it's safe to animate!
mm.add("(prefers-reduced-motion: no-preference)", (context) => {
  gsap.from(".box", {
repeat:-1,
    scale: 0,
    ease: "reverse.inOut",
    repeat: -1,
    yoyo: true,
    duration: 3,
  });
});

// this user has specified "reduced motion", so either remove the animations or simplify them down
mm.add("(prefers-reduced-motion: reduce)", (context) => {
  gsap.from(".box", { opacity: 0, repeat: -1, duration: 3, ease: "none" });
});
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#28a92b";

let position = { x: 0, y: 0 };

function draw() {
  // erase the canvas
  ctx.clearRect(0, 0, 300, 300);
  // redraw the square at it's new position
  ctx.fillRect(position.x, position.y, 100, 100);
}

//animate x and y of point
gsap.to(position, {
  x: 200,
  y: 200,
  duration: 4,
  // unlike DOM elements, canvas needs to be redrawn and cleared on every tick
  onUpdate: draw,
});