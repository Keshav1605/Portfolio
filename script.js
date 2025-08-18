// Smooth scrolling and navigation
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })

  // Active navigation highlighting
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-link")

  function updateActiveNav() {
    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", updateActiveNav)

  // Skill bar animations
  const skillBars = document.querySelectorAll(".skill-progress")
  const skillsSection = document.querySelector("#skills")

  function animateSkillBars() {
    const skillsSectionTop = skillsSection.offsetTop
    const skillsSectionHeight = skillsSection.clientHeight
    const scrollPosition = window.scrollY + window.innerHeight

    if (scrollPosition > skillsSectionTop + skillsSectionHeight / 2) {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("data-width")
        bar.style.width = width
      })
    }
  }

  window.addEventListener("scroll", animateSkillBars)

  // Parallax effect for hero section
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")

  function parallaxEffect() {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    if (heroContent) {
      heroContent.style.transform = `translateY(${rate}px)`
    }
  }

  window.addEventListener("scroll", parallaxEffect)

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".skill-card, .project-card, .timeline-item")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Typing effect for hero tagline
  const tagline = document.querySelector(".hero-tagline")
  const taglineText = tagline.textContent
  tagline.textContent = ""

  function typeWriter(text, element, speed = 100) {
    let i = 0
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }
    type()
  }

  // Start typing effect after a delay
  setTimeout(() => {
    typeWriter(taglineText, tagline, 80)
  }, 1000)

  // Particle system enhancement
  function createParticle() {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = Math.random() * 4 + 1 + "px"
    particle.style.height = particle.style.width
    particle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
    particle.style.borderRadius = "50%"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = "100%"
    particle.style.opacity = Math.random() * 0.5 + 0.2
    particle.style.pointerEvents = "none"
    particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`

    document.querySelector(".particles").appendChild(particle)

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 20000)
  }

  // Create particles periodically
  setInterval(createParticle, 2000)

  // Smooth reveal animations for timeline
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = index % 2 === 0 ? "translateX(-50px)" : "translateX(50px)"
    item.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(item)
  })

  // Add glow effect to buttons on hover
  const buttons = document.querySelectorAll(".btn-primary, .btn-secondary, .contact-btn, .project-btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.filter = "brightness(1.2)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.filter = "brightness(1)"
    })
  })

  // Dynamic background color change based on scroll
  function updateBackgroundGradient() {
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
    const hue = 180 + scrollPercent * 60 // Shift from cyan to purple
    document.querySelector(".gradient-overlay").style.background = `
            radial-gradient(circle at 20% 50%, hsla(${hue}, 100%, 50%, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsla(${hue + 60}, 100%, 50%, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsla(${hue + 120}, 100%, 50%, 0.1) 0%, transparent 50%)
        `
  }

  window.addEventListener("scroll", updateBackgroundGradient)

  // Initialize
  updateActiveNav()
  animateSkillBars()
})

// Console message for developers
console.log(`
🚀 Welcome to Keshav Jaiswal's Portfolio!
💻 Built with vanilla HTML, CSS, and JavaScript
✨ Featuring modern animations and responsive design
🎨 Dark theme with neon glow effects

Feel free to explore the code and get in touch!
`)
