const monsters = [{
    name: "Goblins",
    description: "The goblins are raiding the kobold territory, but they are just as happy to kill humans and the like.",
    armorClass: 14,
    hitDice: "1-1",
    attacks: "1 spear",
    damage: "1d6",
    movement: "20'",
    save: "F1",
    morale: 7,
    experience: 10,
    hitPoints: "{{roll 1d8}}"
}];


function toggleEditMode() {

    isPainting = true
    handlePaint();


    if (!isEditing) {
       //Enter
        textDiv.style.display = "none";
        writeBox.style.display = "block";
        writeBox.focus();
        
        const textContent = textDiv.innerHTML;
        
        writeBox.setSelectionRange(textContent.length, textContent.length);
        isEditing = true;

        writeBox.addEventListener('blur', function () {
            setTimeout(() => {
                textDiv.innerHTML = handlePrompts() || "";
                isEditing = false;
            }, 0); 
        });

    } else {
        //Exit
        textDiv.style.display = "block";
        writeBox.style.display = "none";
        isEditing = false;

        if (writeBox.style.display === 'none') {
            setTimeout(() => {
                textDiv.innerHTML = handlePrompts() || "";
                
            }, 0);
        }

        saveHex();

    }
}

document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        toggleEditMode();  
    }
});


function handlePrompts() {
    const writeBox = document.getElementById('writeBox');
    const textDiv = document.getElementById('textDiv');
    
    let inputText = writeBox.value;
    
    // Handle dice roll commands like {{roll 1d6}}
    inputText = inputText.replace(/{{roll (\d+)d(\d+) ([\w\s]+)}}/g, function(match, numDice, diceSides, monsterName) {
        return searchMonster(monsterName.trim(), rollDice(parseInt(numDice), parseInt(diceSides)));
    });
    
   console.log(inputText)
   return inputText
}

// Function to roll a number of dice
function rollDice(numDice, diceSides) {
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total;
}

function searchMonster(monsterName, numAppearing) {
    const foundMonster = monsters.find(monster => monster.name.toLowerCase() === monsterName.toLowerCase());
    
    if (foundMonster) {
        let result = `<b>${numAppearing} ${foundMonster.name}: </b>`;
        result += `AC ${foundMonster.armorClass}, HD ${foundMonster.hitDice}, #At ${foundMonster.attacks}, Dam ${foundMonster.damage}, `;
        result += `Mv ${foundMonster.movement}, Sv ${foundMonster.save}, ML ${foundMonster.morale}, XP ${foundMonster.experience} ea.\n<b>HP:</b>`;
        
        // Loop to create multiple entries based on the number appearing
        for (let i = 0; i < numAppearing; i++) {
            const hitPoints = foundMonster.hitPoints.replace(/{{roll (\d+)d(\d+)}}/g, function(match, numDice, diceSides) {
                return rollDice(parseInt(numDice), parseInt(diceSides));
            });

            const hpValue = parseInt(hitPoints); // Convert hitPoints to an integer
            let checkboxesHTML = ''; // String to hold the checkbox HTML

            // Create checkboxes
            for (let j = 0; j < hpValue; j++) {
                checkboxesHTML += `<span class="hp-checkbox" onclick="toggleCheckbox(this)">☐</span>`;
            
                // Add a tab (or new line) after every 5 checkboxes
                if ((j + 1) % 5 === 0 && j + 1 < hpValue) {
                    checkboxesHTML += '&nbsp;&nbsp;&nbsp;'; // Add some space to separate groups of checkboxes
                }
            }

            // Create the formatted monster output with checkboxes
            result += `\t${hitPoints} ${checkboxesHTML}\n`;
        }

       console.log(result)
      return result
    }
}

// Function to toggle the checkbox
function toggleCheckbox(checkbox) {
    // This function can handle additional logic if needed
    if (checkbox.checked) {
        checkbox.nextSibling.textContent = '☒'; // Optional: change to filled checkbox symbol
    } else {
        checkbox.nextSibling.textContent = '☐'; // Optional: change back to empty checkbox symbol
    }
}

