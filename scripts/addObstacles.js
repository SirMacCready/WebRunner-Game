const downObstacle = document.querySelectorAll(".B")
const upObstacle = document.querySelectorAll(".C");

downObstacle.forEach((obstacle) => {
  let image = document.createElement("img");
  image.src = "./assets/images/cactus.png";
  image.classList = "image obstacle down-obstacle";
  let boxes = obstacle.querySelectorAll(".box2");
  boxes.forEach((box) => { box.appendChild(image) })
})

upObstacle.forEach((obstacle) => {
  let image = document.createElement("img");
  image.src = "./assets/images/birds.png";
  image.classList = "image obstacle up-obstacle";
  let boxes = obstacle.querySelectorAll(".box1");
  boxes.forEach((box) => { box.appendChild(image) })
})

