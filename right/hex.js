function setHexagonSize() {


const hexProps = {
'margin-right': -6,
'margin-bottom': -12,
'side': 7.5,
'height': 13,
'width': 15,
'total-height':  26,
'margin-top':  14
};

Object.entries(hexProps).forEach(([prop, value]) => {
document.documentElement.style.setProperty(
`--hex-${prop}`, 
`${value}px`
);
});
}

let midRow 
let midCol 
let lowerBound
let upperBound

function createHexagons(rows, cols, div) {

div.innerHTML = '';  // Clear previous map
let angle = 2

setHexagonSize();

midCol = 20
midRow = 15 //Math.floor(rows/2)

lowerBound = midCol - 8
upperBound = midCol + 8

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
hexagon.appendChild(leftPart);

const middlePart = document.createElement('div');
middlePart.classList.add('middle');
hexagon.appendChild(middlePart);

const rightPart = document.createElement('div');
rightPart.classList.add('right');
hexagon.appendChild(rightPart);


if (col % 2 === 1) {
hexagon.classList.add('colEven');
}

if(col > lowerBound && col < upperBound && row < (midRow * 2)){

hexagon.classList.add('active');

// Create a canvas element for the background
//  const canvas = document.createElement('canvas');

//  if (col % 2 === 1) {
//     canvas.classList.add('hexCanvas');
//     canvas.classList.add('Even');
// }else{
//     canvas.classList.add('hexCanvas');
//     canvas.classList.add('Odd');
// }

//  hexagon.appendChild(canvas);


// Create Label for Hexagon
const label = document.createElement('div');
label.classList.add('cellLabel');
label.innerText = ``; 
hexagon.appendChild(label);

hexagon.setAttribute('col', col);
hexagon.setAttribute('row', row);

hexagon.addEventListener("click", function() {
changeHex(hexagon);
paintCell(hexagon)
fillCells(hexagon)
});

hexagon.addEventListener('mousemove', function() {
if (isPainting && isShiftPressed) {
paintCell(hexagon);
}
});

}
hexRow.appendChild(hexagon);
}
div.appendChild(hexRow);

if(row % 2 === 1 && row < midRow){
lowerBound -= angle;
upperBound += angle;
} else if(row % 2 === 1){
lowerBound += angle;
upperBound -= angle;
}

}
}

function getCompass() {

const hexes = document.querySelectorAll('.hex');

let minRow = Infinity;
let maxRow = -Infinity;
let minCol = Infinity;
let maxCol = -Infinity;

let North = null;
let South = null;
let East = null;
let West = null;

hexes.forEach(hex => {
const row = parseInt(hex.getAttribute('row'));
const col = parseInt(hex.getAttribute('col'));

if (row < minRow) {
minRow = row;
North = minRow;
}
if (row > maxRow) {
maxRow = row;
South = maxRow;
}
if (col < minCol) {
minCol = col;
West = minCol;
}
if (col > maxCol) {
maxCol = col;
East = maxCol;
}
});

//console.log(North, South, East, West)
return { North, South, East, West };
}

function moveHex(dir){

let str = idBox.textContent;
let numbersArray = str.split('.');
let rowcol = numbersArray.slice(-2);
let row = rowcol[0];
let col = rowcol[1];

if(row === 'X'){row = 0}else{row = parseInt(row)};
if(col === 'X'){col = 0}else{col = parseInt(col)};


if(dir === 'up'){
row = row - 1;
}
else if(dir === 'up-left'){
if (col % 2 === 0) {
//even
row = row - 1
col = col - 1
} else {
//odd
col = col - 1

}
}
else if(dir === 'up-right'){
if (col % 2 === 0) {
//even
row = row - 1
col = col + 1

} else {
//odd
col = col + 1
}
}

else if(dir === 'down'){
row = row + 1;
}
else if(dir === 'down-left'){
if (col % 2 === 0) {
//even
col = col - 1
} else {
//odd
row = row + 1
col = col - 1
}
}
else if(dir === 'down-right'){
if (col % 2 === 0) {
//even
col = col + 1

} else {
//odd
row = row + 1
col = col + 1

}
}

try{
const div = document.querySelector(`[row="${row}"][col="${col}"]`);
paintCell(div);
changeHex(div);
}catch{

let { North, South, East, West } = getCompass();
let regionRowAdd
let regionColAdd
let destRow
let destCol

const regionCol = returnCol(regionObj.id);
//console.log('regionObj:', regionObj)
//console.log('regionCol:' + regionCol)

//Working
if(row < North && col < upperBound && col > lowerBound){ 
console.log('North')

regionRowAdd = -1
regionColAdd = 0

destRow = South
destCol = col

}else if (row > South && col < upperBound && col > lowerBound){ 
console.log('South')
regionRowAdd = 1
regionColAdd = 0

destRow = North
destCol = col

}else if (col < lowerBound && row > midRow){ 
console.log('South West')

destCol = upperBound + (lowerBound - col)

const colDivs = Array.from(document.querySelectorAll(`[col="${destCol}"]`));
const smallestDiv = colDivs.reduce((smallest, current) => {
const currentRow = parseInt(current.getAttribute('row'));
const smallestRow = parseInt(smallest.getAttribute('row'));
return currentRow < smallestRow ? current : smallest;
}, colDivs[0]);

destRow = smallestDiv.getAttribute('row');

if (regionCol % 2 === 0) {
//even
regionRowAdd = 0
regionColAdd = -1

} else {
//odd
regionRowAdd = 1
regionColAdd = -1

}

}else if (col < lowerBound && row < midRow){ //North  West
console.log('North West')

destCol = upperBound + (lowerBound - col)

const colDivs = Array.from(document.querySelectorAll(`[col="${destCol}"]`));
const largestDiv = colDivs.reduce((largest, current) => {
const currentRow = parseInt(current.getAttribute('row'));
const largestRow = parseInt(largest.getAttribute('row'));
return currentRow > largestRow ? current : largest;
}, colDivs[0]);


destRow = largestDiv.getAttribute('row');


if (regionCol % 2 === 0) {
//even
regionRowAdd = -1
regionColAdd = -1
} else {
//odd
regionColAdd = -1
regionRowAdd = 0
}





}else if (col > lowerBound && row > midRow){ 
console.log('South East')

destCol = lowerBound + ( upperBound - col)

const colDivs = Array.from(document.querySelectorAll(`[col="${destCol}"]`));
const smallestDiv = colDivs.reduce((smallest, current) => {
const currentRow = parseInt(current.getAttribute('row'));
const smallestRow = parseInt(smallest.getAttribute('row'));
return currentRow < smallestRow ? current : smallest;
}, colDivs[0]);

destRow = smallestDiv.getAttribute('row');

console.log(regionObj)

if (regionCol % 2 === 0) {
//even
regionRowAdd = 0
regionColAdd = 1
console.log(regionCol + ' is even')

} else {
//odd
regionRowAdd = 1
regionColAdd = 1

}



}else if (col > lowerBound && row < midRow){
console.log('North East')

destCol = lowerBound - (col - upperBound)

const colDivs = Array.from(document.querySelectorAll(`[col="${destCol}"]`));
const largestDiv = colDivs.reduce((largest, current) => {
const currentRow = parseInt(current.getAttribute('row'));
const largestRow = parseInt(largest.getAttribute('row'));
return currentRow > largestRow ? current : largest;
}, colDivs[0]);

destRow = largestDiv.getAttribute('row');

if (regionCol % 2 === 0) {
//even
regionRowAdd = -1
regionColAdd = 1

} else {
//odd
regionColAdd = 1
regionRowAdd = 0
}


}
console.log('Destination', destRow, destCol)
console.log('Region', regionRowAdd, regionColAdd)
handleTravel(regionRowAdd, regionColAdd, destRow, destCol);

}};

