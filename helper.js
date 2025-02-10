function captureGridSize(){

regionObj.cols = currentCols
regionObj.rows = currentRows

}

function emptyStoryteller(){

placeName.value = "";
placeSymbol.value = "";
textDiv.innerHTML = "";

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

function goToEntry(id) {

textDiv.innerHTML = ''
placeName.value = ''
placeSymbol.value = ''

let entry = getObj(id)

if(entry){
placeName.value = entry.name;
placeSymbol.value = entry.symbol? entry.symbol : entry.name.length !== ""? entry.name.charAt(0): "";
textDiv.innerHTML = entry.desc.trim();
idBox.textContent = entry.id;
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

        removeHotKeys();

        function promptKeyHandler(event) {
            if (event.key.toLowerCase() === 'y') {
                cleanup(true);
            } else if (event.key.toLowerCase() === 'n') {
                cleanup(false);
            }
        }

        document.addEventListener('keydown', promptKeyHandler);

        function cleanup(result) {
            promptBox.style.display = 'none';
            addHotkeys();
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
