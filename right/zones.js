
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
    let allCells = document.querySelectorAll('[row][col]');
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
loadZones();

}
});
}

function drawZone(zone, erase) {
let drawArea = zone.drawArea;

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

const row = parseInt(cell.getAttribute('row'));
const col = parseInt(cell.getAttribute('col'));
const style = erase? "2px solid black" : "2px solid white";

if (row === drawArea.startY) {
    cell.style.borderTop = style;
}

if (row === drawArea.endY) {
    cell.style.borderBottom = style;
}

if (col === drawArea.startX) {
    cell.style.borderLeft = style;
}

if (col === drawArea.endX) {
    cell.style.borderRight = style;
}

});

}

function loadZone(gridCell, zone){


placeName.value = zone.name;
textDiv.innerHTML = zone.desc;

}

function loadZones(){

// Remove 'zone-cell' class from all cells
let allCells = document.querySelectorAll('.zone-cell');
allCells.forEach(cell => cell.removeAttribute('zone'));
allCells.forEach(cell => cell.classList.remove('zone-cell'));
allCells.forEach(cell => cell.classList.add('grid-cell'));

//All Zones with Coords Matching
const toDraw = zones.filter(zone => zone.coords === coords);

toDraw.forEach(zone => {
drawZone(zone)
})


updateZoneNames()

}

function saveZone(){

let zoneId = coords + '.' + (zones.length + 1);
let exists = zones.find(entry => entry.id === zoneId);

if(exists){
exists.coords = zoneId;
}else{

const zoneEntry = {
id: zoneId,
name: '',
desc: '',
coords: coords,
drawArea: zoneLimits,
}

zones.push(zoneEntry);
saveData();
clearZoneLimits();
}

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
const label = cell.querySelector('.cellLabel');

label.textContent = zone.name

});

}

}
















