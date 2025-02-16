function searchMonster(monsterName) {
let foundMonster = null;
let highestScore = 0;


// Search for the closest match based on the name
monsters.forEach(monster => {
const score = getSimilarityScore(monster.name.toLowerCase(), monsterName.toLowerCase());
if (score > highestScore) {
highestScore = score;
foundMonster = monster; // This keeps track of the closest match
}
});

return foundMonster; // Return the found monster
}

function makeMonsterEntry(monster) {
    // Define the keys to exclude from the table
    let excludedKeys = ['name', 'description', 'appearing', 'treasure'];
    let savingThrows = getMonsterSave(monster.savingThrows);
    let individualTreasure = rollTreasure(monster.treasure, 'each');
    let lairTreasure = rollTreasure(monster.treasure, 'in lair');
  

    // Determine headers based on the structure of the monster
    const headers = Object.keys(monster).flatMap(key => {
        if (typeof monster[key] === 'object') {
            return Object.keys(monster[key]).map(subKey => `${key}.${subKey}`);
        }
        return key;
    }).filter(key => !excludedKeys.includes(key)); 

    let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';

    // Generate table header that spans both columns
    tableHTML += `<thead><tr><th class="tableCell tableHeader" colspan="2"><b>${monster.name}</b></th></tr></thead>`;

    // Generate table body with each attribute as a row
    tableHTML += '<tbody>';
    headers.forEach(header => {
        tableHTML += '<tr>';
        tableHTML += `<td class="tableCell"><b>${header.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</b></td>`;
        const [key, subKey] = header.split('.');
        let value = (subKey ? monster[key][subKey] : monster[key]);

        if (key === 'savingThrows') {
            value = savingThrows;
        }
        tableHTML += `<td class="tableCell">${value}</td>`;
        tableHTML += '</tr>';
    });

    // Add two rows, one called 'Individual Treasure' and one called 'Lair Treasure'
    tableHTML += '<tr><td class="tableCell"><b>Individual Treasure</b></td><td class="tableCell">' + individualTreasure + '</td></tr>';
    tableHTML += '<tr><td class="tableCell"><b>Lair Treasure</b></td><td class="tableCell">' + lairTreasure + '</td></tr>';

    tableHTML += '</tbody></table>';
    tableHTML += `<br><br>`;
    tableHTML += `${monster.description}`;

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

    return 'Saving throws not found';
}

function rollTreasure(treasure, locationFilter) {
    // Extract the treasure types from the treasure parameter
    const treasureRegex = /([A-Z](?:,[A-Z])*)\s*(each|in lair)|None|Special|([A-Z])/gi;
    const matches = [...treasure.matchAll(treasureRegex)];
    
    
    if (matches.length > 0) {
    let treasureEntries = '';
    
    matches.forEach(match => {
    const types = match[1] ? match[1].split(',').map(type => type.trim()) : (match[3] ? [match[3]] : []);
    const location = match[2] ? match[2].toLowerCase() : (match[3] ? 'each' : match[0].toLowerCase());
    
    if (locationFilter && location !== locationFilter) {
    return;
    }
    
    types.forEach(type => {
    if (loot[type]) {
    const entries = loot[type];
    console.log(entries)
    for (const [key, value] of Object.entries(entries)) {
    if (value.percentage !== 0) {
    // Roll a percentage to determine if the treasure is found
    const percentageRoll = Math.random() * 100;
    if (percentageRoll <= value.percentage) {
    // Format the key to be more readable, except for specific keys
    const formattedKey = ['Copper', 'Silver', 'Electrum', 'Gold', 'Platinum', 'Gems', 'Jewelry'].includes(key)
    ? key
    : key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                
    let dice = value.dice;  
    let diceParse = parseDice(dice);
    let roll = rollDice(diceParse.numDice, diceParse.diceSides);
    
    if(key === 'Gems'){
    
    for (let i = 0; i < roll; i++) {
    treasureEntries += `${makeGem()} <br>`;
    }
    
    } else if(key === 'Jewelry'){
    
    for (let i = 0; i < roll; i++) {
    treasureEntries += `${makeJewelry()} <br>`;
    }
    
    }else if(key === 'magicItems'){
    
    for (let i = 0; i < roll; i++) {
    treasureEntries += `${makeMagicItem()} <br>`;
    }
    
    } else {
    
    treasureEntries += `${roll} ${formattedKey} <br>`;
    
    }
    }
    }
    }
    treasureEntries += ``;
    }
    });
    
    if (location === 'none') {
    treasureEntries = `None`;
    }
    
    if (location === 'special') {
    treasureEntries += `<b>Treasure ${location}</b>`;
    }
    });
    
    return treasureEntries || 'None';
    }
    
    return 'Treasure not found';
    }

