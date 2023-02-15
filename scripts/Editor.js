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

function addBlock(type, data) {
    document.querySelector('#add' + type).addEventListener('click', () => {
        let blockNum = (data.blocks).length
        newObject = { "type": type }
        let newDiv = document.createElement('div');
        newDiv.classList = 'container ' + type;
        newDiv.id = blockNum
        data["blocks"].push(newObject)
        document.querySelector('.division').appendChild(newDiv);
        let newBox = document.createElement('div');
        newBox.className = "box1";
        newDiv.appendChild(newBox);
        newBox = document.createElement('div');
        newBox.className = "box2";
        newDiv.appendChild(newBox);
        if (type == "B" || type == "C") {
            addObstacle(type, newDiv);
        }
        // deleteContainer()
    })
}

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

function editBlock(data, a, editMenu) {
    editMenu.onclick = (bt) => {
        let btn = bt.target.parentElement
        console.log(btn);
        if (btn.id != "del") {
            let newObject = { "type": btn.id.substr(btn.id.length - 1)}
            console.log(btn.id.substr(btn.id.length - 1))
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

function showHide () {
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
            while (i != (data.blocks).length - 1) {
                readJSONBlocks(data.blocks[i].type, data, i)
                i++
            }

            showHide();

            addBlock('A', data)
            addBlock('B', data)
            addBlock('C', data)

            let containers = document.querySelector(".division").querySelectorAll(".container");
            containers.forEach((container) => {
                container.addEventListener('click', (a) => {
                    editBlock(data, a, editMenu)
                    delBlock(a, data, delMenu)
                })
            })

            containers.forEach((container) => {
                data.blocks = []
                i = 0
                while (i < container.childNodes.length) {
                    saveDataJSON(container, data, i)
                    i++
                }
            })
            let jsonData = JSON.stringify(data);
        })

}

loadEditJSON("./scripts/levels/level1.json")