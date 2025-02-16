let source

function expandConsole(){
    commandLine.style.height = '100%'
}

function toggleModeColor() {
    const root = document.documentElement;
    root.style.setProperty('--mode-color', `rgb(${modeColor})`);
    
    // Set the transparent color using rgba with 50% opacity
    root.style.setProperty('--mode-color-trans', `rgba(${modeColor}, 0.5)`);
}

function handleCheckboxClick(event) {
    const checkboxDiv = event.currentTarget; // Get the clicked checkbox div
    const container = checkboxDiv.parentElement; // Get the parent container
    const checkboxes = container.querySelectorAll('.hp-checkbox'); // Select all checkboxes within the same container

    // Uncheck all checkboxes in the container first
    checkboxes.forEach(checkbox => {
        checkbox.textContent = '☐'; // Change to unchecked box
        checkbox.classList.remove('checked'); // Remove checked class
    });

    // Check the clicked checkbox and all preceding ones
    let checkboxIndex = Array.from(checkboxes).indexOf(checkboxDiv);
    
    for (let i = 0; i <= checkboxIndex; i++) {
        const currentCheckbox = checkboxes[i];
        currentCheckbox.textContent = '☒'; // Change to checked box
        currentCheckbox.classList.add('checked'); // Optionally add a class for styling
    }

    if (checkboxIndex === checkboxes.length - 1) {
        // Change the color of all checkboxes to gray
        checkboxes.forEach(checkbox => {
            checkbox.style.color = 'gray'; // Set the color of all checkboxes to gray
        });
    } else {
        // Reset color for other checkboxes if not the last
        checkboxes.forEach(checkbox => {
            checkbox.style.color = modeColor; // Set the color of all checkboxes to gray
        });
    }
}

function hitPointInit() {
    // Select all checkbox divs
    const checkboxes = document.querySelectorAll('.hp-checkbox');

    // Remove existing event listeners by cloning the node and replacing the old one
    checkboxes.forEach(checkbox => {
        const newCheckbox = checkbox.cloneNode(true); // Clone the checkbox
        checkbox.parentNode.replaceChild(newCheckbox, checkbox); // Replace old checkbox with new one
        newCheckbox.addEventListener('click', handleCheckboxClick); // Add the click listener to the new checkbox
    });
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

//EDIT MODE
if (currentMode === "edit") {
//Change Mode 
modeBox.innerHTML = `<b>Edit Mode</b>`

//Change what displays
placeName.disabled = false;
placeSymbol.disabled = false;
textDiv.disabled = false;
textDiv.contentEditable = true;
commandLine.style.display = "none";

//Journal
entryName.disabled = false;
journalLeft.disabled = false;
journalRight.disabled = false;
journalLeft.contentEditable = true;
journalRight.contentEditable = true;

//scaleSelector.style.display = "block";
tabTables()

//Change colour
modeColor = "255,105,180";
toggleModeColor();

if(source){
source.innerHTML += handleCommands();
}else{
textDiv.innerHTML += handleCommands();  
}

if(!journalShowing){
trapFocus([placeSymbol, placeName, textDiv])
placeCaretAtEnd(textDiv)
textDiv.scrollTop = textDiv.scrollHeight;
}else{
trapFocus([journalLeft, journalRight]);

if(entryName.value !== ""){
journalLeft.focus()
}else{
entryName.focus();
}

}

//Change Content    
hitPointInit();


//MAP MODE
} else if(currentMode === "map"){
//Change Mode
modeBox.innerHTML = `<b>Map Mode</b>`

if(journalShowing){
autoSpacing(journalLeft);
autoSpacing(journalRight);
}else{
autoSpacing(textDiv)
}

//Change what displays
placeName.disabled = true;
placeSymbol.disabled = true;
textDiv.disabled = true;
textDiv.contentEditable = false;
commandLine.style.display = "none";

//Journal
entryName.disabled = true;
journalLeft.disabled = true;
journalRight.disabled = true;
journalLeft.contentEditable = false;
journalRight.contentEditable = false;

//Change colour
modeColor = "0, 255, 0";
toggleModeColor();

//What is focused
textDiv.blur();
placeSymbol.blur();
placeName.blur();
tabTables();

if(journalShowing){
journalSideBar.focus();
}

if(source){
source.innerHTML += handleCommands()
}else{
textDiv.innerHTML += handleCommands()
}


//Change Content
hitPointInit();

//Save Content
let div = getCurrentDiv()
saveEntry(div);
saveData();
updateGrid();

//COMMAND MODE
} else if(currentMode === "command"){
//Change Mode
source = activeDiv;
modeBox.innerHTML = `<b>Command Mode</b>`

//Change what displays
textDiv.style.display = "block";
placeName.disabled = true;
placeSymbol.disabled = true;
textDiv.disabled = true;
textDiv.contentEditable = false;
commandLine.style.display = "block";

//Journal
entryName.disabled = true;
journalLeft.disabled = true;
journalRight.disabled = true;
journalLeft.contentEditable = false;
journalRight.contentEditable = false;

//Change colour
modeColor = "265,165,0";
toggleModeColor();

//What is focused
commandLine.focus();

//Change Content
hitPointInit();

}
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
            return generateTableFromJSON(table)
        } else if (typeof parsedJSON === 'object') {
            let table = [parsedJSON]
            return generateTableFromJSON(table)
        }
    } catch (e) {
        // If it's not valid JSON, continue with command handling
    }

    // Resolve nested commands before replacing other commands
    inputText = resolveNestedCommands(inputText);

    // Check for command types: roll, monster, or npc
    const commandRegex = /^(add|roll|monster|npc|trim|show)\s+(.+)/i;
    const match = inputText.match(commandRegex);

    if (match) {
        const commandType = match[1].toLowerCase(); // roll, monster, npc
        const params = match[2].trim(); // The remaining text after the command type

        switch (commandType) {
            case 'show':
                return handleShowCommand(params);
            case 'trim':
                return handleTrimCommand(params);
            case 'add':
                return handleAddCommand(params);
            case 'roll':
                return handleRollCommand(params);
            case 'monster':
                return handleMonsterCommand(params);
            case 'npc':
                return handleNpcCommand(params);
            default:
                return '{Command not recognized}';
        }
    } else {
        return inputText; // Return raw input if no command is recognized
    }
}

