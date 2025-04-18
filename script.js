// script.js

document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
  
    // Load theme preference from localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
    }
  
    // Toggle dark mode and store preference
    modeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", theme);
    });
  
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Animate social icons on scroll
    const icons = document.querySelectorAll(".social-icons a");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-icon");
        }
      });
    }, {
      threshold: 0.5
    });
  
    icons.forEach(icon => observer.observe(icon));
  
    // Animate text sections on scroll
    const sections = document.querySelectorAll(".section h2, .section p, .card");
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, {
      threshold: 0.3
    });
  
    sections.forEach(sec => sectionObserver.observe(sec));
  
    // Scroll progress bar
    const progressBar = document.createElement("div");
    progressBar.id = "scrollProgress";
    document.body.appendChild(progressBar);
  
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + "%";
    });
  
    // Back to top button
    const backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.innerHTML = "↑";
    document.body.appendChild(backToTop);
  
    window.addEventListener("scroll", () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });
  
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulate a successful submission (no backend)
      form.reset(); // Clear the form
      thankYouMessage.style.display = "block";
  
      // Optional: hide message after few seconds
      setTimeout(() => {
        thankYouMessage.style.display = "none";
      }, 5000);
    });
  });
  