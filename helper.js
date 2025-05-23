function getNewId(data, obj) {
    const ids = [];

    if(obj && obj.id){return obj.id}
  
    // Function to recursively extract IDs from the data structure
    function extractIds(data) {
      for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
          if (Array.isArray(data[key])) {
            data[key].forEach(item => {
              if (item && typeof item === 'object' && item.id) {
                ids.push(parseInt(item.id));
              }
            });
          } else {
            if (data[key].id) {
              ids.push(parseInt(data[key].id));
            }
            extractIds(data[key]); // Recursive call for nested objects
          }
        }
      }
    }
  
    extractIds(data); // Start extracting IDs from the root data
  
    // Find the next available ID starting from 1
    let nextId = 1;
    while (ids.includes(nextId)) {
      nextId++;
    }
  
    return nextId;
  }


function toTitleCase(str) {

    const swaps = {
        str: "strength",
        dex: "dexterity",
        wis: "wisdom",
        con: "constitution",
        cha: "charisma",
        int: "intelligence",
        luk: "luck",
        soc: "society",
        psy: "psyche"
    }

for (const score in swaps){
    if(score === str){
        str = swaps[score]
    }
}

  // Insert spaces before capital letters (not at the start)
  const spaced = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Capitalize each word
  return spaced.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function filterDiv(div = textDiv, className = "noSave"){
// Clone the textDiv to avoid modifying the original content
let divClone = div.cloneNode(true);

// Remove elements with the class.
divClone.querySelectorAll(`.${className}`).forEach(element => element.remove());

// Now, extract the HTML content without elements with the class.
return divClone.innerHTML;
}

function captureGridSize(){

regionObj.cols = currentCols
regionObj.rows = currentRows

}

function emptyStoryteller(){

placeName.value = "";
placeSymbol.value = "";
textDiv.innerHTML = "";

}

function collectGarbage() {

}

function scrollConvert(input, option, X) {

//Give pixels to grid, and give percentages to scrollData.

const totalPixels = X === 'X'? grid.scrollWidth :  grid.scrollHeight;
    
    if(option === 'pixels') {
        return (input / 100) * totalPixels;
    } else if(option === 'percentage') {
        return (input / totalPixels) * 100;
    } else {
        throw new Error('Invalid option provided to scrollConvert');
    }

}

function getObj(coords){

let obj = EXCEL_DM.map.data.find(entry => entry.id === coords)

if(obj === undefined){
makeNewEntry();
obj = EXCEL_DM.map.data.find(entry => entry.id === coords);
}

currentObj = obj;
return obj

}

function getDiv(row, col){
const div = document.querySelector(`[row="${row}"][col="${col}"]`);
return div;
    
}

function getCurrentDiv(){

let id = idBox.textContent;
let row = returnRow(id);
let col = returnCol(id);

const div = document.querySelector(`[row="${row}"][col="${col}"]`);


return div;

}

function getCurrentEntry(){

    let id = idBox.textContent;

    const entry = EXCEL_DM.map.data.find(entry => entry.id === id)
    
    return entry;
    
    }

function goToEntry(id) {

emptyStoryteller()

let entry = getObj(id)


if(entry){
placeName.value = entry.name;
placeSymbol.value = entry.symbol? entry.symbol : entry.name.length !== ""? entry.name.charAt(0): "";
textDiv.innerHTML = entry.desc.trim();
idBox.textContent = entry.id;
}else{
idBox.textContent = id;
}

if(id !== '0.0'){
let div = getCurrentDiv();
changeCell(div)
}

}

function parseParent(str){

// Split the string into an array of numbers
const numbersArray = str.split('.');

if(numbersArray.length === 2){return str}

// Remove the last two elements
const trimmedArray = numbersArray.slice(0, -2);

// Join the remaining numbers back into a string
const resultString = trimmedArray.join('.');

return resultString


}

function returnRow(id){

const numbersArray = id.split('.');
const rowColArray = numbersArray.slice(-2); // Get the last two elements

const row = rowColArray[0]; // First part is the row

return row

}

function returnCol(id){

const numbersArray = id.split('.');
const rowColArray = numbersArray.slice(-2); // Get the last two elements

const col = rowColArray[1]; // Second part is the column

return col

}

function returnChords(id){

const numbersArray = id.split('.');
const coordsArray = numbersArray.slice(0, -2);

const coords = coordsArray.join('.')
return coords

}

function showPrompt(message) {
    return new Promise((resolve) => {
        const promptBox = document.getElementById('promptBox');
        const promptMsg = document.getElementById('promptMsg');

        promptBox.style.display = 'block';
        promptMsg.textContent = message;
        promptBox.focus();     

        Mousetrap.bind('y', () => cleanup(true));
        Mousetrap.bind('n', () => cleanup(false));

        function cleanup(result) {
            promptBox.style.display = 'none';
            Mousetrap.unbind('y');
            Mousetrap.unbind('n');
            resolve(result);
        }
    });
}

// Color Processing
function getColorAtPosition(x, y) {
    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const pixelColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    
    if (!regionObj.palette || regionObj.palette.length === 0) {
        return pixelColor;
    }
    
    return findClosestColor(pixelColor, regionObj.palette);
}

function colorToRGB(color) {
    if (color.startsWith('#')) {
        return hexToRGB(color);
    } else if (color.startsWith('rgb')) {
        return parseRGB(color);
    }
}

function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
}

