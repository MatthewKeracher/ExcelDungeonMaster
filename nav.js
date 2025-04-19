function handleMove(moveToID){

if(!isMoving && currentMode === 'map'){

isMoving = true

const cell = getCurrentDiv();
const row = cell.getAttribute('row');
const col = cell.getAttribute('col');
const id = coords + '.' + row + '.' + col;
parentToMove = data.find(entry => entry.id === id);
childrenToMove = data.filter(entry => entry.id.startsWith(id + '.'));
zonesToMove = zones.filter(zone => zone.coords.startsWith(id + '.')|| zone.coords === id);  
journalToMove = journalData.filter(entry => entry.scale.startsWith(id + '.') || entry.scale.startsWith(id));   


const moveToCell = data.find(entry => entry.id === moveToID);

if(moveToCell !== undefined){
moveCellEvent(null, moveToCell)
}else{
const cells = document.querySelectorAll('[row][col]');
cells.forEach(cell => {
cell.addEventListener('click', moveCellEvent);
});
}
}else{
isMoving = false
}   

}

function moveCellEvent(e, moveToCell) {
if (!isMoving) return;

const newCell = e === null? null : e.currentTarget;
const newRow = newCell === null? null : newCell.getAttribute('row');
const newCol = newCell === null? null :newCell.getAttribute('col');
const newId = moveToCell? moveToCell.id : coords + '.' + newRow + '.' + newCol;

showPrompt('Move Cell and Contents: Are you sure you want to move everything?').then(shouldMove => {
if (shouldMove) {

// deleteTile();


childrenToMove.forEach(child => {
let newChildId = child.id.replace(parentToMove.id, newId);
child.id = newChildId;

});

zonesToMove.forEach(zone => {              

const zoneSpecialId = zone.id.split('.').slice(-1)[0]; 

let newZoneCoords = zone.coords.replace(parentToMove.id, newId);
zone.coords = newZoneCoords;

let newZoneId = zone.id.replace(parentToMove.id, newId);
zone.id = newZoneId + '.' + zoneSpecialId;    
});

journalToMove.forEach(entry => {
let newJournalId = entry.scale.replace(parentToMove.id, newId);
entry.scale = newJournalId;
});

parentToMove.id = newId;

saveData();
loadGrid();  


}

// Reset moving state
isMoving = false;
parentToMove = null;
childrenToMove = null;
zonesToMove = null;
journalToMove = null;



// Remove event listeners
const cells = document.querySelectorAll('[row][col]');
cells.forEach(cell => {
cell.removeEventListener('click', moveCellEvent);
});
});
}

function handleFill(){

const paletteDiv = document.getElementById('paletteDiv');

if(currentMode === 'map'){

if(!isFilling){

isFilling = true
isPainting = false

paletteDiv.style.display = "flex";

}else{

isFilling = false
paletteDiv.style.display = "none";

}

}
}

function handleGrid(){

if (isHexMap) {
regionObj.grid = 'square'
isHexMap = false
} else {
regionObj.grid = 'hex'
isHexMap = true
}

loadGrid()

}

function handleNew(){
showPrompt('Make New Project: Are you sure you want to erase all data?').then(shouldDelete => {

if (shouldDelete) {
data = defaultData;
regionObj = data[0];
regionName.textContent = data[0].name;
emptyStoryteller();

zones = []; 
journalData = [];
coords = '0.0';
localStorage.clear();

currentRows = defaultRows;
currentCols = defaultCols;


loadGrid();

idBox.textContent = '';
textDiv.innerHTML = '';

placeName.value = data[0].name;
placeSymbol.value = data[0].symbol;
textDiv.innerHTML = data[0].desc;

}});

}

function handleClear() {

showPrompt('Clear Current Map: Are you sure you want to erase all visible data?').then(shouldDelete => {
if (shouldDelete) {

let allCells = document.querySelectorAll('[row][col]')


const dataLengthOld = data.length

allCells.forEach(cell => {

const row = cell.getAttribute('row');
const col = cell.getAttribute('col');
const id = coords + '.' + row + '.' + col;

const index = data.findIndex(entry => entry.id === id)

if(index !== -1){data.splice(index, 1)};

})




//Erase Zones
//zones = []

zones = zones.filter(zone => zone.coords !== coords);

saveData();
loadGrid();

}})


};

function exportJournal() {
    const regionName = document.getElementById('regionName');

    // Create a string to hold the journal content
    let journalContent = '';

    // Iterate through journalData and add content to the string
    journalData.forEach(item => {
        journalContent += `Name: ${item.name}\n\n`;
        journalContent += `Left Content:\n${item.left}\n\n`;
        journalContent += `Right Content:\n${item.right}\n\n`;
        journalContent += '----------------------------------------\n\n';
    });

    // Create a Blob object with the data
    const blob = new Blob([journalContent], { type: 'text/plain;charset=utf-8' });

    // Create a temporary anchor element
    const a = document.createElement('a');

    // Create an object URL for the Blob
    const url = URL.createObjectURL(blob);
    a.href = url;

    // Set the download attribute to specify the filename
    a.download = regionName ? `${regionName.textContent}_journal.txt` : 'journal.txt';

    // Append the anchor to the body (required for Firefox)
    document.body.appendChild(a);

    // Programmatically click the anchor to trigger the download
    a.click();

    // Remove the anchor from the DOM
    document.body.removeChild(a);

    // Release the object URL
    URL.revokeObjectURL(url);
}

  

