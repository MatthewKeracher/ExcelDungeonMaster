let loadedData = {};

async function loadJson(name) {
try {
const response = await fetch('data/'+name+'.json'); 
if (!response.ok) {
throw new Error('Network response was not ok');
}

loadedData[name] = await response.json(); 
console.log(loadedData)

} catch (error) {
console.error('Error loading'+name+':', error);
}
}

window.onload = loadJson('monsters');
window.onload = loadJson('items');
window.onload = loadJson('spells');


function searchMonster(monsterName, numAppearing) {
let familyMonsters = [];
let selectedMonsters = [];
let foundMonster = null;
let highestScore = 0;
let monsters = loadedData.monsters;

// Step 1: Collect all monsters in the same family and search for exact matches
monsters.forEach(monster => {
// Check if it's a family match
if (monster.family && monster.family.toLowerCase() === monsterName.toLowerCase()) {
familyMonsters.push(monster);  // Add all monsters in the family
}

// Also find the closest match based on the name
const score = getSimilarityScore(monster.name.toLowerCase(), monsterName.toLowerCase());
if (score > highestScore) {
highestScore = score;
foundMonster = monster; // This keeps track of the closest match
}
});

// Step 2: If a family was found, select random monsters based on their sort value
if (familyMonsters.length > 0) {
let countMap = {};

while (selectedMonsters.length < numAppearing) {
// Select a monster based on weighted sort values
const weightedMonsters = familyMonsters.flatMap(monster => {
const weight = Math.max(1, 10 - monster.sort); // Adjust weight calculation as needed
if (weight > 0) {
return Array(weight).fill(monster); // Create an array with duplicates based on weight
}
return []; // Return an empty array if weight is not positive
});

// If no weighted monsters were found, break out of the loop to avoid an infinite loop
if (weightedMonsters.length === 0) {
break; 
}

// Randomly select a monster from the weighted options
const randomMonster = weightedMonsters[Math.floor(Math.random() * weightedMonsters.length)];

// Track the count of selected monsters
if (!countMap[randomMonster.name]) {
countMap[randomMonster.name] = 0;
}

// Add the monster if the count does not exceed numAppearing
if (countMap[randomMonster.name] < numAppearing) {
selectedMonsters.push(randomMonster);
countMap[randomMonster.name] += 1;

// If we reach numAppearing, break the loop
if (selectedMonsters.length === numAppearing) {
break;
}
}
}
} else if (foundMonster) {
// If no family is found but we have an exact match, create that monster
for (let i = 0; i < numAppearing; i++) {
selectedMonsters.push(foundMonster);
}
}

// Step 3: Sort selected monsters alphabetically by name
selectedMonsters.sort((a, b) => a.name.localeCompare(b.name));

// Step 4: Bundle duplicates and construct the monster counts
const monsterCounts = {}; // Object to count how many of each monster we have

selectedMonsters.forEach(monster => {
// Count the monster occurrences
if (!monsterCounts[monster.name]) {
monsterCounts[monster.name] = {
count: 0,
stats: monster // Store the monster's stats
};
}
monsterCounts[monster.name].count += 1; // Increment count
});

return monsterCounts; // Return the counts for further processing
}

function makeMonsterEntry(monsterCounts) {
let HTML = '';

// Construct the result using the bundled counts
for (const monsterName in monsterCounts) {
const { count, stats: monster } = monsterCounts[monsterName];

// Start the monster entry
HTML += `<div style="display: flex; justify-content: space-between; border-bottom: 1px solid #ccc; padding: 10px;">`;

// Column for monster name and stats
HTML += `<div style="flex: 1;">`;
HTML += `<b>${count} ${monster.name}${count > 1 ? 's' : ''}</b><br>`;
HTML += `${monster.family}<br><br>`;
HTML += `<b>AC:</b>${monster.armourClass}<br>`;

// HITPOINTS
if(monster){
    HTML += `<b>HP:</b> (${monster.hit})<br>`;
    for (let i = 0; i < count; i++) {
        let hitPoints = parseHitPoints(monster.hit);
        hitPoints === 0 ? hitPoints = 1 : hitPoints; // Ensure at least 1 hit point
        const hpValue = parseInt(hitPoints);
        let checkboxesHTML = '';
        
        HTML += `${hitPoints}\n`;
        
            // Create checkboxes for HP
            for (let j = 0; j < hpValue; j++) {
                checkboxesHTML += `☐`;
        
                // Hitbox Spacing
                if ((j + 1) % 5 === 0 && j + 1 < hpValue) {
                    checkboxesHTML += '\t';
                }
                if ((j + 1) % 10 === 0 && j + 1 < hpValue) {
                    checkboxesHTML += '<br>';
                }
            }
        
            HTML += `${checkboxesHTML}\n`;
        }
    }

HTML += `</div>`; // Close the left column

// RIGHT COLUMN
HTML += `<div style="flex: 1; text-align: left;">`; // Right-aligned for HP and checkboxes

// Dynamically add each stat from the stats object
for (const [key, value] of Object.entries(monster)) {

    const excludedKeys = ['name', 'saveAs', 'hit', 'sort','armourClass', 'family']
    
    if (!excludedKeys.includes(key) && value !== '') { // Exclude the name from detailed stats output
    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
    HTML += `<b>${formattedKey}:</b> ${value}<br>`;
    }
    }

//Saving Throws
if(monster){
const saveAs = parseInt(monster.saveAs);
const savingThrows = getSaveThrows("fighter", saveAs);
if (savingThrows) {
HTML += `<br><b>Saving Throws:</b><br>`;
Object.keys(savingThrows).forEach(key => {
if (key !== 'level') {
const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
HTML += `${formattedKey}: ${savingThrows[key]}<br>`;
}
});
}
}

HTML += `</div>`; // Close the HP column
HTML += `</div>`; // Close the monster entry
HTML += `<hr>`; // Add a horizontal rule between monsters




}

return HTML;
}


function toggleCheckbox(checkbox) {
if (checkbox.textContent === '☐') {
checkbox.textContent = '☒'; 
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