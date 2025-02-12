let selectedColorElement = null;
let isShiftHeld = false;
let isDelHeld = false;
let isPPressed = false;

let elementsToCheck = [
  textDiv,
  placeName,
  placeSymbol,
  commandLine,
  journalLeft,
  journalRight,
  entryName,
  scaleSelector
];

function removeHotKeys(){
document.removeEventListener('keydown', keyDownHotKeys);
document.removeEventListener('keyup', keyUpHotKeys);
}

function addHotkeys() {
document.addEventListener('keydown', keyDownHotKeys);
document.addEventListener('keyup', keyUpHotKeys);
}

function keyUpHotKeys(event){
if (event.key.toLowerCase() === 'p') {
isPPressed = false;
handlePaint();
}
}

function keyDownHotKeys(event) {
const key = event.key.toLowerCase(); // Convert the pressed key to lowercase
const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
const placeName = document.getElementById('placeName');
const placeSymbol = document.getElementById('placeSymbol');
const scaleSelector = document.getElementById('scaleSelector');
const commandLine = document.getElementById('commandLine');

let currentCell = getCurrentDiv();

const isActiveElementOutside = elementsToCheck.every(element => 
  !element.contains(document.activeElement)
);

if(isActiveElementOutside){

if (key === 'shift') {
isShiftHeld = true;

if(isPainting){
toggleAutoPaint(true);
}

}

// Handle Ctrl key
if (isCmdOrCtrl && !journalShowing) {
switch (key) {
case 'c':
copyTile();
break;
case 'v':
pasteTile();
break;
}


}

if(isShiftHeld === true){

switch (key) {

case '>':
handleEnter();
break;
case '<':
handleExit();
break;
case 'enter':
if(isHexMap){return};
clipZone(currentCell);
break;
case 'shift':
if(!isPainting){

}
break;
case 'g':
setGridSize();
break;
case 'n':
    showPrompt('Make New Project: Are you sure you want to erase all data?').then(shouldDelete => {
        if (shouldDelete) {
            handleNew();
        }
        });

break;
}

if(isHexMap === true){

// switch (key) {
// //For HexNav
// case 'w':
// moveHex('up');
// break;
// case 'q':
// moveHex('up-left');
// break;
// case 'e':
// moveHex('up-right');
// break;
// case 's':
// moveHex('down');
// break;
// case 'a':
// moveHex('down-left');
// break;
// case 'd':
// moveHex('down-right');
// break;
// }

        
}else if (!isPainting && isHexMap === false){

let newCell

switch (key) {
//For HexNav
case 'w':
addCellToZone(currentCell,'up')
break;
case 's':
addCellToZone(currentCell,'down')
break;
case 'a':
addCellToZone(currentCell,'left')
break;
case 'd':
addCellToZone(currentCell,'right')
break;
}


}

}else{

if (isImaging){

    switch (key) {
        //For Moving Image
        case 'w':
        moveImage('up');
        break;
        case 's':
        moveImage('down');
        break;
        case 'a':
        moveImage('left');
        break;
        case 'd':
        moveImage('right');
        break;
        case 'q':
        sizeImage('decrease');
        break;
        case 'e':
        sizeImage('increase');
        break;
        case 'enter':
        confirmPaintHexMap();
        break;
    }

}else if(isHexMap === true && journalShowing === false){

switch (key) {
//For HexNav
case 'w':
moveHex('up');
break;
case 'q':
moveHex('up-left');
break;
case 'e':
moveHex('up-right');
break;
case 's':
moveHex('down');
break;
case 'a':
moveHex('down-left');
break;
case 'd':
moveHex('down-right');
break;
}

}else if(journalShowing === false){

switch (key ) {

//For SquareNav
case 'w':
moveFocus('up');
//stopMakingRoom();
break;
case 's':
moveFocus('down');
//stopMakingRoom();
break;
case 'a':
moveFocus('left');
//stopMakingRoom();
break;
case 'd':
moveFocus('right');
//stopMakingRoom();
break;
case 'k':
labelZones();
showZoneNames();
break;
}

}

if(isPainting === true || isFilling === true){

switch (key) {
// For Painting
case '1':
selectedColorElement = document.getElementById('color1');
setCurrentColor(selectedColorElement);
paintCurrentCell();

break;
case '2':
selectedColorElement = document.getElementById('color2');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '3':
selectedColorElement = document.getElementById('color3');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '4':
selectedColorElement = document.getElementById('color4');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '5':
selectedColorElement = document.getElementById('color5');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '6':
selectedColorElement = document.getElementById('color6');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '7':
selectedColorElement = document.getElementById('color7');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '8':
selectedColorElement = document.getElementById('color8');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '9':
selectedColorElement = document.getElementById('color9');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
case '0':
selectedColorElement = document.getElementById('eraser');
setCurrentColor(selectedColorElement);
paintCurrentCell();
break;
}


}

switch (key) {
// For Toolbar
case 'Escape':
event.preventDefault();
currentMode = 'map';
toggleModes(event.target);
break;
case '`':
event.preventDefault(); // Prevent default action
currentMode = 'command';
toggleModes();
break;
case 'tab':
event.preventDefault(); // Prevent default action
currentMode = 'edit';
toggleModes();
if(!journalShowing){textDiv.focus()};
break;
case 'n':
event.preventDefault(); // Prevent default action
currentMode = 'edit';
toggleModes();
if(!journalShowing){
placeName.focus();
placeName.select();}
break;
case 'y':
event.preventDefault(); // Prevent default action
currentMode = 'edit';
toggleModes();
if(!journalShowing){
placeSymbol.focus();
placeSymbol.select();}
break;
case 'p':
if(!isPPressed) {
isPPressed = true;
handlePaint();
if(isPainting){
paintCell(currentCell);
}}
break;
case 'f':
handleFill();
break;
case 'enter':
if(isFilling){
fillCells(currentCell)
}
break;
case '-':
changeZoom('out');
break;
case '=':
changeZoom('in');
break;
case 'l':
handleLoad();
break;
case 'x':
handleExport();
break;
case 'g':
handleGrid();
break;
case 'i':
getImage();
break;
case 'm':
handleMove();
break;
case 'c':
  if(!isCmdOrCtrl){
    showPrompt('Clear Current Map: Are you sure you want to erase all visible data?').then(shouldDelete => {
        if (shouldDelete) {
            clearMap();
        }
        });
      };
break;
case 'delete':

if(!journalShowing){

  if(currentCell.classList.contains('inZone')){
    removeCellFromZone(currentCell)
  }else{

  showPrompt('Delete this tile and contents?').then(shouldDelete => {
    if (shouldDelete) {
        deleteTile()
    }
    });

}};

break;
case 'home':
triggerJournal();
break;
}
}


// Add event listener for keyup
document.addEventListener('keyup', (event) => {
const key = event.key.toLowerCase();

// Check for the Shift key
if (key === 'shift') {
isShiftHeld = false;

//toggleHexLabelsVisibility(false);
if(isPainting){
toggleAutoPaint(false);
}
}
});

function toggleAutoPaint(isVisible) {
const hexLabels = document.querySelectorAll('.hexLabel');
hexLabels.forEach(label => {
let hasName = label.textContent;
label.style.display = isVisible && hasName ? 'block' : 'none'; // Change to 'inline-block' if needed
});
}

}else if(currentMode === 'command'){

switch (event.key) {
case 'Escape':
event.preventDefault();
currentMode = 'map';
commandLine.style.height = '30px'
toggleModes();
break;
case 'Enter':
event.preventDefault(); 
currentMode = 'map';
commandLine.style.height = '30px'
toggleModes();
break;
case '`':
event.preventDefault(); 
expandConsole();
break; 
}

}else if (currentMode === 'edit'){

switch (event.key) {
case 'Escape':
event.preventDefault();
currentMode = 'map';
toggleModes();
break;
case 'tab':
event.preventDefault(); 
currentMode = 'map';
toggleModes();
if(!journalShowing){
textDiv.focus();
}
break;
case '`':
event.preventDefault(); 
currentMode = 'command';
toggleModes(event.target);
break; 
}



}
};




addHotkeys();
