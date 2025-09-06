// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("bg-primary")
    navbar.classList.remove("bg-primary/95")
  } else {
    navbar.classList.add("bg-primary/95")
    navbar.classList.remove("bg-primary")
  }
})

// Intersection Observer for fade-in animations
// (Duplicate observer removed to fix redeclaration error)

// Mobile menu toggle
// (Removed duplicate declaration and event listener)

// Typewriter effect
function typeWriter(element, text, speed = 50) {
  let i = 0
  element.innerHTML = ""
  element.style.width = "0"

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      element.style.borderRight = "2px solid transparent"
    }
  }

  setTimeout(() => {
    element.style.width = "auto"
    type()
  }, 1000)
}

// Initialize typewriter effect
window.addEventListener("load", () => {
  const typewriterElement = document.querySelector(".typewriter")
  if (typewriterElement) {
    const text = typewriterElement.textContent
    typeWriter(typewriterElement, text)
  }
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    const yPos = -(scrolled * speed)
    shape.style.transform = `translateY(${yPos}px)`
  })
})

// Contact form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const message = this.querySelector("textarea").value

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent

  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 2000)
})

// Add hover effects to project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("bg-primary")
    navbar.classList.remove("bg-primary/95")
  } else {
    navbar.classList.add("bg-primary/95")
    navbar.classList.remove("bg-primary")
  }
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"

      // Animate skill bars
      if (entry.target.classList.contains("skill-item")) {
        const skillBar = entry.target.querySelector(".skill-bar")
        const progress = entry.target.querySelector(".skill-progress")
        const width = progress.getAttribute("data-width")

        setTimeout(() => {
          skillBar.classList.add("animate")
          progress.style.transform = `translateX(-${100 - Number.parseInt(width)}%)`
        }, 200)
      }
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.querySelectorAll(".fade-in, .skill-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const navbar = document.querySelector("nav")

mobileMenuBtn.addEventListener("click", () => {
  const navLinks = navbar.querySelector(".hidden.md\\:flex")
  navLinks.classList.toggle("hidden")
  navLinks.classList.toggle("flex")
  navLinks.classList.toggle("flex-col")
  navLinks.classList.toggle("absolute")
  navLinks.classList.toggle("top-full")
  navLinks.classList.toggle("left-0")
  navLinks.classList.toggle("w-full")
  navLinks.classList.toggle("bg-primary")
  navLinks.classList.toggle("py-4")
})

// Typewriter effect
function typeWriter(element, text, speed = 50) {
  let i = 0
  element.innerHTML = ""
  element.style.width = "0"

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      element.style.borderRight = "2px solid transparent"
    }
  }

  setTimeout(() => {
    element.style.width = "auto"
    type()
  }, 1000)
}

// Initialize typewriter effect
window.addEventListener("load", () => {
  const typewriterElement = document.querySelector(".typewriter")
  if (typewriterElement) {
    const text = typewriterElement.textContent
    typeWriter(typewriterElement, text, 30)
  }
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    const yPos = -(scrolled * speed)
    shape.style.transform = `translateY(${yPos}px)`
  })
})

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const name = this.querySelector('input[type="text"]').value
      const email = this.querySelector('input[type="email"]').value
      const message = this.querySelector("textarea").value

      if (!name || !email || !message) {
        alert("Please fill in all fields")
        return
      }

      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent

      submitBtn.textContent = "TRANSMITTING..."
      submitBtn.disabled = true

      setTimeout(() => {
        alert("TRANSMISSION_COMPLETE: Message sent to akash_network!")
        this.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
})

// Add hover effects to project cards
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Smooth reveal animations for sections
const revealSections = document.querySelectorAll("section")
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-slide-up")
      }
    })
  },
  { threshold: 0.1 },
)

revealSections.forEach((section) => {
  revealObserver.observe(section)
})

// Matrix Rain Effect
class MatrixRain {
  constructor() {
    this.container = null;
    this.columns = [];
    this.init();
  }

  init() {
    this.container = document.createElement('div');
    this.container.className = 'matrix-rain';
    document.body.appendChild(this.container);

    // Create columns
    const columnCount = Math.floor(window.innerWidth / 20);
    for (let i = 0; i < columnCount; i++) {
      this.createColumn(i);
    }
  }

  createColumn(index) {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.left = (index * 20) + 'px';
    column.style.animationDuration = (Math.random() * 3 + 2) + 's';
    column.style.animationDelay = (Math.random() * 2) + 's';
    
    // English characters and symbols for matrix effect
    const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>?AKASH';
    let text = '';
    const length = Math.random() * 10 + 5;
    
    for (let i = 0; i < length; i++) {
      text += chars[Math.floor(Math.random() * chars.length)];
    }
    
    column.textContent = text;
    this.container.appendChild(column);

    // Remove and recreate after animation
    setTimeout(() => {
      column.remove();
      setTimeout(() => this.createColumn(index), Math.random() * 1000);
    }, parseFloat(column.style.animationDuration) * 1000);
  }
}

// Particle System
class ParticleSystem {
  constructor() {
    this.particles = [];
    this.canvas = null;
    this.ctx = null;
    this.init();
  }

  init() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '0';
    this.canvas.style.opacity = '0.3';
    
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      this.particles.push(this.createParticle());
    }

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      life: 1,
      decay: Math.random() * 0.01 + 0.005
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    this.particles = this.particles.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= particle.decay;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= this.canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= this.canvas.height) particle.vy *= -1;

      // Draw particle
      this.ctx.save();
      this.ctx.globalAlpha = particle.life;
      this.ctx.fillStyle = '#00ffff';
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = '#00ffff';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      return particle.life > 0;
    });

    // Add new particles
    while (this.particles.length < 50) {
      this.particles.push(this.createParticle());
    }

    requestAnimationFrame(() => this.animate());
  }
}

// Initialize systems on load
window.addEventListener('load', () => {
  new MatrixRain();
  new ParticleSystem();
  
  // Add cyberpunk grid background
  const gridBg = document.createElement('div');
  gridBg.className = 'cyber-grid';
  document.body.appendChild(gridBg);
  
  // Add JACK IN button functionality
  const jackInBtn = document.getElementById('jack-in-btn');
  if (jackInBtn) {
    jackInBtn.addEventListener('click', () => {
      // Add click animation
      jackInBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        jackInBtn.style.transform = 'scale(1)';
        // Redirect to the about page
        window.open('https://akashsrm.netlify.app/about', '_blank');
      }, 150);
    });
  }
});
