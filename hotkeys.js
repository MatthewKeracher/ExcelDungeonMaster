let inputBuffer = '';

Mousetrap.bind('>', function() {

if(!explorerShowing){

const logo = document.getElementById("startLogo");
logo.style.display = "none";

captureGridSize();

//Set selected cell as regionObj
regionObj = getObj(idBox.textContent);

regionObj.scrollData = {
X: scrollConvert(grid.scrollLeft, "percentage", "X"), 
Y: scrollConvert(grid.scrollTop, "percentage", "Y"), 
Z: gridContainer.style.zoom}




const regionName = document.getElementById('regionName');
regionName.textContent = regionObj?.name? regionObj.name : "Excel_DM";
coords = regionObj.id;

changeMapScale();

loadGrid();
goToEntry(regionObj.id);

}

});

Mousetrap.bind('<', function() {

if(!explorerShowing){

//Move scrollbar to be over regionObj
scrollData = regionObj.scrollData

//Remove 2 digits from coords and go there.
coords = parseParent(regionObj.id);

if(regionObj.id === '0.0'){makeNewOuterLevel()}

//Get Obj for parent cell.
let returnObj = regionObj
regionObj = getObj(coords);


//Set parent cell name as region name. 
const regionName = document.getElementById('regionName');
regionName.textContent = regionObj && regionObj.name !== ''? regionObj.name : "Excel_DM"

changeMapScale();

loadGrid();
goToEntry(returnObj.id);
showInactivityImage()

}

});

Mousetrap.bind(['shift+w', 'shift+i'], function() { 
if (!isPainting && !isHexMap) addCellToZone('up');
});   
Mousetrap.bind(['shift+a', 'shift+j'], function() { 
if (!isPainting && !isHexMap) addCellToZone('left');
});  
Mousetrap.bind(['shift+s', 'shift+k'], function() { 
if (!isPainting && !isHexMap) addCellToZone('down');
});   
Mousetrap.bind(['shift+d', 'shift+l'], function() { 
if (!isPainting && !isHexMap) addCellToZone('right');
});  
Mousetrap.bind('shift', function() { 
if(!isHexMap && currentMode === 'map'){
clipZone(); 
}}, 'keyup'); 

Mousetrap.bind(['w', 'i'], function() { 
if (isImaging) {moveImage('up')}
else if (isHexMap && !explorerShowing) moveHex('up');
else if (!isHexMap && !explorerShowing) moveFocus('up');
});   
Mousetrap.bind(['a', 'j'], function() { 
if (isImaging) {moveImage('left')}
else if (isHexMap && !explorerShowing) moveHex('down-left');
else if (!isHexMap && !explorerShowing) moveFocus('left');
});  
Mousetrap.bind(['s', 'k'], function() { 
if (isImaging) {moveImage('down')}
else if (isHexMap && !explorerShowing) moveHex('down');
else if (!isHexMap && !explorerShowing) moveFocus('down');
});   
Mousetrap.bind(['d', 'l'], function() { 
if (isImaging) {moveImage('right')}
else if (isHexMap && !explorerShowing) moveHex('down-right');
else if (!isHexMap && !explorerShowing) moveFocus('right');
});   
Mousetrap.bind(['q', 'u'], function() { 
if (isImaging) {sizeImage('decrease')}    
else if (isHexMap && !explorerShowing) moveHex('up-left');  
});   
Mousetrap.bind(['e', 'o'], function() {  
if (isImaging) {sizeImage('increase')}    
else if (isHexMap && !explorerShowing) moveHex('up-right');
});     
Mousetrap.bind('p', function() {  
handlePaint();
});  
Mousetrap.bind('f', function() {  
handleFill();
});

Mousetrap.bind('space', function(e) {  
//Move Time Forward
e.preventDefault(); 
rollWeather(17);
getRandomEncounters(textDiv);
textDiv.innerHTML = filterDiv(textDiv, "randomEncounter");
textDiv.innerHTML += getNextEncounter();
});


Mousetrap.bindGlobal('`', function(e) {  

switch (currentMode){

case 'map':
e.preventDefault(); 
currentMode = 'command';
toggleModes(explorerShowing? e.target: '');  
break;

case 'edit':

e.preventDefault(); 
currentMode = 'command';
toggleModes(explorerShowing? e.target: '');  

break;

case 'command':
e.preventDefault(); 
expandConsole(explorerShowing? e.target: '');

}
});

Mousetrap.bindGlobal('escape', function(e) { 

switch (currentMode){

case 'map':
triggerJournal();

break;

case 'edit':

e.preventDefault();
currentMode = 'map';
toggleModes();

break;

case 'command':
e.preventDefault();
currentMode = 'map';
commandLine.style.height = '30px'
toggleModes();
break;

}

});

