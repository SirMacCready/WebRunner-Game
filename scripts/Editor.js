const addMenu = document.querySelector('#addMenu')
addMenu.style.visibility = 'hidden';

function readJSONBlocks(type, data, i) {
        let newDiv = document.createElement('div');
        newDiv.className = 'container ' + type;
        document.querySelector('.division').appendChild(newDiv);
        let newBox = document.createElement('div');
        newBox.className = "box1";
        newDiv.appendChild(newBox);
        newBox = document.createElement('div');
        newBox.className = "box2";
        newDiv.appendChild(newBox);
        AddObstacle()
    
}

function AddBlock(type, data) {
    document.querySelector('#add' + type).addEventListener('click', () => {
        newObject = { "type": type }
        let newDiv = document.createElement('div');
        newDiv.classList = 'container ' + type;
        data["blocks"].push(newObject)
        document.querySelector('.division').appendChild(newDiv);
        let newBox = document.createElement('div');
        newBox.className = "box1";
        newDiv.appendChild(newBox);
        newBox = document.createElement('div');
        newBox.className = "box2";
        newDiv.appendChild(newBox);
        AddObstacle()
        deleteContainer()
    })
}

function saveDataJSON(elements, data, i) {
    let String = elements.childNodes[i].className
    let JSONObject = { type: String.substr(String.length - 1) }
    data.blocks.push(JSONObject)
}

function deleteContainer() {
    let containers = document.querySelector(".division").querySelectorAll(".container");
    containers.forEach((container) => {
        container.addEventListener('click', function () {
            container.remove()
        })
    });
    return
}

function loadEditJSON(levelURI) {
    fetch(levelURI)
        .then((param) => param.json())
        .then((data) => {
            let i = 0
            let data2 = data
            while (i != (data.blocks).length - 1) {
                readJSONBlocks(data.blocks[i].type, data, i)
                i++
            }
            document.querySelector('.Add').addEventListener('click', () => {
                if (addMenu.style.visibility == 'visible') {
                    addMenu.style.visibility = 'hidden'
                    return
                }
                else (addMenu.style.visibility == 'hidden')
                addMenu.style.visibility = 'visible'
                return
            })
            AddBlock('A', data)
            AddBlock('B', data)
            AddBlock('C', data)

            let containers = document.querySelector(".division").querySelectorAll(".container");

            deleteContainer()

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