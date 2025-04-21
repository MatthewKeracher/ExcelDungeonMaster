
// Function to save data to localStorage
function saveData() {
    localStorage.setItem('zones', JSON.stringify(zones));
    localStorage.setItem('scrollData', JSON.stringify(scrollData));
    localStorage.setItem('regionObj', JSON.stringify(regionObj));
    localStorage.setItem('soundBoard', JSON.stringify(sounds));
    localStorage.setItem('Excel_DM', JSON.stringify(EXCEL_DM));

    // console.log("Saved to Storage:")
    // console.log(EXCEL_DM.map.data.length)
    // console.log(localStorage)
}


// Function to load data from localStorage
function  loadData() {
    const savedZones = localStorage.getItem('zones');
    const savedScrollData = localStorage.getItem('scrollData');
    const lastCellAt = localStorage.getItem('regionObj');
    const soundBoard = localStorage.getItem('soundBoard');
    const savedEXCEL_DM = localStorage.getItem('Excel_DM');

if(savedZones){
zones = JSON.parse(savedZones);  
}

if(savedScrollData){
scrollData = JSON.parse(savedScrollData)
}

if(lastCellAt){
regionObj = JSON.parse(lastCellAt)
idBox.textContent = regionObj.id;
}

if(soundBoard){
sounds = JSON.parse(soundBoard)
}

if(savedEXCEL_DM){
EXCEL_DM = JSON.parse(savedEXCEL_DM)
console.log('Loaded from Browser Storage:')
console.log(EXCEL_DM)
}


}

function saveEntry(div){

const idBox = document.getElementById('idBox');
const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol')

const inZone = div? div.classList.contains('inZone') : null;
const row = div? parseInt(div.getAttribute('row')) : null;
const col = div? parseInt(div.getAttribute('col')) : null;

if(regionObj.id === idBox.textContent){
const regionName = document.getElementById('regionName');
regionName.textContent = placeName.value;
}

if (inZone !== null && inZone) {

    let zoneId = div.getAttribute('zone');
   
    let zone = zones.find(entry => entry.id === zoneId);

    zone.name = placeName.value;
    zone.desc = filterDiv(textDiv);

    // Save Individual Symbols to points.
    let pointEntry = zone.points.find(point => point.row === row && point.col === col);

    pointEntry.symbol = placeSymbol.value;

} else {

    let exists = EXCEL_DM.map.data.find(entry => entry.id === idBox.textContent);
    if (exists) {
        exists.name = placeName.value;
        exists.symbol = placeSymbol.value;
        exists.desc = filterDiv(textDiv);
        exists.scrollData = scrollData;

        const cellLabel = div? div.querySelector('.cellLabel'): null;
        if (cellLabel !== null) {
            cellLabel.textContent = placeSymbol.value ? placeSymbol.value : placeName.value.charAt(0);
            div.setAttribute('sym', placeSymbol.value);
        }

    

    } else {
        makeNewEntry();
    }

}




if(explorerShowing && scaleSelector.style.display !== "none"){
saveJournalKnot();
}

}

function makeNewEntry(){

const saveEntry = {
id: idBox.textContent,
name: placeName.value,
symbol: placeSymbol.value,
desc: textDiv.innerHTML,
grid: isHexMap? "hex" : "square",
// palette: defaultData[0].palette,
scrollData: scrollData,
}

if(saveEntry.name === ""){
saveEntry.name = ""
}

EXCEL_DM.map.data.push(saveEntry);


}

loadData();
updateGrid();





