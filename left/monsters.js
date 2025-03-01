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
    

function makeMonsterEntry(monster, number = 1) {
    // Define the keys to exclude from the table
    let excludedKeys = ['name', 'description', 'treasure'];
    let savingThrows = getMonsterSave(monster.savingThrows);
    let individualTreasure = rollTreasure(monster.treasure, 'each');
    let lairTreasure = rollTreasure(monster.treasure, 'in lair');

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

  
  
    // Generate hit point checkboxes based on the hit dice and number of monsters
    HP(monster.hit, number);

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
        magicItem = magicWeapon();
    } else if (itemType === 'Armour') {
        magicItem = magicArmour();
    } else if (itemType === 'Potion') {
        magicItem = magicPotion();
    } else if (itemType === 'Scroll') {
        magicItem = magicScroll();
    } else if (itemType === 'Wand, Staff or Rod') {
        magicItem = magicWand();
    } else if (itemType === 'Miscellaneous Item') {
        magicItem = magicItem();
    } else if (itemType === 'Rare Items') {
        magicItem = rareItem();
    }
    return magicItem;
}

function magicWeapon(){
   const weaponTypeRoll = rollDice(1, 100);
   const weaponType = magicWeaponTable.find(weapon => weapon.range[0] <= weaponTypeRoll && weapon.range[1] >= weaponTypeRoll).weapon;
   const bonusTable = weaponType === 'Sling Bullet' || weaponType.includes('Arrow') || weaponType.includes('Bow') ? rangedWeaponBonusTable : meleeWeaponBonusTable;
   const bonusRoll = rollDice(1, 100);
   const bonus = bonusTable.find(bonus => bonus.range[0] <= bonusRoll && bonus.range[1] >= bonusRoll).bonus;
   const weapon = `${weaponType} ${bonus}`;
   return weapon
}
 
function magicArmour(){
   const armourTypeRoll = rollDice(1, 100);
   const armourType = magicArmourTable.find(armour => armour.range[0] <= armourTypeRoll && armour.range[1] >= armourTypeRoll).armour;
   const armourBonusRoll = rollDice(1, 100);
   const armourBonus = magicArmourAbilityTable.find(bonus => bonus.range[0] <= armourBonusRoll && bonus.range[1] >= armourBonusRoll).armour;
   const armour =  `${armourType} ${armourBonus}`;
   return armour
}

function magicScroll(){
    const scrollTypeRoll = rollDice(1, 100);
    const scrollType = scrollsTable.find(scroll => scroll.range[0] <= scrollTypeRoll && scroll.range[1] >= scrollTypeRoll).type;
    const scroll = `${scrollType}`
    return scroll
}

function magicPotion(){
    const potionTypeRoll = rollDice(1, 100);
    const potionType = potionsTable.find(potion => potion.range[0] <= potionTypeRoll && potion.range[1] >= potionTypeRoll).type;
    const potion = `Potion of ${potionType}`;
    return potion
}

function magicWand(){
    const wandTypeRoll = rollDice(1, 100);
    const wandType = wandsStavesRodsTable.find(wand => wand.range[0] <= wandTypeRoll && wand.range[1] >= wandTypeRoll).type;
    const wand = `${wandType}`;
    return wand
}

function magicItem() {
    const miscRoll = rollDice(1, 100);
    const subtable = miscellaneousItemsTable.find(m => m.range[0] <= miscRoll && m.range[1] >= miscRoll).subtable;
    const effectRoll = rollDice(1, 100);
    const effect = subtable === 'Effect Subtable 1' ? effectSubtable1.find(e => e.range[0] <= effectRoll && e.range[1] >= effectRoll) : effectSubtable2.find(e => e.range[0] <= effectRoll && e.range[1] >= effectRoll);
    const formRoll = rollDice(1, 100);
    const form = formTable[effect.form].find(f => f.chance[0] <= formRoll && f.chance[1] >= formRoll).item;
    return `${form} of ${effect.effect}`;
}

function rareItem() {
    const rareItemRoll = rollDice(1, 100);
    const rareItemObj = rareItems.find(item => item.range[0] <= rareItemRoll && item.range[1] >= rareItemRoll);
    const rareItem = `${rareItemObj.type}`;
    return rareItem
}

