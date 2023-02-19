function run(interval) {
  const runner = document.querySelector(".runner")
  
  for (let i = 1; i <= 6; i++) {
    let image = document.createElement("img");
    image.src = `./assets/images/runner/runner_cours${i}.png`
    runner.appendChild(image);
  }
  
  const frames = document.querySelector(".runner").querySelectorAll("img");
  const frameCount = frames.length;
  let i = 0;

  setInterval(function runner() {
    frames[i % frameCount].style.display = "none";
    frames[++i % frameCount].style.display = "block";
  }, interval);
}

const run1 = run(150);