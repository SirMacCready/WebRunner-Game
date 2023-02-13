let visibility = "hidden"
const addMenu = document.querySelector('#addMenu')
addMenu.style.visibility = 'hidden'
function readJSONBlocks(type, data, i) {
    if (data.blocks[i].type == type) {
        let newDiv = document.createElement('div');
        newDiv.id = 'container' + type;
        document.getElementById('blocks').appendChild(newDiv);
    }
}

function AddBlock(type, data) {
    document.querySelector('#add' + type).addEventListener('click', () => {
        newObject = { "type": type }
        let newDiv = document.createElement('div');
        newDiv.id = 'container' + type;
        data["blocks"].push(newObject)
        document.getElementById('blocks').appendChild(newDiv)
    })
}
function saveDataJSON(elements, data, i) {
    let String = elements.childNodes[i].id
    let JSONObject = { type: String.substr(String.length - 1) }
    data.blocks.push(JSONObject)
}
function loadEditJSON() {
    fetch("./scripts/levels/level1.json")
        .then((param) => param.json())
        .then((data) => {
            let i = 0
            let data2 = data
            while (i != (data.blocks).length - 1) {
                readJSONBlocks('A', data, i)
                readJSONBlocks('B', data, i)
                readJSONBlocks('C', data, i)
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
            document.querySelectorAll("#blocks").forEach(el => el.addEventListener('click', (a) => {
                a.srcElement.remove()
            })) *
                document.querySelectorAll("#blocks").forEach(el => {
                    data.blocks = []
                    i = 0
                    while (i < el.childNodes.length) {
                        saveDataJSON(el, data, i)
                        i++
                    }
                })
            let jsonData = JSON.stringify(data);
        })
}