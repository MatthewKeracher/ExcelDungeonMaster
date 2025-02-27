// Roll dice function
function rollDice(numDice, diceSides) {
  let total = 0;
  for (let i = 0; i < numDice; i++) {
      total += Math.floor(Math.random() * diceSides) + 1;
  }
  return total;
}


function filterNoSave(div = textDiv){
// Clone the textDiv to avoid modifying the original content
let divClone = div.cloneNode(true);

// Remove elements with the class 'noSave'
divClone.querySelectorAll('.noSave').forEach(element => element.remove());

// Now, extract the HTML content without elements with the class 'noSave'
console.log(divClone.innerHTML)
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
    const totalTrash = data.length;
    //data = data.filter(entry => entry.rows !== null || entry.cols !== null);
    //console.log(data[0]);
    //console.log('Deleted ' + (totalTrash - data.length) + ' entries');

    // let i = 0

    // data.forEach(entry => {
    //     if (entry.palette === defaultData.palette) {
            
    //         delete entry.palette;
    //         i++
    //     }
    // });

    // console.log('Deleted ' + i+ ' palettes.')

    const coordCount = {};
    data.forEach(entry => {
        if (coordCount[entry.coords]) {
            coordCount[entry.coords]++;
        } else {
            coordCount[entry.coords] = 1;
        }
    });

    const duplicateCount = Object.values(coordCount).filter(count => count > 1).length;
    //console.log('Number of entries with duplicate coords: ' + duplicateCount);
}

