// Constants and DOM elements
const container = document.getElementById('canvasContainer');
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
    
    setupCanvas();
    setupContainer();
    makeGridTransparent();
}

function setupCanvas() {
    canvas.width = originalWidth;
    canvas.height = originalHeight;
    ctx.drawImage(img, 0, 0, originalWidth, originalHeight);
}

function setupContainer() {
    container.style.position = 'absolute';
    container.style.left = '50px';
    container.style.top = '50px';
    container.style.width = originalWidth + 'px';
    container.style.height = originalHeight + 'px';
}

function makeGridTransparent() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.classList.add('transparent');
}

function handleImageError() {
    alert("Failed to load image. Please check the URL or CORS settings.");
}

// Dragging Functionality
function startDragging(e) {
    if (e.target === resizeHandle) return;
    isDragging = true;
    startX = e.clientX - container.offsetLeft;
    startY = e.clientY - container.offsetTop;
}

function drag(e) {
    if (!isDragging) return;
    const newX = e.clientX - startX;
    const newY = e.clientY - startY;
    container.style.left = `${newX}px`;
    container.style.top = `${newY}px`;
}

function stopDragging() {
    isDragging = false;
}

// Resizing Functionality
function startResizing(e) {
    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(canvas).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(canvas).height, 10);
    e.preventDefault();
}

function resize(e) {
    if (!isResizing) return;
    const newWidth = startWidth + (e.clientX - startX);
    const newHeight = startHeight + (e.clientY - startY);
    canvas.width = newWidth;
    canvas.height = newHeight;
    redrawCanvas();
}

function stopResizing() {
    isResizing = false;
}

function redrawCanvas() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// Grid Calculations
function calculateGridSize(imageWidth, imageHeight) {
    const { width: hexWidth, height: hexHeight } = getCellDimensions();
    const cols = Math.floor(imageWidth / (hexWidth * 0.75));
    const rows = Math.floor(imageHeight / (hexHeight * 0.866));
    
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

// Color Processing
function getColorAtPosition(x, y) {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const pixelColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    
    if (!regionObj.palette || regionObj.palette.length === 0) {
        return pixelColor;
    }
    
    return findClosestColor(pixelColor, regionObj.palette);
}

function findClosestColor(targetColor, palette) {
    let closestColor = palette[0].color;
    let minDistance = colorDistance(targetColor, closestColor);
    
    for (let i = 1; i < palette.length; i++) {
        const distance = colorDistance(targetColor, palette[i].color);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = palette[i].color;
        }
    }
    
    return closestColor;
}

function colorDistance(color1, color2) {
    const rgb1 = colorToRGB(color1);
    const rgb2 = colorToRGB(color2);
    
    return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
    );
}

function colorToRGB(color) {
    if (color.startsWith('#')) {
        return hexToRGB(color);
    } else if (color.startsWith('rgb')) {
        return parseRGB(color);
    }
}

function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function parseRGB(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return { r, g, b };
}

// Hex Map Painting
async function confirmPaintHexMap() {
    await paintHexMap(canvas.width, canvas.height);
}

async function paintHexMap(width, height) {
    const { rows, cols } = calculateGridSize(width, height);
    let cells;

    if (isHexMap) {
        createHexagons(rows, cols);
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

// Event Listeners
container.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);
resizeHandle.addEventListener('mousedown', startResizing);
document.addEventListener('mousemove', resize);
document.addEventListener('mouseup', stopResizing);