const gridSide = 600;
let cellSize = 16;

const sketchArea = document.querySelector("#sketchArea");
const changeBtn = document.querySelector("#setSizeBtn");
const resetBtn = document.querySelector("#clearBtn");
sketchArea.style.width = `${gridSide}px`;
sketchArea.style.height = `${gridSide}px`;

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = "#";
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function SetRandomColor(){
    this.style.backgroundColor = getRandomColor();
}

function createGrid(){
    const cells = (cellSize * cellSize);
    const size = `${(gridSide/ cellSize)-2}px`;
    for (let i = 0; i < cells; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = size;
        gridCell.style.height = size;
        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell);
        gridCell.addEventListener("mouseover",SetRandomColor);
    }

}

function clearGrid(){
    const gridArray = Array.from(sketchArea.childNodes);
    gridArray.forEach((element)=>{
        sketchArea.removeChild(element);
    })
}

function changeGridSize(){
    let inputSize = prompt("Enter new grid size:");
    let newSize = parseInt(inputSize);
    if(newSize>1 && newSize<=100){
        cellSize = newSize;
        clearGrid();
        createGrid();
    }
}

changeBtn.addEventListener("click", clearGrid);
changeBtn.addEventListener("click",changeGridSize);

createGrid();