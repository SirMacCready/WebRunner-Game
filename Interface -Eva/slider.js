const level = ["Découverte", "Normal", "Perfectionnement", "Expertise", "Maîtrise"];
let i = 0;

function ChangeLevel(sens){
    i = i + sens;
    if (i > level.length - 1)
        i = 0;
    if(i < 0)
        i = level.length - 1;
    document.getElementById("liste-niveau").textContent = level[i];
}