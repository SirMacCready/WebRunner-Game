function loadEditJSON() {
    fetch("./scripts/levels/leve2 copy.jmpr")
    .then((param) =>  param.json() )
    .then((data) => { 
        function overwriteChildren(class_,classType,child_,childType,type,data) {
            classType = document.querySelectorAll("."+class_).forEach((el) => {
                childType = document.createElement(type)
                childType.src = data["assets"][class_]
                el.innerHTML = ''
                el.appendChild(childType)
                childType.innerHTML = '<'+type+' src='+childType+'alt="'+class_+'"' + ' class ="'+child_+'"'
            })
            }
        function addChild(class_,classType,child_,childType,type,data,id) {
            classType = document.querySelector("."+class_)
            childType = document.createElement(type)
            childType.className = child_
            if(type != 'div') {
                childType.src = data["assets"][child_]
                childType.style.display ='none'
                classType.appendChild(childType)
                return
            }
            else {
                if(id !=''){
                    childType.id = id
                }
                classType.appendChild(childType)
            }}
            console.log(data)
        overwriteChildren("background",'',"sky",'',"img",data)
        overwriteChildren("foreground",'',"trees",'',"img",data)
        document.querySelector(".player-rpg").innerHTML =''
        addChild("player-rpg",'',"croucher",'',"img",data,'')
        addChild("player-rpg",'',"jumper",'',"div",data,'')
        addChild("jumper",'',"jump1",'',"img",data,'')
        addChild("jumper",'',"jump2",'',"img",data,'')
        addChild("jumper",'',"jump3",'',"img",data,'')
        addChild("jumper",'',"runner",'',"div",data,'runner')
        overwriteChildren("floor2",'',"floor3",'',"img",data)
    }
    )
}
loadEditJSON()