function parseRGB(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return { r, g, b };
}

function findClosestColor(targetColor, palette) {
    let closestColor = palette[0].color;
    let minDistance = colorDistance(targetColor, closestColor);
    
    for (let i = 1; i < palette.length; i++) {
        const distance = colorDistance(targetColor, palette[i].color);
        if (distance < minDistance) {
            minDistance = distance;
            closestColor = palette[i].color;
        }
    }
    
    return closestColor;
}

function colorDistance(color1, color2) {
    const rgb1 = colorToRGB(color1);
    const rgb2 = colorToRGB(color2);
    
    return Math.sqrt(
        Math.pow(rgb1.r - rgb2.r, 2) +
        Math.pow(rgb1.g - rgb2.g, 2) +
        Math.pow(rgb1.b - rgb2.b, 2)
    );
}

function autoSpacing(text){

    try{
    text = text.replace(/\.\s/g, '.<br><br>');
    }catch{}
    
    // Replace periods at the end of the text with a period and two line breaks
    try{
    text = text.replace(/\.$/g, '.<br><br>');
    }catch{}
    
    // Update the innerHTML of the textDiv
    return text
   
}

function addCollapsibleEventListeners() {
    const headers = document.querySelectorAll('.collapsable .header');
    headers.forEach(header => {
        header.addEventListener('click', function() {
            if(currentMode !== 'map') return;
            const contentRows = header.parentElement.querySelectorAll('.content');
            contentRows.forEach(row => {
                row.style.display = row.style.display === 'none' ? '' : 'none';
            });
        });
    });
}


function delMap(){

    const hexes = document.querySelectorAll('.hex')
   
    hexes.forEach(hex => {
    const row = hex.getAttribute('row');
    const col = hex.getAttribute('col');
    const id = coords + '.' + row + '.' + col;
    
    EXCEL_DM.map.data = EXCEL_DM.map.data.filter(entry => entry.id !== id);
    
    })

    loadGrid()

    return ``;
    
    }

function rollContent(){

const table = document.getElementById("rollContentTable")

let content = {name: "", entry: ""}

const roll = rollDice(1,100);

const treasureRoll = rollDice(1,8).toString()

const contentTable = [
    { min: 1, max: 16,   symbol: "E", name: "Empty", content:""},
    { min: 17, max: 20,  symbol: "£", name: "Unguarded Treasure", content: rollTreasure(treasureRoll)},
    { min: 21, max: 60,  symbol: "M", name: "Monster", content: rollEncounter()},
    { min: 61, max: 84,  symbol: "L", name: "Monster with Treasure", content: `${rollTreasure(treasureRoll)}<br><hr><br>${rollEncounter()}`},
    { min: 85, max: 88,  symbol: "?", name: "Special", content:""},
    { min: 89, max: 96,  symbol: "^", name: "Trap", content:""},
    { min: 97, max: 100, symbol: "*", name: "Trap with Treasure", content:rollTreasure(treasureRoll)}
  ];

  for (const entry of contentTable) {
    if (roll >= entry.min && roll <= entry.max) {
      content.name = entry.name
      content.entry = `<h3 style='font-family:"Soutane"'>${entry.name}:</h3><br>${entry.content}<br>`;
      content.symbol = entry.symbol;
      break;
    }
  }

return content

}

function genMap(){

const hexes = document.querySelectorAll('.active')
let gened = []

hexes.forEach(hex => {

const roll = rollDice(1,20);

if(roll === 20){

const row = hex.getAttribute('row');
const col = hex.getAttribute('col');
const id = coords + '.' + row + '.' + col;

const exists = EXCEL_DM.map.data.find(entry => entry.id === id);

const rand = rollContent();

if(exists){

exists.symbol = rand.symbol;
exists.entry += rand.entry;

if(exists.name = ""){
exists.name = rand.name;
}

}else{

const saveEntry = {
    id: id,
    name: rand.name,
    symbol: rand.symbol,
    desc: rand.entry,
    grid: isHexMap? "hex" : "square",
    color: "rgb(15, 62, 97)",
    scrollData: scrollData,
    }
      
    
    EXCEL_DM.map.data.push(saveEntry);
    gened.push(saveEntry)

}
}

})

updateGrid();
return '' //JSON.stringify(gened, null, 2); 
;

}


function changeMapScale(){
    const scaleMeasure = coords.split(".")
    
    if(regionObj.grid === "square"){
    changeScale("1 Square approx. 10 Feet.") 
    } else if(scaleMeasure.length === 2){
    changeScale("1 Hex approx. 24 Leagues.")
    }else if(scaleMeasure.length === 4){
    changeScale("1 Hex approx. 1 League.") 
    }else if(scaleMeasure.length === 6){
    changeScale("1 Hex approx. 220 Yards.")  
    }else{
    changeScale("1 Hex approx. 30 Feet.")    
    }
}


