let clipboard = [];

function copyTile(){

const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol');

clipboard.name = placeName.value;
clipboard.symbol = placeSymbol.value;
clipboard.desc = textDiv.innerHTML;

}

function pasteTile(){

const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol');

placeName.value = clipboard.name;
placeSymbol.value = clipboard.symbol ;
textDiv.innerHTML = clipboard.desc;

//Save to File
let div = getCurrentDiv()
saveEntry(div);

}

function deleteTile(){

const idBox = document.getElementById('idBox');
const index = data.findIndex(entry => entry.id === idBox.textContent);

data.splice(index, 1)
loadGrid();
saveData();

}


function updateGrid(){
if(isHexMap){
updateHexGrid()
}else{
updateSquareGrid()
}

}

function addLabelEvents(cell, entry){

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');

const label = cell.querySelector('.cellLabel');

if (!label) {
//console.error(`Could not find cellLabel on (${col},${row})`, cell, entry);
return;
}

if(entry){

if(entry.name !== ""){
label.textContent = entry.symbol && entry.id !== '0.0'? entry.symbol: entry.id !== '0.0' && entry.name? entry.name.charAt(0) : "";
label.style.fontSize = '22px'
cell.setAttribute('name', entry.name);
cell.setAttribute('sym', entry.symbol);
}

cell.addEventListener("mouseover", () => {
label.textContent = entry.name;
label.style.fontSize = '12px'
});

cell.addEventListener("mouseout", () => {
if(label.textContent !== ""){
label.textContent = entry.symbol !== ""? entry.symbol : entry.name.charAt(0);
label.style.fontSize = '22px'
}
});

}

}

function showNames() {
let cells = document.querySelectorAll(`[row][col]`);

// Create a Map for faster lookup
const dataMap = new Map(
    data
        .filter(entry => entry.name !== "")
        .map(entry => [entry.id, entry.name])
);

cells.forEach(cell => {
const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id = `${coords}.${row}.${col}`;

const label = cell.querySelector('.cellLabel');
const name = dataMap.get(id) || "";

if (label.textContent !== name) {
label.textContent = name;
//label.style.fontWeight = 'normal';

}
});
}




function selectedCellStyle(cell){

const allCells = document.querySelectorAll("[row],[col]");

if(isHexMap){

allCells.forEach(cell => {
cell.querySelector('.left').classList.remove("hexSelect");
cell.querySelector('.right').classList.remove("hexSelect");

});

cell.querySelector('.left').classList.add("hexSelect");
cell.querySelector('.right').classList.add("hexSelect");

}else{

allCells.forEach(cell => {
cell.classList.remove("squareSelect")
});

cell.classList.add("squareSelect")
}

}

function checkWall(cell) {

    if(cell.classList.contains('zone-cell') || cell.classList.contains('zoning')){return false}

    const row = parseInt(cell.getAttribute('row'));
    const col = parseInt(cell.getAttribute('col'));
    
    // Define adjacent cell positions (up, down, left, right)
    const adjacentPositions = [
        [row - 1, col],     // up
        [row + 1, col],     // down
        [row, col - 1],     // left
        [row, col + 1],     // right
        [row - 1, col - 1], // up-left
        [row - 1, col + 1], // up-right
        [row + 1, col - 1], // down-left
        [row + 1, col + 1]  // down-right

    ];
    
    // Check each adjacent cell
    for (let [adjRow, adjCol] of adjacentPositions) {
        const adjacentCell = document.querySelector(`[row="${adjRow}"][col="${adjCol}"]`);
        if (adjacentCell && adjacentCell.classList.contains('zone-cell') ||
            adjacentCell && adjacentCell.classList.contains('zoning')) {
            return true; // Found an adjacent zone-cell
        }
    }
    
    return false; // No adjacent zone-cells found
}


function updateCellColors(cell, saveEntry) {

    if (isHexMap) {
        if (saveEntry) {
            cell.querySelector('.left').style.borderRightColor = saveEntry.color;
            cell.querySelector('.middle').style.backgroundColor = saveEntry.color;
            cell.querySelector('.right').style.borderLeftColor = saveEntry.color;
        } else {
            cell.querySelector('.left').style.borderRightColor = defaultColour;
            cell.querySelector('.middle').style.backgroundColor = defaultColour;
            cell.querySelector('.right').style.borderLeftColor = defaultColour;
        }
    } else {

        // let isgridCell = cell.classList.contains('grid-cell');
        // let isWall = checkWall(cell);
      
        // if (saveEntry && saveEntry !== 'ignore') {
        //     cell.style.backgroundColor = saveEntry.color;
        // }else if(cell.classList.contains('zoning')){
        //     cell.style.backgroundColor = "white"
        // }else if(isWall){
        //     cell.style.backgroundColor = "rgb(40,100,165)"
        // } else if(isgridCell) {
        //     cell.style.backgroundColor = defaultColour;
        // }
    }
}


function changeZoom(dir){

// Select the element
const rightSection = document.querySelector('.right-section');

// Get the current zoom level
let currentZoom = parseFloat(rightSection.style.zoom) || 1.5; // Default to 1 if not set

if(dir === 'in'){

// Increase zoom by 1%
currentZoom += 0.03; // This subtracts 1%

}else if (dir === 'out'){

// Decrease zoom by 10%
currentZoom -= 0.03; // This subtracts 1%

}

// Set the new zoom level
rightSection.style.zoom = currentZoom + " ";

}

