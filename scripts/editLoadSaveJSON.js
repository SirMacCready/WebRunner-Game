function saveEditJSON() {
    let paragraph = document.querySelector("p")
    fetch("Infos.json")

    .then((param) =>  param.json() )
    .then((data) => { 
        data.creator = prompt()
        paragraph.innerText = data.creator;
        let jsonData = JSON.stringify(data);
    })}
function Save(content, fileName) {
    let a = document.createElement("a");
    let file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    }