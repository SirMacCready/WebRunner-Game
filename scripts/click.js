const containers = document.querySelectorAll(".container");
const menu = document.querySelector(".menu");

// console.log(containers);
// containers.forEach(function (container) {
//   console.log("ok");
//   container.addEventListener("click", function (e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     menu.style.display = "flex";
//     menu.style.top = y;
//     menu.style.left = x;
//   })
// })

document.addEventListener('click', function (e) {
  if (hasClass(e.target, 'container')) {
    const x = e.clientX;
    const y = e.clientY;
    menu.style.top = y + "px";
    menu.style.left = x + "px";
    menu.style.display = "flex";
  }
}, false);

function hasClass(elem, className) {
  return elem.className.split(' ').indexOf(className) > -1;
}