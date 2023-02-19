function difficulty1(speed) {
  speed = 60;
  let style = document.createElement('style');
  style.type = 'text/css';

  let foreground = `
.foreground {
  top: 24px;
  animation: foreground 60s linear;
}

@keyframes foreground {
  0% {
    left: 0px;
  }
  100% {
    left: -2016px;
  }
}`
  let game = `
.game .zone .division .container {
  animation: translation ${speed}s linear;
}
          
.game .floor {
  animation: translation ${speed}s linear;
}

@keyframes translation {
  0% {
    left: 0px;
  }

  100% {
    left: -15840px;
  }
}`


  style.innerHTML = foreground;
  style.innerHTML += game;

  document.getElementsByTagName('head')[0].appendChild(style);
}

function setDifficulty(data) {
      level = data.difficulty 
      console.log(data.difficulty);
      if (level == 1) {
        speed = 60
      } else if (level == 2) {
        speed = 55
      } else if(level == 3) {
        speed = 50
      } else if(level == 4) {
        speed = 45
      } else if(level == 5) {
        speed = 40
      }
    difficulty1(speed)
}