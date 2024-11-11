//Global Variables
let data = [{
    id: "0.0",
    name: "Your World",
    desc: "Welcome to <i> your </i> world. Hit Tab to edit what it says here. Use QWE ASD to move around the Hexmap.",
    rows: 20,
    cols: 45,
    }];
    
let coords = '0.0';
let region = 'Excel_DM'
let regionObj = data[0];

let currentObj = [];
let currentZone = [];

let hexRows = 25;
let hexCols = 25;
let squareRows = 25; //Not working.
let squareCols = 25;


let isHexMap = true; //load grid map by default
let currentMode = "map";
let modeColor = "whitesmoke";
let isPainting = false;
let isFilling = false;

let lastCell = '';
let lastHex = '';

let defaultColour = "rgb(27, 26, 26, 0.5)"; //for Empty Grid Cells
let eraser = document.getElementById('eraser')
eraser.style.backgroundColor = defaultColour;

const placeName = document.getElementById('placeName')
const textDiv = document.getElementById('textDiv'); 
const idBox = document.getElementById('idBox');
const modeBox = document.getElementById('modeBox');

const promptBox = document.getElementById('promptBox');
const promptMsg = document.getElementById('promptMsg');

//Default
placeName.value = "Excel_DM"
textDiv.innerHTML = ``;
modeBox.innerHTML = `<b>Map Mode</b>`

const welcomeMessage = `Press ">" to Enter Your World.`;

//Opening Sequence
for (let i = 0; i < welcomeMessage.length; i++) {
    setTimeout(() => {
      textDiv.innerHTML += welcomeMessage.charAt(i);
    }, i * 25); 
  }
  

idBox.textContent = '0.0'


function loadGrid(){

if(regionObj?.grid === 'square'){
isHexMap = false
}else if(regionObj?.grid === 'hex'){
isHexMap = true
}

if (!isHexMap) {

squareRows = regionObj.rows? regionObj.rows : squareRows;
squareCols = regionObj.cols? regionObj.cols : squareCols;

createGrid(squareRows, squareCols);

} else {

hexRows = regionObj.rows? regionObj.rows : hexRows;
hexCols = regionObj.cols? regionObj.cols : hexCols;

createHexagons(hexRows, hexCols);

}

updateGrid()
loadPalette()

}


// let inactivityTimer;

// // Function to show the inactivity image
// function showInactivityImage() {
// const container = document.getElementById('logoContainer');
// container.style.display = 'block';
// }

// // Function to hide the inactivity image
// function hideInactivityImage() {
// const inactivityImage = document.getElementById('logoContainer');
// inactivityImage.style.display = 'none';
// }

// // Reset the inactivity timer
// function resetInactivityTimer() {
// // Clear any existing timer
// clearTimeout(inactivityTimer);

// // Hide the inactivity image if it's currently displayed
// hideInactivityImage();

// // Start a new timer for 10 seconds (10000 milliseconds)
// inactivityTimer = setTimeout(() => {
// showInactivityImage();
// }, 30000); // 10 seconds of inactivity
// }

// // Listen for user activity (mouse movement, key presses, etc.)
// document.addEventListener('mousemove', resetInactivityTimer);
// document.addEventListener('keydown', resetInactivityTimer);

// // Start the initial inactivity timer when the page loads
// resetInactivityTimer();




