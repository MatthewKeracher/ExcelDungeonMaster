
class NPC {
constructor(race, npcClass, level, npcName = "John Smith", id) {

this.id = id;
this.name = npcName;
this.class = npcClass.charAt(0).toUpperCase() + npcClass.slice(1);
this.race = race.charAt(0).toUpperCase() + race.slice(1);
this.level = level;
this.ability = makeAbilityScores(this.class);
this.description = "This is a description of the NPC."


// Assign loot
const lootRollOut = [[1,4],[1,7],[1,28],[1,168],[1,336]]

this.loot = {};
let i = 0;
for (const [name, value] of Object.entries(system.currency)) {
  const [min, max] = lootRollOut[i];
  this.loot[name] = rollDice(min, max).toString();
  i++;
}

updateNPC(this)

}}



function updateNPC(npc){

for (const score in npc.ability){
npc.ability[score].modifier = getModifiers(npc.ability[score].score)
}

const classTable = system.classes.find(entry => entry.name === npc.class);

let attackBonus = classTable.levels[npc.level].attackBonus;
let meleeBonus = attackBonus + npc.ability.str.modifier;
let rangedBonus = attackBonus + npc.ability.dex.modifier;

let hitDice = classTable.levels[npc.level].hitDice;
let hitPoints = parseHitPoints(hitDice);

npc.combat = {
"Hit Points": hitPoints,
"Attack Bonus": attackBonus,
"Melee Bonus": meleeBonus,
"Ranged Bonus": rangedBonus,
}

npc.xp = classTable.levels[npc.level].XP;
npc.savingThrows = getSaveThrows(npc.class, parseInt(npc.level), npc.race);

if(classTable.skills){
npc.skills = classTable.skills[npc.level];
}else{
npc.skills === undefined && delete npc.skills;
}

if(classTable.levels[npc.level].spells){
npc.spells = getSpells(npc.class, npc.level);
}else{
npc.spells === undefined && delete npc.spells;
}

console.log(npc)

}

function makeAbilityScores(npcClass) {
const scoreNames = ["str", "dex", "int", "wis", "con", "cha", "soc", "psy", "luk"];
const scores = {};

// Determine the prime stat for the class (case-insensitive)
let prime;
switch (npcClass.toLowerCase()) {
case 'fighter':
prime = 'str'; break;
case 'thief':
prime = 'dex'; break;
case 'ranger':
prime = 'dex'; break;
case 'assassin':
prime = 'dex'; break;
case 'cleric':
prime = 'wis'; break;
case 'mage':
prime = 'int'; break;
default:
prime = null;
}

scoreNames.forEach((scoreName,i) => {
let score;
if (prime === scoreName) {
score = Math.floor(Math.random() * 6) + 13; // 13-18
} else {
score = Math.floor(Math.random() * 12) + 7; // 7-18
}

// Find bonus from modifiers array
let bonus = getModifiers(score)


scores[scoreName] = { ability: scoreName, score: score, modifier: bonus };
});

return scores;
}

function getModifiers(score) {
  let modifier = 0;

  for (const entry of system.modifiers) {
    if (score >= entry.range.min && score <= entry.range.max) {
      modifier = entry.bonus;
      break;
    }
  }

  return modifier;
}