function handleExport() {
const regionName = document.getElementById('regionName');


// Create an object that includes all data sets
const exportData = {
data: data,
// monsters: monsters,
// spells: spells,
// items: items,
EXCEL_DM: EXCEL_DM,
zones: zones,
soundBoard: sounds, 
scrollData: scrollData,
regionObj: regionObj,
lastCell: getCurrentEntry(),
};

// Convert the combined object to a JSON string
const exportStr = JSON.stringify(exportData, null, 2); // Pretty print with 2 spaces

// Create a Blob object with the combined data
const blob = new Blob([exportStr], { type: 'application/json' });

// Create a temporary anchor element
const a = document.createElement('a');

// Create an object URL for the Blob
const url = URL.createObjectURL(blob);
a.href = url;

// Set the download attribute to specify the filename
a.download = regionName ? regionName.textContent + '.json' : 'data.json';

// Append the anchor to the body (required for Firefox)
document.body.appendChild(a);

// Programmatically click the anchor to trigger the download
a.click();

// Remove the anchor from the DOM
document.body.removeChild(a);

// Release the object URL
URL.revokeObjectURL(url);
};

function handleLoad()  {

// Create a hidden input element to trigger the file explorer
const input = document.createElement('input');
input.type = 'file';
input.accept = 'application/json'; // Accept only JSON files

// When the user selects a file, read its contents
input.addEventListener('change', function(event) {
const file = event.target.files[0]; // Get the selected file
if (file) {
const reader = new FileReader();

// Set up the callback for when the file is loaded
reader.onload = function(e) {
try {
const loadedData = JSON.parse(e.target.result);

data = loadedData.data;
// monsters = loadedData.monsters? loadedData.monsters : monsters;
// spells = loadedData.spells? loadedData.spells : spells;
zones = loadedData.zones;
regionObj = loadedData.regionObj;
sounds = loadedData.soundBoard;
scrollData = loadedData.scrollData;
lastCell = loadedData.lastCell;
EXCEL_DM = loadedData.EXCEL_DM? loadedData.EXCEL_DM : EXCEL_DM;

// for (const key in EXCEL_DM.journal){
// EXCEL_DM.journal[key] = []
// }

// loadedData.journalData.forEach(entry => {

// let key = entry.scale

// if(EXCEL_DM.journal[key]){
//     EXCEL_DM.journal[key].push(entry)}

// else{EXCEL_DM.journal.Locations.push(entry)}

// })

// console.log(EXCEL_DM.journal)
collectGarbage();

if(Array.isArray(zones) === false){zones = []}

coords = regionObj.id;
goToEntry(lastCell.id);
regionName.textContent = regionObj.name;

updateGrid();

} catch (error) {
console.error("Error parsing JSON file:", error);
}
};

// Read the file as text
reader.readAsText(file);
}
});

// Trigger the file explorer by clicking the hidden input
input.click();
};



function handleTravel(regionRowAdd, regionColAdd, destRow, destCol){

console.log('handleTravel()')
const here = getCurrentDiv()

if(idBox.textContent.split('.').length === 4){return}

//Transform Coords for Direction and Go There
const oldRegionCol = coords.split('.').slice(-1)[0]; // get last
const oldRegionRow = coords.split('.').slice(-2, -1)[0]; // get second last
const returnCoords = coords.split('.').slice(0, -2).join('.'); // return coords without last two

const newRegionCol = parseInt(oldRegionCol, 10) + parseInt(regionColAdd, 10)
const newRegionRow = parseInt(oldRegionRow, 10) + parseInt(regionRowAdd, 10)
coords = returnCoords + '.' + newRegionRow + '.' + newRegionCol

const destination = coords + '.' + destRow + '.' + destCol;

//Move
regionObj = getObj(coords);
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj && regionObj.name !== ''? regionObj.name : "Excel_DM"

loadGrid();
goToEntry(destination);

}


function setGridSize() {
const modal = document.getElementById('customPrompt');
modal.style.display = 'block';
const rows = document.getElementById('rows').value;
rows.focus();

}

function closeModal() {
const modal = document.getElementById('customPrompt');
modal.style.display = 'none';
}

function confirmGridSize() {
const modal = document.getElementById('customPrompt');
const rows = document.getElementById('rows').value;
const cols = document.getElementById('cols').value;

if (rows && cols) {
if (isHexMap) {
currentCols = parseInt(cols)
currentRows = parseInt(rows)
createHexagons(currentRows, currentCols, gridContainer);
isHexMap = true;
updateGrid()
} else {
currentCols = parseInt(cols)
currentRows = parseInt(rows)
createGrid(currentRows, currentCols);
isHexMap = false;
updateGrid()
}
closeModal();
} else {
alert('Please enter valid numbers for rows and columns.');
}


captureGridSize()

}

function makeNewOuterLevel(){

    // Trigger selection mode.
    
    }


    function handlePaint() {

        const paletteDiv = document.getElementById('paletteDiv');
        
        if(!isPainting && currentMode === 'map'){
        isPainting = true
        isFilling = false
        paletteDiv.style.display = "flex";
        }else{
        isPainting = false
        paletteDiv.style.display = "none";
        }

        }
