const weatherTable = {

"Winter": [
{
"name": "Blizzard",
"range": { "min": 1, "max": 1 },
"description": "At the end of every hour spend in a Blizzard, make a DC 12 Constitution saving. On failure, you take 3d4 cold damage and gain one level of exhaustion. You make this check with advantage if you have proper gear.\n\nAll creatures are heavily obscured if they are more than 20 feet from you. All terrain is difficult terrain. Also has the effect of Snow, High Winds, and Freezing Cold.\n\nReplace with Thunderstorm when in climates without snow."
},
{
"name": "Snow/Rain",
"range": { "min": 2, "max": 20 },
"description": "Unpleasant to travel in. All travel speed is halved. If snow occurs for two days in row, all terrain is difficult terrain and wagon travel is impossible until one day without snow passes. Also has the the effect of Heavy Clouds and Freezing Cold.\n\nReplace with Rain when in climates without snow."
},
{
"name": "Freezing Cold",
"range": { "min": 21, "max": 30 },
"description": "If you attempt to take a long rest without cover and heat, you must make a DC 15 Constitution saving throw gain the benefits for a long rest. If you fail by 5 or more, you gain an additional level of Exhaustion.\n\nAll cold damage rolls have a +2."
},
{
"name": "Heavy Clouds",
"range": { "min": 31, "max": 40 },
"description": "\n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
},
{
"name": "Light Clouds",
"range": { "min": 41, "max": 60 },
"description": "None."
},
{
"name": "Clear Skies",
"range": { "min": 61, "max": 99 },
"description": "None."
},
{
"name": "Strange Phenomena",
"range": { "min": 100, "max": 100 },
"description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
}
],
"Spring": [
{
"name": "Thunderstorm",
"range": { "min": 1, "max": 2 },
"description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. \n\nTurbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
},
{
"name": "Heavy Rain",
"range": { "min": 3, "max": 5 },
"description": "Same as rain, but the DC becomes 16 to benefit from a long rest without shelter and if Heavy Rain occurs two days in a row wagon travel becomes impossible until one day without rain occurs. May cause flooding.\n\nAll fire damage rolls have a –4. Lightning and Cold damage rolls gain a +2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
},
{
"name": "Rain",
"range": { "min": 6, "max": 20 },
"description": "Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
},
{
"name": "Light Clouds",
"range": { "min": 21, "max": 50 },
"description": "None."
},
{
"name": "Clear Skies",
"range": { "min": 51, "max": 80 },
"description": "None."
},
{
"name": "High Winds",
"range": { "min": 81, "max": 90 },
"description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
},
{
"name": "Scorching Heat",
"range": { "min": 91, "max": 99 },
"description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
},
{
"name": "Strange Phenomena",
"range": { "min": 100, "max": 100 },
"description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
}
],
"Summer": [
{
"name": "Thunderstorm",
"range": { "min": 1, "max": 1 },
"description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. \n\nTurbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind. "
},
{
"name": "Rain",
"range": { "min": 2, "max": 5 },
"description": "Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
},
{
"name": "Light Clouds",
"range": { "min": 6, "max": 30 },
"description": "None."
},
{
"name": "Clear Skies",
"range": { "min": 31, "max": 80 },
"description": "None."
},
{
"name": "High Winds",
"range": { "min": 81, "max": 85 },
"description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
},
{
"name": "Scorching Heat",
"range": { "min": 86, "max": 99 },
"description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
},
{
"name": "Strange Phenomena",
"range": { "min": 100, "max": 100 },
"description": "You forgot, something strange will happen to you and/or nearby environment. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge"
}
],
"Autumn": [
{
"name": "Thunderstorm",
"range": { "min": 1, "max": 2 },
"description": "Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. \n\nTurbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind. "
},
{
"name": "Snow/Rain",
"range": { "min": 3, "max": 10 },
"description": "Unpleasant to travel in. All travel speed is halved. If snow occurs for two days in row, all terrain is difficult terrain and wagon travel is impossible until one day without snow passes. Also has the the effect of Heavy Clouds and Freezing Cold.\n\nReplace with Rain when in climates without snow."
},
{
"name": "Heavy Clouds",
"range": { "min": 11, "max": 20 },
"description": "\n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage."
},
{
"name": "Light Clouds",
"range": { "min": 21, "max": 50 },
"description": "None."
},
{
"name": "Clear Skies",
"range": { "min": 51, "max": 70 },
"description": "None."
},
{
"name": "High Winds",
"range": { "min": 71, "max": 90 },
"description": "Turbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind."
},
{
"name": "Scorching Heat",
"range": { "min": 91, "max": 99 },
"description": "Blistering heat that is unpleasant to travel in. Creatures that attempt to travel during day light hours require twice the ration of water, and creature that travel for 4 or more hours or engage in heavy activity for 1 or more hour during the day and do not immediately take a short or long rest under cover must make a DC 10 Constitution saving throw or gain a level of Exhaustion.\n\nAll fire damage rolls have a +2. All cold damage rolls have a –2."
},
{
"name": "Strange Phenomena",
"range": { "min": 100, "max": 100 }
}
]
}