function getSimilarityScore(str1, str2) {
let matchCount = 0;

// Count the number of matching characters
for (let char of str1) {
if (str2.includes(char)) {
matchCount++;
}
}

// Return a simple score based on the length of the shorter string
return matchCount / Math.max(str1.length, str2.length);
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
            checkbox.style.color = modeColor; // Set the color of all checkboxes to gray
        });
    }
}

function parseHitPoints(hit) {

// Check if the hit value is a fixed number
if (!hit.includes('d') && !hit.includes('-')) {
const fixedValue = parseInt(hit);
return rollDice(fixedValue, 8); // Treat as Xd8
}

// Check for dice notation (e.g., "1d6", "1d6+1")
const diceMatch = hit.match(/^(\d*)d(\d+)([+-]\d+)?$/);
if (diceMatch) {
const numDice = diceMatch[1] ? parseInt(diceMatch[1]) : 1; // Default to 1 if not specified
// For dice notation, treat as d8
const sides = 8;
const modifier = diceMatch[3] ? parseInt(diceMatch[3]) : 0; // Default to 0 if not specified

return rollDice(numDice, sides) + modifier; // Roll dice and apply modifier
}

// Check for ranges (e.g., "3-3")
const rangeMatch = hit.match(/^(\d+)-(\d+)$/);
if (rangeMatch) {
const min = parseInt(rangeMatch[1]);
const max = parseInt(rangeMatch[2]);
const numDice = max; // Use the max as the number of d8s
return rollDice(numDice, 8) - min; // Roll numDice d8 and subtract min
}

// If none of the above matches, return 0 as a fallback
return 0;
}

function makeGem() {

    function parseDice(dice) {
        const diceMatch = dice.match(/^(\d*)d(\d+)$/);
        if (diceMatch) {
            const numDice = diceMatch[1] ? parseInt(diceMatch[1]) : 1; // Default to 1 if not specified
            const sides = parseInt(diceMatch[2]);
            return { numDice, sides };
        }
    }


    function rollDice(numDice, diceSides) {
        
        let total = 0;
     for (let i = 0; i < numDice; i++) {
         total += Math.floor(Math.random() * diceSides) + 1;
     }
     return total;
 }
    
    const gemTypeRoll = rollDice(1, 100);
    const gemType = gemTypeTable.find(gem => gem.range[0] <= gemTypeRoll && gem.range[1] >= gemTypeRoll).type; 
    
    const gemValueRoll = rollDice(1, 6);
    const gemValue = gemsValueTable[gemValueRoll - 1];

    const valueAdjustmentRoll = rollDice(2, 6);
    const valueAdjustment = valueAdjustmentTable.find(adjustment => adjustment.roll === valueAdjustmentRoll).adjustment;
    
    const dice = parseDice(gemValue.numberFound);
    const numberFound = rollDice(dice.numDice, dice.sides);
  
    const gem = numberFound + ' ' + gemValue.type + ' ' + gemType + 's' + ' worth ' + gemValue.baseValue * valueAdjustment + ' gp each';
    
    return gem;

}

function makeJewelry() {
    // Helper function to parse dice notation
    function parseDice(dice) {
        const diceMatch = dice.match(/^(\d*)d(\d+)$/);
        if (diceMatch) {
            const numDice = diceMatch[1] ? parseInt(diceMatch[1]) : 1; // Default to 1 if not specified
            const sides = parseInt(diceMatch[2]);
            return { numDice, sides };
        } else if (!isNaN(dice)) {
            // Handle the case where dice is a fixed number (e.g., '1')
            return { numDice: parseInt(dice), sides: 1 };
        }
        throw new Error('Invalid dice notation');
    }

    // Helper function to roll dice
    function rollDice(numDice, diceSides) {
        let total = 0;
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        return total;
    }

    // Roll on the jewelryTable to determine the type of jewelry
    const jewelryTypeRoll = rollDice(1, 100);
    const jewelryType = jewelryTable.find(jewelry => jewelry.range[0] <= jewelryTypeRoll && jewelry.range[1] >= jewelryTypeRoll).type;

    // Roll on the gemsValueTable to determine the base value and number of jewelry pieces found
    const jewelryValueRoll = rollDice(1, 6);
    const jewelryValue = gemsValueTable[jewelryValueRoll - 1];

    // Roll on the valueAdjustmentTable to adjust the base value of the jewelry
    const valueAdjustmentRoll = rollDice(2, 6);
    const valueAdjustment = valueAdjustmentTable.find(adjustment => adjustment.roll === valueAdjustmentRoll).adjustment;

    // Parse the numberFound dice notation and roll the dice
    const dice = parseDice(jewelryValue.numberFound);
    const numberFound = rollDice(dice.numDice, dice.sides);

    // Roll on the gemTypeTable to determine the type of gem
    const gemTypeRoll = rollDice(1, 100);
    const gemType = gemTypeTable.find(gem => gem.range[0] <= gemTypeRoll && gem.range[1] >= gemTypeRoll).type;

    // Construct the jewelry description
    const jewelry = `${numberFound} ${jewelryValue.type} ${jewelryType}s with ${gemType} worth ${jewelryValue.baseValue * valueAdjustment} gp each`;

    console.log(jewelry)
    return jewelry;
}

