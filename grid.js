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


function changeCell(gridCell){

saveEntry();
updateCellNames();

//Set new id.
let row = gridCell.getAttribute('row');
let col = gridCell.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

//loadData
textDiv.innerHTML = ''
writeBox.value = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
writeBox.value = loadEntry.desc.trim();
textDiv.innerHTML = handleCommands();
}

// isEditing = true;
// toggleEditMode();
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
}else{
cell.style.backgroundColor =  'black';

}

}

