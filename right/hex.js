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
        
            hexRow.appendChild(hexagon);
        }
        gridContainer.appendChild(hexRow);
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

if(currentMode !== "map"){     
saveEntry(getCurrentDiv())
};

selectedCellStyle(hexagon);

//Set new id.
let row = hexagon.getAttribute('row');
let col = hexagon.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

textDiv.innerHTML = ''
placeName.value = ''
placeSymbol.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
placeSymbol.value = loadEntry.symbol && loadEntry.symbol !== ""? loadEntry.symbol : loadEntry.name.charAt(0);
textDiv.innerHTML = loadEntry.desc;
}

if(currentMode === "edit"){     
textDiv.focus();
placeCaretAtEnd(textDiv)
};


saveData();

}


function updateHexGrid(){
const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const div = document.querySelector(`[row="${row}"][col="${col}"]`);
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id);

// let coordsLength = coords.split('.').length;

// const parent = saveEntry.id;
// const parentPeriodCount = (parent.match(/\./g) || []).length;
// const children = data.filter(entry => {
//     const childPeriodCount = (entry.id.match(/\./g) || []).length;
//     return entry.id.startsWith(parent) && childPeriodCount === parentPeriodCount + 2;
// });

// if(coordsLength < 4 && children.length > 0){
// updateCellBackground(div);
// }else{
updateCellColors(hex, saveEntry);
// }


addLabelEvents(hex, saveEntry);



})


}

function updateCellBackground(div){

 // Create a canvas element
 const canvas = document.createElement('canvas');
 const context = canvas.getContext('2d');

 // Set the dimensions of the canvas to match the dimensions of a hexagon
 const hexWidth = 100; // Replace with the actual width of a hexagon
 const hexHeight = 86.6; // Replace with the actual height of a hexagon
 canvas.width = hexWidth;
 canvas.height = hexHeight;

 // Calculate the size of each hexagon
 const hexSize = Math.sqrt((hexWidth * hexHeight) / children.length);

 // Draw each pixel on the canvas in a honeycomb shape
 children.forEach((child, index) => {
     const col = index % Math.ceil(hexWidth / hexSize);
     const row = Math.floor(index / Math.ceil(hexWidth / hexSize));
     const x = col * hexSize * 3/4;
     const y = row * hexSize + (col % 2) * (hexSize / 2);
     context.fillStyle = child.color || '#FFFFFF'; // Default to white if no color is provided
     drawHexagon(context, x, y, hexSize);
 });

    // Convert the canvas to a data URL
    const imgData = canvas.toDataURL('image/png');
    console.log('Image Data URL:', imgData);

    // Set the background image for the hexagon
    div.style.backgroundImage = `url(${imgData})`;
}

function drawHexagon(context, x, y, size) {
    const angle = Math.PI / 3;
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        context.lineTo(x + size * Math.cos(angle * i), y + size * Math.sin(angle * i));
    }
    context.closePath();
    context.fill();
}








