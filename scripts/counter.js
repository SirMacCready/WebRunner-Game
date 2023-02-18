let points = 0
let difficulty = 2

function isPassed(difficulty) {
  setInterval(function () {
    let player = document.querySelector(".player-rpg");
    let playerLeft = parseInt(player.getBoundingClientRect().left);

    const containersB = document.querySelectorAll(".B");
    const containersC = document.querySelectorAll(".C")

    let containerRightCount = 0;
    let containerLeftCount = 0;
    let pointsB = 0;
    let pointsC = 0;
    for (let container of containersB) {
      let containerRight = parseInt(container.getBoundingClientRect().right)

      if (playerLeft > containerRight) {
        containerRightCount++;
        pointsB = containerRightCount * 10 * difficulty;
      }
    }

    for (let container of containersC) {
      let containerRight = parseInt(container.getBoundingClientRect().right)
      if (playerLeft > containerRight) {
        containerLeftCount++
        pointsC = containerLeftCount * 10 * difficulty;
      }
    }

    points = pointsB + pointsC;
    console.log(points);
  }, 100);
} 

isPassed(difficulty);