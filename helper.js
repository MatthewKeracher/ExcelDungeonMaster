function captureGridSize(){

if (isHexMap) {
regionObj.cols = hexCols
regionObj.rows = hexRows
} else {
regionObj.cols = squareCols
regionObj.rows = squareRows
}
}

function emptyStoryteller(){

placeName.value = "";
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

let entry = getObj(id)

if(entry){
placeName.value = entry.name;
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
console.log(numbersArray)
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