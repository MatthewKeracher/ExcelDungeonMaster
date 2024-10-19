let lastCellPainted = "";
let currentColor = 'rgb(17, 132, 17)'; // Default color

function setColor(color) {
currentColor = color;
}

function fillCells(cell){

    const hexagons = document.querySelectorAll(".hex");
    const oldColor = cell.querySelector('.middle').style.backgroundColor;

    hexagons.forEach(hex => {
    
    const col = hex.getAttribute('col');
    const row = hex.getAttribute('row');
    const id =  coords + '.' + row + '.' + col;
    
    const saveEntry = data.find(entry => entry.id === id)

    if(saveEntry?.color === oldColor){
       saveEntry.color = currentColor
    }

    });

    isFilling = false;

}

function paintCell(cell) {

    if(isFilling){fillCells(cell)}

    const row = cell.getAttribute('row');
    const col = cell.getAttribute('col');
    const searchId = coords + '.' + row + '.' + col;
    const cellObj = getObj(searchId)

    //Stop Crowding
    if(searchId === lastCellPainted){return}
    lastCellPainted = searchId;

    if(cellObj){
    cellObj.color = currentColor;
    }else{
    const saveEntry = {
    id: searchId,
    name: "",
    desc: "",
    color: isPainting? currentColor : '',
    }

    data.push(saveEntry)
    }

    saveData();
    
    if(!isHexMap){
        updateSquareGrid()
        }else{
        updateHexGrid()
        }
    
}

let isShiftPressed = false;

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



// Function to set the selected color when clicked
function setColor(swatchElement) {
    if (!event.shiftKey) {
        currentColor = swatchElement.style.backgroundColor;
    }
}

// Function to open color picker and change color on Shift-click
function editColor(event, swatchElement) {
    event.preventDefault(); // Prevent default right-click behavior
    
        // Create a hidden color input element
        const colorInput = document.createElement('input');
        colorInput.type = 'color';
        colorInput.value = rgbToHex(swatchElement.style.backgroundColor); // Set initial value to current swatch color

        // Trigger color input click and change the swatch color
        colorInput.click();
        colorInput.addEventListener('input', function() {
            swatchElement.style.backgroundColor = colorInput.value; // Update swatch color
        });

        setColor(swatchElement)
    
}

// Helper function to convert RGB to HEX
function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g);
    return "#" + rgbArray.map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }).join('');
}
