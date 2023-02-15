//#######################################################################
// FRONT CODE
//#######################################################################


// Déclaration de variables

const addMenu = document.querySelector('#addMenu');
const editMenu = document.querySelector('#editMenu');
const delMenu = document.querySelector('.delete');

addMenu.style.display = 'none';
editMenu.style.display = 'none';


// Fonction ajout de blocks

function addBlockJSON(type, data) {
    const containers = document.querySelectorAll(".container");
    const menuItems = document.querySelector('#add' + type);

    menuItems.addEventListener('click', () => {
        let blockNum = (data.blocks).length
        newObject = { "type": type }
        let newDiv = document.createElement('div');
        newDiv.className = 'container' + type;
        newDiv.id = blockNum
        data["blocks"].push(newObject)
        document.getElementById('blocks').appendChild(newDiv)
    })
}

function addBlock(type, data) {
    const containers = document.querySelectorAll(".container");
    const menuItems = document.querySelector('#add' + type);

    containers.forEach((container) => {
        container.addEventListener('click', function addBlock1(e) {
            menuItems.addEventListener('click', function addBlock2() {
                let blockNum = (data.blocks).length
                newObject = { "type": type }
                let newDiv = document.createElement('div');
                newDiv.classList = 'container ' + type;
                newDiv.id = blockNum
                let newBox = document.createElement('div');
                newBox.className = "box1";
                newDiv.appendChild(newBox);
                newBox = document.createElement('div');
                newBox.className = "box2";
                newDiv.appendChild(newBox);
                e.target.after(newDiv);
                // data.blocks.splice(blocks.indexOf(e.target) + 1, 0, newObject)
                if (type == "A" || type == "B" || type == "C") {
                    addObstacle(type, newDiv);
                }
            })
            container.removeEventListener('click', addBlock1)
        })
    });
}

// function addBlock(a, data, addMenu) {
//     addMenu.onclick = (bt) => {
//         let btn = bt.target
//         let newObject = { "type": btn.id.substr(btn.id.length - 1) }
//         let newDiv = document.createElement('div');
//         newDiv.classList = 'container ' + btn.id.substr(btn.id.length - 1)
//         data["blocks"].push(newObject)
//         let newBox = document.createElement('div');
//         newBox.className = "box1";
//         newDiv.appendChild(newBox);
//         newBox = document.createElement('div');
//         newBox.className = "box2";
//         newDiv.appendChild(newBox);
//         a.target.after(newDiv);
//         data.blocks.splice(a.target.id, 1, newObject)
//         if (btn.id.substr(btn.id.length - 1) == "A"
//             || btn.id.substr(btn.id.length - 1) == "B"
//             || btn.id.substr(btn.id.length - 1) == "C") {
//             addObstacle(btn.id.substr(btn.id.length - 1), a.target);
//         }
//     }
// }

// Fonction de délétion de block

function delBlock(a, data, delMenu) {
    let oldA = null
    delMenu.onclick = (bt) => {
        let btn = bt.target
        if (oldA != a) {
            a.target.remove()
            data.blocks.splice(a.target.id, 1)
            oldA = a
            return
        }
    }
}

// Fonction d'édit de block

function editBlock(a, data, editMenu) {
    editMenu.onclick = (bt) => {
        let btn = bt.target.parentElement
        if (btn.id != "del") {
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
}

// Fonction d'affichage des menus

function showHide() {
    const menu = document.querySelector('.menu');
    const add = document.querySelector('.add');
    const edit = document.querySelector('.edit');
    const hiddenAddMenu = document.querySelector(".addMenu");
    const hiddenEditMenu = document.querySelector(".editMenu");

    add.addEventListener('mouseover', () => {
        addMenu.style.display = "flex";
        hiddenAddMenu.onmouseover = function () {
            addMenu.style.display = "flex";
        }
    })

    edit.addEventListener('mouseover', () => {
        editMenu.style.display = "flex";
        hiddenEditMenu.onmouseover = function () {
            editMenu.style.display = "flex";
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

function readJSONBlocks(type, data, i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'container ' + type;
    document.querySelector('.division').appendChild(newDiv);
    let newBox = document.createElement('div');
    newBox.className = "box1";
    newDiv.id = i
    newDiv.appendChild(newBox);
    newBox = document.createElement('div');
    newBox.className = "box2";
    newDiv.appendChild(newBox);
    addObstacle(type, newDiv);
}

function save(content, fileName) {
    let a = document.createElement("a");
    let file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

function saveDataJSON(elements, data, i) {
    let String = elements.childNodes[i].className
    let JSONObject = { type: String.substr(String.length - 1) }
    data.blocks.push(JSONObject)
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

            addBlock('A', data)
            addBlock('B', data)
            addBlock('C', data)

            showHide();

            document.addEventListener('click', function (e) {
                if (hasClass(e.target, 'container')) {
                    addBlock(e, data, addMenu);
                    editBlock(e, data, editMenu);
                    delBlock(e, data, delMenu);
                    // while (i != (data.blocks).length - 1) {
                    //     readJSONBlocks(data.blocks[i].type, data, i)
                    //     i++
                    // }
                }
            }, false);

            function hasClass(elem, className) {
                return elem.className.split(' ').indexOf(className) > -1;
            }

            containers.forEach((container) => {
                data.blocks = []
                i = 0
                while (i < container.childNodes.length) {
                    saveDataJSON(container, data, i)
                    i++
                }
            })
            document.querySelector(".download").addEventListener('click', () => {
                title = prompt("Entrer le nom du fichier:")
                let jsonData = JSON.stringify(data)
                save(jsonData, title)
            })
        })

}

loadEditJSON("./scripts/levels/level1.json")