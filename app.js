//Navigation bar constant variables
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".nav-menu");

//Event Listener for navigation bar responsiveness on mobile
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
