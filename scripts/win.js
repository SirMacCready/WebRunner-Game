let ending = setInterval(function () {
  const end = document.querySelector(".division").lastChild;
  const rightEnd = end.getBoundingClientRect().right;
  
  console.log(rightEnd);

  if (rightEnd <= 1460) {
    // À décommenter
    // console.log(points)

    // À commenter
    window.location.href = "./screens/win.html"
    
    clearInterval(ending)
  }
}, 100)
