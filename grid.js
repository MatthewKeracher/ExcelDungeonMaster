function createGrid(rows, cols) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';  // Clear previous map

    for (let row = 0; row < rows; row++) {
        // Create a row for grid cells
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let col = 0; col < cols; col++) {
            // Create a grid cell div
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');

            // Create Label for Square
            const label = document.createElement('div');
            label.classList.add('cellLabel');
            label.innerText = ``; 
            gridCell.appendChild(label);

            // Add any additional behavior for grid cells
            gridCell.setAttribute('col', col);
            gridCell.setAttribute('row', row);
            gridCell.addEventListener("click", function () {
                changeCell(gridCell);
                paintCell(gridCell)
            });
            gridCell.addEventListener('mousemove', function() {
                if (isPainting && isShiftPressed) {
                    paintCell(gridCell);
                }
            });

            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

let lastCell = ''

function selectedCellStyle(cell){

if(lastCell !== ''){
lastCell.classList.remove("flashing");
}

cell.classList.add("flashing");

lastCell = cell;

}

function moveCell(dir){

    let str = idBox.textContent;
    let numbersArray = str.split('.');
    let rowcol = numbersArray.slice(-2);
    let row = parseInt(rowcol[0]);
    let col = parseInt(rowcol[1]);
    
    if(dir === 'up'){
    row = row - 1;
    }

    else if(dir === 'down'){
    row = row + 1;
    }

    else if(dir === 'left'){
    col = col - 1;
    }

    else if(dir === 'right'){
    col = col + 1;
    }
    
    const div = document.querySelector(`[row="${row}"][col="${col}"]`);
    paintCell(div);
    changeCell(div);
    }

function changeCell(gridCell){

if(currentMode !== "map"){return};

selectedCellStyle(gridCell);
saveEntry();
updateCellNames();


//Set new id.
let row = gridCell.getAttribute('row');
let col = gridCell.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

//loadData
textDiv.innerHTML = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
textDiv.innerHTML = loadEntry.desc;
}

//toggleModes();
saveEntry();
saveData();
}

function updateSquareGrid(){

const cells = document.querySelectorAll(".grid-cell");

cells.forEach(cell => {

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)

updateCellColors(cell, saveEntry);


})

updateCellNames();

}

function updateCellNames(){

const cells = document.querySelectorAll(".grid-cell");

cells.forEach(cell => {

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)
const label = cell.querySelector('.cellLabel');
label.textContent = "";

if(saveEntry){
cell.setAttribute('name', saveEntry.name)
label.textContent = saveEntry.name

}

})

}

function updateCellColors(cell, saveEntry){

if(saveEntry){
cell.style.backgroundColor = saveEntry.color;
console.log(saveEntry)
}else{
cell.style.backgroundColor =  defaultColour;
}
}