function scrollConvert(input, option, X) {

//Give pixels to grid, and give percentages to scrollData.
//console.log(input, option, X)
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

let obj = data.find(entry => entry.id === coords)

if(obj === undefined){
makeNewEntry();
obj = data.find(entry => entry.id === coords);
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

    const entry = data.find(entry => entry.id === id)
    
    return entry;
    
    }

function goToEntry(id) {

emptyStoryteller()

let entry = getObj(id)
console.log(entry)

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

function autoSpacing(div){

    let text = div.innerHTML;

    text = text.replace(/\.\s/g, '.<br><br>');
    
    // Replace periods at the end of the text with a period and two line breaks
    text = text.replace(/\.$/g, '.<br><br>');
    
    // Update the innerHTML of the textDiv
    div.innerHTML = text;


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

function getColumnCells(table, columnName) {
    const rows = table.rows;
    const cells = [];
    let columnIndex = -1;

    // Find the index of the specified column
    const headerRow = rows[0];
    for (let i = 0; i < headerRow.cells.length; i++) {
        if (headerRow.cells[i].textContent.trim() === columnName) {
            columnIndex = i;
            break;
        }
    }

    // If the column is found, collect its cells
    if (columnIndex !== -1) {
        for (let i = 1; i < rows.length; i++) {
            const cell = rows[i].cells[columnIndex];
            if (cell) {
                cells.push(cell);
            }
        }
    }

    return cells;
}

function trackTime(number = 1) {
    let container = document.createElement('div');
    container.style.width = "100%"; 
   
    container.innerHTML += 
    `<span style="font-size: 18px; font-family: 'SoutaneBlack';">Symbol Key</span><br><b>W:</b> Wandering Monster Check<br><b>T:</b> Torch Expires<br><b>L:</b> Lantern Oil Expires<br><b>R:</b> Party Must Rest for 1 Turn<br><br>`

    for (let j = 0; j < number; j++) {
        let numGroups = 24;
        let groupHeader = document.createElement('h4');
        groupHeader.style.fontFamily = "SoutaneBlack";

        for (let k = 0; k < numGroups; k++) {
            let groupContainer = document.createElement('span');
            groupContainer.style.display = "inline-block";
            groupContainer.style.width = "auto"; 
            groupContainer.style.marginRight = "10px";
            container.appendChild(groupContainer);

            for (let i = 0; i < 6; i++) {
                let checkboxWrapper = document.createElement('div');
                checkboxWrapper.style.display = "inline-block";
                checkboxWrapper.style.width = "calc(100% / 6)";
                checkboxWrapper.style.textAlign = "center";
                checkboxWrapper.style.width = "20px"; // Adjust width as needed

                // Add symbol above checkbox
                let symbol = document.createElement('span');
                symbol.textContent = getSymbol(i); // Function to determine the symbol based on index
                symbol.style.fontSize = "14px"; // Adjust size as needed
                checkboxWrapper.appendChild(symbol);

                const checkbox = document.createElement('div');
                checkbox.textContent = '☐'; // Set the initial state to unchecked
                checkbox.classList.add('hp-checkbox'); // Add a class for styling
                checkbox.style.fontSize = "26px";
                checkbox.addEventListener('click', handleCheckboxClick); // Attach the click event listener
                checkboxWrapper.appendChild(checkbox); // Add the checkbox to the wrapper
                groupContainer.appendChild(checkboxWrapper); // Add the wrapper to the group container
            }
        }
    }

    container.innerHTML += `<br><br><span style="font-size: 18px; font-family:'SoutaneBlack';">Time</span><br><b>Rounds:</b>10 Seconds<br><b>Minutes:</b>6 Rounds<br><b>Turns:</b>10 Minutes<br><b>Hours:</b>6 Turns<br>`

    container.innerHTML += `<br><span style="font-size: 18px; font-family:'SoutaneBlack';">Common Durations</span><br><b>Torch:</b> 6 Turns (1 Hour)<br><b>Lantern:</b> 24 Turns (4 Hours)<br><b><i>Light</i>(C):</b> 12 Turns (2 Hours)<br><b><i>Light</i>(MU):</b> 6 Turns + 1/Level<br><b>Potion:</b> 1d6 + 6 turns<br><b>Burning Oil Pool:</b> 1 turn`
    
    return container.outerHTML; // Return the container with the groups of checkboxes
}

// Example function to determine the symbol based on index
function getSymbol(index) {
    const symbols = ['W', '*', 'W', '*', 'W', 'R,T'];
    return symbols[index];
} 


function delMap(){

    const hexes = document.querySelectorAll('.hex')
   
    hexes.forEach(hex => {
    console.log(hex)
    const row = hex.getAttribute('row');
    const col = hex.getAttribute('col');
    const id = coords + '.' + row + '.' + col;
    
    data = data.filter(entry => entry.id !== id);
    
    })

    updateGrid()

    return ``;
    
    }

function rollContent(){

const table = document.getElementById("rollContentTable")

let content = {name: "", entry: ""}

const roll = rollDice(1,100);

const contentTable =  [
    { range: { min: 1, max: 3 }, bonus: -3 },
    { range: { min: 4, max: 5 }, bonus: -2 },
    { range: { min: 6, max: 8 }, bonus: -1 },
    { range: { min: 9, max: 12 }, bonus: 0 },
    { range: { min: 13, max: 15 }, bonus: 1 },
    { range: { min: 16, max: 17 }, bonus: 2 },
    { range: { min: 18, max: 18 }, bonus: 3 },
    ];


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

const exists = data.find(entry => entry.id === id);

const rand = rollContent();

if(exists){

exists.symbol = '?'

if(exists.name === ""){
exists.name === rand.name;
}

}else{

const saveEntry = {
    id: id,
    name: rand.name,
    symbol: "?",
    desc: rand.entry,
    grid: isHexMap? "hex" : "square",
    color: currentColor,
    scrollData: scrollData,
    }
      
    
    data.push(saveEntry);
    gened.push(saveEntry)

}
}

})

updateGrid();
return JSON.stringify(gened, null, 2); 
;

}


function changeMapScale(){
    const scaleMeasure = coords.split(".")
    
    if(regionObj.grid === "square"){
    changeScale("1 Square approx. 5 Feet.") 
    } else if(scaleMeasure.length === 2){
    changeScale("1 Hex approx. 24 Leagues.")
    }else if(scaleMeasure.length === 4){
    changeScale("1 Hex approx. 1 League.") 
    }else if(scaleMeasure.length === 6){
    changeScale("1 Hex approx. 660 Feet.")  
    }else{
    changeScale("1 Hex approx. 30 Feet.")    
    }
}


