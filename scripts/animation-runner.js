const frames = document.querySelector(".runner").querySelectorAll("img");

function run(interval) {
  const frameCount = frames.length;
  let i = 0;

  setInterval(function runner() {
    frames[i % frameCount].style.display = "none";
    frames[++i % frameCount].style.display = "block";
  }, interval);
}

const run1 = run(150);