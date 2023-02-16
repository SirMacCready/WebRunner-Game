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

function addBlock(type, data) {
    const containers = document.querySelectorAll(".container");
    const menuItems = document.querySelector('#add' + type);

    containers.forEach((container) => {
        container.addEventListener('click', function addBlock1(e) {
            menuItems.addEventListener('click', function () {
                let newDiv = document.createElement('div');
                newDiv.classList = 'container ' + type;
                newDiv.id = parseInt(e.target.id);
                let newBox = document.createElement('div');
                newBox.className = "box1";
                newDiv.appendChild(newBox);
                let newBox2 = document.createElement('div');
                newBox2.className = "box2";
                newDiv.appendChild(newBox2);
                e.target.parentNode.insertBefore(newDiv, e.target.nextSibling);
                newObject = { "type": type }
                data.blocks.splice(parseInt(e.target.id) + 1, 0, newObject)
                for (let i = parseInt(e.target.id); i < containers.length; i++) {
                    containers[i].id = parseInt(containers[i].id) + 1;
                }
                if (type == "A" || type == "B" || type == "C") {
                    addObstacle(type, newDiv);
                }
            })
            container.removeEventListener('click', addBlock1)
        })
    });
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

            addBlock('A', data)
            addBlock('B', data)
            addBlock('C', data)

            showHide();

            document.addEventListener('click', function (e) {
                if (hasClass(e.target, 'container')) { 
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

loadEditJSON("./scripts/levels/level1.jmpr")