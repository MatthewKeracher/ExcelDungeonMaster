let source

function expandConsole(){
    commandLine.style.height = '100%'
}

function toggleModeColor() {

    const modeColors = [
        {mode: "edit", color:"255,105,180"},
        {mode: "map", color:"0, 255, 0"},
        {mode: "command", color: "265,165,0"}
    ]
    
    const modeColor = modeColors.find(entry => entry.mode === currentMode).color;

    const root = document.documentElement;
    root.style.setProperty('--mode-color', `rgb(${modeColor})`);
    
    // Set the transparent color using rgba with 50% opacity
    root.style.setProperty('--mode-color-trans', `rgba(${modeColor}, 0.5)`);
}

function placeCaretAtEnd(el) {
    el.focus(); // Focus on the div
    const range = document.createRange();
    const selection = window.getSelection();
    
    range.selectNodeContents(el); // Select all the content
    range.collapse(false); // Collapse the range to the end
    selection.removeAllRanges(); // Remove any existing selections
    selection.addRange(range); // Add the new range (caret at the end)
}

function trapFocus(elements) {
    if (!elements || elements.length === 0) {
        console.warn("trapFocusBetweenElements called with an empty or null array of elements.");
        return;
    }
  
    const firstElement = elements[0];
    const lastElement = elements[elements.length - 1];
  
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            const isShiftTab = e.shiftKey;
  
            if (isShiftTab && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!isShiftTab && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
  }

function insertAtCaret(html) {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const fragment = document.createDocumentFragment();
    let node, lastNode;
    while ((node = tempDiv.firstChild)) {
        lastNode = fragment.appendChild(node);
    }

    range.insertNode(fragment);

    // Move the caret to the end of the inserted content
    if (lastNode) {
        range.setStartAfter(lastNode);
        range.setEndAfter(lastNode);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
  
function toggleModes(activeDiv) {
isPainting = true
handlePaint();

if(activeDiv){
const activeDivId = activeDiv.getAttribute("id");

if(activeDivId === "body"){activeDiv = ""};
}


if(currentMode){ //Default State

commandLine.style.display = "none";

entryName.disabled = true;   //Journal
explorerLeft.disabled = true;
explorerRight.disabled = true;
explorerLeft.contentEditable = false;
explorerRight.contentEditable = false;

placeName.disabled = true; //leftPanel
placeSymbol.disabled = true;
textDiv.disabled = true;
textDiv.contentEditable = false;

}

if (currentMode === "edit") { 

        textDiv.innerHTML = filterDiv(textDiv, "noSave")

        placeName.disabled = false; //leftPanel
        placeSymbol.disabled = false;
        textDiv.disabled = false;
        textDiv.contentEditable = true;
        
        entryName.disabled = false; //Journal
        explorerLeft.disabled = false;
        explorerRight.disabled = false;
        explorerLeft.contentEditable = true;
        explorerRight.contentEditable = true;

        updateTables();

                if(explorerShowing){

                trapFocus([explorerLeft, explorerRight]);

                if(entryName.value !== ""){
                explorerLeft.focus()
                }else{
                entryName.focus();
                }

                }else{

                textDiv.scrollTop = textDiv.scrollHeight;
                textDiv.focus();
                placeCaretAtEnd(textDiv)

                }


} else if(currentMode === "map"){ 

        //Change Mode
        let holdHTML = textDiv.innerHTML
        textDiv.innerHTML = filterDiv(textDiv, "noSave"); 


        textDiv.innerHTML = getWeather();
        textDiv.innerHTML += getNextEncounter();

        
        (async () => { //This should fix my big bug by waiting for handleCommands before disabling textDiv.
            const result = await handleCommands();
            if (source) {
              source.innerHTML += result;
            } else {
              textDiv.innerHTML += result;
            }
          })();

        
        textDiv.innerHTML += holdHTML;

        //What is focused
        placeName.blur();
        placeSymbol.blur();

            if(explorerShowing){
             explorerSideBar.focus();
            }else{
             textDiv.focus();
            }

        updateTables();

        //Save Content
        let div = getCurrentDiv();
        saveEntry(div);
        saveData();
        updateGrid();


} else if(currentMode === "command"){ 
    
    source = activeDiv; 

    textDiv.innerHTML = filterDiv(textDiv, "noSave")

        commandLine.style.display = "block";
        textDiv.style.display = "block";
        commandLine.focus();

}
        //Common Functions
          //hitPointInit();
          toggleModeColor();
}

function handleCommands() {
    let inputText = commandLine.value;
    commandLine.value = '';

    // Check if the input is valid JSON
    try {
        const parsedJSON = JSON.parse(inputText);

        // If it's valid JSON, generate a table and return it
        if (Array.isArray(parsedJSON)) {
            let table = parsedJSON
            return tableFromJSON(table)
        } else if (typeof parsedJSON === 'object') {
            let table = [parsedJSON]
            return tableFromJSON(table)
        }
    } catch (e) {
        // If it's not valid JSON, continue with command handling
    }

     // Check if the input is the name of a function and run it if it is
     if (typeof window[inputText] === 'function') {
        return window[inputText]();
    }

     // Check if the input is a function call with parameters and run it if it is
     const functionCallRegex = /^(\w+)\((.*)\)$/;
     const functionMatch = inputText.match(functionCallRegex);
     if (functionMatch) {
         const functionName = functionMatch[1];
         const paramsString = functionMatch[2];
         const params = paramsString.split(',').map(param => param.trim().replace(/^["']|["']$/g, '')); // Split and trim parameters
 
         if (typeof window[functionName] === 'function') {
             return window[functionName].apply(null, params);
         }
     }

    // Resolve nested commands before replacing other commands
    //inputText = resolveNestedCommands(inputText);

    // Check for command types: roll, monster, or npc
    const commandRegex = /^(>|return|elvish|make|roll|monster|spell|npc|trim|get)\s+(.+)/i;
    const match = inputText.match(commandRegex);

    if (match) {
        const commandType = match[1].toLowerCase(); // roll, monster, npc
        const params = match[2].trim(); // The remaining text after the command type

        switch (commandType) {
            case '>':
                return handleDoCommand(params);
            case 'return':
                return handleReturnCommand(params);
            case 'trim':
                return handleTrimCommand(params);
            case 'make':
                return handleMakeCommand(params);
            case 'get':
                return handleGetCommand(params);
            case 'roll':
                return handleRollCommand(params);
            case 'monster':
                return handleMonsterCommand(params);
            case 'spell':
                return handleSpellCommands(params);     
            case 'npc':
                return handleNpcCommand(params);
            case 'elvish':
                return handleElvish(params);
            default:
                return '{Command not recognized}';
        }
    } else {
        return inputText; // Return raw input if no command is recognized
    }
}

function handleElvish(params){

const html = `<span style="font-family:'elvish'"> ${params} </span>`;
return html

}

function updateResults(source = textDiv) {
   
    let results = worldGen();
    source.innerHTML = results
    
}

let intervalId;

function handleDoCommand(params){

const [command, ...rest] = params.split(' ');

switch (command) {
    case 'save':
        handleExport();
        return ``
    case 'load':
        handleLoad();
        return ``
    case 'clear':
        handleClear();
        return ``
    case 'new':
        handleNew();
        return ``  
    case 'grid':
         handleGrid();
    case 'print':
        handlePrint(rest[0]);
         return ``
    case 'move':
         handleMove(rest[0]);
         return ``
    case 'start':
        if (!intervalId) { // Prevent multiple intervals from being set
            textDiv.innetHTML = worldGen();
            intervalId = setInterval(updateResults, 50);
            }
        return `` 
    case 'stop':
        if (intervalId) { // Check if the interval is running
            clearInterval(intervalId); // Stop the existing interval
            intervalId = null; // Reset the interval ID
            
        }
        return ``            
    default:
        return '{Command not recognized}';
}


}

function handlePrint(params){

console.log(EXCEL_DM.journal[params])

}

function handleReturnCommand(params) {
    try {
        // Evaluate the query and return the results
        const result = eval(params);
        return JSON.stringify(result, null, 2); // Format the result as a JSON string for better readability
    } catch (e) {
        return `Error: ${e.message}`;
    }
}

function handleTrimCommand(params) {
    const [firstParam, ...rest] = params.split(' ');

    if (firstParam === 'table') {
        const tables = document.querySelectorAll('.table');

        tables.forEach(table => {
            
            const rows = table.rows;
            if (rows.length === 0) return;

            const colsToRemove = [];
            const rowsToRemove = [];
            const colCount = rows[0].cells.length;

            // Check for empty columns
            for (let colIndex = 0; colIndex < colCount; colIndex++) {
                let isEmpty = true;

                for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                    const cell = rows[rowIndex].cells[colIndex];
                    if (cell && cell.textContent.trim() !== '') {
                        isEmpty = false;
                        break;
                    }
                }

                if (isEmpty) {
                    colsToRemove.push(colIndex);
                }
            }

            // Remove columns from the end to avoid index shifting issues
            for (let i = colsToRemove.length - 1; i >= 0; i--) {
                const colIndex = colsToRemove[i];
                for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                    rows[rowIndex].deleteCell(colIndex);
                }
            }

            // Check for empty rows
            for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
                let isEmpty = true;

                for (let colIndex = 0; colIndex < rows[rowIndex].cells.length; colIndex++) {
                    const cell = rows[rowIndex].cells[colIndex];
                    if (cell && cell.textContent.trim() !== '') {
                        isEmpty = false;
                        break;
                    }
                }

                if (isEmpty) {
                    rowsToRemove.push(rowIndex);
                }
            }

            // Remove rows from the end to avoid index shifting issues
            for (let i = rowsToRemove.length - 1; i >= 0; i--) {
                const rowIndex = rowsToRemove[i];
                table.deleteRow(rowIndex);
            }

            
            
            

        }); 

        return '';
    } else if(firstParam === "text"){
        
    }else {
        
        const divsToDelete = document.querySelectorAll(firstParam);

        divsToDelete.forEach(div => {
            div.remove();
        });

        return '';
    }
}

function handleMakeCommand(params) {
    const [makeType, number,  ...rest] = params.split(' ');
    
    switch (makeType) {
        case 'table':
            if(isFinite(number)){
                return handleTableCommand(params.slice(makeType.length + 1));
            } 
        break;
        case 'sort':
            if(isFinite(number)){
                return makeSortButton(number);
            } else{
                return makeSortButton(1);
            }
        break;
        default:
            return '{Make command not recognized}';
    }
}

function makeSortButton(order) {
    let button = `<button class="button" onclick="sortTables(${order})">Sort</button>`;
    return button;
}



function handleGetCommand(params) {
    const [section, subSection, chance = 100, ...rest] = params.split(' ');

    if (!section) return '{Get command not recognized}';

    const parsedChance = isFinite(chance) ? Number(chance) : 100;
    
    return tableFromJSON(section, subSection, parsedChance);
}


function findObjectByName(objectName) {
    
    if (window[objectName]) {
        return window[objectName];
    } else {
        return null; // Object not found
    }
}

function flattenObject(obj) {
    const result = [];

    function recurse(current, property) {
        if (Object(current) !== current) {
            result.push({ [property]: current });
        } else if (Array.isArray(current)) {
            for (let i = 0, l = current.length; i < l; i++) {
                recurse(current[i], property ? `${property}.${i}` : `${i}`);
            }
            if (l === 0) {
                result.push({ [property]: [] });
            }
        } else {
            let isEmpty = true;
            for (const p in current) {
                isEmpty = false;
                recurse(current[p], property ? `${property}.${p}` : p);
            }
            if (isEmpty && property) {
                result.push({ [property]: {} });
            }
        }
    }

    recurse(obj, '');
    return result;
}


    
    
function handleRollCommand(params) {
    // Assume params will contain something like '1d20'
    const dice = parseDice(params)

    if (dice) {  
        const rolledValue = rollDice(dice.numDice, dice.diceSides, dice.multiplier);
        return `<div class="noSave"> > You have rolled a <b>${rolledValue}</b> on ${params}.<br><br><hr><br></div>`; 
    } 

    }



function searchFor(name, array) {

    const searchWords = name.toLowerCase().replace(/,/g, ' ').split(' ');
        
    // Search for the closest match based on the number of matching words
    let matches = [];

    array.forEach(entry => {
        const words = entry.name.toLowerCase().replace(/,/g, ' ').split(' ');
        const matchCount = searchWords.reduce((count, word) => {
            return count + (words.includes(word) ? 1 : 0);
        }, 0);

        if (matchCount === searchWords.length) {
            matches.push(entry);
        }
    });

    console.log(name, matches)

    return matches[0];
}

function find(name, array) {
    const found = searchFor(name.toString(), eval(array));
    
    if (!found) {
    return `<p>No entry found for name: ${name}.</p>`;
    }
    
    let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';
    
    // Generate table headers
    tableHTML += '<thead><tr>';
    tableHTML += '<th class="tableCell tableHeader">Key</th>';
    tableHTML += '<th class="tableCell tableHeader">Value</th>';
    tableHTML += '</tr></thead>';
    
    // Generate table body
    tableHTML += '<tbody>';
    for (const key in found) {
    tableHTML += '<tr>';
    tableHTML += `<td class="tableCell">${key}</td>`;
    tableHTML += `<td class="tableCell">${found[key]}</td>`;
    tableHTML += '</tr>';
    }
    tableHTML += '</tbody></table>';
    
    return tableHTML;
    }



function handleMonsterCommand(params) {
    const [searchTerms, number] = params.trim().split(',');

    if (searchTerms) {
        let monster = searchFor(searchTerms, monsters);
        
    
        if (monster && number && !isNaN(number)) {
            const num = parseInt(number);
            return makeMonsterEntry(monster, num);
        } else {
            return makeMonsterEntry(monster);
        }
    }
}

function handleNpcCommand(params) {
    // Example: 'human fighter 5 Rickshift'
    const npcRegex = /^(\w+)\s+(\w+)\s+(\d+)\s*(.*)/i;
    const match = params.match(npcRegex);

    if (match) {
        const race = match[1].toLowerCase();
        
        const npcClass = match[2].toLowerCase();
        const level = parseInt(match[3]);
        const npcName = match[3] ? match[4].trim() : undefined; // Name is optional
        return makeNPC(race, npcClass, level, npcName);
    }

    return '\n{Invalid NPC format. Use "Race Class Level [Name]"}';
}

// Function to resolve nested commands
function resolveNestedCommands(text) {
    const commandRegex = /{([^{}]+)}/g; // Matches outer braces
    let match;

    while ((match = commandRegex.exec(text)) !== null) {
        const innerCommand = match[0]; // Full match with braces
        const innerContent = match[1].trim(); // Content without braces

        // Evaluate the inner command and replace it with its result
        const evaluatedResult = evaluateInnerCommand(innerContent);
        text = text.replace(innerCommand, evaluatedResult);
    }

    return text;
}

// Dummy function to handle evaluation of inner commands
function evaluateInnerCommand(command) {
    // Further parsing or handling of inner commands if needed
    return `{Evaluated: ${command}}`;
}



//Economics Logic
function ammendPrices(cost,  inflation, randomDistribution = false) {
    // let inflation = regionObj && regionObj.settings && 
    // regionObj.settings.inflation ?
    // regionObj.settings.inflation : 1;

    cost = parseFloat(cost);
    cost = cost * 10; // Convert to oras (0.05 -> 5)  
    cost = Math.ceil(cost * (1 + inflation / 100));
    const oraCost = cost

    const conversionRates = {
        'Etos': 336,
        'Examino': 168,
        'Zoti': 28,
        'Evdo': 7,
        'Ora': 1
    };

    let coinCounts = {
        'Etos': 0,
        'Examino': 0,
        'Zoti': 0,
        'Evdo': 0,
        'Ora': 0
    };

    if (randomDistribution) {
        while (cost > 0) {
            let availableCurrencies = Object.entries(conversionRates).filter(([_, rate]) => rate <= cost);
            if (availableCurrencies.length === 0) break;

            let [currency, rate] = availableCurrencies[Math.floor(Math.random() * availableCurrencies.length)];
            let count = Math.floor(Math.random() * Math.floor(cost / rate)) + 1;
            
            coinCounts[currency] += count;
            cost -= count * rate;
        }
    } else {
        for (let [currency, rate] of Object.entries(conversionRates)) {
            if (cost >= rate) {
                let count = Math.floor(cost / rate);
                coinCounts[currency] += count;
                cost %= rate;
            }
        }
    }

    let result = Object.entries(coinCounts)
        .filter(([_, count]) => count > 0)
        .map(([currency, count]) => `${count} ${currency}`);

    const denomPrice = result.join(', ');
    const returnValue = randomDistribution === true? denomPrice : oraCost;

    return returnValue
}








