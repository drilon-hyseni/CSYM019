// function alertClick() {
//   var element = document.getElementById("circle");
//   var circleOpacity = parseFloat(element.style.opacity);
//   element.style.opacity = circleOpacity - 0.1;
// }

// function myLoadFunction() {
//   var element = document.getElementById("circle");
//   element.style.opacity = "1";
//   element.addEventListener("click", alertClick);
// }

// document.addEventListener("DOMContentLoaded", myLoadFunction);

// function myInterval() {
//   var element = document.getElementById("circle");
//   var circleOpacity = element.style.opacity;
//   element.style.opacity = circleOpacity - 0.01;
// }
// function myClickEvent() {
//   setInterval(myInterval, 10);
// }
// function myLoadEvent() {
//   var element = document.getElementById("circle");
//   element.addEventListener("click", myClickEvent);
//   element.style.opacity = 1;
// }
// document.addEventListener("DOMContentLoaded", myLoadEvent);

// Exercise 7

function myClickEvent() {
  var element = document.getElementById("circle");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + "px";
}
function myLoadEvent() {
  var element = document.getElementById("circle");
  document.addEventListener("keydown", myClickEvent);
}
document.addEventListener("DOMContentLoaded", myLoadEvent);
