const containers = document.querySelectorAll(".container");
const menu = document.querySelector(".menu");

document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'container')) {
    const x = e.clientX;
    const y = e.clientY;
    menu.style.top = y + "px";
    menu.style.left = x + "px";
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
}, false);

function hasClass(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}