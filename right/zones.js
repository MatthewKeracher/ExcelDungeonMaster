let classicBlue = "rgb(40, 100, 165)"

function addCellToZone(currentCell, dir){

startInZone = currentCell.classList.contains('inZone');

if(currentZone.length === 0){
getZone(currentCell);
}

        //Check if new cell is already in a Zone, if so block.
        let nextRow = parseInt(currentCell.getAttribute('row'));
        let nextCol = parseInt(currentCell.getAttribute('col'));

        if(dir === 'up'){
            nextRow = nextRow - 1;
        }

        else if(dir === 'down'){
            nextRow = nextRow + 1;
        }

        else if(dir === 'left'){
            nextCol = nextCol - 1;
        }

        else if(dir === 'right'){
            nextCol = nextCol + 1;
        }

        let nextCell = getDiv(nextRow, nextCol);
        
        if(nextCell.classList.contains('inZone')){ 
        let nextZone = nextCell.getAttribute('zone');

        if(nextZone !== currentZone.id){
        return
        }}


if(startInZone){
moveFocus(dir);
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
    
}

function removeCellFromZone(cell){

    const row = parseInt(cell.getAttribute('row'));
    const col = parseInt(cell.getAttribute('col'));

    getZone(cell);
    
    if(currentZone.length === 1){
    zones = zones.filter(zone => zone.id === currentZone.id)
    currentZone = []
    return
    }

    currentZone.points = currentZone.points.filter(entry => entry.row !== row || entry.col !== col);
    cell.classList.remove('inZone')
    walls("remove", row, col);

    currentZone = [];
    
    
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
                let label = adjCell.querySelector('.cellLabel');
                label.style.color = "white";
            }

        } else if (action === "remove") {
          
            if(adjCell.classList.contains('inZone')){
                let adjRow = parseInt(adjCell.getAttribute('row'));
                let adjCol = parseInt(adjCell.getAttribute('col'));
                whites.push({adjRow, adjCol}) 
                
            } else {
                adjCell.style.backgroundColor = 'black';
                adjCell.style.border = "0.1px solid black";
                //console.log('does not contain a zone')
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

function showZoneNames() {

 // Clear any existing name
    const existingNames = document.querySelectorAll('.zone-name');
    existingNames.forEach(name => {
    name.remove()
    })
        
    const activeZones = zones.filter(zone => zone.coords === coords);

    if (activeZones.length > 0) {
        activeZones.forEach(zone => {
            // Find the most central square
            const centralPoint = findCentralPoint(zone.points);

            // Show Zone Name in black letters
            displayZoneName(zone, centralPoint);
        });
    }
}

function findCentralPoint(points) {
    // Calculate the average x and y coordinates
    const avgX = points.reduce((sum, point) => sum + point.col, 0) / points.length;
    const avgY = points.reduce((sum, point) => sum + point.row, 0) / points.length;

    // Find the point closest to the average
    return points.reduce((closest, point) => {
        const distanceToAvg = Math.sqrt(Math.pow(point.col - avgX, 2) + Math.pow(point.row - avgY, 2));
        const closestDistanceToAvg = Math.sqrt(Math.pow(closest.col - avgX, 2) + Math.pow(closest.row - avgY, 2));
        return distanceToAvg < closestDistanceToAvg ? point : closest;
    });
}

function displayZoneName(zone, point) {
    const cell = document.querySelector(`[row="${point.row}"][col="${point.col}"]`);
    if (cell) {
        const nameElement = document.createElement('div');
        nameElement.textContent = zone.name || '';
        nameElement.style.position = 'absolute';
        nameElement.style.zIndex = '1000'
        nameElement.style.top = '50%';
        nameElement.style.left = '50%';
        nameElement.style.transform = 'translate(-50%, -50%)';
        nameElement.style.color = 'black';
        nameElement.style.fontWeight = 'bold';
        nameElement.style.fontSize = '14px';
        nameElement.style.fontFamily = 'SoutaneBlack'
        nameElement.style.textAlign = 'right';
        nameElement.style.pointerEvents = 'none'; // Prevent it from interfering with clicks
        
        // Clear any existing name
        const existingName = cell.querySelector('.zone-name');
        if (existingName) {
            cell.removeChild(existingName);
        }
        
        nameElement.classList.add('zone-name');
        cell.appendChild(nameElement);
    }
}


function labelZones(){

    const activeZones = zones.filter(zone => zone.coords === coords);
    const labels = document.querySelectorAll('.cellLabel');

    if(activeZones.length > 0){
    activeZones.forEach(zone => {
    
    zone.points.forEach(point => {

    if(point.symbol){
    
    const row = point.row
    const col = point.col

    const div = getDiv(row, col);
    div.setAttribute('cellSymbol', point.symbol);
    const label = div.querySelector('.cellLabel');
    label.textContent = point.symbol;

    }


    })
    
    });
    
    }

}

function loadZones(){

const activeZones = zones.filter(zone => zone.coords === coords);

activeZones.forEach(zone => {

const points = zone.points;

if(points.length > 0){

points.forEach(point => {

let cell = document.querySelector(`[row="${point.row}"][col="${point.col}"]`);
    cell.classList.add('inZone');
    cell.style.backgroundColor = 'white';
    cell.style.border = "0.1px solid " + classicBlue;
    walls("add", point.row, point.col);
    let label = cell.querySelector('.cellLabel');
    label.style.color = classicBlue;

    const div = getDiv(point.row, point.col);
    div.setAttribute('zone', zone.id);

})

}else{
//Garbage Collection
zones = zones.filter(entry => entry.id !== zone.id);
}

})

labelZones();
showZoneNames();
currentZone = [];

}

function getZone(cell) {
    const row = parseInt(cell.getAttribute('row'));
    const col = parseInt(cell.getAttribute('col'));

    const activeZones = zones.filter(zone => zone.coords === coords);

    for (let zone of activeZones) {
        if (zone.points.some(point => point.row === row && point.col === col)) {
            currentZone = zone;
            //console.log('found Zone for: ' + row + ',' + col, currentZone)
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

        // If no matching zone is found, create a new one
        currentZone = {
            coords: coords,
            id: zoneId, 
            points: [{row, col}], 
            name: '',
            desc: '',
            symbol: '',
        };


    }
    
    
}


function clipZone(currentCell) {
     // Convert points to a Set to remove duplicates
    const uniquePoints = new Set(currentZone.points.map(point => JSON.stringify(point)));
    currentZone.points = Array.from(uniquePoints).map(point => JSON.parse(point));

        //console.log('clipZone', currentZone)
    
        let savedZoneIndex = zones.findIndex(zone => zone.id === currentZone.id);
        if (savedZoneIndex !== -1) {
            //console.log('updating zone...');
            zones[savedZoneIndex] = currentZone;
        }else{
            //console.log('pushing new zone...');
            zones.push(currentZone);
        }
    
    changeCell(currentCell)
    currentZone = [];
}