const strangePhenomena = [
{
"roll": 1,
"name": "Ashfall",
"description": "Heavy white clouds of swirling smoke fill the sky, and it rains ash that coats everything in little flecks. A smell of burning wood or sulphur permeates the air. Also has the the effect of Heavy Clouds. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. Smell of burning wood or sulphur permeates the air.",

},
{
"roll": 2,
"name": "Solar Eclipse",
"description": "For 1 hour during the day, it becomes night. Either select a dramatic time or roll a d12 for the hour. May or may not have prophetic ramifications. For 1 hour during the day, it becomes night. Possible prophetic ramifications.",

},
{
"roll": 3,
"name": "Strange Lights",
"description": "Strange swirling lights fill the sky, swirls of green, blue, and purple. Night becomes dim (strangely hued) light until the effect ends. Night becomes dim (strangely hued) light until the effect ends.",

},
{
"roll": 4,
"name": "Meteor Shower",
"description": "Stars begin to fall from the sky as lumps of stone and metal. All creatures gain +1 LUK modifier, which lasts until used or the weather changes. If you travel 4 or more hours outdoors through this weather, roll a d100. On a 1, a meteor strikes nearby, leaving 40d6 of devastation in it's wake. Potential consequences: 2d12 damage from the shock wave, difficult terrain, or heavily obscuring dust clouds."

},
{
"roll": 5,
"name": "Malevolent Storm",
"description":"Lightning flashes and thunder crashes. All creatures are partially obscured if they are more than 20 feet from you.\n\nIf you travel for 4 or more hours during a Thunderstorm, roll a d20. On a 1, you are struck by a lightning bolt dealing 3d12 lightning damage. Lightning and Thunder damage rolls have a +2. Unpleasant to travel in. If you have wagons, your travel pace is slowed by half. If you attempt to take a long rest without cover, you must make a DC 12 Constitution saving throw gain the benefits for a long rest.\n\nAll fire damage rolls have a –2. \n\nThe sky is blocked. High flying aerial creatures have total cover, and outdoor light does not count as sunlight (for the purposes of sunlight sensitivity and similar traits). Checks using Navigation Tools to determine your location based on celestial observation are made with disadvantage. \n\nTurbulent gusts sweep across the land. Flying creatures gain +10 movement speed when moving with the wind, and –10 movement speed when moving against it.\n\nAll ranged weapon attacks have a –2 to attack rolls, and their range is reduced by half when shooting into the wind.\n\nThe lightning seems to seek creatures out. While outside during this storm, roll a d20 every 1 hour you outside without shelter. On a 2-5, you are struck by a lightning bolt dealing 3d12 lightning damage. On a 1, you are attacked by an air elemental.",
},
{
"roll": 6,
"name": "Wild Magic Storm",
"description": "Fluctuations in the weave drive strange flashing lights and odd phenomena sweeping across the world. Rain falls upwards, plants bloom unseasonable, and people see apparitions of the dead and gone. High chance of encounters with sentient plants, ghosts, and strange illusions. All spells cast are naturally upcast by 1 level, but trigger a Wild Surge as per a Wild Magic Sorcerer class feature until the storm subsides.",
}
]

