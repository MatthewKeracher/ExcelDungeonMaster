function getRandomSpells(spellSlotsArray) {

    console.log(spellSlotsArray)
    
    if(!spellSlotsArray){return}
    
    // Convert spellSlotsArray into an array of key-value pairs
    const spellSlots = spellSlotsArray.map((count, index) => ({
    level: index + 1, // Spell levels are typically 1-based
    count: count
    }));
    
    // Create a set to track used spells and an array to hold the selected spells
    const usedSpells = new Set();
    const selectedSpells = [];
    
    // Loop through each spell level in the spellSlots array
    spellSlots.forEach(spellLevelData => {
    const spellLevel = parseInt(spellLevelData.level); // Spell level
    const numberOfSpellsAtLevel = spellLevelData.count; // Number of spells available at that level
    
    // If there are no spells available for this level, continue to the next
    if (numberOfSpellsAtLevel === 0) {
    return;
    }
    
    // Randomly select spells based on the number of slots available at this level
    for (let i = 0; i < numberOfSpellsAtLevel; i++) {
    // If there are no more available spells, break out of the loop
    if (spells.length === 0) {
    break;
    }
    
    // Randomly select a spell from the available spells
    const randomIndex = Math.floor(Math.random() * spells.length);
    const chosenSpell = spells[randomIndex];
    
    // Add the chosen spell to the selected spells array and mark it as used
    selectedSpells.push(chosenSpell);
    usedSpells.add(chosenSpell.name);
    
    // Remove the chosen spell from available spells to avoid duplicates
    spells.splice(randomIndex, 1);
    }
    });
    
    return selectedSpells; // Return the array of selected spells
}

function makeMonsterEntry(monster, returnInfo) {
    // Define the keys to exclude from the table
    if(!monster){return `<div class="noSave">Could not generate Monster entry.</div>`}
    monster = {...monster}; //make copy of Obj
    monster.savingThrows = getMonsterSave(monster.savingThrows);
    monster.lairTreasure = rollTreasure(monster.treasure, 'in lair');
    monster.treasure = rollTreasure(monster.treasure, 'each');
    
    if(monster.name.includes("Dragon")){
        
        const parts = monster.name.split(', ');
        const color = parts[1]; // Assuming the format is always "Dragon, Color"
        const dragonTable = dragonTables[color];
        const age = rollDice(1,7)

        function mergeExcludingKeys(target, source, excludedKeys) {
            const filteredSource = Object.fromEntries(
              Object.entries(source).filter(([key]) => !excludedKeys.includes(key))
            );
            return { ...target, ...filteredSource };
        }

        
          const excludedKeys = ['category']; // Keys to exclude from merging
          const ageTable = dragonTable.find(entry => entry.category === age);
          let newStats = {...ageTable}

          if (newStats.spells) {
            const dragonSpells = getRandomSpells(newStats.spells)

            let HTML = ``;
            dragonSpells.forEach(spell => {
                HTML += `${spell.name}<br>`;
            });
            newStats.spells = HTML;
        }
          
          monster = mergeExcludingKeys(monster, newStats, excludedKeys);
          
    }

    //monster.hitPoints = HP(monster.hit, number)
  
   let tableHTML = tableFromObj(monster, ['name', 'description'])

   const objDesc = autoSpacing(monster.description)
   tableHTML += `${objDesc}`;

   return tableHTML;
}
    
function getMonsterSave(saveAs) {
    // Extract the class and level from the savingThrows parameter
    const saveRegex = /^(fighter|thief|mage|cleric):\s*(\d+)$/i;
    const match = saveAs.match(saveRegex);
   
    if (match) {
        const monsterClass = match[1].toLowerCase();
        const level = parseInt(match[2]);

        // Look up the saving throw values in the save object
        if (savingThrows[monsterClass] && savingThrows[monsterClass][level]) {
            const save = savingThrows[monsterClass][level];
            return `Death Ray: ${save.deathRay}<br>Magic Wands: ${save.magicWands}<br>Paralysis: ${save.paralysisPetrify}<br>Dragon Breath: ${save.dragonBreath}<br>Spells: ${save.spells}`;
        }
    }

    return saveAs;
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

function HP(hitDice, number = 1) {
    let HTML = '';

    for (let j = 0; j < number; j++) {
        let numHitboxes = rollDice(hitDice, 8);
        HTML += `<h4 style='font-family:"SoutaneBlack"'>${numHitboxes.toString().padStart(2, '0')} | `;

        for (let i = 0; i < numHitboxes; i++) {
            const checkbox = document.createElement('div');
            checkbox.textContent = '☐'; // Set the initial state to unchecked
            checkbox.classList.add('hp-checkbox'); // Add a class for styling
            checkbox.addEventListener('click', handleCheckboxClick); // Attach the click event listener
            HTML += checkbox.outerHTML; // Add the checkbox to the HTML
        }

        HTML += `</h4>`;
    }

    return HTML; // Return the container with the hitboxes
}

function toggleCheckbox(checkbox) {
    if (checkbox.textContent === '☐') {
        checkbox.textContent = '☒';
    }
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
            checkbox.style.color = modeColor; // Set the color of all checkboxes to the mode color
        });
    }
}




