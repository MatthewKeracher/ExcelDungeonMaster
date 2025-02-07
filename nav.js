
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

function makeNewOuterLevel(){

// Trigger selection mode.

}

function moveCellEvent(e) {
    if (!isMoving) return;

    const newCell = e.currentTarget;
    const newRow = newCell.getAttribute('row');
    const newCol = newCell.getAttribute('col');
    const newId = coords + '.' + newRow + '.' + newCol;

    showPrompt('Move Cell and Contents: Are you sure you want to move everything?').then(shouldMove => {
        if (shouldMove) {
            // Move Logic
            
            childrenToMove.forEach(child => {
                console.log(parentToMove.id, newId)
                let newChildId = child.id.replace(parentToMove.id, newId);
                child.id = newChildId;
                
                //console.log(child.id + ' -> ' + newChildId);
                
            });
            parentToMove.id = newId;
            updateGrid();
        }
        
        // Reset moving state
        isMoving = false;
        parentToMove = null;
        childrenToMove = null;
        saveData();
        console.log('isMoving', isMoving);
        
        // Remove event listeners
        const cells = document.querySelectorAll('[row][col]');
        cells.forEach(cell => {
            cell.removeEventListener('click', moveCellEvent);
        });
    });
}


function moveCell() {
   
    console.log('isMoving', isMoving);

    const cell = getCurrentDiv();
    const row = cell.getAttribute('row');
    const col = cell.getAttribute('col');
    const id = coords + '.' + row + '.' + col;
    parentToMove = data.find(entry => entry.id === id);
    childrenToMove = data.filter(entry => entry.id.startsWith(id + '.'));

    console.log(childrenToMove);

    const cells = document.querySelectorAll('[row][col]');
    cells.forEach(cell => {
        cell.addEventListener('click', moveCellEvent);
    });
}

function handleMove(){

if(!isMoving && currentMode === 'map'){

isMoving = true
moveCell();

}else{
isMoving = false
}   

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

function handleNew() {

data = defaultData;
regionObj = data[0];

zones = []; 
coords = '0.0';
removeData();

currentRows = defaultRows;
currentCols = defaultCols;


loadGrid();

idBox.textContent = '';
textDiv.innerHTML = '';

}

function clearMap(){

let allCells = document.querySelectorAll('[row][col]')
console.log(allCells.length + ' cells to clear.')

const dataLengthOld = data.length

allCells.forEach(cell => {

const row = cell.getAttribute('row');
const col = cell.getAttribute('col');
const id = coords + '.' + row + '.' + col;

const index = data.findIndex(entry => entry.id === id)

if(index !== -1){data.splice(index, 1)};

})

console.log(dataLengthOld - data.length + ' entries deleted')
console.log(data.length + ' entries remaining.')

//Erase Zones
zones = []
console.log(zones)
zones = zones.filter(zone => zone.coords !== coords);

saveData();
loadGrid();


}

function handleExport() {
    const regionName = document.getElementById('regionName');
    
    // Create an object that includes all three data sets
    const exportData = {
        data: data,
        journalData: journalData,
        zones: zones
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
}


    function handleLoad() {
        // Create a hidden input element to trigger the file explorer
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json'; // Accept only JSON files
    
        // When the user selects a file, read its contents
        input.addEventListener('change', function(event) {
            const file = event.target.files[0]; // Get the selected file
            if (file) {
                const reader = new FileReader();
    
                // Empty
                idBox.textContent = '';
    
                // Set up the callback for when the file is loaded
                reader.onload = function(e) {
                    try {
                        // Parse the JSON content from the file
                        const loadedData = JSON.parse(e.target.result);
    
                        // Check if the loaded data has the expected structure
                        // if (loadedData.data && loadedData.journalData && loadedData.zones) {
                            
                            // Replace the current data with the loaded data
                            data = loadedData.data;
                            journalData = loadedData.journalData;
                            zones = loadedData.zones;
    
                            console.log("Data successfully loaded:", data);
                            console.log("Journal data successfully loaded:", journalData);
                            console.log("Zones successfully loaded:", zones);

                            if(Array.isArray(zones) === false){zones = []}
    
                            // Update UI elements
                            updateGrid();
                            // Add any other necessary UI updates for journalData and zones
                        // } else {
                        //     console.error("Loaded file does not have the expected structure");
                        // }
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
    }
    


function handleEnter(){

const logo = document.getElementById("startLogo");
logo.style.display = "none";

captureGridSize();

//Set selected cell as regionObj
regionObj = getObj(idBox.textContent);
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj?.name? regionObj.name : "Excel_DM";
coords = regionObj.id;

loadGrid();
goToEntry(regionObj.id);
updateGrid();

}

function handleExit(){

//Remove 2 digits from coords and go there.
coords = parseParent(regionObj.id);

if(regionObj.id === '0.0'){makeNewOuterLevel()}

//Get Obj for parent cell.
let returnObj = regionObj
regionObj = getObj(coords);


//Set parent cell name as region name. 
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj && regionObj.name !== ''? regionObj.name : "Excel_DM"

loadGrid();
goToEntry(returnObj.id);
showInactivityImage()

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
createHexagons(currentRows, currentCols);
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



