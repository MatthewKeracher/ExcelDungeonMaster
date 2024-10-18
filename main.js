//Global Variables
let data = [];
let rowsGlobal = 20;
let colsGlobal = 24;
let coords = '0.0';
let region = 'Excel_DM'
let regionObj = [];
let currentObj = [];


let isHexMap = true;
let isEditing = false;
let isPainting = false;

let defaultColor = "black"; //for Empty Grid Cells

const placeName = document.getElementById('placeName')
const textDiv = document.getElementById('textDiv'); 
const writeBox = document.getElementById('writeBox'); 
const idBox = document.getElementById('idBox');

idBox.textContent = '0.0'

function emptyStoryteller(){

placeName.value = "";
textDiv.innerHTML = "";
writeBox.textContent = "";

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

function loadGrid(rows, cols){

if (isHexMap) {
createGrid(rows, cols);
isHexMap = false;
} else {
createHexagons(rows, cols);
isHexMap = true;
}

updateGrid()

}

function returnDiv(id){
//Split the string by '.' to retrieve the parts
const numbersArray = id.split('.');

// Retrieve the last two elements (assuming 'id' includes row and col info)
const trimmedArray = numbersArray.slice(-2); // Get the last two elements

const row = trimmedArray[0]; // First part is the row
const col = trimmedArray[1]; // Second part is the column
console.log(row, col)

// Use querySelector to find the cell based on row and col attributes
const div = document.querySelector(`[row="${row}"][col="${col}"]`);

return div

}

function goToEntry(id) {

//loadData
textDiv.innerHTML = ''
writeBox.value = ''
placeName.value = ''

let loadEntry = getObj(id)
//currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
writeBox.value = loadEntry.desc.trim();
textDiv.innerHTML = handlePrompts();
}

}


function getObj(coords){

const obj = data.find(entry => entry.id === coords)
currentObj = obj;
return obj

}



let currentColor = 'rgb(17, 132, 17)'; // Default color

function setColor(color) {
currentColor = color;
console.log('Selected color:', currentColor);

}

let inactivityTimer;

// Function to show the inactivity image
function showInactivityImage() {
const container = document.getElementById('logoContainer');
container.style.display = 'block';
}

// Function to hide the inactivity image
function hideInactivityImage() {
const inactivityImage = document.getElementById('logoContainer');
inactivityImage.style.display = 'none';
}

// Reset the inactivity timer
function resetInactivityTimer() {
// Clear any existing timer
clearTimeout(inactivityTimer);

// Hide the inactivity image if it's currently displayed
hideInactivityImage();

// Start a new timer for 10 seconds (10000 milliseconds)
inactivityTimer = setTimeout(() => {
showInactivityImage();
}, 30000); // 10 seconds of inactivity
}

// Listen for user activity (mouse movement, key presses, etc.)
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Start the initial inactivity timer when the page loads
resetInactivityTimer();




