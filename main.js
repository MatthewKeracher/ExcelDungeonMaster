//Global Variables
let defaultRows = 30;
let defaultCols = 42;

let EXCEL_DM = createEXCEL_DM();

let items = EXCEL_DM.journal.Items;
let monsters = EXCEL_DM.system.monsters;
let spells = EXCEL_DM.system.spells;
let system = EXCEL_DM.system;

let coords = EXCEL_DM.map.data[0].id;
let region = EXCEL_DM.map.data[0].name;
let regionObj = EXCEL_DM.map.data[0];
let season = "Spring"
let turnNumber = 0;
let weather = null;
let nextEncounter = `<div class="noSave randomEncounter"><i>Press space bar at the start of each turn to roll for random encounters, etc. Random encounter settings can be changed in the Journal (Esc) entry for the region you are currently in.</i><br><br><hr><br></div>`;
let scrollData = {X: 0, Y:0, Z:1}

let zones = [];

let currentObj = [];
let currentZone = [];

let currentRows = defaultRows;
let currentCols = defaultCols;

const div = document.getElementById('gridContainer');

let isHexMap = true; //load grid map by default
let currentMode = "map";
let isPainting = false;
let isFilling = false;
let isImaging = false;

let isMoving = false;
let parentToMove = null;
let childrenToMove = null;
let zonesToMove = null;
let explorerToMove = null;

let defaultColour = "rgb(6, 5, 5)"; //for Empty Grid Cells
let eraser = document.getElementById('eraser')
eraser.style.backgroundColor = defaultColour;

const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol')
const textDiv = document.getElementById('textDiv'); 
const idBox = document.getElementById('idBox');
const weatherVein = document.getElementById('weatherVein');
const mapScale = document.getElementById('mapScale');


//explorer Divs
let explorerData = [];
let explorerShowing = false;
const grid = document.getElementById('gridImageContainer');
const entryName = document.getElementById('explorer-entry-name');
const explorerDiv = document.getElementById('explorer');
const explorerSideBar = document.getElementById('explorer-sidebar');
const explorerLeft = document.getElementById('explorer-left');
const explorerRight = document.getElementById('explorer-right');
const explorerId = document.getElementById('explorer-id');
const scaleSelector = document.getElementById('scaleSelector');

const promptBox = document.getElementById('promptBox');
const promptMsg = document.getElementById('promptMsg');

// //Default
// placeName.value = "Excel_DM"
// placeSymbol.value = "⚅"
// textDiv.innerHTML = ``;

explorerDiv.style.display = 'none';

function changeDJ(string){
  nowPlaying.innerHTML = "";
  
  for (let i = 0; i < string.length; i++) {
      setTimeout(() => {
        nowPlaying.innerHTML += string.charAt(i);
      }, i * 25); 
    }
  }

function changeWeather(string){
weatherVein.innerHTML = "";

for (let i = 0; i < string.length; i++) {
    setTimeout(() => {
      weatherVein.innerHTML += string.charAt(i);
    }, i * 25); 
  }
}

function changeScale(string){
  mapScale.innerHTML = "";
  
  for (let i = 0; i < string.length; i++) {
      setTimeout(() => {
        mapScale.innerHTML += string.charAt(i);
      }, i * 25); 
    }
  }
  
//Define initial state before loading.

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



