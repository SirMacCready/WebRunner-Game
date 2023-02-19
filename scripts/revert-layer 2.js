var elems = document.querySelectorAll(".floor1 .floor2");
Array.prototype.forEach.call(elems, function (e, i) {
  e.style.zIndex = elems.length - i;
});