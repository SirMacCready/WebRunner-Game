//#######################################################################
// FRONT CODE
//#######################################################################


// Déclaration de variables

const addMenu = document.querySelector('#addMenu');
const editMenu = document.querySelector('#editMenu');
const delMenu = document.querySelector('.delete');

addMenu.style.display = 'none';
editMenu.style.display = 'none';

// Fonction d'ajout de block

// function addBlock(a, data, addMenu) {

//     addMenu.onclick = (bt) => {
//         let btn = bt.target.parentElement
//         let newContainer;
//         if (btn.id = "add12") {
//             let newDiv;
//             for (let i = 0; i < 11; i++) {

//                 let newObject = { "type": "A" };
//                 let newDiv = document.createElement('div');
//                 newDiv.classList = 'container A'
//                 newDiv.id = parseInt(a.target.id) + i + 1;

//                 let newBox = document.createElement('div');
//                 newBox.className = "box1";
//                 newDiv.appendChild(newBox);

//                 let newBox2 = document.createElement('div');
//                 newBox2.className = "box2";
//                 newDiv.appendChild(newBox2);

//                 if (newDiv.id == parseInt(a.target.id) + 1) {
//                     a.target.after(newDiv)
//                 } else {
//                     newContainer.after(newDiv)
//                 }

//                 data.blocks.splice(parseInt(newDiv.id), 0, newObject)
//                 newContainer = newDiv;
//             }
//         } else {
//             let newObject = { "type": btn.id.substr(btn.id.length - 1) }
//             let newDiv = document.createElement('div');
//             newDiv.classList = 'container ' + btn.id.substr(btn.id.length - 1);
//             newDiv.id = parseInt(a.target.id) + 1;
//             let newBox = document.createElement('div');
//             newBox.className = "box1";
//             newDiv.appendChild(newBox);
//             let newBox2 = document.createElement('div');
//             newBox2.className = "box2";
//             newDiv.appendChild(newBox2);
//             a.target.after(newDiv)
//             data.blocks.splice(parseInt(newDiv.id), 0, newObject)
//             if (btn.id.substr(btn.id.length - 1) == "A"
//                 || btn.id.substr(btn.id.length - 1) == "B"
//                 || btn.id.substr(btn.id.length - 1) == "C") {
//                 addObstacle(btn.id.substr(btn.id.length - 1), newDiv);

//             }
//         }

//         const containers = document.getElementsByClassName("container");
//         console.log(containers)
//         // console.log(containers.map(s => s.id))
//         let max = Math.max(containers.map(s => s.id));
//         console.log(max);

//         // for (let i = parseInt(newDiv.id); i < containers.length; i++) {
//         //     containers[i].id = parseInt(containers[i].id) + i;
//         // }
//         displayNumber(data)
//     }
// }

function addBlock(a, data, addMenu) {

    addMenu.onclick = (bt) => {
        let btn = bt.target.parentElement
        if (btn.id != "del") {
            let newObject = { "type": btn.id.substr(btn.id.length - 1) }
            let newDiv = document.createElement('div');
            newDiv.classList = 'container ' + btn.id.substr(btn.id.length - 1);
            newDiv.id = parseInt(a.target.id) + 1;
            for (let i = parseInt(newDiv.id); i < containers.length; i++) {
                containers[i].id = parseInt(containers[i].id) + 1;
            }
            let newBox = document.createElement('div');
            newBox.className = "box1";
            newDiv.appendChild(newBox);
            let newBox2 = document.createElement('div');
            newBox2.className = "box2";
            newDiv.appendChild(newBox2);
            a.target.after(newDiv)
            data.blocks.splice(parseInt(newDiv.id), 0, newObject)
            if (btn.id.substr(btn.id.length - 1) == "A"
                || btn.id.substr(btn.id.length - 1) == "B"
                || btn.id.substr(btn.id.length - 1) == "C") {
                addObstacle(btn.id.substr(btn.id.length - 1), newDiv);
            }
        }
        displayNumber(data)
    }
}

// Fonction d'édit de block

