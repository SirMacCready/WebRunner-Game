function showHide(visibility) {
    if (visibility == 'visible') {
        visibility = 'hidden'
          return visibility
             } 
      else (visibility == 'hidden')
         visibility = 'visible'
         return visibility
      }
function Save(content, fileName) {
    let a = document.createElement("a");
    let file = new Blob([content]);
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
function delBlock(a,data,delMenu){
    let oldA= null
    delMenu.onclick =  (bt) => {
    let btn = bt.target
    if (oldA != a) {
        a.target.remove()
        data.blocks.splice(a.target.id,1)
        oldA = a
    return
        } }}
function EditBlock(data,a,editMenu) {
    editMenu.onclick =  (bt) => {
        let btn = bt.target
        if (btn.id != "del") { 
        let newObject = {"type" : btn.id.substr(btn.id.length -1) }
        a.target.className ="container" + btn.id.charAt((btn.id).length -1)
        console.log("ezfzefezf",a.target.id)
        data.blocks.splice(a.target.id,1,newObject)
        }}}
let visibility = "hidden"
let FF = "addMenu"
let FFFF = "#" + FF
let FFF= document.querySelector(FF)
const addMenu = document.querySelector('#addMenu')
const editMenu= document.querySelector('#editMenu')
addMenu.style.visibility = 'hidden'
editMenu.style.visibility = 'hidden'
const delMenu = document.querySelector('#delMenu')

function readJSONBlocks(type, data, i) {
        let newDiv = document.createElement('div');
        newDiv.className = 'container ' + type;
        document.querySelector('.division').appendChild(newDiv);
        let newBox = document.createElement('div');
        newBox.className = "box1";
        newDiv.id    = i
        newDiv.appendChild(newBox);
        newBox = document.createElement('div');
        newBox.className = "box2";
        newDiv.appendChild(newBox);
        addObstacle(type, newDiv);
    }

function AddBlock(type, data) {
    document.querySelector('#add' + type).addEventListener('click', () => {
        let blockNum = (data.blocks).length
        newObject = { "type": type }
        let newDiv = document.createElement('div');
        newDiv.classList = 'container ' + type;
        newDiv.id        = blockNum
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
    let JSONObject = { type: String.substr(String.length -1) }
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
            while (i != (data.blocks).length - 1) {
                readJSONBlocks(data.blocks[i].type, data, i)
                i++
            }
            document.querySelector('.Add').addEventListener('click', () => {
                addMenu.style.visibility = showHide(addMenu.style.visibility)})
                
            
            AddBlock('A', data)
            AddBlock('B', data)
            AddBlock('C', data)

            let containers = document.querySelector(".division").querySelectorAll(".container");
            document.querySelectorAll("#blocks").forEach(el => el.addEventListener('click',(a) => {
                editMenu.style.visibility = showHide(editMenu.style.visibility)
                EditBlock(data,a,editMenu)
                delBlock(a,data,delMenu)}
            ))
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



loadEditJSON("./scripts/levels/level1.json")