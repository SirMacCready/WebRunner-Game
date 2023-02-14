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
        addObstacle(type, newDiv);
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
        if (type == "B" || type == "C") {
            addObstacle(type, newDiv);
        }
        // deleteContainer()
    })
}

function saveDataJSON(elements, data, i) {
    let String = elements.childNodes[i].className
    let JSONObject = { type: String.substr(String.length - 1) }
    data.blocks.push(JSONObject)
}

function deleteContainer() {
    let containers = document.querySelector(".division").querySelectorAll(".container");
    let deleteButton = document.querySelector(".delete");

    deleteButton.addEventListener("click", function () {
        containers.forEach((container) => {
            container.addEventListener('click', function () {
                container.remove()
            })
        });
    })
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
            const addMenu = document.querySelector('#addMenu')
            addMenu.style.visibility = 'hidden';
            document.querySelector('.Add').addEventListener('click', function () {
                if (addMenu.style.visibility == 'visible') {
                    addMenu.style.visibility = 'hidden'
                } else if (addMenu.style.visibility == 'hidden') {
                    addMenu.style.visibility = 'visible';
                }
            })
            AddBlock('A', data)
            AddBlock('B', data)
            AddBlock('C', data)

            let containers = document.querySelector(".division").querySelectorAll(".container");

            deleteContainer();

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

function Save(content, fileName) {
    let a = document.createElement("a");
    let file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

loadEditJSON("./scripts/levels/level1.json")