const weatherTable = {

  "Winter": [
  {
  "weather": "Blizzard",
  "range": { "min": 1, "max": 1 },
  "description": "At the end of every hour spend in a Blizzard, make a DC 12 Constitution saving. On failure, you take 3d4 cold damage and gain one level of exhaustion. You make this check with advantage if you have proper gear.\n\nAll creatures are heavily obscured if they are more than 20 feet from you. All terrain is difficult terrain. Also has the effect of Snow, High Winds, and Freezing Cold.\n\nReplace with Thunderstorm when in climates without snow."
  },
  {
  "weather": "Snow/Rain",
  "range": { "min": 2, "max": 20 },
  "description": "Unpleasant to travel in. All travel speed is halved. If snow occurs for two days in row, all terrain is difficult terrain and wagon travel is impossible until one day without snow passes. Also has the the effect of Heavy Clouds and Freezing Cold.\n\nReplace with Rain when in climates without snow."
  },
  {
  "weather": "Freezing Cold",
  "range": { "min": 21, "max": 30 },
  "description": "If you attempt to take a long rest without cover and heat, you must make a DC 15 Constitution saving throw gain the benefits for a long rest. If you fail by 5 or more, you gain an additional level of Exhaustion.\n\nAll cold damage rolls have a +2."
  },
  {
  "weather": "Heavy Clouds",
  "range": { "min": 31, "max": 40 },
  "description": "\n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
  },
  {
  "weather": "Light Clouds",
  "range": { "min": 41, "max": 60 },
  "description": "None."
  },
  {
  "weather": "Clear Skies",
  "range": { "min": 61, "max": 99 },
  "description": "None."
  },
  {
  "weather": "Strange Phenomena",
  "range": { "min": 100, "max": 100 },
  "description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
  }
  ],
  "Spring": [
  {
  "weather": "Thunderstorm",
  "range": { "min": 1, "max": 2 },
  "description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Also has the effect of Rain, High Winds, Heavy Clouds."
  },
  {
  "weather": "Heavy Rain",
  "range": { "min": 3, "max": 5 },
  "description": "Same as rain, but the DC becomes 16 to benefit from a long rest without shelter and if Heavy Rain occurs two days in a row wagon travel becomes impossible until one day without rain occurs. May cause flooding.\n\nAll fire damage rolls have a –4. Lightning and Cold damage rolls gain a +2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
  },
  {
  "weather": "Rain",
  "range": { "min": 6, "max": 20 },
  "description": "Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
  },
  {
  "weather": "Light Clouds",
  "range": { "min": 21, "max": 50 },
  "description": "None."
  },
  {
  "weather": "Clear Skies",
  "range": { "min": 51, "max": 80 },
  "description": "None."
  },
  {
  "weather": "High Winds",
  "range": { "min": 81, "max": 90 },
  "description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
  },
  {
  "weather": "Scorching Heat",
  "range": { "min": 91, "max": 99 },
  "description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
  },
  {
  "weather": "Strange Phenomena",
  "range": { "min": 100, "max": 100 },
  "description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
  }
  ],
  "Summer": [
  {
  "weather": "Thunderstorm",
  "range": { "min": 1, "max": 1 },
  "description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Also has the effect of Rain, High Winds, Heavy Clouds."
  },
  {
  "weather": "Rain",
  "range": { "min": 2, "max": 5 },
  "description": "Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
  },
  {
  "weather": "Light Clouds",
  "range": { "min": 6, "max": 30 },
  "description": "None."
  },
  {
  "weather": "Clear Skies",
  "range": { "min": 31, "max": 80 },
  "description": "None."
  },
  {
  "weather": "High Winds",
  "range": { "min": 81, "max": 85 },
  "description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
  },
  {
  "weather": "Scorching Heat",
  "range": { "min": 86, "max": 99 },
  "description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
  },
  {
  "weather": "Strange Phenomena",
  "range": { "min": 100, "max": 100 },
  "description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
  }
  ],
  "Autumn": [
  {
  "weather": "Thunderstorm",
  "range": { "min": 1, "max": 2 },
  "description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Also has the effect of Rain, High Winds, Heavy Clouds."
  },
  {
  "weather": "Snow/Rain",
  "range": { "min": 3, "max": 10 },
  "description": "Unpleasant to travel in. All travel speed is halved. If snow occurs for two days in row, all terrain is difficult terrain and wagon travel is impossible until one day without snow passes. Also has the the effect of Heavy Clouds and Freezing Cold.\n\nReplace with Rain when in climates without snow."
  },
  {
  "weather": "Heavy Clouds",
  "range": { "min": 11, "max": 20 },
  "description": "\n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
  },
  {
  "weather": "Light Clouds",
  "range": { "min": 21, "max": 50 },
  "description": "None."
  },
  {
  "weather": "Clear Skies",
  "range": { "min": 51, "max": 70 },
  "description": "None."
  },
  {
  "weather": "High Winds",
  "range": { "min": 71, "max": 90 },
  "description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
  },
  {
  "weather": "Scorching Heat",
  "range": { "min": 91, "max": 99 },
  "description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
  },
  {
  "weather": "Strange Phenomena",
  "range": { "min": 100, "max": 100 },
  "description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
  }
  ]
  }
  
  const strangePhenomena = [
  {
  "roll": 1,
  "name": "Ashfall",
  "description": "Heavy white clouds of swirling smoke fill the sky, and it rains ash that coats everything in little flecks. A smell of burning wood or sulphur permeates the air. Also has the the effect of Heavy Clouds. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. Smell of burning wood or sulphur permeates the air.",

  },
  {
  "roll": 2,
  "name": "Solar Eclipse",
  "description": "For 1 hour during the day, it becomes night. Either select a dramatic time or roll a d12 for the hour. May or may not have prophetic ramifications. For 1 hour during the day, it becomes night. Possible prophetic ramifications.",
 
  },
  {
  "roll": 3,
  "name": "Strange Lights",
  "description": "Strange swirling lights fill the sky, swirls of green, blue, and purple. Night becomes dim (strangely hued) light until the effect ends. Night becomes dim (strangely hued) light until the effect ends.",

  },
  {
  "roll": 4,
  "name": "Meteor Shower",
  "description": "Stars begin to fall from the sky as lumps of stone and metal. All creatures gain 1 luck point as per the Lucky feat, which lasts until used or the weather changes. All creatures gain 1 luck point as per the Lucky feat, which lasts until used or the weather changes.",
  "travel_effect": "If you travel 4 or more hours outdoors through this weather, roll a d100. On a 1, a meteor strikes nearby, leaving 40d6 of devastation in it's wake. Potential consequences: 2d12 damage from the shock wave, difficult terrain, or heavily obscuring dust clouds.",
 
  },
  {
  "roll": 5,
  "name": "Malevolent Storm",
  "description": "Has the effects of a Thunderstorm, but the lightning seems to seek creatures out. Has the effects of a Thunderstorm. The lightning seems to seek creatures out. While outside during this storm, roll a d20 every 1 hour you outside without shelter. On a 2-5, you are struck by a lightning bolt dealing 3d12 lightning damage. On a 1, you are attacked by an air elemental.",
  },
  {
  "roll": 6,
  "name": "Wild Magic Storm",
  "description": "Fluctuations in the weave drive strange flashing lights and odd phenomena sweeping across the world. Rain falls upwards, plants bloom unseasonable, and people see apparitions of the dead and gone. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge as per a Wild Magic Sorcerer class feature until the storm subsides.",
  }
  ]
  
  
  function rollWeather(chance){

 let roll1 = rollDice(1, 100);

  if(roll1 > chance){return}
  const roll2 = rollDice(1, 100);
  const seasonData = weatherTable[season];
    
  for (const entry of seasonData) {
  if (roll2 >= entry.range.min && roll2 <= entry.range.max) {
  weather = entry;
  
  break; // Exit the loop once a matching weather is found
  }
  }
  
  if(weather.name === "Strange Phenomena"){
  
  const roll3 = rollDice(1,6)
  let strangePhenomenaEntry = strangePhenomena.find(entry => entry.roll === roll3);
  weather = strangePhenomenaEntry
  
  }
  
  changeWeather(weather.weather)
  
  }

  function getRandomEncounters(){

    let HTML = `<div class="noSave"><b>Weather Effects:</b> ${weather.description} <br><br><hr><br></div>` 

    return HTML
  }
  
  rollWeather(100);
  console.log(weather)
