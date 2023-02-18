const levelButton = ["Découverte", "Normal", "Perfectionnement", "Expertise", "Maîtrise"];
let i = 0;
let levelX = "Découverte";
let levelURI = "./scripts/levels/level1.jmpr";

function ChangeLevel(sens) {
    i = i + sens;
    if (i > levelButton.length - 1) {
        i = 0;
    }
    if (i < 0) {
        i = levelButton.length - 1;
    }
    document.getElementById("liste-niveau").textContent = levelButton[i];
    levelX = levelButton[i];

}

function select(level1) {
    const button = document.querySelector(".boutton");

    if (level1 == "Découverte") {
        levelURI = "./scripts/levels/level1.jmpr"
    } else if (level1 == "Normal") {
        levelURI = "./scripts/levels/level2.jmpr"
    } else if (level1 == "Perfectionnement") {
        levelURI = "./scripts/levels/level3.jmpr"
    } else if (level1 == "Expertise") {
        levelURI = "./scripts/levels/level4.jmpr"
    } else if (level1 == "Maîtrise") {
        levelURI = "./scripts/levels/level5.jmpr"
    }

    button.onclick = () => { window.location.href = "../index.html" }
    // 
}
    // return levelURI
    // console.log(levelURI)


console.log(select(levelX))
select(levelX);
// console.log(select())