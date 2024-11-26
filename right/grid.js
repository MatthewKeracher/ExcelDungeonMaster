function updateGrid(){
if(isHexMap){
updateHexGrid()
}else{
updateSquareGrid()
}

}

function addLabelEvents(cell, entry){

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');

const label = cell.querySelector('.cellLabel');

if (!label) {
console.error(`Could not find cellLabel on (${col},${row})`, cell, entry);
return;
}

label.textContent = "△";
label.style.fontWeight = 'bold';
cell.setAttribute('name', entry.name);

cell.addEventListener("mouseover", () => {
label.textContent = entry.name;
label.style.fontWeight = 'normal';
});

cell.addEventListener("mouseout", () => {
label.textContent = "△";
label.style.fontWeight = 'bold';
});

}

function showNames() {
let cells = document.querySelectorAll(`[row][col]`);

// Create a Map for faster lookup
const dataMap = new Map(
    data
        .filter(entry => entry.name !== "")
        .map(entry => [entry.id, entry.name])
);

cells.forEach(cell => {
const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id = `${coords}.${row}.${col}`;

const label = cell.querySelector('.cellLabel');
const name = dataMap.get(id) || "";

if (label.textContent !== name) {
label.textContent = name;
label.style.fontWeight = 'normal';

}
});
}

function showMarkers() {
    let cellLabels = document.querySelectorAll(`.cellLabel`);

    cellLabels.forEach(label => {
    
    if(label.textContent !== ""){
    label.textContent = "△";
    label.style.fontWeight = 'bold';
    }
    });
    }




function selectedCellStyle(cell){

const allCells = document.querySelectorAll("[row],[col]");

if(isHexMap){

allCells.forEach(cell => {
cell.querySelector('.left').classList.remove("flashing");
cell.querySelector('.middle').classList.remove("flashing");
cell.querySelector('.right').classList.remove("flashing");
});

cell.querySelector('.left').classList.add("flashing");
cell.querySelector('.middle').classList.add("flashing");
cell.querySelector('.right').classList.add("flashing");

}else{

allCells.forEach(cell => {
cell.classList.remove("flashing")
});

cell.classList.add("flashing")
}

}

function updateCellColors(cell, saveEntry){

if(isHexMap){
if(saveEntry){
cell.querySelector('.left').style.borderRightColor = saveEntry.color;
cell.querySelector('.middle').style.backgroundColor = saveEntry.color;
cell.querySelector('.right').style.borderLeftColor = saveEntry.color;
}else{
cell.querySelector('.left').style.borderRightColor =  defaultColour;
cell.querySelector('.middle').style.backgroundColor =  defaultColour;
cell.querySelector('.right').style.borderLeftColor =  defaultColour;
}
}else{
if(saveEntry){
cell.style.backgroundColor = saveEntry.color;
}else{
cell.style.backgroundColor =  defaultColour;
}
}

}

