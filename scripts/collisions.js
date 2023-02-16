let points = 0
let isAlive = setInterval(function () {
  let player = document.querySelector(".player-rpg");

  let playerRight = parseInt(player.getBoundingClientRect().right);
  let playerTop = parseInt(player.getBoundingClientRect().top);
  let playerBottom = parseInt(player.getBoundingClientRect().bottom);

  let obstaclesDown = document.querySelectorAll(".down-obstacle");

  obstaclesDown.forEach((obstacleDown) => {
    let obstacleDownLeft = parseInt(obstacleDown.getBoundingClientRect().left);
    let obstacleDownTop = parseInt(obstacleDown.getBoundingClientRect().top);

    if (playerRight >= obstacleDownLeft && playerRight - 64 <= obstacleDownLeft && playerBottom >= obstacleDownTop) {
      alert("Game Over");
      // gameOver();
    }
    else if (playerRight > obstacleDownLeft && playerRight - 64 > obstacleDownLeft && playerBottom < obstacleDownTop){
      points = points = points + 10 * difficulty
    }
  })

  let obstaclesUp = document.querySelectorAll(".up-obstacle");

  obstaclesUp.forEach((obstacleUp) => {
    let obstacleUpLeft = parseInt(obstacleUp.getBoundingClientRect().left);
    let obstacleUpBottom = parseInt(obstacleUp.getBoundingClientRect().bottom);

    if (playerRight >= obstacleUpLeft && playerRight - 64 <= obstacleUpLeft && playerTop <= obstacleUpBottom) {
      alert("Game Over");
      // gameOver();
    }
    else if (playerRight > obstacleUpLeft && playerRight - 64 > obstacleUpLeft && playerTop < obstacleUpBottom){
      points = points = points + 10 * difficulty
    }
  })
}, 100);