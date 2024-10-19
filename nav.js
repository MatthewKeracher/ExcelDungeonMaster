
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

function handleGrid(){

loadGrid()

if (isHexMap) {
regionObj.grid = 'hex'
} else {
regionObj.grid = 'square'
}

}

function handleNew() {

    data = [{
        id: "0.0",
        name: "Excel_DM",
        desc: "Welcome to Excel_DM",
        rows: 20,
        cols: 40,
        }];

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

const logo = document.getElementById("startLogo");
logo.style.display = "none"


captureGridSize();

//Set selected cell as regionObj
console.log(data)
regionObj = getObj(idBox.textContent);
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj?.name? regionObj.name : "Excel_DM";

if(regionObj?.grid === 'square'){

isHexMap = true
loadGrid();
goToEntry(regionObj.id);

}else{

isHexMap = false
loadGrid();
goToEntry(regionObj.id);

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
const returnObj = getObj(coords);
regionObj = returnObj;

//Set parent cell name as region name. 
const regionName = document.getElementById('regionName');
regionName.textContent = returnObj && returnObj.name !== ''? returnObj.name : "Excel_DM"


if(returnObj?.grid === 'square'){
isHexMap = true
loadGrid();
goToEntry(coords);
    
} else {

isHexMap = false
loadGrid();
goToEntry(coords);

}

}


function setHexGrid() {
    showModal('hex');
}

function setSquareGrid() {
    showModal('square');
}

function showModal(type) {
    const modal = document.getElementById('customPrompt');
    modal.style.display = 'block';
    modal.setAttribute('data-grid-type', type);
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
        if (modal.getAttribute('data-grid-type') === 'hex') {
            hexCols = parseInt(cols)
            hexRows = parseInt(rows)
            createHexagons(hexRows, hexCols);
            isHexMap = true;
            updateGrid()
        } else {
            squareCols = parseInt(cols)
            squareRows = parseInt(rows)
            createGrid(squareRows, squareCols);
            isHexMap = false;
            updateGrid()
        }
        closeModal();
    } else {
        alert('Please enter valid numbers for rows and columns.');
    }


    captureGridSize()

}

let scaleFactor = 1; // Scale factor to track current size of the image
let img = new Image(); // Global image variable
let originalWidth, originalHeight; // Store original dimensions

function getImage() {
    const url = prompt("Enter image URL:");
    img.crossOrigin = "Anonymous"; // Enable CORS
    img.src = url;

    img.onload = function() {
        const canvas = document.getElementById('imageCanvas');
        const ctx = canvas.getContext('2d');

        // Set original dimensions
        originalWidth = img.naturalWidth;
        originalHeight = img.naturalHeight;

        // Set canvas size to natural size
        canvas.width = originalWidth;
        canvas.height = originalHeight;

        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);

        // Set the transparency for the grid container
        const gridContainer = document.getElementById('gridContainer');
        gridContainer.classList.add('transparent');
    };

    img.onerror = function() {
        alert("Failed to load image. Please check the URL or CORS settings.");
    };
}

function increaseImageSize() {
    scaleFactor *= 1.05; // Increase size by 5%
    updateCanvasSize();
}

function decreaseImageSize() {
    scaleFactor *= 0.95; // Decrease size by 5%
    updateCanvasSize();
}

function updateCanvasSize() {
    const canvas = document.getElementById('imageCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate new dimensions
    const newWidth = originalWidth * scaleFactor;
    const newHeight = originalHeight * scaleFactor;

    // Set canvas dimensions
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the scaled image on the canvas
    ctx.drawImage(img, 0, 0, newWidth, newHeight);
}

