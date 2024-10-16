// Get the drawing canvas and its context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let painting = false;

const data = []

// Ensure canvas dimensions match the container
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const hexGridContainer = document.getElementById('hexGridContainer');

// Function to create hexagons
function createHexagons(rows, cols) {
const hexGridContainer = document.getElementById('hexGridContainer');
const drawingCanvas = document.getElementById('drawingCanvas');

// Get the dimensions of the drawingCanvas
const canvasWidth = drawingCanvas.clientWidth;
const canvasHeight = drawingCanvas.clientHeight;

for (let row = 0; row < rows; row++) {
// Create a row for hexagons
const hexRow = document.createElement('div');
hexRow.classList.add('hex-row');

for (let col = 0; col < cols; col++) {
// Create a hexagon div
const hexagon = document.createElement('div');
hexagon.classList.add('hex');

// Create left, middle, and right parts of the hexagon
const leftPart = document.createElement('div');
leftPart.classList.add('left');

const middlePart = document.createElement('div');
middlePart.classList.add('middle');

const rightPart = document.createElement('div');
rightPart.classList.add('right');

// Append the parts to the hexagon
hexagon.appendChild(leftPart);
hexagon.appendChild(middlePart);
hexagon.appendChild(rightPart);

if (col % 2 === 1) {
hexagon.classList.add('colEven');
}

hexagon.setAttribute('col', col)
hexagon.setAttribute('row', row)

hexagon.addEventListener("click", function() {
    changeHex(hexagon);
});

hexRow.appendChild(hexagon);
}

hexGridContainer.appendChild(hexRow);
}
}

function changeHex(hexagon){

//Save current Data
const idBox = document.getElementById('idBox');
const textDiv = document.getElementById('textDiv');

let exists = data.find(entry => entry.id === idBox.textContent)

if(exists){
exists.desc = textDiv.textContent
console.log(data)
}else if(idBox.textContent !== '' && textDiv.textContent !== ''){

const saveEntry = {

id: idBox.textContent,
desc: textDiv.textContent,

}

data.push(saveEntry)
}

//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = row + '.' + col

//loadData
textDiv.innerHTML = ''
let loadEntry = data.find(entry => entry.id === idBox.textContent)

if(loadEntry){
textDiv.textContent = loadEntry.desc.trim();
}


}


createHexagons(20,24);

// Event listeners for drawing on the main canvas
function startPosition(e) {
painting = true;
draw(e);
}

function endPosition() {
painting = false;
ctx.beginPath();
}

function draw(e) {
if (!painting) return;

const rect = canvas.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

ctx.lineWidth = 5;
ctx.lineCap = 'round';
ctx.strokeStyle = 'lime';

ctx.lineTo(x, y);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(x, y);
}

// Event listeners for drawing
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.style.display = "none"


// Resize canvas when the window is resized to maintain dimensions
window.addEventListener('resize', () => {
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
});

// Initial setup for canvas dimensions
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