function editBlock(a, data, editMenu) {
    editMenu.onclick = (bt) => {
        let btn = bt.target.parentElement
        let newObject = { "type": btn.id.substr(btn.id.length - 1) }
        a.target.className = "container " + btn.id.charAt((btn.id).length - 1)
        data.blocks.splice(a.target.id, 1, newObject)
        if (btn.id.substr(btn.id.length - 1) == "A"
            || btn.id.substr(btn.id.length - 1) == "B"
            || btn.id.substr(btn.id.length - 1) == "C") {
            addObstacle(btn.id.substr(btn.id.length - 1), a.target);
        }
    }
}

// Fonction de délétion de block

function delBlock(a, data, delMenu) {
    let oldA = null
    delMenu.onclick = (bt) => {
        if (oldA != a) {
            a.target.remove()
            data.blocks.splice(a.target.id, 1)
            oldA = a
        }
        displayNumber(data)
    }
}



// Fonction d'affichage des menus

function showHide() {
    const menu = document.querySelector('.menu');
    const add = document.querySelector('.add');
    const edit = document.querySelector('.edit');
    const hiddenAddMenu = document.querySelector(".addMenu");
    const hiddenEditMenu = document.querySelector(".editMenu");

    add.addEventListener('mouseover', () => {
        addMenu.style.display = "block";
        hiddenAddMenu.onmouseover = function () {
            addMenu.style.display = "block";
        }
    })

    edit.addEventListener('mouseover', () => {
        editMenu.style.display = "block";
        hiddenEditMenu.onmouseover = function () {
            editMenu.style.display = "block";
        }
    })

    menu.addEventListener('mouseout', () => {
        addMenu.style.display = "none";
        editMenu.style.display = "none";
    })
}

//#######################################################################
//#######################################################################
//#######################################################################

function displayNumber(data) {
    const num = document.querySelector(".num");

    num.innerText = `Nombre de blocks: ${data.blocks.length} / 144`;
    return data.blocks.length;
}

// function numberOfBlocks(levelURI) {
//     fetch(levelURI)
//         .then((param) => param.json())
//         .then((data) => {
//             let number = data.blocks.length;
//             console.log(number);

//             document.addEventListener('click', function (e) {
//                 if (hasClass(e.target, 'add1')) {
//                     console.log("ok");
//                     number++

//                 } else if (hasClass(e.target, 'delete')) {
//                     console.log("ok");
//                     number--
//                 }
//             }, false);

//             function hasClass(elem, className) {
//                 return elem.className.split(' ').indexOf(className) > -1;
//             }
//         })
// }

function readJSONBlocks(type, data, i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'container ' + type;
    let newBox = document.createElement('div');
    newBox.className = "box1";
    newDiv.id = i
    newDiv.appendChild(newBox);
    newBox = document.createElement('div');
    newBox.className = "box2";
    newDiv.appendChild(newBox);
    document.querySelector('.division').appendChild(newDiv);
    addObstacle(type, newDiv);
}

function save(content, fileName) {
    let a = document.createElement("a");
    let file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = `${fileName}.jmpr`;
    a.click();
}

function loadEditJSON(levelURI) {
    fetch(levelURI)
        .then((param) => param.json())
        .then((data) => {
            let i = 0
            while (i != (data.blocks).length) {
                readJSONBlocks(data.blocks[i].type, data, i)
                i++
            }

            showHide();

            document.addEventListener('click', function (e) {
                if (hasClass(e.target, 'container')) {
                    addBlock(e, data, addMenu)
                    editBlock(e, data, editMenu);
                    delBlock(e, data, delMenu);
                }
            }, false);

            function hasClass(elem, className) {
                return elem.className.split(' ').indexOf(className) > -1;
            }

            document.querySelector(".download").addEventListener('click', () => {
                title = prompt("Entrer le nom du fichier:")
                let jsonData = JSON.stringify(data)
                save(jsonData, title)
            })
        })
}

loadEditJSON("./scripts/levels/level1.jmpr");
// let number1 = numberOfBlocks("./scripts/levels/level1.jmpr");
// console.log(number1)