function getSaveThrows(npcClass, level, race) {

  const classObj = system.classes.find(entry => entry.name === npcClass);
  const classEntry = classObj.savingThrows[level];
  const raceEntry = system.races[toTitleCase(race)];

if (classEntry && raceEntry) {

let savingThrows = {};

// Add Race Bonuses to Saving Throws
for (const key in classEntry) {
if (key !== 'level') {                            
savingThrows[key] = {savingThrows: key, score: classEntry[key], bonus: raceEntry[key]}

}
}

console.log(savingThrows)

return savingThrows || null; // Return the found entry or null if not found
} else {
return null; // Handle invalid class or race
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

function getSpells(npcClass, level) {
// Get the spell slots available for the NPC's class and level
const classTable = system.classes.find(entry => entry.name === npcClass);
const spellSlotsArray = classTable.levels[level].spells;

const classProper = npcClass.charAt(0).toUpperCase() + npcClass.slice(1);

if(!spellSlotsArray){return}

// Convert spellSlotsArray into an array of key-value pairs
const spellSlots = spellSlotsArray.map((count, index) => ({
level: index + 1, // Spell levels are typically 1-based
count: count
}));

// Create a set to track used spells and an array to hold the selected spells
const usedSpells = new Set();
const selectedSpells = {};

// Loop through each spell level in the spellSlots array
spellSlots.forEach(spellLevelData => {
const spellLevel = parseInt(spellLevelData.level); // Spell level
const numberOfSpellsAtLevel = spellLevelData.count; // Number of spells available at that level

// If there are no spells available for this level, continue to the next
if (numberOfSpellsAtLevel === 0) {
return;
}


// Filter spells based on class, current spell level, and ensure they haven't been used
const availableSpells = spells[classProper].filter(entry => 
parseInt(entry.level) === spellLevel && !usedSpells.has(entry.name));

// Randomly select spells based on the number of slots available at this level
for (let i = 0; i < numberOfSpellsAtLevel; i++) {
// If there are no more available spells, break out of the loop
if (availableSpells.length === 0) {
break;
}

// Randomly select a spell from the available spells
const randomIndex = Math.floor(Math.random() * availableSpells.length);
const chosenSpell = availableSpells[randomIndex];

// Add the chosen spell to the selected spells array and mark it as used
selectedSpells[chosenSpell.name] = {spell: chosenSpell.name, level: chosenSpell.level};
usedSpells.add(chosenSpell.name);

// Remove the chosen spell from available spells to avoid duplicates
availableSpells.splice(randomIndex, 1);
}
});

console.log(selectedSpells)

return selectedSpells; // Return the array of selected spells
}

function makeNPC(race, npcClass, level, npcName) {

const npc = new NPC(race, npcClass, level, npcName)
const HTML = renderNPC(npc)

return HTML;
}

function renderNPC(npc) {
let HTML = '<table border="none" class="table">';

// Header row
HTML += `<tr>
<td contenteditable="false" tabindex="0" class="tableCell tableHeader"><b>${npc.name}</b></td>
<td contenteditable="false" tabindex="0" class="tableCell tableHeader"><b>Level ${npc.level} ${npc.race} ${npc.class}</b></td>
</tr>`;

// Stats column
HTML += '<tr><td contenteditable="false" tabindex="0" class="tableCell">';
HTML += `HP: (${npc.hitDice}) ${npc.hitPoints} <br>`;
HTML += `Melee: +${npc.melee}  Ranged: +${npc.ranged}  <br><br>`;

for(const score in npc.scores){

let scoreNumber = npc.scores[score].score
let scoreBonus = npc.scores[score].bonus

HTML += `${score.toUpperCase()}: ${scoreNumber} (${scoreBonus})<br>`;

}


// Saving Throws
if (npc.savingThrows) {
console.log(npc.savingThrows)
HTML += '<br><u>Saving Throws:</u><br>';

for(const saveThrow in npc.savingThrows){

const name = toTitleCase(saveThrow)
const score = npc.savingThrows[saveThrow].score
const bonus = npc.savingThrows[saveThrow].bonus

console.log(name, score, bonus)

HTML += `${name}: ${score} (${bonus})<br>`;

}

}

HTML += '</td>';

// Skills, Spells, Loot column
HTML += '<td contenteditable="false" tabindex="0" class="tableCell">';

if (npc.skills) {
HTML += '<u>Skills:</u><br>';
Object.entries(npc.skills).forEach(([key, val]) => {
if (key !== 'level') {
const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
HTML += `${formattedKey}: ${val}<br>`;
}
});
HTML += '<br><br>';
}

if (npc.spells) {
HTML += '<u>Spells:</u><br>';
npc.spells.forEach(spell => {
HTML += `${spell.name}<br>`;
});
HTML += '<br><br>';
}

HTML += '<u>Loot:</u><br>';
HTML += npc.loot;

HTML += '</td></tr></table><br>';

return HTML;
}

function makeHitBoxes(hitPoints, hit){

hitPoints = hitPoints === 0 ? 1 : hitPoints; // Ensure at least 1 hit point
const hpValue = parseInt(hitPoints);
let HTML = `HP: (${hit})\n`;

// Create a container div for checkboxes
HTML += `<div class="hp-checkbox-container" style="display: inline-block;">`;
HTML += `<br>${hitPoints} `; // Display the total hit points
// Create checkboxes for HP
for (let j = 0; j < hpValue; j++) {
// Create a div for each hit point checkbox
HTML += `<div class="hp-checkbox" data-hp="${j}" style="display: inline-block; cursor: pointer; margin-right: 5px;">☐</div>`;


if ((j + 1) % 5 === 0 && j + 1 < hpValue) {
HTML += '  ';
}
if ((j + 1) % 10 === 0 && j + 1 < hpValue) {
HTML += '<br>   ';
}
}

HTML += `</div><br>`; // Close the checkbox container div

return HTML

}






