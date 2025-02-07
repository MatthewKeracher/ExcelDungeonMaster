let classicBlue = "rgb(40, 100, 165)"

function addCellToZone(currentCell, dir){

startInZone = currentCell.classList.contains('inZone');

if(startInZone){
moveFocus(dir);
}

if(currentZone.length === 0){
getZone(currentCell);
}

let cell = getCurrentDiv()

const row = parseInt(cell.getAttribute('row'));
const col = parseInt(cell.getAttribute('col'));

cell.classList.add('inZone');
currentZone.points.push({row,col});
cell.style.backgroundColor = 'white';
cell.style.border = "0.1px solid " + classicBlue;
walls("add", row, col);

const div = getDiv(row, col);
      div.setAttribute('zone', currentZone.id);

console.log(div);
    
}

function removeCellFromZone(cell){

    const row = parseInt(cell.getAttribute('row'));
    const col = parseInt(cell.getAttribute('col'));
    
    currentZone.points = currentZone.points.filter(entry => entry.row !== row || entry.col !== col);
    cell.classList.remove('inZone')
    walls("remove", row, col);
    
    
}

function walls(action, row, col) {
    
    const adjCells = getDirectionsHelper();

    let whites = [];

    for (let [adjRow, adjCol] of adjCells) {  
        
        let adjCell = document.querySelector(`[row="${row + adjRow}"][col="${col + adjCol}"]`);
        if (!adjCell) continue;

        if (action === "add") {
            if (!adjCell.classList.contains('inZone')) {
                adjCell.style.backgroundColor = classicBlue;
                adjCell.style.border = "0.1px solid " + classicBlue;
            }

        } else if (action === "remove") {
          
            if(adjCell.classList.contains('inZone')){
                let adjRow = parseInt(adjCell.getAttribute('row'));
                let adjCol = parseInt(adjCell.getAttribute('col'));
                whites.push({adjRow, adjCol}) 
                
            } else {
                adjCell.style.backgroundColor = 'black';
                adjCell.style.border = "0.1px solid black";
                console.log('does not contain a zone')
            }

        }
    }

    if(action === "remove"){
    //console.log(whites)
    for (let {adjRow, adjCol} of whites) {   
    walls("add" ,adjRow, adjCol);
    }

}
}

function labelZones(){

    // const activeZones = zones.filter(zone => zone.coords === coords);

    // if(activeZones.length > 0){
    // activeZones.forEach(zone => {
    
    // let area = zone.points
    // let midY = Math.floor((area.endY + area.startY) /2);
    // let midX = Math.floor((area.endX + area.startX) /2);
    
    // const id =  coords + '.' + midY + '.' + midX;
    // const cell = getDiv(midY, midX);
    // const label = cell.querySelector('.zoneLabel');
    
    // if(label && zone.name !== null){
    // label.textContent = zone.name;
    // }
    
    // });
    
    // }

}

function loadZones(){

const activeZones = zones.filter(zone => zone.coords === coords);

activeZones.forEach(zone => {

const points = zone.points;

points.forEach(point => {

let cell = document.querySelector(`[row="${point.row}"][col="${point.col}"]`);
    cell.classList.add('inZone');
    cell.style.backgroundColor = 'white';
    cell.style.border = "0.1px solid " + classicBlue;
    walls("add", point.row, point.col);

    const div = getDiv(point.row, point.col);
    div.setAttribute('zone', zone.id);

})

})

}

function getZone(cell) {
    const row = parseInt(cell.getAttribute('row'));
    const col = parseInt(cell.getAttribute('col'));

    const activeZones = zones.filter(zone => zone.coords === coords);

    for (let zone of activeZones) {
        if (zone.points.some(point => point.row === row && point.col === col)) {
            currentZone = zone;
            return; // Exit the function once we find the matching zone
        }
    }

    if(currentZone.length === 0){

    let zoneId;

        let i = zones.length + 1;
        let alreadyExists;

        do {
            zoneId = `${coords}.${i}`;
            alreadyExists = zones.find(entry => entry.id === zoneId);
            i++;
        } while (alreadyExists);

        currentZone.id = zoneId;

        // If no matching zone is found, create a new one
        currentZone = {
            coords: coords,
            id: zoneId, // You need to implement this function
            points: [{row, col}], // Start with the current cell
            name: '',
            desc: '',
            symbol: '',
        };


    }
    
    
}


function clipZone() {
     // Convert points to a Set to remove duplicates
    const uniquePoints = new Set(currentZone.points.map(point => JSON.stringify(point)));
    currentZone.points = Array.from(uniquePoints).map(point => JSON.parse(point));
    
        let savedZoneIndex = zones.findIndex(zone => zone.id === currentZone.id);
        if (savedZoneIndex !== -1) {
            console.log('updating zone...');
            zones[savedZoneIndex] = currentZone;
        }else{
            console.log('pushing new zone...');
            zones.push(currentZone);
        }
    
    console.log(zones)
    currentZone = [];
}
