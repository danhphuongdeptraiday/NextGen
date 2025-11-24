const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});