const encounters = {

"Dungeon Level 1": [
"Bee, Giant",
"Goblin",
"Jelly, Green*",
"Kobold",
"NPC Party: Adventurer",
"NPC Party: Bandit",
"Orc",
"Stirge",
"Skeleton",
"Snake, Spitting Cobra",
"Spider, Giant Crab",
],

"Dungeon Level 2": [
"Beetle, Giant Bombardier",
"Fly, Giant",
"Ghoul",
"Gnoll",
"Jelly, Gray",
"Hobgoblin",
"Lizard Man",
"NPC Party: Adventurer",
"Snake, Pit Viper",
"Spider, Giant Black Widow",
"Zombie"
],

"Desert or Barren": [
"Dragon, Blue",
"Hellhound",
"Giant, Fire",
"Purple Worm",
"Fly, Giant",
"Scorpion, Giant",
"Camel",
"Spider, Giant Tarantula",
"Ogre",
"Griffon",
"Gnoll",
"Dragon, Red"
],
"Grassland": [
"Dragon, Yellow",
"Troll",
"Fly, Giant",
"Scorpion, Giant",
"NPC Party: Bandit",
"Lion",
"Boar, Wild",
"NPC Party: Merchant",
"Wolf",
"Bee, Giant",
"Gnoll",
"Goblin",
"Flicker Beast",
"Wolf, Dire",
"Giant, Hill"
],
"Civilisation": [
"Dragon, Cloud",
"Ghoul",
"Goblin",
"NPC Party: Bandit",
"Centaur",
"NPC Party: Bandit",
"NPC Party: Merchant",
"NPC Party: Merchant",
"Dog",
"Gnoll",
"Ogre",
"Gargoyle*"
],
"Jungle": [
"Dragon, Green",
"NPC Party: Bandit",
"Goblin",
"Hobgoblin",
"Centipede, Giant",
"Snake, Giant Python",
"Elephant",
"Antelope",
"Jaguar",
"Stirge",
"Beetle, Giant Tiger",
"Caecilia, Giant",
"Shadow*",
"NPC Party: Merchant",
"Lycanthrope, Weretiger*"
],
"Mountains or Hills": [
"Dragon, White",
"Roc(1d6:1-3 Large, 4-5 Huge, 6 Giant)",
"Deceiver",
"Lycanthrope, Werewolf*",
"Mountain Lion",
"Wolf",
"Spider, Giant Crab",
"Hawk",
"Orc",
"Bat, Giant",
"Hawk, Giant",
"Giant, Hill",
"Chimera",
"Wolf, Dire",
"Dragon, Mountain"
],
"Ocean": [
"Dragon, Sea",
"Hydra",
"Whale, Sperm",
"Crocodile, Giant",
"Crab, Giant",
"Whale, Killer",
"Octopus, Giant",
"Shark, Mako",
"NPC Party: Merchant",
"NPC Party: Buccaneer (Pirate)",
"Shark, Bull",
"Roc (1d8: 1-5 Huge, 6-8 Giant)",
"Shark, Great White",
"Mermaid",
"Sea Serpent"
],
"River or Riverside": [
"Dragon, Black",
"Fish, Giant Piranha",
"Stirge",
"Fish, Giant Bass",
"NPC Party: Merchant",
"Lizardman",
"Crocodile",
"Frog, Giant",
"Fish, Giant Catfish",
"NPC Party: Buccaneer",
"Troll",
"Jaguar",
"Nixie",
"Water Termite, Giant",
"Dragon, Green"
],
"Swamp": [
"Dragon, Black",
"Shadow*",
"Troll",
"Lizard, Giant Draco",
"Centipede, Giant",
"Leech, Giant",
"Lizard Man",
"Crocodile",
"Stirge",
"Orc",
"Toad, Giant",
"Lizard Man",
"Blood Rose",
"Hangman Tree",
"Basilisk"
],
"Woods or Forest": [
"Dragon, Green",
"Alicorn (see Unicorn)",
"Treant",
"Orc",
"Boar, Wild",
"Bear, Black",
"Hawk, Giant",
"Antelope",
"Wolf",
"Ogre",
"Bear, Grizzly",
"Wolf, Dire",
"Giant, Hill",
"Owlbear",
"Unicorn"
]
}

