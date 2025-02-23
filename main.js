//Global Variables
let defaultRows = 30;
let defaultCols = 42;



let defaultData = [{
  id: "0.0",
  symbol: "🌎",
  name: "Your World",
  desc: "Welcome to <i> your </i> world. Hit Tab to edit what it says here. Use QWE ASD to move around the Hexmap. For a full list of hotkeys use the command [`] 'help'.",
  rows: defaultRows,
  scrollData: {X: 50, Y:50, Z:1},
  cols: defaultCols, 
  palette: [
    { id: "color1", color: "rgb(57, 128, 60)" },
    { id: "color2", color: "rgb(33, 113, 129)" },
    { id: "color3", color: "rgb(16, 77, 23)" },
    { id: "color4", color: "rgb(101, 69, 39)" },
    { id: "color5", color: "rgb(124, 72, 144)" },
    { id: "color6", color: "rgb(117, 122, 41)" },
    { id: "color7", color: "rgb(12, 95, 83)" },
    { id: "color8", color: "rgb(88, 83, 86)" },
    { id: "color9", color: "rgb(185, 192, 162)" },
  ]
  }];

let data = defaultData;

let coords = "0.0";
let region = 'Excel_DM'
let regionObj = data[0];
let scrollData = {X: 0, Y:0, Z:1}


let zones = [];

let currentObj = [];
let currentZone = [];

let currentRows = defaultRows;
let currentCols = defaultCols;

const div = document.getElementById('gridContainer');


let isHexMap = true; //load grid map by default
let currentMode = "map";
let modeColor = "whitesmoke";
let isPainting = false;
let isFilling = false;
let isImaging = false;

let isMoving = false;
let parentToMove = null;
let childrenToMove = null;
let zonesToMove = null;
let journalToMove = null;

let defaultColour = "rgb(6, 5, 5)"; //for Empty Grid Cells
let eraser = document.getElementById('eraser')
eraser.style.backgroundColor = defaultColour;

const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol')
const textDiv = document.getElementById('textDiv'); 
const idBox = document.getElementById('idBox');
const modeBox = document.getElementById('modeBox');

//journal Divs
let journalData = [];
let journalShowing = false;
const grid = document.getElementById('gridImageContainer');
const entryName = document.getElementById('journal-entry-name');
const journalDiv = document.getElementById('journal');
const journalSideBar = document.getElementById('journal-sidebar');
const journalLeft = document.getElementById('journal-left');
const journalRight = document.getElementById('journal-right');
const journalId = document.getElementById('journal-id');
const scaleSelector = document.getElementById('scaleSelector');

const promptBox = document.getElementById('promptBox');
const promptMsg = document.getElementById('promptMsg');

//Default
placeName.value = "Excel_DM"
placeSymbol.value = "⚅"
textDiv.innerHTML = ``;
modeBox.innerHTML = `<b>Map Mode</b>`
journalDiv.style.display = 'none';

const welcomeMessage = `Press ">" to Enter Your World.`;


//Opening Sequence
for (let i = 0; i < welcomeMessage.length; i++) {
    setTimeout(() => {
      textDiv.innerHTML += welcomeMessage.charAt(i);
    }, i * 25); 
  }


  
idBox.textContent = data[0].id;

function loadGrid(){

if(regionObj?.grid === 'square'){
isHexMap = false
}else if(regionObj?.grid === 'hex'){
isHexMap = true
}

// currentRows = regionObj.rows? regionObj.rows : currentRows;
// currentCols = regionObj.cols? regionObj.cols : currentCols;

if (!isHexMap) {
createGrid(60, 60);
loadZones();
} else {
createHexagons(currentRows, currentCols, gridContainer);
}
updateGrid()
loadPalette()

setTimeout(() => {
//console.log('loadGrid():')

try {
  grid.scrollLeft = scrollConvert(scrollData.X, "pixels", "X");
} catch (e) {
  grid.scrollLeft = 50;
}

try {
  grid.scrollTop =  scrollConvert(scrollData.Y, "pixels", "Y")
} catch (e) {
  grid.scrollTop
}

try {
  gridContainer.style.zoom = scrollData.Z;
} catch (e) {
  gridContainer.style.zoom = 1;
}


}, 10);


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
document.addEventListener('mousemove', hideInactivityImage);
document.addEventListener('keydown', hideInactivityImage);

// Start the initial inactivity timer when the page loads
//resetInactivityTimer();




