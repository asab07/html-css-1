/* Script to add some responsiveness and 
functionality to the page */

// Get references to elements
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuExit = document.querySelector(".mobile-menu-exit");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});

mobileMenuExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});