function handleShowCommand(params) {




}

function handleTrimCommand(params) {
    const [table, ...rest] = params.split(' ');

    if (table === 'table') {
        const tables = document.querySelectorAll('.table');

        tables.forEach(table => {
            table.style.width = "100%"
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
    } else if(table === "text"){
        
    }else {
        
        const divsToDelete = document.querySelectorAll(table);

        divsToDelete.forEach(div => {
            div.remove();
        });

        return '';
    }
}

function handleAddCommand(params) {
    const [addType, table, section,  ...rest] = params.split(' ');
    switch (addType) {
        case 'table':
            if(isFinite(table)){
                console.log('making table')
                return handleTableCommand(params.slice(addType.length + 1));
            }else if (!section) {
                return generateTableFromJSON(table);
            } else if (section) {
                return generateTableFromJSON(table, section);
            } 
        default:
            return '{Add command not recognized}';
    }
}


function handleTableCommand(params) {
    let [rows, cols] = params.split(' ').map(Number);

    // Handle cases where only one number is provided
    if (!isNaN(rows) && isNaN(cols)) {
        cols = 1; // Default cols to 1 if not provided
    }

    // Validate input
    if (isNaN(rows) || isNaN(cols)) {
        return '\n{Invalid table format. Use "add table rows cols"}';
    }

    return generateTable(rows + 1, cols);
}

function generateTable(rows, cols) {
    let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';
    for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cols; j++) {
            if (i === 0) {
                // Add tableHeader class for the first row
                tableHTML += `<td contenteditable="false" tabindex="0" class="tableCell tableHeader"></td>`;
            } else {
                tableHTML += `<td contenteditable="false" tabindex="0" class="tableCell"></td>`;
            }
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    console.log(tableHTML)
    return tableHTML;
}


function tabTables(){

    const tables = document.querySelectorAll('.tableCell');
    
    if(currentMode === 'edit'){
    
    tables.forEach(table => {
    let currentCell = null;
    
    table.contentEditable = "true"
    table.setAttribute('tabindex', '0');
    
    table.addEventListener('keydown', function(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        
        if (!currentCell) {
          currentCell = table.querySelector('td');
        } else {
          currentCell = currentCell.nextElementSibling || currentCell.parentElement.nextElementSibling?.firstElementChild;
          if (!currentCell) {
            currentCell = table.querySelector('td');
          }
        }
        
        currentCell.focus();
        selectCellContents(currentCell);
      }
    });
    
    function selectCellContents(cell) {
      const range = document.createRange();
      range.selectNodeContents(cell);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    
    table.addEventListener('focus', function() {
      if (!currentCell) {
        currentCell = table.querySelector('td');
        currentCell.focus();
      }
    });
    
    table.addEventListener('blur', function() {
      currentCell = null;
    });
    
    });
    
    }else{
    tables.forEach(table => table.contentEditable = "false");
    }
    
    }
    


function handleRollCommand(params) {

    // Assume params will contain something like '1d20'
    const diceRegex = /^(\d+)d(\d+)$/i;
    const match = params.match(diceRegex);

    if (match) {
        const numDice = parseInt(match[1]);
        const diceSides = parseInt(match[2]);
        const rolledValue = rollDice(numDice, diceSides);
        return `<br><hr><br>You have rolled ${rolledValue} on ${numDice}d${diceSides}.<br>`;
    } else{

        const tableName = params.toLowerCase();
        const journalEntry = journalData.find(entry => entry.name.toLowerCase() === params);
        
        if (journalEntry) {
            // Create a temporary container
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = journalEntry.left + journalEntry.right;
        
            // Find the table with class 'table'
            const table = tempContainer.querySelector('.table');

            console.log(table)
        
            if (table && table.rows.length > 0) {
                // Return the first row
                return rollonTable(table)
            } else {
                console.log("Table or first row not found");
                return null;
            }
        } else {
            console.log("Journal entry not found");
            return null;
        }
        
    }

    return '\n{Invalid roll format. Use XdY format}';
}

function rollonTable(table) {
    if (!table || table.rows.length < 1) {
        return "<table><tr><td>Table is empty</td></tr></table>";
    }

    console.log(table)

    const firstRow = table.rows[0];
    const hasHeader = firstRow.cells[0].classList.contains('tableHeader');

    let headers = [];
    let startIndex = 0;

    if (hasHeader) {
        headers = Array.from(firstRow.cells).map(cell => cell.innerHTML.trim());
        startIndex = 1;
    }

    if (table.rows.length === startIndex) {
        return "<table><tr><td>Table has only headers</td></tr></table>";
    }

    // Get a random row (excluding the header row if it exists)
    const randomIndex = Math.floor(Math.random() * (table.rows.length - startIndex)) + startIndex;
    const selectedRow = table.rows[randomIndex];

    // Get the values of each cell in the selected row
    const cellValues = Array.from(selectedRow.cells).map(cell => cell.innerHTML.trim());

    let result = '<table class="table">';
    
    if (hasHeader) {
        // Add header row
        result += '<tr class="tableHeader tableCell">' + headers.map(header => `<th>${header}</th>`).join(' ') + '</tr>';
        // Add data row
        result += '<tr class="tableCell">' + cellValues.map(value => `<td>${value}</td>`).join('') + '</tr>';
    } else {
        // Just add the data row
        result += '<tr class="tableCell">' + cellValues.map(value => `<td>${value}</td>`).join('') + '</tr>';
    }

    result += '</table>';

    return result;
}


function handleMonsterCommand(params) {
    // Example: '3 Goblins'
    const monsterRegex = /^(\d+)\s+(.+)/i;
    const match = params.match(monsterRegex);

    if (match) {
        const numAppearing = parseInt(match[1]);
        const monsterName = match[2].trim();
        const monsterCounts = searchMonster(monsterName, numAppearing);
        return makeMonsterEntry(monsterCounts);
    }

    return '\n{Invalid monster format. Use "X MonsterName"}';
}


function handleNpcCommand(params) {
    // Example: 'human fighter 5 Rickshift'
    const npcRegex = /^(\w+)\s+(\w+)\s+(\d+)\s*(.*)/i;
    const match = params.match(npcRegex);

    if (match) {
        const race = match[1].toLowerCase();
        console.log(race)
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
        //text = text.replace(innerCommand, evaluatedResult);
    }

    return text;
}

// Dummy function to handle evaluation of inner commands
function evaluateInnerCommand(command) {
    // Further parsing or handling of inner commands if needed
    return `{Evaluated: ${command}}`;
}

// Roll dice function
function rollDice(numDice, diceSides) {
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total;
}





