for (let i = 1; i <= 7; i++) {
  let image = document.createElement("img");
  image.src = `./assets/images/obstacle-up/bird${i}.png`;
  image.style.display = "none";
  image.classList = "image obstacle up-obstacle";
  box1.appendChild(image);
}

for (let i = 7; i >= 1; i--) {
  let image = document.createElement("img");
  image.src = `./assets/images/obstacle-up/bird${i}.png`;
  image.style.display = "none";
  image.classList = "image obstacle up-obstacle";
  box1.appendChild(image);
}

const frames = box1.querySelectorAll("img");
const frameCount = frames.length;
let i = 0;

setInterval(function runner() {
  frames[i % frameCount].style.display = "none";
  frames[++i % frameCount].style.display = "block";
}, 65);