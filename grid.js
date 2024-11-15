function createGrid(rows, cols) {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';  // Clear previous map
    

    for (let row = 0; row < rows; row++) {
        // Create a row for grid cells
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');

        for (let col = 0; col < cols; col++) {
            // Create a grid cell div
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');

            // Create Label for Square
            const label = document.createElement('div');
            label.classList.add('cellLabel');
            label.innerText = ``; 
            gridCell.appendChild(label);

            // Add any additional behavior for grid cells
            gridCell.setAttribute('col', col);
            gridCell.setAttribute('row', row);
            gridCell.addEventListener("click", function () {
                changeCell(gridCell);
                paintCell(gridCell)
                fillCells(gridCell)
            });
            gridCell.addEventListener('mousemove', function() {
                if (isPainting && isShiftPressed) {
                    paintCell(gridCell);
                }
            });
            // gridCell.addEventListener('mouseover', function() {
            //     if(currentMode === 'map'){
            //         changeCell(gridCell)
            //     }
            // });

            gridRow.appendChild(gridCell);
        }
        gridContainer.appendChild(gridRow);
    }
}



function selectedCellStyle(cell){

try{
if(lastCell !== ''){
lastCell.classList.remove("flashing");
lastCell.style.backgroundColor
}

cell.classList.add("flashing");

lastCell = cell;
}catch{}

}


function moveCell(dir){

    let str = idBox.textContent;
    let numbersArray = str.split('.');
    let rowcol = numbersArray.slice(-2);
    let row = rowcol[0];
    let col = rowcol[1];

    if(row === 'X'){row = 0}else{row = parseInt(row)};
    if(col === 'X'){col = 0}else{col = parseInt(col)};
    
    if(dir === 'up'){
    row = row - 1;
    }

    else if(dir === 'down'){
    row = row + 1;
    }

    else if(dir === 'left'){
    col = col - 1;
    }

    else if(dir === 'right'){
    col = col + 1;
    }
    
    const div = document.querySelector(`[row="${row}"][col="${col}"]`);
    paintCell(div);
    changeCell(div);
    }

function changeCell(gridCell){

if(currentMode !== "map"){return};

selectedCellStyle(gridCell);
updateNames();
updateZoneNames();

//Set new id.
let row = gridCell.getAttribute('row');
let col = gridCell.getAttribute('col')
idBox.textContent = coords + '.' + row + '.' + col

textDiv.innerHTML = ''
placeName.value = ''

let loadEntry = data.find(entry => entry.id === idBox.textContent)
currentObj = loadEntry;

if(loadEntry){
placeName.value = loadEntry.name;
textDiv.innerHTML = loadEntry.desc;
}

const zone = checkIfZone(gridCell);

if(zone !== undefined && textDiv.innerHTML === '' && placeName.value === ''){
inZone = true;
loadZone(gridCell, zone)
}else{
inZone = false;
}

saveData();
}


function updateSquareGrid(){

const cells = document.querySelectorAll('[row][col]');

cells.forEach(cell => {

const col = cell.getAttribute('col');
const row = cell.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id);

updateCellColors(cell, saveEntry);


})

updateNames();
loadZones();
updateZoneNames();


}

function updateNames(){

    const localEntrys = data.filter(entry => {
        let idBoxPeriodCount = (idBox.textContent.match(/\./g) || []).length;
        if(idBoxPeriodCount < 3){idBoxPeriodCount = 3}
        const entryPeriodCount = (entry.id.match(/\./g) || []).length;
        return entryPeriodCount === idBoxPeriodCount;
    });

    const localNames = localEntrys.filter(entry => entry.name !== "");

    if(localNames.length === 0){return}
    
    localNames.forEach(entry => {
    
    const col = returnCol(entry.id);
    const row = returnRow(entry.id);
    const cell = document.querySelector(`[row="${row}"][col="${col}"]`);
    
    const label = cell.querySelector('.cellLabel');
    label.textContent = "";

    cell.setAttribute('name', entry.name)
        label.textContent = entry.name !== ""? "△" : "";
        label.style.fontWeight = 'bold';

    cell.addEventListener("mouseover", () => {
        label.textContent = entry.name
        label.style.fontWeight = 'normal';
        
    });

    cell.addEventListener("mouseout", () => {
        label.textContent = entry.name !== ""? "△" : "";
        label.style.fontWeight = 'bold';
    });
    
    
    })
    
    }

    function showNames() {
        let cells = isHexMap ? document.querySelectorAll(".hex") : document.querySelectorAll(".grid-cell");
        
        // Create a Map for faster lookup
        const dataMap = new Map(data.map(entry => [entry.id, entry.name]));
        
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



function updateCellColors(cell, saveEntry){

    // const row = parseInt(cell.getAttribute('row'))
    // const col = parseInt(cell.getAttribute('col'))
    
    // if(row === 0 || col === 0){
    // cell.style.backgroundColor = "transparent";
    // }else 
    
    if(saveEntry){
    cell.style.backgroundColor = saveEntry.color;
    }else{
    cell.style.backgroundColor =  defaultColour;
    }
}

