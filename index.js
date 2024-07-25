const gridSide = 600;
let cellSize = 16;

const sketchArea = document.querySelector("#sketchArea");
sketchArea.style.width = `${gridSide}px`;
sketchArea.style.height = `${gridSide}px`;

function changeBackgroundColor(){
    this.style.backgroundColor = "black";
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
        gridCell.addEventListener("mouseover",changeBackgroundColor);
    }
}

createGrid();