Mousetrap.bindGlobal('enter', function(e) {  

switch (currentMode){

case 'map':

if(isFilling){
let currentCell = getCurrentDiv();
fillCells(currentCell)
}else{
let trackNumber = parseInt(inputBuffer);
if (!isNaN(trackNumber)) {
// Play the track corresponding to the input number
const trackObj = sounds.find(entry => parseInt(entry.id) === parseInt(trackNumber));
if (trackObj) {
playTrack(trackObj);
}
}

inputBuffer = '';

}

break;

case 'edit':

break;

case 'command':
e.preventDefault();
currentMode = 'map';
commandLine.style.height = '30px'
toggleModes();
break;





}

});

Mousetrap.bindGlobal('tab', function(e) { 

switch (currentMode){

case 'map':
e.preventDefault(); 
currentMode = 'edit';
toggleModes(); 
textDiv.focus();


break;

case 'edit':

break;

case 'command':

break;

};

});

Mousetrap.bind('n', function(e) { 
e.preventDefault();  
currentMode = 'edit';
toggleModes();
if(!explorerShowing){
placeName.focus();
placeName.select();}
});
Mousetrap.bind('y', function(e) { 
e.preventDefault();  
currentMode = 'edit';
toggleModes();
if(!explorerShowing){
placeSymbol.focus();
placeSymbol.select();}
});

Mousetrap.bind(['ctrl+c', 'command+c'], function() {  
copyTile();
});
Mousetrap.bind(['ctrl+v', 'command+v'], function() {  
pasteTile();
});

Mousetrap.bind(['-', '-'], function() {  
changeZoom('out');
});
Mousetrap.bind(['=', '+'], function() {  
changeZoom('in');
});

Mousetrap.bind('del', function() { 
let currentCell = getCurrentDiv()
if(!explorerShowing){
if(currentCell.classList.contains('inZone')){
removeCellFromZone(currentCell)
}else{
showPrompt('Delete this tile and contents?').then(shouldDelete => {
if (shouldDelete) {}
deleteTile();
})
}};
});

for (let i = 0; i <= 9; i++) {
Mousetrap.bind(`${i}`, function() {
if (!isPainting){
inputBuffer += i.toString();
}else{
selectedColorElement = document.getElementById(`color${i}`);
setCurrentColor(selectedColorElement);
paintCurrentCell();    
}
});
}

Mousetrap.bind('shift', function() {
const trackNumber = parseInt(inputBuffer);
if (!isNaN(trackNumber)) {
// Edit the track corresponding to the input number
editTrack(inputBuffer, trackObj);

}
// Clear the input buffer
inputBuffer = '';
});


Mousetrap.bind('0', function() {  
if(!isPainting){

if (EmbedControllerInstance && currentTrack) {
EmbedControllerInstance.togglePlay()
}

}else{
selectedColorElement = document.getElementById('eraser');
setCurrentColor(selectedColorElement);
paintCurrentCell();
}
});

Mousetrap.bind('r', function() {  
if(!isPainting){

getRandomEncounters(textDiv, 1);

}
});


Mousetrap.bind('.', function() {
if (!isPainting) {
const checks = document.querySelectorAll('.timeBox');

// Find the first unchecked checkbox and click it
for (let check of checks) {
if (check.textContent === '☐') {
check.textContent = '☒'
check.style.color = "gray"
break; // Stop once the first unchecked is clicked
}
}

// const turnNumberElement = document.getElementById("turnNumber");
// const filledBoxes = Array.from(document.querySelectorAll('.timeBox')).filter(check => check.textContent === '☒').length;
// turnNumberElement.textContent = `Turn Number: ${filledBoxes}`;

// if (filledBoxes % 2 !== 0) {
// getRandomEncounters(explorerRight);
// }

saveJournalKnot()

}
});

Mousetrap.bind(',', function() {
if (!isPainting) {
const checks = Array.from(document.querySelectorAll('.timeBox')).reverse();

// Iterate through checkboxes in reverse order
for (let check of checks) {
if (check.textContent === '☒') {
check.textContent = '☐';
check.style.color = ''
break; // Stop once the last checked is unchecked
}
}

// const turnNumberElement = document.getElementById("turnNumber");
// const filledBoxes = Array.from(document.querySelectorAll('.timeBox')).filter(check => check.textContent === '☒').length;
// turnNumberElement.textContent = `Turn Number: ${filledBoxes}`;

saveJournalKnot()

}
});

