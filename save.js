// Function to save data to localStorage
function saveData() {
localStorage.setItem('data', JSON.stringify(data));
localStorage.setItem('zones', JSON.stringify(zones));
}

function removeData() {
    localStorage.removeItem('data');
    localStorage.removeItem('zones');
}

// Function to load data from localStorage
function loadData() {
const savedData = localStorage.getItem('data');
const savedZones = localStorage.getItem('zones');
if (savedData) {
data = JSON.parse(savedData);  // Convert back from JSON string to array
}
if(savedZones){
zones = JSON.parse(savedZones);  
}
}

function saveEntry(div){

const idBox = document.getElementById('idBox');
const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')
const placeSymbol = document.getElementById('placeSymbol')

const cellLabel = div.querySelector('.cellLabel');
    if (cellLabel) {
        cellLabel.textContent = placeSymbol.value? placeSymbol.value : '◦';
        div.setAttribute('sym', placeSymbol.value);
    }

console.log(regionObj, idBox.textContent)
if(regionObj.id === idBox.textContent){
const regionName = document.getElementById('regionName');
regionName.textContent = placeName.value;
}

if(inZone){

let zoneId = div.getAttribute('zone');
let zone = zones.find(entry => entry.id === zoneId)

zone.name = placeName.value;
zone.symbol = placeSymbol.value;
zone.desc = textDiv.innerHTML;

}else{

let exists = data.find(entry => entry.id === idBox.textContent)

if(exists){
exists.name = placeName.value;
exists.symbol = placeSymbol.value;
exists.desc = textDiv.innerHTML;

// if(exists.desc !== "" && exists.name === ""){
// exists.name = "◦"
// }

}else{
makeNewEntry();
}

}

garbageCollection();


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


function garbageCollection(){

data.forEach(entry => {

if(entry.name !== "*"){
return
}

if(entry.desc === ""){
entry.name = ""   
}


})


}

loadData();
updateGrid();





