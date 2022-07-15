const hamburger = document.getElementById("open-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const linkConnect = document.getElementById("link-connect");
const connectDrop = document.getElementById("connect-drop");
const linkImg = document.getElementById("link-img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("hidden");
});

linkConnect.addEventListener("click", () => {
  connectDrop.classList.toggle("hidden");
  linkImg.classList.toggle("rotate-180");
});
