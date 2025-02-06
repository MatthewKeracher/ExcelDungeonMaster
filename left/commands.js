


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

function toggleModes() {

isPainting = true
handlePaint();

//EDIT MODE
if (currentMode === "edit") {
//Change Mode
modeBox.innerHTML = `<b>Edit Mode</b>`

//Change what displays
textDiv.contentEditable = true;
commandLine.style.display = "none";
placeName.readOnly = false;
placeSymbol.readOnly = false;

journalRight.contentEditable = true;
entryName.readOnly = false;

//Change colour
modeColor = "255,105,180";
toggleModeColor();

if(!journalShowing){
    textDiv.innerHTML += handleCommands();
    const textContent = textDiv.value;
    placeCaretAtEnd(textDiv)
    textDiv.scrollTop = textDiv.scrollHeight;
}else{
    journalRight.innerHTML += handleCommands();
    entryName.focus();
    entryName.select();

    if (event.target.matches('a#addNewEntry.entryLink')) {
    journalId.textContent = journalData.length + 1;
    }
}

//Change Content    
hitPointInit();


//MAP MODE
} else if(currentMode === "map"){
//Change Mode
modeBox.innerHTML = `<b>Map Mode</b>`

//Change what displays
textDiv.contentEditable = false;
commandLine.style.display = "none";
placeSymbol.readOnly = true;
placeName.readOnly = true;

journalRight.contentEditable = false;
entryName.readOnly = true;


//Change colour
modeColor = "0, 255, 0";
toggleModeColor();

//What is focused
textDiv.blur();
placeSymbol.blur();
placeName.blur();

if(journalShowing){
journalLeft.focus()
}

if(!journalShowing){
    textDiv.innerHTML += handleCommands();
    textDiv.scrollTop = textDiv.scrollHeight;
}else{
    journalRight.innerHTML += handleCommands();
}

//Change Content
hitPointInit();

//Save Content
let div = getCurrentDiv()
saveEntry(div);
saveData();

updateZoneNames();
//showNames();    

//COMMAND MODE
} else if(currentMode === "command"){
//Change Mode
modeBox.innerHTML = `<b>Command Mode</b>`

//Change what displays
textDiv.style.display = "block";
textDiv.contentEditable = false;
commandLine.style.display = "block";
placeSymbol.readOnly = true;
placeName.readOnly = true;

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

    if(commandLine.value === ''){return ''}

    let inputText = commandLine.value;
    commandLine.value = '';

    // Resolve nested commands before replacing other commands
    inputText = resolveNestedCommands(inputText);

    // Check for command types: roll, monster, or npc
    const commandRegex = /^(add|roll|monster|npc)\s+(.+)/i;
    const match = inputText.match(commandRegex);

    if (match) {
        const commandType = match[1].toLowerCase(); // roll, monster, npc
        const params = match[2].trim(); // The remaining text after the command type

        switch (commandType) {
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
        return '\n{Invalid command format}';
    }
}

function handleAddCommand(params) {
    const [addType, ...rest] = params.split(' ');
    switch (addType) {
        case 'line':
            return `<hr>`;
        case 'table':
            if (rest[0] === 'weapons') {
                return generateItemsTable(rest[0]);
            } else if (rest[0] === 'armor') {
                return generateItemsTable(rest[0]);  
            } else if (rest[0] === 'general') {
                return generateItemsTable(rest[0]);
            } else {
                handleTableCommand(rest.join(' '));
                }
            break;
        default:
            return '{Add command not recognized}';
    }
}

function handleTableCommand(params) {
    const [rows, cols] = params.split(' ').map(Number);
    if (isNaN(rows) || isNaN(cols)) {
        return '\n{Invalid table format. Use "add table rows cols"}';
    }
    return generateTable(rows, cols);
}

function generateTable(rows, cols) {
    let tableHTML = '<table border="1" style="border-collapse: collapse;">';
    for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cols; j++) {
            tableHTML += '<td contenteditable="true" style="min-width: 50px; min-height: 20px; padding: 5px;"></td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    return tableHTML;
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
    }

    return '\n{Invalid roll format. Use XdY format}';
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
    // Example: 'fighter 5 Rickshift'
    const npcRegex = /^(\w+)\s+(\d+)\s*(.*)/i;
    const match = params.match(npcRegex);

    if (match) {
        const npcClass = match[1].toLowerCase();
        const level = parseInt(match[2]);
        const npcName = match[3] ? match[3].trim() : undefined; // Name is optional
        return makeNPC(npcClass, level, npcName);
    }

    return '\n{Invalid NPC format. Use "Class Level [Name]"}';
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

// Roll dice function
function rollDice(numDice, diceSides) {
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total;
}





