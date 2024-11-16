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

function updateGrid(){
    if(isHexMap){
    updateHexGrid()
    }else{
    updateSquareGrid()
    }
    
    }
    

function updateNames(){

    const allLabels = document.querySelectorAll('.cellLabel');
    allLabels.forEach(label => {label.textContent = ""})

    updateZoneNames();

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

         