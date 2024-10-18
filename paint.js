let lastCellPainted = "";

function paintCell(cell, type) {

    if(isPainting && type === "hex"){
        cell.querySelector('.left').style.borderRightColor = currentColor;
        cell.querySelector('.middle').style.backgroundColor = currentColor;
        cell.querySelector('.right').style.borderLeftColor = currentColor;
    }

    if(isPainting && type === "square"){
        cell.style.backgroundColor = currentColor;   
    }

    const row = cell.getAttribute('row');
    const col = cell.getAttribute('col');
    const searchId = coords + '.' + row + '.' + col;
    const cellObj = getObj(searchId)

    //Stop Crowding
    if(searchId === lastCellPainted){return}
    lastCellPainted = searchId;

    if(cellObj){
    console.log("found", cellObj);
    cellObj.color = currentColor;
    }else{
    const saveEntry = {
    id: searchId,
    name: placeName.value,
    desc: writeBox.value,
    color: isPainting? currentColor : '',
    }

    data.push(saveEntry)
    console.log("made", saveEntry);
    }

    saveData();
    
}


let isShiftPressed = false;

// Listen for the Shift key being pressed or released
document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        isShiftPressed = true;
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'Shift') {
        isShiftPressed = false;
    }
});




