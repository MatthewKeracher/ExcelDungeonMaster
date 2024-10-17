function createHexagons(rows, cols) {
const hexGridContainer = document.getElementById('hexGridContainer');

for (let row = 0; row < rows; row++) {
// Create a row for hexagons
const hexRow = document.createElement('div');
hexRow.classList.add('hex-row');

for (let col = 0; col < cols; col++) {

// Create a hexagon div
const hexagon = document.createElement('div');
hexagon.classList.add('hex');


//Show Label
hexagon.addEventListener('mouseover', showHoverLabel);
hexagon.addEventListener('mousemove', showHoverLabel);
hexagon.addEventListener('mouseout', hideHoverLabel);

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
const hexLabel = document.createElement('div');
hexLabel.classList.add('hex-label');
hexagon.appendChild(hexLabel);

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

function showHoverLabel(e) {
    const placeName = e.currentTarget.getAttribute('name');
    hoverLabel.textContent = placeName;
    hoverLabel.style.display = 'block';
    hoverLabel.style.left = `${e.pageX + 20}px`;
    hoverLabel.style.top = `${e.pageY}px`;
    hoverLabel.style.opacity = '1';
}

function hideHoverLabel() {
    hoverLabel.style.display = 'none';
    hoverLabel.style.opacity = '0';
}




function changeHex(hexagon){

saveHex();
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
textDiv.innerHTML = loadEntry.desc.trim();
writeBox.value = loadEntry.desc.trim();
}

// isEditing = true;
// toggleEditMode();
saveHex();
saveData();

}


createHexagons(20,24);

