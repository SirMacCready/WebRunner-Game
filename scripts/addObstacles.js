function addObstacle(type, newDiv) {
  const box1 = newDiv.querySelector(".box1");
  const box2 = newDiv.querySelector(".box2");

  if (type == "A") {
    if (box1.querySelector("img")) {
      box1.querySelectorAll("img").forEach((image) => {
        image.remove();
      });
    }
    if (box2.querySelector("img")) {
      box2.querySelector("img").remove();
    }
  } else if (type == "B") {
    if (box1.querySelector("img")) {
      box1.querySelector("img").remove();
    }

    let images = ["blue", "red", "black"];
    let random = Math.floor(Math.random() * 3);
    let image = document.createElement("img");

    image.src = `./../assets/images/obstacle-down/${images[random]}-mushroom.png`;
    image.classList = "image obstacle down-obstacle";

    box2.appendChild(image);
    return
  } else if (type == "C") {
    if (box2.querySelector("img")) {
      box2.querySelector("img").remove()
    }

    for (let i = 1; i <= 7; i++) {
      let image = document.createElement("img");
      image.src = `./../assets/images/obstacle-up/bird${i}.png`;
      image.style.display = "none";
      image.classList = "image obstacle up-obstacle";
      box1.appendChild(image);
    }

    for (let i = 7; i >= 1; i--) {
      let image = document.createElement("img");
      image.src = `./../assets/images/obstacle-up/bird${i}.png`;
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
    return
  }
}
