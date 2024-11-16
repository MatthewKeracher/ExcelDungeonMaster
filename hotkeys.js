let selectedColorElement = null;
let isShiftHeld = false;
let isPPressed = false;

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
let currentCell = getCurrentDiv();


// Check if inputs are not focused
if (
!textDiv.contains(document.activeElement) &&
!placeName.contains(document.activeElement) &&
!commandLine.contains(document.activeElement)
) {

if (key === 'shift') {
isShiftHeld = true;

if(isPainting){
toggleAutoPaint(true);
}

}

// Handle Ctrl key
if (isCmdOrCtrl) {
switch (key) {

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
clipZone();
break;
case 'shift':
if(!isPainting){
showNames();
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

switch (key) {
//For HexNav
case 'w':
moveCell('up');
addZone(currentCell)
break;
case 's':
moveCell('down');
addZone(currentCell)
break;
case 'a':
moveCell('left');
addZone(currentCell)
break;
case 'd':
moveCell('right');
addZone(currentCell)
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

}else if(isHexMap === true){

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

}else{

switch (key) {
//For SquareNav
case 'w':
moveCell('up');
clearZoneLimits();
break;
case 's':
moveCell('down');
clearZoneLimits();
break;
case 'a':
moveCell('left');
clearZoneLimits();
break;
case 'd':
moveCell('right');
clearZoneLimits();
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
toggleModes();
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
break;
case 'n':
event.preventDefault(); // Prevent default action
currentMode = 'edit';
toggleModes();
placeName.focus();
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



}
}


// Add event listener for keyup
document.addEventListener('keyup', (event) => {
const key = event.key.toLowerCase();

// Check for the Shift key
if (key === 'shift') {
isShiftHeld = false;

updateNames();
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
toggleModes();
break;
case 'Enter':
event.preventDefault(); 
currentMode = 'map';
toggleModes();
break;
case '`':
event.preventDefault(); 
currentMode = 'command';
toggleModes();
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
break;
case '`':
event.preventDefault(); 
currentMode = 'command';
toggleModes();
break; 
}



}
};


addHotkeys();
