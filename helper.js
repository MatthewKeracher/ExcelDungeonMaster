function captureGridSize(){

if (isHexMap) {
regionObj.cols = hexRows
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


function getCurrentDiv(){

let str = idBox.textContent;
let numbersArray = str.split('.');
let rowcol = numbersArray.slice(-2);
let row = parseInt(rowcol[0]);
let col = parseInt(rowcol[1]);

const div = document.querySelector(`[row="${row}"][col="${col}"]`);
return div;

}

function goToEntry(id) {

//loadData
textDiv.innerHTML = ''
placeName.value = ''

let loadEntry = getObj(id)
//currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
textDiv.innerHTML = loadEntry.desc.trim();
}

}

function parse(str){

// Split the string into an array of numbers
const numbersArray = str.split('.');

// Remove the last two elements
const trimmedArray = numbersArray.slice(0, -2);

// Join the remaining numbers back into a string
const resultString = trimmedArray.join('.');

if(resultString !== ''){
coords = resultString
}

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