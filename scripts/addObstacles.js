const downObstacle = document.querySelectorAll(".B")
const upObstacle = document.querySelectorAll(".C");

downObstacle.forEach((obstacle) => {
  let images = ["blue", "red", "black"]
  let random = Math.floor(Math.random() * 3);
  let image = document.createElement("img");
  image.src = `./assets/images/obstacle-down/${images[random]}-mushroom.png`;
  image.classList = "image obstacle down-obstacle";
  let boxes = obstacle.querySelectorAll(".box2");
  boxes.forEach((box) => { box.appendChild(image) })
})

upObstacle.forEach((obstacle) => {
  let boxes = obstacle.querySelectorAll(".box1");
  
  boxes.forEach((box) => {
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
    }, 100);
  })
})

