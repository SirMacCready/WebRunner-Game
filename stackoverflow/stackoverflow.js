function addBlock(type) {
  const containers = document.querySelectorAll(".container");
  const menuItems = document.querySelector('#add' + type);

  containers.forEach((container) => {
    container.addEventListener('click', function addBlock1(e) {
      menuItems.addEventListener('click', function () {
        let newDiv = document.createElement('div');
        newDiv.classList = 'container ' + type;
        e.target.after(newDiv);
      })
      container.removeEventListener('click', addBlock1)
    })
  });
}

addBlock('A')
addBlock('B')
addBlock('C')