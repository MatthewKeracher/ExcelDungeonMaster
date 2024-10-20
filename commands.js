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

    // Updated regex to allow an optional percentage before the command
    inputText = inputText.replace(/{(\d+%)?\s*(\d+)d(\d+)(?: ([\w\s]+))?}/g, function(match, percentage, numDice, diceSides, monsterName) {
        // If a percentage is present, roll to see if the command is executed
        if (percentage) {
            const chance = parseInt(percentage); // Convert percentage string to a number
            if (Math.random() * 100 > chance) {
                return ''; // Skip this command if the percentage check fails
            }
        }

        const rolledValue = rollDice(parseInt(numDice), parseInt(diceSides));

        if (monsterName) {
              const monsterCounts = searchMonster(monsterName.trim(), rolledValue);
              return makeMonsterEntry(monsterCounts);
        } else {
            return rolledValue; 
        }
    });

    return inputText;
}

function rollDice(numDice, diceSides) {
let total = 0;
for (let i = 0; i < numDice; i++) {
total += Math.floor(Math.random() * diceSides) + 1;
}
return total;
}