function makeMagicItem() {
    // Helper function to parse dice notation
    function parseDice(dice) {
        const diceMatch = dice.match(/^(\d*)d(\d+)$/);
        if (diceMatch) {
            const numDice = diceMatch[1] ? parseInt(diceMatch[1]) : 1; // Default to 1 if not specified
            const sides = parseInt(diceMatch[2]);
            return { numDice, sides };
        } else if (!isNaN(dice)) {
            // Handle the case where dice is a fixed number (e.g., '1')
            return { numDice: parseInt(dice), sides: 1 };
        }
        throw new Error('Invalid dice notation');
    }

    // Helper function to roll dice
    function rollDice(numDice, diceSides) {
        let total = 0;
        for (let i = 0; i < numDice; i++) {
            total += Math.floor(Math.random() * diceSides) + 1;
        }
        return total;
    }

    // Roll on the itemTypeTable to determine the type of magic item
    const itemTypeRoll = rollDice(1, 100);
    const itemType = itemTypeTable.find(item => item.range[0] <= itemTypeRoll && item.range[1] >= itemTypeRoll).item;

    let magicItem = '';

    if (itemType === 'Weapon') {
        // Roll on the magicWeaponTable to determine the specific weapon
        const weaponTypeRoll = rollDice(1, 100);
        const weaponType = magicWeaponTable.find(weapon => weapon.range[0] <= weaponTypeRoll && weapon.range[1] >= weaponTypeRoll).weapon;

        // Roll on the meleeWeaponBonusTable or rangedWeaponBonusTable to determine the bonus
        const bonusTable = weaponType === 'Sling Bullet' || weaponType.includes('Arrow') || weaponType.includes('Bow') ? rangedWeaponBonusTable : meleeWeaponBonusTable;
        const bonusRoll = rollDice(1, 100);
        const bonus = bonusTable.find(bonus => bonus.range[0] <= bonusRoll && bonus.range[1] >= bonusRoll).bonus;

        magicItem = `${weaponType} ${bonus}`;
    } else if (itemType === 'Armour') {
        // Roll on the magicArmourTable to determine the specific armour
        const armourTypeRoll = rollDice(1, 100);
        const armourType = magicArmourTable.find(armour => armour.range[0] <= armourTypeRoll && armour.range[1] >= armourTypeRoll).armour;

        // Roll on the magicArmourAbilityTable to determine the bonus
        const armourBonusRoll = rollDice(1, 100);
        const armourBonus = magicArmourAbilityTable.find(bonus => bonus.range[0] <= armourBonusRoll && bonus.range[1] >= armourBonusRoll).armour;

        magicItem = `${armourType} ${armourBonus}`;
    } else if (itemType === 'Potion') {
        // Roll on the potionsTable to determine the specific potion
        const potionTypeRoll = rollDice(1, 100);
        const potionType = potionsTable.find(potion => potion.range[0] <= potionTypeRoll && potion.range[1] >= potionTypeRoll).type;
        magicItem = `Potion of ${potionType}`;
    } else if (itemType === 'Scroll') {
        // Roll on the scrollsTable to determine the specific scroll
        const scrollTypeRoll = rollDice(1, 100);
        const scrollType = scrollsTable.find(scroll => scroll.range[0] <= scrollTypeRoll && scroll.range[1] >= scrollTypeRoll).type;

        magicItem = `${scrollType}`;
    } else if (itemType === 'Wand, Staff or Rod') {
        // Roll on the wandsStavesRodsTable to determine the specific wand, staff, or rod
        const wandTypeRoll = rollDice(1, 100);
        const wandType = wandsStavesRodsTable.find(wand => wand.range[0] <= wandTypeRoll && wand.range[1] >= wandTypeRoll).type;

        magicItem = `${wandType}`;
    }

    console.log(magicItem);
    return magicItem;
}


