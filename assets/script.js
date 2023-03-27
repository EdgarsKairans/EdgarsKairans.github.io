import "../index.html";
import "../sass/style.scss";
var animationSpan = document.querySelectorAll(".contact__animation-vapour span");
animationSpan.forEach(function (elem) {
  console.log("test2");
  console.log(elem);
  console.log(elem.classList.value);
  var elemNumber = elem.classList.value * 0.5;
  elem.style.animationDelay = "".concat(elemNumber, "s");

  //const spanNumber = elem.
});

// const nav = document.querySelector(".nav");
// const hamburger = document.querySelector(".hamburger");
// const links = document.querySelectorAll(".nav__navigation-link");

// const openNav = () => {
// 	nav.classList.add("hamburger__activ");
// };

// const closeNav = () => {
// 	nav.classList.remove("hamburger__activ");
// };

// const toggleNav = () => {
// 	nav.classList.toggle("hamburger__activ");
// };

// hamburger.addEventListener("click", toggleNav);

// links.forEach((link) => {
// 	link.addEventListener("click", closeNav);
// });