let zones = [];
let zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};
let inZone = false

function loadZone(gridCell, zone){


    placeName.value = zone.name;
    textDiv.innerHTML = zone.desc;

}

function updateZoneNames(){

    const activeZones = zones.filter(zone => zone.coords === coords);
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
clearZoneLimits();
}

}

function clearZoneLimits(){
zoneLimits = {startX: Infinity, startY: Infinity, endX: -Infinity, endY: -Infinity};

let zoningCells = document.querySelectorAll('.zoning');
zoningCells.forEach(cell => cell.classList.remove('zoning'));
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
        cell.setAttribute('zone', zone.id)
    });

}
  

function clipZone() {

// Remove 'zoning' class from all cells
let allCells = document.querySelectorAll('[row][col]');
allCells.forEach(cell => cell.classList.remove('zoning'));

saveZone();
loadZones();
inZone = true;


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