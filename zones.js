let zoneLimits = {startX: 0, startY: 0, endX: 0, endY: 0}

function saveZone(){

    let withZones = data.filter(entry => entry.zone);
    let lastZoneId = withZones.length !== 0? Math.max(...withZones.map(entry => entry.zone)) : 0;
    let zoneId = lastZoneId + 1;

    currentZone.forEach(cell => {
 
     const col = cell.col;
     const row = cell.row;
     const id =  coords + '.' + row + '.' + col;
    
     let exists = data.find(entry => entry.id === idBox.textContent)
  
     if(exists){
     exists.zone = zoneId;

     }else{
 
     const saveEntry = {
     id: id,
     zone: zoneId
     }

     data.push(saveEntry);
     }
 
    })
 }

 function loadZones(){

 let withZones = data.filter(entry => entry.zone)

 let zones = withZones.reduce((acc, entry) => {
    let zone = entry.zone.toString();
    let group = acc.find(g => g.zone === zone);
    if (!group) {
      group = { zone: zone, entries: [] };
      acc.push(group);
    }

    //Only want Zones in this Z-Level.
    let coordsEntry = returnCoords(entry.id);
    let coordsWorld = returnCoords(idBox.textContent);

    if(coordsEntry === coordsWorld){
    let cellInfo = {row: returnRow(entry.id), col: returnCol(entry.id)}
    group.entries.push(cellInfo)
    }

    return acc;
  }, []).sort((a, b) => Number(a.zone) - Number(b.zone));

  zones.forEach(zone => {
    drawZone(zone)
  })
 
 }

 function drawZone(zone){

    console.log(zone)

 }
 
 function clipZone() {
     
     saveZone();
     loadZones();
 
     // Reset currentZone
     currentZone = [];
 
     // Remove 'zoning' class from all cells
     let allCells = document.querySelectorAll('[row][col]');
     allCells.forEach(cell => cell.classList.remove('zoning'));
     
     // Reset zoneLimits
     Object.keys(zoneLimits).forEach(key => zoneLimits[key] = 0);
       
 } 
 
 function addZone(currentCell){
 
 let cell = currentZone.length === 0? currentCell: getCurrentDiv();
 let row = parseInt(cell.getAttribute('row')); //y
 let col = parseInt(cell.getAttribute('col')); //x
 
 //Calibrate Zone Limits (Big Square)
 if(col < zoneLimits.startX || zoneLimits.startX === 0){zoneLimits.startX = col};
 if(row < zoneLimits.startY || zoneLimits.startY === 0){zoneLimits.startY = row};
 
 if(col > zoneLimits.startX || zoneLimits.endX === 0){zoneLimits.endX = col};
 if(row > zoneLimits.startY || zoneLimits.endY === 0){zoneLimits.endY = row};
 
 
 // Remove 'zoning' class from all cells
 let allCells = document.querySelectorAll('[row][col]');
 allCells.forEach(cell => cell.classList.remove('zoning'));
 
 // Select and add 'zoning' class to cells within the zone
 allCells.forEach(cell => {
     let cellRow = parseInt(cell.getAttribute('row'));
     let cellCol = parseInt(cell.getAttribute('col'));
     
     if (cellRow >= zoneLimits.startY && cellRow <= zoneLimits.endY &&
         cellCol >= zoneLimits.startX && cellCol <= zoneLimits.endX) {
         cell.classList.add('zoning');
     }
 });
 
 
 currentZone.push({row: row, col: col});
 
 }