const rpg = document.getElementById("player-rpg");
const runner = document.getElementById("runner");
const jumper = document.querySelector(".jumper");
const jump1 = document.querySelector(".jump1");
const jump2 = document.querySelector(".jump2");
const jump3 = document.querySelector(".jump3");
const croucher = document.querySelector(".croucher")


document.addEventListener("keydown", function (e) {
  if (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 90) {
    if (!rpg.classList.contains("crouch")) {
      jump(1500);
    }
    return;
  } else if (e.keyCode === 40 || e.keyCode === 83) {
    if (!rpg.classList.contains("jump")) {
      crouch();
    }
    return;
  }
})


function jump(time) {
  if (!rpg.classList.contains("jump")) {
    runner.style.display = "none";
    jumper.style.display = "block"
    jump1.style.display = "block";
    jump2.style.display = "none";
    rpg.classList.add("jump");
    setTimeout(function () {
      runner.style.display = "none";
      jump1.style.display = "none";
      jump2.style.display = "block";

    }, (time / 2))
    setTimeout(function () {
      runner.style.display = "block";
      jump1.style.display = "none";
      jump2.style.display = "none";
      rpg.classList.remove("jump");
    }, time)
  }
  return
}

function crouch() {
  if (!rpg.classList.contains("crouch")) {
    runner.style.display = "none";
    jumper.style.display = "none";
    croucher.style.display = "block";
    rpg.classList.add("crouch");
    document.addEventListener("keyup", keyup);
    function keyup() {
      runner.style.display = "block";
      jumper.style.display = "none";
      croucher.style.display = "none";
      rpg.classList.remove("crouch");
      document.removeEventListener("keyup", keyup);
    }
  }
  return
}