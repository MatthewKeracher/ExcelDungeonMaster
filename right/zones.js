
let zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};
let inZone = false

function addZone(currentCell) {
    let cell = zoneLimits.startX === Infinity ? currentCell : getCurrentDiv();
    let row = parseInt(cell.getAttribute('row')); // y
    let col = parseInt(cell.getAttribute('col')); // x

    let alreadyZone = checkIfZone(currentCell);
    if (alreadyZone !== undefined) {
        deleteZone(alreadyZone);
    }

    // Initialize zoneLimits if it's the first cell
    if (zoneLimits.startX === Infinity) {
        zoneLimits.startX = zoneLimits.endX = col;
        zoneLimits.startY = zoneLimits.endY = row;
    } else {
        // Update zoneLimits considering all directions
        zoneLimits.startX = Math.min(zoneLimits.startX, col);
        zoneLimits.endX = Math.max(zoneLimits.endX, col);
        zoneLimits.startY = Math.min(zoneLimits.startY, row);
        zoneLimits.endY = Math.max(zoneLimits.endY, row);
    }

    // Remove 'zoning' class from all cells
    let allCells = document.querySelectorAll('.zoning');
    allCells.forEach(cell => cell.classList.remove('zoning'));


    // Add 'zoning' class to cells within the zone
    for (let r = zoneLimits.startY; r <= zoneLimits.endY; r++) {
        for (let c = zoneLimits.startX; c <= zoneLimits.endX; c++) {
            let cell = document.querySelector(`[row="${r}"][col="${c}"]`);
            if (cell) {
                cell.classList.add('zoning');
            }
        }
    }
}

function checkIfZone(div){

if(zones.length === 0){return undefined}

//All Zones with Coords Matching
const activeZones = zones.filter(zone => zone.coords === coords);
let zone = undefined;

activeZones.forEach(entry => {

const area = entry.drawArea;

const x = div.getAttribute('col');
const y = div.getAttribute('row');

if(x >= area.startX && x<= area.endX){
if(y >= area.startY && y<= area.endY){
zone = entry;
}
}

});

return zone;

};

function clearZoneLimits(){
zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};

let zoningCells = document.querySelectorAll('.zoning');
zoningCells.forEach(cell => cell.classList.remove('zoning'));
}

function clipZone() {

// Remove 'zoning' class from all cells
let allCells = document.querySelectorAll('[row][col]');
allCells.forEach(cell => cell.classList.remove('zoning'));

saveZone();
loadZones();
inZone = true;


}

function deleteZone(zone) {
showPrompt('Do you want to delete the Zone?').then(shouldDelete => {
if (shouldDelete) {
drawZone(zone, "erase")
const index = zones.findIndex(entry => entry.id === zone.id);
zones.splice(index, 1);
loadGrid();

}
});
}

function drawZone(zone, erase) {
let drawArea = zone.drawArea;
console.log('drawing Zone...')

const cells = [];
for (let row = drawArea.startY; row <= drawArea.endY; row++) {
for (let col = drawArea.startX; col <= drawArea.endX; col++) {
let cell = document.querySelector(`[row="${row}"][col="${col}"]`);
if (cell) {
cells.push(cell);
}
}
}

cells.forEach(cell => {
cell.classList.remove('grid-cell')
cell.classList.add('zone-cell');
cell.setAttribute('zone', zone.id)

const label = cell.querySelector('.cellLabel');
if(label){
label.classList.remove('cellLabel');
label.classList.add('zoneLabel');
}

const row = parseInt(cell.getAttribute('row'));
const col = parseInt(cell.getAttribute('col'));
const style = erase? "0.1px solid black" : "2px solid white";
const defaultStyle = "0.1px solid black"

if (row === drawArea.startY) {
    cell.style.borderTop = style;
} else{
    cell.style.borderTop = defaultStyle;
}

if (row === drawArea.endY) {
    cell.style.borderBottom = style;
} else{
    cell.style.borderBottom = defaultStyle;
}

if (col === drawArea.startX) {
    cell.style.borderLeft = style;
} else{
    cell.style.borderLeft = defaultStyle;
}

if (col === drawArea.endX) {
    cell.style.borderRight = style;
} else{
    cell.style.borderRight = defaultStyle;
}

});

}

function loadZone(gridCell, zone){


placeName.value = zone.name;
placeSymbol.value = zone.symbol;
textDiv.innerHTML = zone.desc;

}

function loadZones(){

// Remove 'zone-cell' class from all cells
let allCells = document.querySelectorAll('.zone-cell');
allCells.forEach(cell => cell.removeAttribute('zone'));
allCells.forEach(cell => cell.classList.remove('zone-cell'));
allCells.forEach(cell => cell.classList.add('grid-cell'));

//All Zones with Coords Matching
console.log(zones)
const toDraw = zones.filter(zone => zone.coords === coords);

toDraw.forEach(zone => {
drawZone(zone)
})


updateZoneNames()

}

function saveZone() {
    let i = zones.length + 1;
    let zoneId;
    let alreadyExists;

    do {
        zoneId = `${coords}.${i}`;
        alreadyExists = zones.find(entry => entry.id === zoneId);
        i++;
    } while (alreadyExists);

    const zoneEntry = {
        id: zoneId,
        symbol: '',
        name: '',
        desc: '',
        coords: coords,
        drawArea: {...zoneLimits},
    };

    zones.push(zoneEntry);
    saveData();
    clearZoneLimits();
}


function updateZoneNames(){

const activeZones = zones.filter(zone => zone.coords === coords);

if(activeZones.length > 0){
activeZones.forEach(zone => {

let area = zone.drawArea
let midY = Math.floor((area.endY + area.startY) /2);
let midX = Math.floor((area.endX + area.startX) /2);

const id =  coords + '.' + midY + '.' + midX;
const cell = getDiv(midY, midX);
const label = cell.querySelector('.zoneLabel');

if(label && zone.name !== null){
label.textContent = zone.name;
}

});

}


}
