function changeHex(hexagon){

if(currentMode !== "map"){     
saveEntry(getCurrentDiv())
};


selectedCellStyle(hexagon);

//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

emptyStoryteller()

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

rollWeather(17) //Add Weather

textDiv.innerHTML = getRandomEncounters()

if(loadEntry){
placeName.value = loadEntry.name;
placeSymbol.value = loadEntry.symbol && loadEntry.symbol !== ""? loadEntry.symbol : loadEntry.name.charAt(0);
textDiv.innerHTML += loadEntry.desc;
}

if(currentMode === "edit"){     
textDiv.focus();
placeCaretAtEnd(textDiv)
};

formatTables();
saveData();

}

function updateHexGrid(){
const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const id =  coords + '.' + row + '.' + col;
const saveEntry = data.find(entry => entry.id === id);

if(saveEntry){
updateCellColors(hex, saveEntry);
addLabelEvents(hex, saveEntry);
}

})


}

function updateCellBackground(div, children) {
const hexes = document.querySelectorAll(".hex");
let colorMap = [];

hexes.forEach(hex => {
const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const rowCol = { row, col };
colorMap.push(rowCol);
});

collectGarbage()

children.forEach((child) => {
const id = child.id;
const col = id.split('.').slice(-1)[0]; // get last
const row = id.split('.').slice(-2, -1)[0]; // get second last
const hexEntry = colorMap.find(entry => entry.row === row && entry.col === col);

if (hexEntry) {
hexEntry.color = child.color;
}
});

colorMap = colorMap.filter(entry => entry.row !== null && entry.col !== null);

const drawOnCanvas = (map, canvas) => {
const ctx = canvas.getContext('2d');
const hexSize = 20; 
const maxCol = Math.max(...map.map(entry => parseInt(entry.col))) + 1;
const maxRow = Math.max(...map.map(entry => parseInt(entry.row))) + 1;
canvas.width = maxCol * hexSize; 
canvas.height = maxRow * hexSize; 

map.forEach(entry => {
let x = entry.col * (hexSize);
let y = entry.row * (hexSize);

// Apply horizontal offset for even rows
if (entry.row % 2 === 0) {
x += hexSize / 2;
}

ctx.fillStyle = entry.color;
drawHexagon(ctx, x, y, hexSize / 2);
});
};

drawOnCanvas(colorMap, div.querySelector('.hexCanvas'));

function drawHexagon(ctx, x, y, size) {
ctx.beginPath();
ctx.moveTo(x - size, y); // Left vertex
ctx.lineTo(x - size / 2, y - size * Math.sqrt(3) / 2); // Top left vertex
ctx.lineTo(x + size / 2, y - size * Math.sqrt(3) / 2); // Top right vertex
ctx.lineTo(x + size, y); // Right vertex
ctx.lineTo(x + size / 2, y + size * Math.sqrt(3) / 2); // Bottom right vertex
ctx.lineTo(x - size / 2, y + size * Math.sqrt(3) / 2); // Bottom left vertex
ctx.closePath();
ctx.fill();
}

div.querySelector('.left').style.borderRightColor = "transparent";
div.querySelector('.middle').style.backgroundColor = "transparent";
div.querySelector('.right').style.borderLeftColor = "transparent";
}










