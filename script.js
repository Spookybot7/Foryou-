// 1. SCROLL BUTTON LOGIC

function romanticConfetti() {
  // We fire the confetti twice (left and right) for that "cannon" effect
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    // Firing from random positions to fill the screen with romance
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      // This is the "Magic" list of emojis
      shapes: ['circle'], 
      colors: ['#ff0000', '#00ff00', '#ffffff'], // Fallback colors
      // We use a custom "draw" function if the library is being stubborn, 
      // but usually, just passing the emoji in a scalar works:
    });

    // REPLACING THE ABOVE WITH THE EMOJI TRICK:
    const scalar = 4;
    const triangle = confetti.shapeFromText({ text: '🌹', scalar });
    const chocolate = confetti.shapeFromText({ text: '🍫', scalar });
    const heart = confetti.shapeFromText({ text: '💚', scalar });

    confetti({
      shapes: [triangle, chocolate, heart],
      particleCount: 10,
      origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      scalar
    });
  }, 250);
}

const buttons = document.querySelectorAll('.scroll-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const sections = document.querySelectorAll('section');
    const currentScroll = window.scrollY;
    let next = null;

    sections.forEach(section => {
      // Find the next section below the current scroll position
      if (section.offsetTop > currentScroll + 10 && !next) {
        next = section;
      }
    });

    if (next) {
      next.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.scroll-btn');
  const video = document.getElementById('myVideo');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // UNMUTE THE VIDEO ON FIRST CLICK
      if (video) {
        video.muted = false;
        video.play(); // Ensures it keeps playing with sound
      }

      // Existing scroll logic...
      const sections = document.querySelectorAll('section');
      const currentScroll = window.scrollY;
      let next = null;
      for (let section of sections) {
        if (section.offsetTop > currentScroll + 50) {
          next = section;
          break; 
        }
      }
      if (next) { next.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});

// 2. VALENTINE BUTTON LOGIC
// function acceptValentine(btn) {
//   //btn.disabled = true; 
//   btn.innerText = '💚 Always you';
//   btn.style.backgroundColor = '#1b5e20'; 
//   btn.style.transform = 'scale(1.1)';

//   // Continuous Confetti Burst
//   var end = Date.now() + (2 * 1000); 

//   (function frame() {
//     confetti({
//       particleCount: 3,
//       angle: 60,
//       spread: 55,
//       origin: { x: 0 },
//       colors: ['#2e7d32', '#ffffff']
//     });
//     confetti({
//       particleCount: 3,
//       angle: 120,
//       spread: 55,
//       origin: { x: 1 },
//       colors: ['#2e7d32', '#ffffff']
//     });

//     if (Date.now() < end) {
//       requestAnimationFrame(frame);
//     }
//   }());

//   // Start the card heartbeat
//   const card = btn.closest('.card');
//   card.style.animation = 'heartbeat 1.2s infinite';
// }



// <button class="valentine-btn" onclick="acceptValentine(this)">
//         Be my Valentine?
//       </button>