function rollWeather(chance){

let roll1 = rollDice(1, 100);

if(roll1 > chance){return}
const roll2 = rollDice(1, 100);
const seasonData = weatherTable[season];

for (const entry of seasonData) {
if (roll2 >= entry.range.min && roll2 <= entry.range.max) {
weather = entry;

break; // Exit the loop once a matching weather is found
}
}

if(weather.name === "High Winds" || weather.name === "Thunderstorm" || weather.name === "Malevolent Storm"){

const rollWind = rollDice(1,4)

const windCompass = [
{
"roll": 1,
"direction": "North",
},
{
"roll": 2,
"direction": "East",
},
{
"roll": 3,
"direction": "South",
},
{
"roll": 4,
"direction": "West",
},
]


const wind = windCompass.find(entry => entry.roll === rollWind)

weather.description += " The wind is blowing towards the " + wind.direction +"."

}


if(weather.name === "Strange Phenomena"){

const roll4 = rollDice(1,6)
let strangePhenomenaEntry = strangePhenomena.find(entry => entry.roll === roll4);
weather = strangePhenomenaEntry

}

changeWeather(weather.name)

}

function rollEncounter(roll = rollDice(2,8)-2){

const hexType = regionObj.settings && regionObj.settings.hexType ? regionObj.settings.hexType : "Grassland";
if(hexType.includes("Dungeon")){roll = rollDice(1,12)-1}
console.log(hexType, roll)

const encounter = encounters[hexType][roll];
const distance = rollDice(2,6) 
const surprise = rollDice(1,6)
let surprised

if(surprise < 3){
surprised = "They will be surprised."
}else{
surprised = "They will not be surprised."
}

const reactRoll = rollDice(2,6)
let reaction

if(reactRoll < 3){
reaction = "They will attack."
}else if(reactRoll < 6){
reaction = "They are hostile and may attack."
}else if(reactRoll < 9){
reaction = "They are uncertain and confused."
}else if(reactRoll < 12){
reaction = "They are indifferent and may negotiate."
}else{
reaction = "They are friendly and eager."    
}

let HTML = ""

HTML += `<div class="noSave"><h2 style='font-family:"SoutaneBlack"'>Random Encounter</h2><br>The party will encounter ${encounter} at the end of this turn. They are ${distance} tiles away.<br><br>${surprised} ${reaction}<br><br>` 

try{

if(encounter.includes("NPC")){

for (let i = 0; i < 4; i++) {
let race = ["human", "elf", "dwarf", "halfling"][Math.floor(Math.random() * 4)];
let npcClass = ["fighter", "mage", "cleric", "thief"][Math.floor(Math.random() * 4)];
let level = Math.floor(Math.random() * 8) + 1;
let npcName = encounter;

HTML += makeNPC(race, npcClass, level, npcName);
HTML += `<br><br>`
}

}else{

console.log('calling searchFor...', encounter)
let monster = searchFor(encounter, monsters);
HTML += makeMonsterEntry(monster)

}

}catch{
console.log('Could not return ' + encounter, roll)
}

HTML += `<br><br><hr><br></div>`

return HTML;

}

function getWeather(){

let HTML = `<div class="noSave"><b>Weather Effects:</b> ${weather.description}<br><br><hr><br></div>` 
return HTML

}

function getInitative(){

let HTML = `<div class="noSave">

<br><br><hr><br></div>` 



return HTML

}

function getRandomEncounters(target, roll1 = rollDice(1,6)){

let HTML = ``

const encountersOn = regionObj.settings && regionObj.settings.randomEncounters ? regionObj.settings.randomEncounters : "on";

if(encountersOn === "on"){

if(roll1 === 1){
const roll2 = rollDice(1,6)

if(roll2 === 1){
HTML += rollEncounter()
}

HTML += rollEncounter()
target.innerHTML = filterNoSave(target);
}
}


target.innerHTML += HTML;
}


