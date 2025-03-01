// Constants and DOM elements
const container = document.getElementById('gridContainer')
const canvas = document.getElementById('imageCanvas');
const resizeHandle = document.querySelector('.resize-handle');
const ctx = canvas.getContext('2d');

// Variables
let img = new Image();
let originalWidth, originalHeight;
let isDragging = false;
let isResizing = false;
let startX, startY, startWidth, startHeight;

// Image Loading and Processing
function getImage() {
const url = prompt("Enter image URL:");
if (!url) return;

img.crossOrigin = "Anonymous";
img.src = url;
img.onload = handleImageLoad;
img.onerror = handleImageError;
}

function handleImageLoad() {
originalWidth = img.naturalWidth;
originalHeight = img.naturalHeight;

isImaging = true;


setupCanvas();
makeGridTransparent();
}


function setupCanvas() {
canvas.width = originalWidth;
canvas.height = originalHeight;
canvas.style.display = "block";
ctx.drawImage(img, 0, 0, originalWidth, originalHeight);
}
 

// Hex Map Painting
async function confirmPaintHexMap() {
await paintHexMap(canvas.width, canvas.height);
isImaging = false;
canvas.style.display = "none";
}

async function paintHexMap() {
const { rows, cols } = calculateGridSize();
let cells;

if (isHexMap) {
createHexagons(rows, cols, gridContainer);
cells = document.querySelectorAll('.hex');
} else {
createGrid(rows, cols);
cells = document.querySelectorAll('.grid-cell');
}

setupGridForPainting();

for (const cell of cells) {
paintCellFromImage(cell);
await new Promise(resolve => setTimeout(resolve, 0.5));
}

isPainting = false;
}

function setupGridForPainting() {
const gridContainer = document.getElementById('gridContainer');
gridContainer.classList.remove('transparent');
canvas.style.display = "none";
isPainting = true;
}

function paintCellFromImage(cell) {
const gridRect = document.getElementById('gridContainer').getBoundingClientRect();
const rect = cell.getBoundingClientRect();
const centerX = Math.floor((rect.left + rect.right) / 2 - gridRect.left);
const centerY = Math.floor((rect.top + rect.bottom) / 2 - gridRect.top);

const scaledX = Math.floor(centerX * (canvas.width / gridRect.width));
const scaledY = Math.floor(centerY * (canvas.height / gridRect.height));

if (scaledX >= 0 && scaledX < canvas.width && scaledY >= 0 && scaledY < canvas.height) {
currentColor = getColorAtPosition(scaledX, scaledY);
paintCell(cell);
}
}



function makeGridTransparent() {
const gridContainer = document.getElementById('gridContainer');
gridContainer.classList.add('transparent');
}

function handleImageError() {
alert("Failed to load image. Please check the URL or CORS settings.");
}

function calculateGridSize() {
    const { width: hexWidth, height: hexHeight } = getCellDimensions();
    

    // For hexagonal grid
    const cols = Math.floor(canvas.width / (hexWidth * 0.75)) + 1;
    
    // Adjusted calculation for rows
    const verticalOverlap = hexHeight * 0.3; // Approximate vertical overlap
    const effectiveHeight = hexHeight - verticalOverlap;
    const rows = Math.floor(canvas.height / effectiveHeight) + 1;

    regionObj.cols = cols;
    regionObj.rows = rows;

    
    
    return { rows, cols };
}

function getCellDimensions() {
    const cell = isHexMap ? document.querySelector('.hex') : document.querySelector('.grid-cell');
    const cellRect = cell.getBoundingClientRect();
    return {
        width: cellRect.width,
        height: cellRect.height
    };
}
  


//CONTROL IMAGE FUNCTIONS

const SIZE_STEP = 20; // Pixels to change size per key press
const MOVE_STEP = 10; // Pixels to move per key press

function sizeImage(dir) {
    const currentWidth = canvas.width;
    const currentHeight = canvas.height;
    let newWidth, newHeight;

    if (dir === 'increase') {
        newWidth = currentWidth + SIZE_STEP;
        newHeight = currentHeight + SIZE_STEP;
    } else if (dir === 'decrease') {
        newWidth = Math.max(currentWidth - SIZE_STEP, SIZE_STEP); // Prevent size from going below SIZE_STEP
        newHeight = Math.max(currentHeight - SIZE_STEP, SIZE_STEP);
    }

    // Update canvas size
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Redraw the image
    redrawCanvas();
}

function redrawCanvas() {
    const aspectRatio = img.naturalWidth / img.naturalHeight;
    let newWidth, newHeight;

    // Determine new dimensions based on the current canvas size
    if (canvas.width / canvas.height > aspectRatio) {
        newHeight = canvas.height;
        newWidth = newHeight * aspectRatio;
    } else {
        newWidth = canvas.width;
        newHeight = newWidth / aspectRatio;
    }

    // Round the dimensions to whole pixels
    newWidth = Math.round(newWidth);
    newHeight = Math.round(newHeight);

    // Resize the canvas to match the new image size
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Draw the image to fill the entire canvas
    ctx.drawImage(img, 0, 0, newWidth, newHeight);

    

}



function moveImage(dir) {
    const canvas = document.getElementById('imageCanvas');
    const currentLeft = parseInt(canvas.style.left) || 0;
    const currentTop = parseInt(canvas.style.top) || 0;

    

    if (dir === 'up') {
        canvas.style.top = `${currentTop - MOVE_STEP}px`;
    } else if (dir === 'down') {
        canvas.style.top = `${currentTop + MOVE_STEP}px`;
    } else if (dir === 'left') {
        canvas.style.left = `${currentLeft - MOVE_STEP}px`;
    } else if (dir === 'right') {
        canvas.style.left = `${currentLeft + MOVE_STEP}px`;
    }
}


