const levelButton = ["Découverte", "Normal", "Perfectionnement", "Expertise", "Maîtrise"];
const button = document.querySelector(".boutton");
const left = document.querySelector("#precedent");
const right = document.querySelector("#suivant");

let level1 = "Découverte";
// let levelURI = "./scripts/levels/level1.jmpr";
let i = 0;


button.addEventListener("click", function () {
    window.location.href = "../index.html";
}, { once: true });

function ChangeLevel(sens) {
    i = i + sens;
    if (i > levelButton.length - 1) {
        i = 0;
    }
    if (i < 0) {
        i = levelButton.length - 1;
    }
    document.getElementById("liste-niveau").textContent = levelButton[i];
    level1 = levelButton[i];
    select();
}

left.onclick = function () {
    ChangeLevel(-1);
};

right.onclick = function () {
    ChangeLevel(1);
}

function select() {
    if (level1 === "Découverte") {
        levelURI = "./scripts/levels/level1.jmpr"
    } else if (level1 === "Normal") {
        levelURI = "./scripts/levels/level2.jmpr"
    } else if (level1 === "Perfectionnement") {
        levelURI = "./scripts/levels/level3.jmpr"
    } else if (level1 === "Expertise") {
        levelURI = "./scripts/levels/level4.jmpr"
    } else if (level1 === "Maîtrise") {
        levelURI = "./scripts/levels/level5.jmpr"
    }

    button.onclick = () => {
        window.location.href = "../index.html";
    }
}

// export { levelURI }