function trackTime(number = 1) {
let container = document.createElement('div');
container.style.width = "100%"; 

container.innerHTML += 
`<span style="font-size: 18px; font-family: 'SoutaneBlack';">Symbol Key</span><br><b>W:</b> Wandering Monster Check<br><b>T:</b> Torch Expires<br><b>L:</b> Lantern Oil Expires<br><b>R:</b> Party Must Rest for 1 Turn<br><br>`

container.innerHTML += `<span style="font-size: 18px; font-family: 'SoutaneBlack'" id="turnNumber">Turn Number: ${turnNumber}</span><br><br>`;

for (let j = 0; j < number; j++) {
let numGroups = 24;
let groupHeader = document.createElement('h4');
groupHeader.style.fontFamily = "SoutaneBlack";

for (let k = 0; k < numGroups; k++) {
let groupContainer = document.createElement('span');
groupContainer.style.display = "inline-block";
groupContainer.style.width = "auto"; 
groupContainer.style.marginRight = "10px";
container.appendChild(groupContainer);

for (let i = 0; i < 6; i++) {
let checkboxWrapper = document.createElement('div');
checkboxWrapper.style.display = "inline-block";
checkboxWrapper.style.width = "calc(100% / 6)";
checkboxWrapper.style.textAlign = "center";
checkboxWrapper.style.width = "20px"; // Adjust width as needed

// Add symbol above checkbox
let symbol = document.createElement('span');
symbol.textContent = getSymbol(i); // Function to determine the symbol based on index
symbol.style.fontSize = "14px"; // Adjust size as needed
checkboxWrapper.appendChild(symbol);

const checkbox = document.createElement('div');
checkbox.textContent = '☐'; // Set the initial state to unchecked
checkbox.classList.add('timeBox'); // Add a class for styling
checkbox.style.fontSize = "26px";
checkboxWrapper.appendChild(checkbox); // Add the checkbox to the wrapper
groupContainer.appendChild(checkboxWrapper); // Add the wrapper to the group container
}

// Add "L" symbol to the right of every 4th block
if ((k + 1) % 4 === 0) {
let lSymbol = document.createElement('span');
lSymbol.textContent = 'L';
lSymbol.style.fontSize = "13px"; // Adjust size as needed
lSymbol.style.marginLeft = "5px"; // Add some space
groupContainer.appendChild(lSymbol);
}
}
}

container.innerHTML += `<br><br><span style="font-size: 18px; font-family:'SoutaneBlack';">Squence of Play Per Turn</span><br><b>1. Wandering Monsters:</b> Roll when noted in the turn tracker.<br><b>2. Actions:</b> The party descides which actions to take.<br><b>3. Description:</b> Describe what happens. If monsters are encountered, follow Encounter procedures.<br><b>4. End of Turn:</b> Tick off a turn, paying attention to events noted in the turn tracker.<br>`

container.innerHTML += `<br><span style="font-size: 18px; font-family:'SoutaneBlack';">Time</span><br><b>Rounds:</b>10 Seconds<br><b>Minutes:</b>6 Rounds<br><b>Turns:</b>10 Minutes<br><b>Hours:</b>6 Turns<br>`

container.innerHTML += `<br><span style="font-size: 18px; font-family:'SoutaneBlack';">Common Durations</span><br><b>Torch:</b> 6 Turns (1 Hour)<br><b>Lantern:</b> 24 Turns (4 Hours)<br><b><i>Light</i>(C):</b> 12 Turns (2 Hours)<br><b><i>Light</i>(MU):</b> 6 Turns + 1/Level<br><b>Potion:</b> 1d6 + 6 turns<br><b>Burning Oil Pool:</b> 1 turn`

return container.outerHTML; // Return the container with the groups of checkboxes
}

// Example function to determine the symbol based on index
function getSymbol(index) {
const symbols = ['W', '*', 'W', '*', 'W', 'R,T'];
return symbols[index];
} 

rollWeather(100);
console.log(weather)
