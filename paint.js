let lastCellPainted = {id: '', color: ''};
let currentColor = document.getElementById('color1').style.backgroundColor;

function setColor(color) {
currentColor = color;
};

function setCurrentColor(colInput){
currentColor = window.getComputedStyle(colInput).backgroundColor;
};

function paintCurrentCell(colInput){
if(!isPainting){return}
currentCell = getCurrentDiv();
paintCell(currentCell);
};

function fillCells(cell) {
    if (!isFilling) return;

    const getCellColor = (div) => {
        return isHexMap ? div.querySelector('.middle').style.backgroundColor : div.style.backgroundColor;
    };

    const setCellColor = (div, color) => {
        if (isHexMap) {
            div.querySelector('.left').style.borderLeftColor = color;
            div.querySelector('.middle').style.backgroundColor = color;
            div.querySelector('.right').style.borderRightColor = color;
        } else {
            div.style.backgroundColor = color;
        }
    };

    const oldColor = getCellColor(cell);
    if (currentColor === oldColor) return;

    const startCol = parseInt(cell.getAttribute('col'));
    const startRow = parseInt(cell.getAttribute('row'));

    const queue = [[startCol, startRow]];
    
    while (queue.length > 0) {
        const [currentCol, currentRow] = queue.pop();
        const div = getDiv(currentRow, currentCol);
        let directions = getDirectionsHelper(currentCol);
        
        if (!div || getCellColor(div) !== oldColor) continue;

        setCellColor(div, currentColor);
        updateColor(currentCol, currentRow);

        for (const [dCol, dRow] of directions) {
            const newCol = currentCol + dCol;
            const newRow = currentRow + dRow;
            const newDiv = getDiv(newRow, newCol);

            if (newDiv && getCellColor(newDiv) === oldColor) {
                queue.push([newCol, newRow]);
            }
        }
    }

    saveData();

    if (isHexMap) {
        updateHexGrid();
    } else {
        updateSquareGrid();
    }

    handleFill();
}

function getDirectionsHelper(col){

let directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, -1], [-1, 1], [1,1], [-1,-1]] 

//Special Rule for offset even cols in HexMap
if(isHexMap){
    if (col % 2 === 0) {
        
    directions = [[0, -1], [-1, -1], [1, -1], [-1, 0], [1, 0], [0, 1]];

    } else {

    directions = [[0,-1],[-1,0],[1,0],[0,1],[-1,1],[1,1]];

    }
}

return directions

}

function updateColor(col, row){
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)

if(saveEntry?.color){ 
saveEntry.color = currentColor
}

if(saveEntry === undefined ){ //&& cellEntry === undefined

const newEntry = {
id: id,
name: "",
desc: "",
color: currentColor,

}

data.push(newEntry)

}};

function paintCell(cell) {

if(!isPainting){return};

const row = cell.getAttribute('row');
const col = cell.getAttribute('col');
const searchId = coords + '.' + row + '.' + col;
const cellObj = getObj(searchId);

//Stop Crowding
if(searchId === lastCellPainted.id && currentColor === lastCellPainted.color){return}
lastCellPainted.id = searchId;
lastCellPainted.color = currentColor;

if(cellObj){
cellObj.color = currentColor;
}else{
const saveEntry = {
id: searchId,
name: "",
desc: "",
color: isPainting? currentColor : '',
}

data.push(saveEntry)
}

saveData();

if(!isHexMap){
updateSquareGrid()
}else{
updateHexGrid()
}

};

let isShiftPressed = false;

document.addEventListener('keydown', function(event) {
if (event.key === 'Shift') {
isShiftPressed = true;
}
});

document.addEventListener('keyup', function(event) {
if (event.key === 'Shift') {
isShiftPressed = false;
}
});

// Function to set the selected color when clicked
function setColor(swatchElement) {

let setColor = swatchElement.style.backgroundColor;

if(setColor === "none"){
currentColor = "none"
}else{
currentColor = swatchElement.style.backgroundColor;
}
}

// Function to open color picker and change color on Shift-click
function editColor(event, swatchElement) {
event.preventDefault(); // Prevent default right-click behavior

// Create a hidden color input element
const colorInput = document.createElement('input');
colorInput.type = 'color';
colorInput.value = rgbToHex(swatchElement.style.backgroundColor); // Set initial value to current swatch color

// Trigger color input click and change the swatch color
colorInput.click();
colorInput.addEventListener('input', function() {
swatchElement.style.backgroundColor = colorInput.value; // Update swatch color

if (!regionObj.palette) {
regionObj.palette = [];
}

let exists = regionObj.palette.find(entry => entry.id === swatchElement.id);

if(exists){ exists.color = colorInput.value}else{
regionObj.palette.push({id: swatchElement.id, color: colorInput.value})
}

setColor(swatchElement)

});



}

function loadPalette(){

let palette = regionObj?.palette;

if(palette){

palette.forEach(entry => {

let number = entry.id;
let color = entry.color;
let swatchElement = document.getElementById(number)

swatchElement.style.backgroundColor = color;
setColor(swatchElement)

})
}

}

// Helper function to convert RGB to HEX
function rgbToHex(rgb) {
const rgbArray = rgb.match(/\d+/g);
return "#" + rgbArray.map(x => {
const hex = parseInt(x).toString(16);
return hex.length == 1 ? "0" + hex : hex;
}).join('');
}
