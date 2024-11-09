let zones = [];
let zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};

function saveZone(){

let withZones = data.filter(entry => entry.zone);
let lastZoneId = withZones.length !== 0? Math.max(...withZones.map(entry => entry.zone)) : 0;
let zoneId = coords + '.' + (lastZoneId + 1);

let exists = zones.find(entry => entry.id === zoneId);

if(exists){
exists.coords = zoneId;
}else{

console.log(zoneLimits)

const zoneEntry = {
id: zoneId,
coords: coords,
drawArea: zoneLimits,
}

zones.push(zoneEntry);
zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};
}


}

function loadZones(){

// Remove 'zone-cell' class from all cells
let allCells = document.querySelectorAll('.zone-cell');
allCells.forEach(cell => cell.classList.remove('zone-cell'));
allCells.forEach(cell => cell.classList.add('grid-cell'));

//All Zones with Coords Matching
const toDraw = zones.filter(zone => zone.coords === coords);

toDraw.forEach(zone => {
drawZone(zone)
})

}

function drawZone(zone) {
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
    });

}
  

function clipZone() {

// Remove 'zoning' class from all cells
let allCells = document.querySelectorAll('[row][col]');
allCells.forEach(cell => cell.classList.remove('zoning'));

saveZone();
loadZones();


} 

function addZone(currentCell){

let cell = zoneLimits.startX === Infinity? currentCell: getCurrentDiv();
let row = parseInt(cell.getAttribute('row')); //y
let col = parseInt(cell.getAttribute('col')); //x

//Calibrate Zone Limits (Big Square)
zoneLimits.startX = Math.min(zoneLimits.startX, col);
zoneLimits.endX = col;
zoneLimits.startY = Math.min(zoneLimits.startY, row);
zoneLimits.endY = row;

// Remove 'zoning' class from all cells
let allCells = document.querySelectorAll('[row][col]');
allCells.forEach(cell => cell.classList.remove('zoning'));

const cells = [];
    for (let row = zoneLimits.startY; row <= zoneLimits.endY; row++) {
        for (let col = zoneLimits.startX; col <= zoneLimits.endX; col++) {
            let cell = document.querySelector(`[row="${row}"][col="${col}"]`);
            if (cell) {
                cells.push(cell);
            }
        }
    }

    cells.forEach(cell => {
        cell.classList.add('zoning');
    });

}