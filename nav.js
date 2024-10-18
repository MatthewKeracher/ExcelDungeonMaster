function handlePaint() {

const paintButton = document.getElementById('paintButton');
const paletteDiv = document.getElementById('paletteDiv');


if(!isPainting){

isPainting = true
paintButton.classList.add('highlight');
paletteDiv.style.display = "flex";

}else{

isPainting = false
paintButton.classList.remove('highlight');
paletteDiv.style.display = "none";

}


}

function handleGrid(rows, cols){

loadGrid(rows, cols)

if (isHexMap) {
regionObj.grid = 'hex'
} else {
regionObj.grid = 'square'
}

}

function handleNew() {

data = [];
updateGrid();

idBox.textContent = '';
textDiv.innerHTML = '';
writeBox.value = '';

}

function handleExport() {
// Convert the data array to a JSON string
const dataStr = JSON.stringify(data, null, 2); // Pretty print with 2 spaces

// Create a Blob object with the data
const blob = new Blob([dataStr], { type: 'application/json' });

// Create a temporary anchor element
const a = document.createElement('a');

// Create an object URL for the Blob
const url = URL.createObjectURL(blob);
a.href = url;

// Set the download attribute to specify the filename
a.download = 'data.json';

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

//Empty
idBox.textContent = '';



// Set up the callback for when the file is loaded
reader.onload = function(e) {
try {
// Parse the JSON content from the file
const loadedData = JSON.parse(e.target.result);

// Replace the current data with the loaded data
data = loadedData;

// Optionally log the new data or update UI elements here
console.log("Data successfully loaded:", data);


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

}

function handleEnter(){

//Set selected cell as regionObj
regionObj = getObj(idBox.textContent);
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj.name;

if(regionObj.grid && regionObj.grid === 'hex'){

isHexMap = false
loadGrid(rowsGlobal,colsGlobal);

}else if (regionObj.grid && regionObj.grid === 'square'){

isHexMap = true
loadGrid(rowsGlobal,colsGlobal);

}

returnCoords = coords;
coords = idBox.textContent;
idBox.textContent = idBox.textContent 
updateGrid();

//goToCell(idBox.textContent + '.0.0')

}

function handleExit(){

//Set co-ordinates to parent cell.
parse(coords)
idBox.textContent = coords;

//Get Obj for parent cell.
const returnObj = getObj(coords)

//Set parent cell name as region name. 
const regionName = document.getElementById('regionName');
regionName.textContent = returnObj.name? returnObj.name : "Excel_DM"

//loadGrid and goTo parent cell. 
if (returnObj.grid && returnObj.grid === 'square'){

isHexMap = true
loadGrid(rowsGlobal,colsGlobal);
goToEntry(coords);
    
} else {

isHexMap = false
loadGrid(rowsGlobal,colsGlobal);
goToEntry(coords);

}

}



