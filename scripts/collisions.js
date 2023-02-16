let points     = 0
let difficulty = 1
let passed     = false
let gameOver   = false 
let isAlive = setInterval(function () {
  let player = document.querySelector(".player-rpg");

  let playerRight = parseInt(player.getBoundingClientRect().right);
  let playerTop = parseInt(player.getBoundingClientRect().top);
  let playerBottom = parseInt(player.getBoundingClientRect().bottom);

  let obstaclesDown = document.querySelectorAll(".down-obstacle");
  
  

  if (gameOver != true) {
    points = points + 1
  } 
  obstaclesDown.forEach((obstacleDown) => {
    let obstacleDownLeft = parseInt(obstacleDown.getBoundingClientRect().left);
    let obstacleDownTop = parseInt(obstacleDown.getBoundingClientRect().top);
    if (playerRight >= obstacleDownLeft && playerRight - 64 <= obstacleDownLeft && playerBottom >= obstacleDownTop) {
      gameOver   = true 
      alert("Game Over");
      
      // gameOver();
    }
    else if (playerRight - 64 > obstacleDownLeft + 64 && playerBottom > obstacleDownTop){
      passed     = true 
    }
    else if (passed === true && playerBottom === 472) {
      passed = false
      points = points + 10 * difficulty
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
    else if (playerRight - 64 > obstacleDownLeft + 64 && playerTop < obstacleUpBottom){
      gameOver   = true
      passed     = true 
    }
    else if (passed === true && playerBottom === 472) {
      passed = false
      points = points + 10 * difficulty
    }
  })
}, 100);