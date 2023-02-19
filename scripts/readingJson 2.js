function readJSON(data) {
    //Permet d'écraser la source des images par ceux du JSON
    function overwriteChildren(class_, classType, child_, childType, type, data) {
        classType = document.querySelectorAll("." + class_).forEach((el) => {
            childType = document.createElement(type)
            childType.src = data["assets"][class_]
            el.innerHTML = ''
            el.appendChild(childType)
            childType.innerHTML = '<' + type + ' src=' + childType + 'alt="' + class_ + '"' + ' class ="' + child_ + '"'
        })
    }
    //Ajoute un Child a un élément HTML
    function addChild(class_, classType, child_, childType, type, data, id) {
        classType = document.querySelector("." + class_)
        childType = document.createElement(type)
        childType.className = child_
        if (type != 'div') {
            childType.src = data["assets"][child_]
            childType.style.display = 'none'
            classType.appendChild(childType)
            return
        }
        else {
            if (id != '') {
                childType.id = id
            }
            classType.appendChild(childType)
        }
    }
    //Ecrasement des éléments 
    overwriteChildren("background", '', "sky", '', "img", data)
    overwriteChildren("foreground", '', "floor", '', "img", data)
    document.querySelector(".player-rpg").innerHTML = ''
    addChild("player-rpg", '', "croucher", '', "img", data, '')
    addChild("player-rpg", '', "runner", '', "div", data, 'runner')
    addChild("jumper", '', "jump1", '', "img", data, '')
    addChild("jumper", '', "jump2", '', "img", data, '')

}