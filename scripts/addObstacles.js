function addObstacle(type, newDiv) {
  if (type == "B") {
    let box = newDiv.querySelector(".box2");
    let images = ["blue", "red", "black"];
    let random = Math.floor(Math.random() * 3);
    let image = document.createElement("img");
    image.src = `./assets/images/obstacle-down/${images[random]}-mushroom.png`;
    image.classList = "image obstacle down-obstacle";
    box.appendChild(image);
  } else if (type == "C") {
    let box = newDiv.querySelector(".box1");

    for (let i = 1; i <= 7; i++) {
      let image = document.createElement("img");
      image.src = `./assets/images/obstacle-up/bird${i}.png`;
      image.style.display = "none";
      image.classList = "image obstacle up-obstacle";
      box.appendChild(image);
    }
    for (let i = 7; i >= 1; i--) {
      let image = document.createElement("img");
      image.src = `./assets/images/obstacle-up/bird${i}.png`;
      image.style.display = "none";
      image.classList = "image obstacle up-obstacle";
      box.appendChild(image);
    }

    const frames = box.querySelectorAll("img");
    const frameCount = frames.length;
    let i = 0;

    setInterval(function runner() {
      frames[i % frameCount].style.display = "none";
      frames[++i % frameCount].style.display = "block";
    }, 65);
  }
}
