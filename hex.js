function setHexagonSize(baseSize) {
    const hexMarginRight = -0.4 * baseSize;  // Example proportion
    const hexMarginBottom = -0.83 * baseSize;
    const hexSide = 0.5 * baseSize;
    const hexHeight = 0.87 * baseSize;
    const hexTotalHeight = 2 * hexHeight;
    const hexMarginTop = hexHeight * 1.08;

    // Apply the calculated values to the root element (or any specific container)
    document.documentElement.style.setProperty('--hex-margin-right', `${hexMarginRight}px`);
    document.documentElement.style.setProperty('--hex-margin-bottom', `${hexMarginBottom}px`);
    document.documentElement.style.setProperty('--hex-side', `${hexSide}px`);
    document.documentElement.style.setProperty('--hex-height', `${hexHeight}px`);
    document.documentElement.style.setProperty('--hex-total-height', `${hexTotalHeight}px`);
    document.documentElement.style.setProperty('--hex-margin-top', `${hexMarginTop}px`);
}


function createHexagons(rows, cols) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';  // Clear previous map

    setHexagonSize(30); // Ensure this function sets hexagon sizes properly.

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

            // Create Label for Hexagon
            const label = document.createElement('div');
            label.classList.add('cellLabel');
            label.innerText = ``; 
            hexagon.appendChild(label);

            if (col % 2 === 1) {
                hexagon.classList.add('colEven');
            }

            hexagon.setAttribute('col', col);
            hexagon.setAttribute('row', row);

            hexagon.addEventListener("click", function() {
                changeHex(hexagon);
            });

            hexagon.addEventListener('mousemove', function() {
                if (isPainting && isShiftPressed) {
                    paintCell(hexagon);
                }
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

function moveHex(dir){

let str = idBox.textContent;
let numbersArray = str.split('.');
let rowcol = numbersArray.slice(-2);
let row = parseInt(rowcol[0]);
let col = parseInt(rowcol[1]);

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


const div = document.querySelector(`[row="${row}"][col="${col}"]`);
paintCell(div);
changeHex(div);
}

function changeHex(hexagon){

if(currentMode !== "map"){return};

saveEntry();
updateHexNames();
selectedHexStyle(hexagon)


//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

//loadData
textDiv.innerHTML = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
textDiv.innerHTML = loadEntry.desc;
}

// isEditing = true;
//toggleEditMode();
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
const hexLabel = hex.querySelector('.cellLabel');
hexLabel.textContent = "";

if(saveEntry){
hex.setAttribute('name', saveEntry.name)
hexLabel.textContent = saveEntry.name

}

})

}

let lastHex = ''

function selectedHexStyle(hex, action){

let effect = "invert(100%)"

if(lastHex !== ''){
lastHex.querySelector('.left').classList.remove("flashing");
lastHex.querySelector('.middle').classList.remove("flashing");
lastHex.querySelector('.right').classList.remove("flashing");
}

hex.querySelector('.left').classList.add("flashing");
hex.querySelector('.middle').classList.add("flashing");
hex.querySelector('.right').classList.add("flashing");

lastHex = hex;

}

function updateHexColors(hex, saveEntry){

if(saveEntry){
hex.querySelector('.left').style.borderRightColor = saveEntry.color;
hex.querySelector('.middle').style.backgroundColor = saveEntry.color;
hex.querySelector('.right').style.borderLeftColor = saveEntry.color;
}else{
hex.querySelector('.left').style.borderRightColor =  defaultHexColor;
hex.querySelector('.middle').style.backgroundColor =  defaultHexColor;
hex.querySelector('.right').style.borderLeftColor =  defaultHexColor;
}

}

// createHexagons(hexRows,hexCols);