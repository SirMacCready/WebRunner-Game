let isAlive = setInterval(function () {
  let player = document.querySelector(".player-rpg");
  
  let playerRight = parseInt(player.getBoundingClientRect().right);
  let playerTop = parseInt(player.getBoundingClientRect().top);
  let playerBottom = parseInt(player.getBoundingClientRect().bottom);
  
  let obstaclesDown = document.querySelectorAll(".down-obstacle");
  

  obstaclesDown.forEach((obstacleDown) => {
    let obstacleDownLeft = parseInt(obstacleDown.getBoundingClientRect().left);
    let obstacleDownTop = parseInt(obstacleDown.getBoundingClientRect().top);

    if (playerRight >= obstacleDownLeft + 15  && playerRight - 64 <= obstacleDownLeft && playerBottom >= obstacleDownTop) {
      window.location.href = "./screens/gameover.html"
    }
  })

  let obstaclesUp = document.querySelectorAll(".up-obstacle");

  obstaclesUp.forEach((obstacleUp) => {
    let obstacleUpLeft = parseInt(obstacleUp.getBoundingClientRect().left);
    let obstacleUpBottom = parseInt(obstacleUp.getBoundingClientRect().bottom);

    if (playerRight >= obstacleUpLeft + 15 && playerRight - 64 <= obstacleUpLeft && playerTop <= obstacleUpBottom) {
      window.location.href = "./screens/gameover.html"
    }
  })
}, 100);
