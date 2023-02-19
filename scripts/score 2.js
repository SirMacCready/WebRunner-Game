let points = 0
function counter(difficulty) {
  let scoreParty = setInterval(function () {
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

    let score = document.querySelector(".score");
    score.innerHTML = `Score: ${points}`;

    const end = document.querySelector(".division").lastChild;
    const rightEnd = end.getBoundingClientRect().right;
    console.log(rightEnd)

    if (rightEnd <= 1500) {
      clearTimeout(scoreParty);
    }
    // À décommenter
    // console.log(points);
  }, 100);
  let scoreGame = function() {
    points += 
  }
}

// export { points }
