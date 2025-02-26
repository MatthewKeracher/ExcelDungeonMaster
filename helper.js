function captureGridSize(){

regionObj.cols = currentCols
regionObj.rows = currentRows

}

function emptyStoryteller(){

placeName.value = "";
placeSymbol.value = "";
textDiv.innerHTML = "";

}

function collectGarbage() {
    const totalTrash = data.length;
    //data = data.filter(entry => entry.rows !== null || entry.cols !== null);
    //console.log(data[0]);
    //console.log('Deleted ' + (totalTrash - data.length) + ' entries');

    // let i = 0

    // data.forEach(entry => {
    //     if (entry.palette === defaultData.palette) {
            
    //         delete entry.palette;
    //         i++
    //     }
    // });

    // console.log('Deleted ' + i+ ' palettes.')

    const coordCount = {};
    data.forEach(entry => {
        if (coordCount[entry.coords]) {
            coordCount[entry.coords]++;
        } else {
            coordCount[entry.coords] = 1;
        }
    });

    const duplicateCount = Object.values(coordCount).filter(count => count > 1).length;
    //console.log('Number of entries with duplicate coords: ' + duplicateCount);
}

function scrollConvert(input, option, X) {

//Give pixels to grid, and give percentages to scrollData.
//console.log(input, option, X)
const totalPixels = X === 'X'? grid.scrollWidth :  grid.scrollHeight;
    
    if(option === 'pixels') {
        return (input / 100) * totalPixels;
    } else if(option === 'percentage') {
        return (input / totalPixels) * 100;
    } else {
        throw new Error('Invalid option provided to scrollConvert');
    }

}

function getObj(coords){

let obj = data.find(entry => entry.id === coords)

if(obj === undefined){
makeNewEntry();
obj = data.find(entry => entry.id === coords);
}

currentObj = obj;
return obj

}

function getDiv(row, col){
const div = document.querySelector(`[row="${row}"][col="${col}"]`);
return div;
    
}

function getCurrentDiv(){

let id = idBox.textContent;
let row = returnRow(id);
let col = returnCol(id);

const div = document.querySelector(`[row="${row}"][col="${col}"]`);


return div;

}

function getCurrentEntry(){

    let id = idBox.textContent;

    const entry = data.find(entry => entry.id === id)
    
    return entry;
    
    }

function goToEntry(id) {

emptyStoryteller()

let entry = getObj(id)
console.log(entry)

if(entry){
placeName.value = entry.name;
placeSymbol.value = entry.symbol? entry.symbol : entry.name.length !== ""? entry.name.charAt(0): "";
textDiv.innerHTML = entry.desc.trim();
idBox.textContent = entry.id;
}else{
idBox.textContent = id;
}

if(id !== '0.0'){
let div = getCurrentDiv();
changeCell(div)
}

}

function parseParent(str){

// Split the string into an array of numbers
const numbersArray = str.split('.');

if(numbersArray.length === 2){return str}

// Remove the last two elements
const trimmedArray = numbersArray.slice(0, -2);

// Join the remaining numbers back into a string
const resultString = trimmedArray.join('.');

return resultString


}

function returnRow(id){

const numbersArray = id.split('.');
const rowColArray = numbersArray.slice(-2); // Get the last two elements

const row = rowColArray[0]; // First part is the row

return row

}

function returnCol(id){

const numbersArray = id.split('.');
const rowColArray = numbersArray.slice(-2); // Get the last two elements

const col = rowColArray[1]; // Second part is the column

return col

}

function returnChords(id){

const numbersArray = id.split('.');
const coordsArray = numbersArray.slice(0, -2);

const coords = coordsArray.join('.')
return coords

}

function showPrompt(message) {
    return new Promise((resolve) => {
        const promptBox = document.getElementById('promptBox');
        const promptMsg = document.getElementById('promptMsg');

        promptBox.style.display = 'block';
        promptMsg.textContent = message;
        promptBox.focus();     

        Mousetrap.bind('y', () => cleanup(true));
        Mousetrap.bind('n', () => cleanup(false));

        function cleanup(result) {
            promptBox.style.display = 'none';
            Mousetrap.unbind('y');
            Mousetrap.unbind('n');
            resolve(result);
        }
    });
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

function autoSpacing(div){

    let text = div.innerHTML;

    text = text.replace(/\.\s/g, '.<br><br>');
    
    // Replace periods at the end of the text with a period and two line breaks
    text = text.replace(/\.$/g, '.<br><br>');
    
    // Update the innerHTML of the textDiv
    div.innerHTML = text;


}

function addCollapsibleEventListeners() {
    const headers = document.querySelectorAll('.collapsable .header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            if(currentMode !== 'map') return;
            const contentRows = header.parentElement.querySelectorAll('.content');
            contentRows.forEach(row => {
                row.style.display = row.style.display === 'none' ? '' : 'none';
            });
        });
    });
}

function getColumnCells(table, columnName) {
    const rows = table.rows;
    const cells = [];
    let columnIndex = -1;

    // Find the index of the specified column
    const headerRow = rows[0];
    for (let i = 0; i < headerRow.cells.length; i++) {
        if (headerRow.cells[i].textContent.trim() === columnName) {
            columnIndex = i;
            break;
        }
    }

    // If the column is found, collect its cells
    if (columnIndex !== -1) {
        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].cells[columnIndex];
            if (cell) {
                cells.push(cell);
            }
        }
    }

    return cells;
}
