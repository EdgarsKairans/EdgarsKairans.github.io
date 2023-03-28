import "../index.html";
import "../sass/style.scss";
var animationSpan = document.querySelectorAll(".contact__animation-vapour span");
animationSpan.forEach(function (elem) {
  var elemNumber = elem.classList.value * 0.5;
  elem.style.animationDelay = "".concat(elemNumber, "s");
});