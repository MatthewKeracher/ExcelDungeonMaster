// Function to save data to localStorage
function saveData() {
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('zones', JSON.stringify(zones));
localStorage.setItem('journal', JSON.stringify(journalData));
localStorage.setItem('location', idBox.textContent);
}


function removeData() {
    localStorage.removeItem('data');
    localStorage.removeItem('zones');
}

// Function to load data from localStorage
function loadData() {
const savedData = localStorage.getItem('data');
const savedZones = localStorage.getItem('zones');
const savedJournal = localStorage.getItem('journal');
const lastLoc = localStorage.getItem('location');

if (savedData) {
data = JSON.parse(savedData);  // Convert back from JSON string to array
}
if(savedZones){
zones = JSON.parse(savedZones);  
}
if(savedJournal){
journalData = JSON.parse(savedJournal)
}
if(lastLoc){
//idBox.textContent = lastLoc;
}
}

function saveEntry(div){

const idBox = document.getElementById('idBox');
const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol')
const inZone = div.classList.contains('inZone');

const row = parseInt(div.getAttribute('row'));
const col = parseInt(div.getAttribute('col'));


// //console.log(regionObj, idBox.textContent)
if(regionObj.id === idBox.textContent){
const regionName = document.getElementById('regionName');
regionName.textContent = placeName.value;
}

if(inZone){

let zoneId = div.getAttribute('zone');
let zone = zones.find(entry => entry.id === zoneId)

zone.name = placeName.value;
zone.desc = textDiv.innerHTML;

//Save Individual Symbols to points.
let pointEntry = zone.points.find(point => point.row === row && point.col === col);

pointEntry.symbol = placeSymbol.value;


}else{

let exists = data.find(entry => entry.id === idBox.textContent)

if(exists){
exists.name = placeName.value;
exists.symbol = placeSymbol.value;
exists.desc = textDiv.innerHTML;

const cellLabel = div.querySelector('.cellLabel');
if (cellLabel) {
    cellLabel.textContent = placeSymbol.value? placeSymbol.value : placeName.value.charAt(0);
    div.setAttribute('sym', placeSymbol.value);
}

}else{
makeNewEntry();
}

}

if(journalShowing){
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
palette: defaultData[0].palette
}

if(saveEntry.name === ""){
saveEntry.name = ""
}

data.push(saveEntry);


}

loadData();
updateGrid();





