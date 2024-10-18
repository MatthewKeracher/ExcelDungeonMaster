function createHexagons(rows, cols) {
const gridContainer = document.getElementById('gridContainer');
gridContainer.innerHTML = '';  // Clear previous map

for (let row = 0; row < rows; row++) {
// Create a row for hexagons
const hexRow = document.createElement('div');
hexRow.classList.add('hex-row');

for (let col = 0; col < cols; col++) {

// Create a hexagon div
const hexagon = document.createElement('div');
hexagon.classList.add('hex');


//Show Label
// hexagon.addEventListener('mouseover', showHoverLabel);
// hexagon.addEventListener('mousemove', showHoverLabel);
// hexagon.addEventListener('mouseout', hideHoverLabel);

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

//Create Label for Hexagon
const label = document.createElement('div');
label.classList.add('hexLabel');
hexagon.appendChild(label);

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
gridContainer.appendChild(hexRow);
}
}

function updateGrid(){

if(!isHexMap){
updateSquareGrid()
}else{
updateHexGrid()
}

}

function changeHex(hexagon){

saveEntry();
updateHexNames();

//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

//Paint Hex Current Colour
if(isPainting){
hexagon.querySelector('.left').style.borderRightColor = currentColor;
hexagon.querySelector('.middle').style.backgroundColor = currentColor;
hexagon.querySelector('.right').style.borderLeftColor = currentColor;
}

//loadData
textDiv.innerHTML = ''
writeBox.value = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
writeBox.value = loadEntry.desc.trim();
textDiv.innerHTML = handlePrompts();
}

// isEditing = true;
// toggleEditMode();
saveEntry();
saveData();

}


function updateHexGrid(){

const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)

updateHexColors(hex, saveEntry);



})

updateHexNames();

}

function updateHexNames(){

const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)
const hexLabel = hex.querySelector('.hexLabel');
hexLabel.textContent = "";

if(saveEntry){
hex.setAttribute('name', saveEntry.name)
hexLabel.textContent = saveEntry.name

}

})

}

function updateHexColors(hex, saveEntry){

if(saveEntry){
hex.querySelector('.left').style.borderRightColor = saveEntry.color;
hex.querySelector('.middle').style.backgroundColor = saveEntry.color;
hex.querySelector('.right').style.borderLeftColor = saveEntry.color;
}else{
hex.querySelector('.left').style.borderRightColor =  defaultColor;
hex.querySelector('.middle').style.backgroundColor =  defaultColor;
hex.querySelector('.right').style.borderLeftColor =  defaultColor;
}

}


createHexagons(rowsGlobal,colsGlobal);