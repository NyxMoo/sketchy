

const container = document.getElementById("container");
let gridSize = 16;
const button = document.getElementById("newGrid")
// 256
function createDivs() {
    const accounts = [];


    for (i=0; i<gridSize**2; i++) {
       div = document.createElement('div');
       div.style.cssText = `flex: 1 1 ${100/gridSize}%;`
       div.classList.add('pixel')
       div.setAttribute('id', 'pixel' + i);
       div.setAttribute('draggable', 'false');
       div.setAttribute('ondragstart', "return false");
       document.getElementById("container").appendChild(div);
    };

}

function newGrid() {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

    gridSize = prompt("Put number 1-100", "16");
    createDivs();
}
button.addEventListener("click", newGrid);

createDivs();


const pixel = document.querySelectorAll('.pixel');
pixel.forEach(function() {
    addEventListener( "mouseover", changeColor);
});

function changeColor(event) {
    console.log(event.buttons);
    if(event.buttons == 1){
        if (event.target.classList.contains('pixel')) {
            event.target.classList.toggle('color');
        }
    }
    
    
}
