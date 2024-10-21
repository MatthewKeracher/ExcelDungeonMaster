


function toggleModeColor() {
    const root = document.documentElement;
    root.style.setProperty('--mode-color', modeColor);
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


function toggleModes() {
isPainting = true
handlePaint();

//EDIT MODE
if (currentMode === "edit") {
//Change Mode
modeBox.innerHTML = `<b>Edit Mode</b>`

//Change what displays
writeBox.style.display = "block";
textDiv.style.display = "none";
commandLine.style.display = "none";
placeName.readOnly = false;

//Change colour
modeColor = "hotpink";
toggleModeColor();

//What is focused
writeBox.focus();

//Change Content
writeBox.value += handleCommands();
const textContent = writeBox.value;
writeBox.setSelectionRange(textContent.length, textContent.length);
writeBox.scrollTop = writeBox.scrollHeight;

//Change Content
textDiv.innerHTML = ``;
textDiv.innerHTML = writeBox.value;
hitPointInit();




//MAP MODE
} else if(currentMode === "map"){
//Change Mode
modeBox.innerHTML = `<b>Map Mode</b>`

//Change what displays
writeBox.style.display = "none";
textDiv.style.display = "block";
commandLine.style.display = "none";
placeName.readOnly = true;

//Change colour
modeColor = "lime";
toggleModeColor();

//What is focused
writeBox.blur();

//Change Content
writeBox.value += handleCommands();
const textContent = writeBox.value;
writeBox.setSelectionRange(textContent.length, textContent.length);

//Change Content
textDiv.innerHTML = ``;
textDiv.innerHTML = writeBox.value;
hitPointInit();
textDiv.scrollTop = textDiv.scrollHeight;

//Save Content
saveEntry();
updateCellNames();
updateHexNames();


//COMMAND MODE
} else if(currentMode === "command"){
//Change Mode
modeBox.innerHTML = `<b>Command Mode</b>`

//Change what displays
writeBox.style.display = "none";
textDiv.style.display = "block";
commandLine.style.display = "block";
placeName.readOnly = true;

//Change colour
modeColor = "orange";
toggleModeColor();

//What is focused
commandLine.focus();

//Change Content
textDiv.innerHTML = ``;
textDiv.innerHTML = writeBox.value;
hitPointInit();

}
}

function handleCommands() {
    let inputText = commandLine.value;

    // Resolve nested commands before replacing other commands
    inputText = resolveNestedCommands(inputText);

    // Adjusted regex to properly capture command types and parameters
    inputText = inputText.replace(/(roll|monster|npc)\s*([\w\s\d]+)(?:\s+([^{}]+))?\s*/gi, function(_, commandType, params, paramName) {
        // Remove any surrounding whitespace from paramName if it exists
        if (paramName) {
            paramName = paramName.trim(); // Clean whitespace around the name
        }

        // Ensure params is defined; otherwise, assign an empty string
        params = params ? params.trim() : ''; // Trim whitespace from params
        const paramArray = params.split(/\s+/); // Split params into an array

        // Include the name in the params array if it exists
        if (paramName) {
            paramArray.push(paramName); // Add name to the end of the params array
        }

        switch (commandType.toLowerCase()) {
            case 'roll':
                console.log('roll');
                return handleRollCommand(paramArray);
            case 'monster':
                console.log('monster');
                return handleMonsterCommand(paramArray);
            case 'npc':
                console.log('npc');
                return handleNpcCommand(paramArray);
            default:
                return '{Command not recognised}';
        }
    });

    commandLine.value = "";
    return inputText; // Update the input box with the processed text
}



// Function to handle roll commands
function handleRollCommand(paramArray) {
// Assuming paramArray will contain something like ['1d20'] or ['1', 'd20']
const diceString = paramArray.join(' ');

// Extract the number of dice and sides from the string
const match = diceString.match(/(\d+)d(\d+)/);
if (match) {
const numDice = parseInt(match[1]);
const diceSides = parseInt(match[2]);
const rolledValue = rollDice(numDice, diceSides); // Roll dice using the provided function
const HTML = `<br><hr><br><br>You have rolled ${rolledValue} on ${numDice}d${diceSides}.<br>`
return HTML;
}

return 0; // Return 0 if the format is not recognized
}

// Function to handle monster commands
function handleMonsterCommand(paramArray) {
const numAppearing = parseInt(paramArray[0]);
const monsterName = paramArray.slice(1).join(' '); // Join the rest as the monster name
const monsterCounts = searchMonster(monsterName.trim(), numAppearing);
return makeMonsterEntry(monsterCounts);
}

// Function to handle NPC commands
function handleNpcCommand(paramArray) {
const npcClass = paramArray[0].toLowerCase();
const level = parseInt(paramArray[1]);
const npcName = paramArray[2];
return makeNPC(npcClass, level, npcName); // Call the NPC creation function
}

// Roll dice function
function rollDice(numDice, diceSides) {
let total = 0;
for (let i = 0; i < numDice; i++) {
total += Math.floor(Math.random() * diceSides) + 1;
}
return total;
}

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

function evaluateInnerCommand(innerContent) {
const rollRegex = /^(roll)\s+(.+)/i; // Matches 'roll X'
const monsterRegex = /^(monster)\s+(.+)/i; // Matches 'monster X'
const npcRegex = /^(npc)\s+(.+)/i; // Matches 'npc X'

if (rollRegex.test(innerContent)) {
const [, commandType, params] = rollRegex.exec(innerContent);
return handleRollCommand(params.trim().split(/\s+/));
} else if (monsterRegex.test(innerContent)) {
const [, commandType, params] = monsterRegex.exec(innerContent);
return handleMonsterCommand(params.trim().split(/\s+/));
} else if (npcRegex.test(innerContent)) {
const [, commandType, params] = npcRegex.exec(innerContent);
return handleNpcCommand(params.trim().split(/\s+/));
} else {
return `{${innerContent}}`; // Return original if no command matched
}
}





