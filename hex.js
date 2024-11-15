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


function createHexagons(rows, cols) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';  // Clear previous map
   

    setHexagonSize();

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
                paintCell(hexagon)
                fillCells(hexagon)
            });

            hexagon.addEventListener('mousemove', function() {
                if (isPainting && isShiftPressed) {
                    paintCell(hexagon);
                }
            });

            // hexagon.addEventListener('mouseover', function() {
            //     if(currentMode === 'map'){
            //         changeCell(hexagon)
            //     }
            // });

            hexRow.appendChild(hexagon);
        }
        gridContainer.appendChild(hexRow);
    }
}


function updateGrid(){

if(isHexMap){
updateHexGrid()
}else{
updateSquareGrid()
}

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


const div = document.querySelector(`[row="${row}"][col="${col}"]`);
paintCell(div);
changeHex(div);
}

function changeHex(hexagon){

if(currentMode !== "map"){return};

selectedHexStyle(hexagon);
updateNames();

//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

textDiv.innerHTML = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
textDiv.innerHTML = loadEntry.desc;
}


saveData();

}


function updateHexGrid(){

const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id);

updateHexColors(hex, saveEntry);

})

updateNames();

}




function selectedHexStyle(hex){

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

// const row = parseInt(hex.getAttribute('row'))
// const col = parseInt(hex.getAttribute('col'))

// if(row === 0 || col === 0){
//     hex.querySelector('.left').style.borderRightColor = "transparent";
//     hex.querySelector('.middle').style.backgroundColor = "transparent";
//     hex.querySelector('.right').style.borderLeftColor = "transparent";

// }else 

if(saveEntry){
hex.querySelector('.left').style.borderRightColor = saveEntry.color;
hex.querySelector('.middle').style.backgroundColor = saveEntry.color;
hex.querySelector('.right').style.borderLeftColor = saveEntry.color;
}else{
hex.querySelector('.left').style.borderRightColor =  defaultColour;
hex.querySelector('.middle').style.backgroundColor =  defaultColour;
hex.querySelector('.right').style.borderLeftColor =  defaultColour;
}

}
