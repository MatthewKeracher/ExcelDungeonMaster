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
gridCell.appendChild(label);

// Add any additional behavior for grid cells
gridCell.setAttribute('col', col);
gridCell.setAttribute('row', row);

gridCell.addEventListener("click", function () {
changeCell(gridCell);
paintCell(gridCell)
fillCells(gridCell)
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

function moveFocus(dir){

let str = idBox.textContent;
let numbersArray = str.split('.');
let rowcol = numbersArray.slice(-2);
let row = rowcol[0];
let col = rowcol[1];

if(row === 'X'){row = 0}else{row = parseInt(row)};
if(col === 'X'){col = 0}else{col = parseInt(col)};

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

//Set new id.
let row = parseInt(gridCell.getAttribute('row'));
let col = parseInt(gridCell.getAttribute('col'));
idBox.textContent = coords + '.' + row + '.' + col

//Clear Old
textDiv.innerHTML = ''
placeName.value = ''
placeSymbol.value = ''

//Get Entry
let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
placeSymbol.value = loadEntry.symbol? loadEntry.symbol : loadEntry.name !== ""? loadEntry.name.charAt(0): "";
textDiv.innerHTML = loadEntry.desc;
}

if(gridCell.classList.contains('inZone')){

    let cellDiv = getDiv(row, col);
    //console.log(zoneDiv)
    let zoneId = cellDiv.getAttribute('zone');
    //console.log(zoneId)
    let zone = zones.find(entry => entry.id === zoneId);
    //console.log(zone)
    getZone(gridCell);

    textDiv.innerHTML = zone.desc? zone.desc : "";
    placeName.value = zone.name;

    //Get Symbol from Point Entry
    let point = zone.points.find(point => point.row === row && point.col === col);

    if(point.symbol){
        placeSymbol.value = point.symbol
        }
        //console.log(cellDiv)

    currentZone = []

}

saveData();
}


function updateSquareGrid(){

const cells = document.querySelectorAll('[row][col]');

cells.forEach(cell => {

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id);

if(saveEntry){
let label = cell.querySelector(".cellLabel");
label.textContent = saveEntry.symbol;
}

updateCellColors(cell, saveEntry);
//addLabelEvents(cell, saveEntry);

})

loadZones();
labelZones();


}


