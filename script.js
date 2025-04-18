// === Dark Mode Toggle ===
const toggleButton = document.getElementById("mode-toggle");
const body = document.body;

function setTheme(mode) {
  if (mode === "dark") {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

// Toggle on click
toggleButton.addEventListener("click", () => {
  const current = body.classList.contains("dark-mode") ? "dark" : "light";
  setTheme(current === "dark" ? "light" : "dark");
});

// === Contact Form Handler (fake submission) ===
const contactForm = document.getElementById("contactForm");
const thankYouMessage = document.getElementById("thankYouMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    contactForm.reset();
    thankYouMessage.style.display = "block";
    setTimeout(() => {
      thankYouMessage.style.display = "none";
    }, 5000);
  });
}

// === Scroll Progress Bar ===
const scrollBar = document.createElement("div");
scrollBar.id = "scrollProgress";
document.body.prepend(scrollBar);

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  scrollBar.style.width = `${scrolled}%`;
});

// === Back to Top Button ===
const backToTopBtn = document.createElement("button");
backToTopBtn.id = "backToTop";
backToTopBtn.innerHTML = "↑";
document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Animate icons and cards on scroll ===
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in", "animate-icon");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

// Observe icons and cards
document.querySelectorAll(".card, .social-icons a, footer a").forEach(el => {
  observer.observe(el);
});
