const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const reveals = document.querySelectorAll(".reveal");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav?.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", Boolean(isOpen));
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  revealObserver.observe(element);
});