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


function loadEditJSON(levelURI) {
  fetch(levelURI)
    .then((param) => param.json())
    .then((data) => {
      let i = 0
      while (i != (data.blocks).length) {
        readJSONBlocks(data.blocks[i].type, data, i)
        i++
      }
      // displayNumber()
    })

}

loadEditJSON("./scripts/levels/example.jmpr")