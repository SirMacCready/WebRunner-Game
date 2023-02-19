let ending = setInterval(function () {
  const end = document.querySelector(".division").lastChild;
  const rightEnd = end.getBoundingClientRect().right;
  
  console.log(rightEnd);

  if (rightEnd <= 1460) {
    window.location.href = "./screens/win.html"
  }
}, 100)
