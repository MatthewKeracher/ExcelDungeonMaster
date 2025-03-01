// Function to save data to localStorage
function saveData() {
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('zones', JSON.stringify(zones));
localStorage.setItem('journal', JSON.stringify(journalData));
localStorage.setItem('scrollData', JSON.stringify(scrollData));
localStorage.setItem('regionObj', JSON.stringify(regionObj));
localStorage.setItem('soundBoard', JSON.stringify(sounds));

}


function removeData() {
    localStorage.removeItem('data');
    localStorage.removeItem('zones');
    localStorage.removeItem('journal');
    localStorage.removeItem('scrollData');
    localStorage.removeItem('regionObj');
    localStorage.removeItem('soundBoard');
}

// Function to load data from localStorage
function  loadData() {
const savedData = localStorage.getItem('data');
const savedZones = localStorage.getItem('zones');
const savedJournal = localStorage.getItem('journal');
const savedScrollData = localStorage.getItem('scrollData');
const lastCellAt = localStorage.getItem('regionObj');
const soundBoard = localStorage.getItem('soundBoard');

if (savedData) {
data = JSON.parse(savedData);  // Convert back from JSON string to array
collectGarbage();
}

if(savedZones){
zones = JSON.parse(savedZones);  
}
if(savedJournal){
journalData = JSON.parse(savedJournal)
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
    zone.desc = filterNoSave(textDiv);

    // Save Individual Symbols to points.
    let pointEntry = zone.points.find(point => point.row === row && point.col === col);

    pointEntry.symbol = placeSymbol.value;

} else {



    let exists = data.find(entry => entry.id === idBox.textContent);

    if (exists) {
        exists.name = placeName.value;
        exists.symbol = placeSymbol.value;
        exists.desc = filterNoSave(textDiv);
        exists.scrollData = scrollData;
        // console.log(exists)

        const cellLabel = div? div.querySelector('.cellLabel'): null;
        if (cellLabel !== null) {
            cellLabel.textContent = placeSymbol.value ? placeSymbol.value : placeName.value.charAt(0);
            div.setAttribute('sym', placeSymbol.value);
        }

    

    } else {
        makeNewEntry();
    }

}




if(journalShowing && scaleSelector.style.display !== "none"){
saveJournalEntry();
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

data.push(saveEntry);


}

loadData();
updateGrid();





