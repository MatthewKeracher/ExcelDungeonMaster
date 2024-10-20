function toggleEditMode() {

isPainting = true
handlePaint();


if (!isEditing) {
textDiv.style.display = "none";
writeBox.style.display = "block";
placeName.focus();

const textContent = textDiv.innerHTML;

writeBox.setSelectionRange(textContent.length, textContent.length);
isEditing = true;

writeBox.addEventListener('blur', function () {
setTimeout(() => {
textDiv.innerHTML = handleCommands() || "";
isEditing = false;
}, 0); 
});

} else {
textDiv.style.display = "block";
writeBox.style.display = "none";
isEditing = false;
placeName.blur();

if (writeBox.style.display === 'none') {
setTimeout(() => {
textDiv.innerHTML = handleCommands() || "";

}, 0);
}

saveEntry();
updateCellNames();
updateHexNames();

}
}

document.addEventListener('keydown', function (e) {
if (e.shiftKey && e.key === 'Enter') {
e.preventDefault();
toggleEditMode();  
}
});

function handleCommands() {
const writeBox = document.getElementById('writeBox');
let inputText = writeBox.value;

// Resolve nested commands before replacing other commands
inputText = resolveNestedCommands(inputText);

inputText = inputText.replace(/{(\d+%)?\s*(roll|monster|npc)\s*([\w\s\d]+)(?:\s+([^{}]+))?\s*}/gi, function(match, percentage, commandType, params, paramName) {
    // Remove any surrounding whitespace from paramName if it exists
    if (paramName) {
        paramName = paramName.trim(); // Clean whitespace around the name
    }

    // If a percentage is present, roll to see if the command is executed
    if (percentage) {
        const chance = parseInt(percentage); // Convert percentage string to a number
        if (Math.random() * 100 > chance) {
            return ''; // Skip this command if the percentage check fails
        }
    }

    // Split params for further processing
    const paramArray = params.trim().split(/\s+/);

    // Include the name in the params array if it exists
    if (paramName) {
        paramArray.push(paramName); // Add name to the end of the params array
    }

    switch (commandType.toLowerCase()) {
        case 'roll':
            return handleRollCommand(paramArray);
        case 'monster':
            return handleMonsterCommand(paramArray);
        case 'npc':
            return handleNpcCommand(paramArray);
        default:
            return '{Command not recognised}';
    }
});



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
return rolledValue;
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
console.log(paramArray)
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





