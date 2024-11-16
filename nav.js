
function handlePaint() {

const paintButton = document.getElementById('paintButton');
const paletteDiv = document.getElementById('paletteDiv');


if(!isPainting && currentMode === 'map'){

isPainting = true
isFilling = false

// paintButton.classList.add('highlight');
paletteDiv.style.display = "flex";

}else{

isPainting = false
// paintButton.classList.remove('highlight');
paletteDiv.style.display = "none";

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

//Get Obj for parent cell.
let returnObj = regionObj
regionObj = getObj(coords);


//Set parent cell name as region name. 
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj && regionObj.name !== ''? regionObj.name : "Excel_DM"

loadGrid();
goToEntry(returnObj.id);

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



