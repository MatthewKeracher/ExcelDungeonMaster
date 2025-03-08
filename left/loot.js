function getScrollSpells(npcClass, level) {

const possibleSpells = spells.filter(spell => parseInt(spell.level) === parseInt(level) && spell.class === npcClass);
const randomSpell = possibleSpells[Math.floor(Math.random() * possibleSpells.length)];    
return randomSpell.name;

}

const loot = {
A: {
Copper: { percentage: 50, dice: '5d6x100' },
Silver: { percentage: 60, dice: '5d6x100' },
Electrum: { percentage: 40, dice: '5d4x100' },
Gold: { percentage: 70, dice: '10d6x100' },
Platinum: { percentage: 50, dice: '1d10x100' },
Gems: { percentage: 50, dice: '6d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 100, dice: '6d6' }
},
B: {
Copper: { percentage: 75, dice: '5d10x100' },
Silver: { percentage: 50, dice: '5d6x100' },
Electrum: { percentage: 50, dice: '5d4x100' },
Gold: { percentage: 50, dice: '3d6x100' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 25, dice: '1d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 25, dice: '1d6' }
},
C: {
Copper: { percentage: 60, dice: '6d6x100' },
Silver: { percentage: 60, dice: '5d4x100' },
Electrum: { percentage: 30, dice: '2d6x100' },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 25, dice: '1d4' },
Jewelry: { percentage: 50, dice: '1d4' },
magicItems: { percentage: 15, dice: '1d2' },
},
D: {
Copper: { percentage: 30, dice: '4d6x100' },
Silver: { percentage: 45, dice: '6d6x100' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 90, dice: '5d8x100' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 30, dice: '1d8' },
Jewelry: { percentage: 30, dice: '1d8' },
magicItems: { percentage: 20, dice: '1d2' }, //plus potion
},
E: {
Copper: { percentage: 30, dice: '2d8x100' },
Silver: { percentage: 60, dice: '6d10x100' },
Electrum: { percentage: 50, dice: '3d8x100' },
Gold: { percentage: 50, dice: '4d10x100' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 10, dice: '1d10' },
Jewelry: { percentage: 10, dice: '1d10' },
magicItems: { percentage: 30, dice: '1d4' }, //plus scroll
},
F: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 40, dice: '3d8x100' },
Electrum: { percentage: 50, dice: '4d8x100' },
Gold: { percentage: 85, dice: '6d10x100' },
Platinum: { percentage: 70, dice: '2d8x100' },
Gems: { percentage: 20, dice: '2d12' },
Jewelry: { percentage: 10, dice: '1d12' },
magicItems: { percentage: 35, dice: '1d4' },
Special: { percentage: 35, dice: '1d4'}, //exceptions: ['weapons'], additional: ['+ 1 potion', '+ 1 scroll'] }
},
G: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 90, dice: '4d6x1000' },
Platinum: { percentage: 75, dice: '5d8x100' },
Gems: { percentage: 25, dice: '3d6' },
Jewelry: { percentage: 25, dice: '1d10' },
magicItems: { percentage: 50, dice: '1d4' }, //plus scroll
},
H: {
Copper: { percentage: '*', dice: '8d10x100' },
Silver: { percentage: '*', dice: '6d10x1000' },
Electrum: { percentage: '*', dice: '3d10x1000' },
Gold: { percentage: '*', dice: '5d8x1000' },
Platinum: { percentage: '*', dice: '9d8x100' },
Gems: { percentage: 25, dice: '3d6' },
Jewelry: { percentage: 25, dice: '1d10' },
magicItems: { percentage: 25, dice: '1d10' },
Special: { percentage: 50, dice: '1d4', additional: '+ 1 scroll' }
},
I: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 80, dice: '3d10x100' },
Gems: { percentage: 50, dice: '2d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 15, dice: '1d1' },
},
J: {
Copper: { percentage: 45, dice: '3d8x100' },
Silver: { percentage: 45, dice: '1d8x100' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
K: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 90, dice: '2d10x100' },
Electrum: { percentage: 35, dice: '1d8x100' },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
L: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 50, dice: '1d4' },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
M: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 90, dice: '4d10x100' },
Platinum: { percentage: 90, dice: '2d8x1000' }, //x10
Gems: { percentage: 55, dice: '5d4' },
Jewelry: { percentage: 45, dice: '2d6' },
magicItems: { percentage: 0, dice: null }
},
N: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 40, dice: '2d4' }, //only potions
},
O: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 50, dice: '1d4' }, //only scrolls
},
P: {
Copper: { percentage: 100, dice: '3d8' },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
Q: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 100, dice: '3d6' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
R: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 100, dice: '2d6' },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
S: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 100, dice: '2d4' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
T: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 100, dice: '1d6' },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
U: {
Copper: { percentage: 50, dice: '1d20' },
Silver: { percentage: 50, dice: '1d20' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 25, dice: '1d20' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 5, dice: '1d4' },
Jewelry: { percentage: 5, dice: '1d4' },
magicItems: { percentage: 2, dice: '1d1' },
},
V: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 25, dice: '1d20' },
Electrum: { percentage: 25, dice: '1d20' },
Gold: { percentage: 50, dice: '1d20' },
Platinum: { percentage: 25, dice: '1d20' },
Gems: { percentage: 10, dice: '1d4' },
Jewelry: { percentage: 10, dice: '1d4' },
magicItems: { percentage: 5, dice: '1d1' },
},
"1": {
Copper: { percentage: 75, dice: '1d8x100' },
Silver: { percentage: 50, dice: '1d6x100' },
Electrum: { percentage: 25, dice: '1d4x100' },
Gold: { percentage: 7, dice: '1d4x100' },
Platinum: { percentage: 1, dice: '1d4x100' },
Gems: { percentage: 7, dice: '1d4' },
Jewelry: { percentage: 3, dice: '1d4' },
magicItems: { percentage: 2, dice: '1d1' }
},
"2": {
Copper: { percentage: 50, dice: '1d10x100' },
Silver: { percentage: 50, dice: '1d8x100' },
Electrum: { percentage: 25, dice: '1d6x100' },
Gold: { percentage: 20, dice: '1d6x100' },
Platinum: { percentage: 2, dice: '1d4x100' },
Gems: { percentage: 10, dice: '1d6' },
Jewelry: { percentage: 7, dice: '1d4' },
magicItems: { percentage: 5, dice: '1d1' }
},
"3": {
Copper: { percentage: 30, dice: '2d6x100' },
Silver: { percentage: 50, dice: '1d10x100' },
Electrum: { percentage: 25, dice: '1d8x100' },
Gold: { percentage: 50, dice: '1d6x100' },
Platinum: { percentage: 4, dice: '1d4x100' },
Gems: { percentage: 15, dice: '1d6' },
Jewelry: { percentage: 7, dice: '1d6' },
magicItems: { percentage: 8, dice: '1d1' }
},
"4": {
Copper: { percentage: 20, dice: '3d6x100' },
Silver: { percentage: 50, dice: '2d6x100' },
Electrum: { percentage: 25, dice: '1d10x100' },
Gold: { percentage: 50, dice: '2d6x100' },
Platinum: { percentage: 8, dice: '1d4x100' },
Gems: { percentage: 20, dice: '1d8' },
Jewelry: { percentage: 10, dice: '1d6' },
magicItems: { percentage: 12, dice: '1d1' }
},
"5": {
Copper: { percentage: 20, dice: '3d6x100' },
Silver: { percentage: 50, dice: '2d6x100' },
Electrum: { percentage: 25, dice: '1d10x100' },
Gold: { percentage: 50, dice: '2d6x100' },
Platinum: { percentage: 8, dice: '1d4x100' },
Gems: { percentage: 20, dice: '1d8' },
Jewelry: { percentage: 10, dice: '1d6' },
magicItems: { percentage: 12, dice: '1d1' }
},
"6": {
Copper: { percentage: 15, dice: '4d6x100' },
Silver: { percentage: 50, dice: '3d6x100' },
Electrum: { percentage: 25, dice: '1d12x100' },
Gold: { percentage: 70, dice: '2d8x100' },
Platinum: { percentage: 15, dice: '1d4x100' },
Gems: { percentage: 30, dice: '1d8' },
Jewelry: { percentage: 15, dice: '1d6' },
magicItems: { percentage: 16, dice: '1d1' }
},
"7": {
Copper: { percentage: 15, dice: '4d6x100' },
Silver: { percentage: 50, dice: '3d6x100' },
Electrum: { percentage: 25, dice: '1d12x100' },
Gold: { percentage: 70, dice: '2d8x100' },
Platinum: { percentage: 15, dice: '1d4x100' },
Gems: { percentage: 30, dice: '1d8' },
Jewelry: { percentage: 15, dice: '1d6' },
magicItems: { percentage: 16, dice: '1d1' }
},
"8": {
Copper: { percentage: 10, dice: '5d6x100' },
Silver: { percentage: 50, dice: '5d6x100' },
Electrum: { percentage: 25, dice: '2d8x100' },
Gold: { percentage: 75, dice: '4d6x100' },
Platinum: { percentage: 30, dice: '1d4x100' },
Gems: { percentage: 40, dice: '1d8' },
Jewelry: { percentage: 30, dice: '1d8' },
magicItems: { percentage: 20, dice: '1d1' }
}


};

const gemsValueTable = [
{ type: 'Ornamental', baseValue: 10, numberFound: '1d10' },
{ type: 'Semiprecious', baseValue: 50, numberFound: '1d8' },
{ type: 'Fancy', baseValue: 100, numberFound: '1d6' },
{ type: 'Precious', baseValue: 500, numberFound: '1d4' },
{ type: 'Gem', baseValue: 1000, numberFound: '1d2' },
{ type: 'Jewel', baseValue: 5000, numberFound: '1d1' },
];

const gemTypeTable = [
{ range: [1, 5], type: 'Alexandrite' },
{ range: [6, 12], type: 'Amethyst' },
{ range: [13, 20], type: 'Aventurine' },
{ range: [21, 30], type: 'Chlorastrolite' },
{ range: [31, 40], type: 'Diamond' },
{ range: [41, 43], type: 'Emerald' },
{ range: [44, 48], type: 'Fire Opal' },
{ range: [49, 57], type: 'Fluorospar' },
{ range: [58, 63], type: 'Garnet' },
{ range: [64, 68], type: 'Heliotrope' },
{ range: [69, 78], type: 'Malachite' },
{ range: [79, 88], type: 'Rhodonite' },
{ range: [89, 91], type: 'Ruby' },
{ range: [92, 95], type: 'Sapphire' },
{ range: [96, 100], type: 'Topaz' },
];

const valueAdjustmentTable = [
{ roll: 2, adjustment: 0.5 }, // Next Lower Value Row
{ roll: 3, adjustment: 0.5 },
{ roll: 4, adjustment: 0.75 },
{ roll: 5, adjustment: 1 },   // Normal Value
{ roll: 6, adjustment: 1 },   // Normal Value
{ roll: 7, adjustment: 1 },   // Normal Value
{ roll: 8, adjustment: 1 },   // Normal Value
{ roll: 9, adjustment: 1 },   // Normal Value
{ roll: 10, adjustment: 1.5 },
{ roll: 11, adjustment: 2 },
{ roll: 12, adjustment: 2 },  // Next Higher Value Row
];

const jewelryTable = [
{ range: [1, 6], type: 'Anklet' },
{ range: [7, 12], type: 'Belt' },
{ range: [13, 14], type: 'Bowl' },
{ range: [15, 21], type: 'Bracelet' },
{ range: [22, 27], type: 'Brooch' },
{ range: [28, 32], type: 'Buckle' },
{ range: [33, 37], type: 'Chain' },
{ range: [38, 40], type: 'Choker' },
{ range: [41, 42], type: 'Circlet' },
{ range: [43, 47], type: 'Clasp' },
{ range: [48, 51], type: 'Comb' },
{ range: [52, 52], type: 'Crown' },
{ range: [53, 55], type: 'Cup' },
{ range: [56, 62], type: 'Earring' },
{ range: [63, 65], type: 'Flagon' },
{ range: [66, 68], type: 'Goblet' },
{ range: [69, 73], type: 'Knife' },
{ range: [74, 77], type: 'Letter Opener' },
{ range: [78, 80], type: 'Locket' },
{ range: [81, 82], type: 'Medal' },
{ range: [83, 89], type: 'Necklace' },
{ range: [90, 90], type: 'Plate' },
{ range: [91, 95], type: 'Pin' },
{ range: [96, 96], type: 'Scepter' },
{ range: [97, 99], type: 'Statuette' },
{ range: [100, 100], type: 'Tiara' },
];

const itemTypeTable = [
{ range: [1, 25], item: 'Weapon' },
{ range: [26, 35], item: 'Armour' },
{ range: [36, 55], item: 'Potion' },
{ range: [56, 85], item: 'Scroll' },
{ range: [86, 90], item: 'Wand, Staff, or Rod' },
{ range: [91, 97], item: 'Miscellaneous Items' },
{ range: [98, 100], item: 'Rare Items' },
];

const magicWeaponTable = [
{ range: [1, 2], weapon: 'Great Axe', type: 'Melee' },
{ range: [3, 9], weapon: 'Battle Axe', type: 'Melee' },
{ range: [10, 11], weapon: 'Hand Axe', type: 'Melee' },
{ range: [12, 19], weapon: 'Shortbow', type: 'Ranged' },
{ range: [20, 27], weapon: 'Shortbow Arrow', type: 'Ranged' },
{ range: [28, 31], weapon: 'Longbow', type: 'Ranged' },
{ range: [32, 35], weapon: 'Longbow Arrow', type: 'Ranged' },
{ range: [36, 43], weapon: 'Light Quarrel', type: 'Ranged' },
{ range: [44, 47], weapon: 'Heavy Quarrel', type: 'Ranged' },
{ range: [48, 59], weapon: 'Dagger', type: 'Melee' },
{ range: [60, 65], weapon: 'Shortsword', type: 'Melee' },
{ range: [66, 79], weapon: 'Longsword', type: 'Melee' },
{ range: [80, 81], weapon: 'Scimitar', type: 'Melee' },
{ range: [82, 83], weapon: 'Two-Handed Sword', type: 'Melee' },
{ range: [84, 86], weapon: 'Warhammer', type: 'Melee' },
{ range: [87, 94], weapon: 'Mace', type: 'Melee' },
{ range: [95, 95], weapon: 'Maul', type: 'Melee' },
{ range: [96, 96], weapon: 'Pole Arm', type: 'Melee' },
{ range: [97, 97], weapon: 'Sling Bullet', type: 'Ranged' },
{ range: [98, 100], weapon: 'Spear', type: 'Melee' },
];

const specialEnemyTable = [
'Dragons', 'Enchanted', 'Lycanthropes', 'Regenerators', 'Spell Users', 'Undead'
];

const specialAbilityTable = [
'Casts Light on Command', 'Charm Person', 'Drains Energy', 'Flames on Command', 
'Locate Objects', 'Wishes'
];

const magicArmourTable = [
{ range: [1, 9], armour: 'Leather Armour' },
{ range: [10, 28], armour: 'Chain Mail' },
{ range: [29, 43], armour: 'Plate Mail' },
{ range: [44, 100], armour: 'Shield' },
];

const magicArmourAbilityTable = [
{ range: [1, 50], armour: '+1' },
{ range: [51, 80], armour: '+2' },
{ range: [81, 90], armour: '+3' },
{ range: [91, 95], armour: `Cursed: -${Math.floor(Math.random() * 3) + 1}`},
{ range: [96, 100], armour: 'Cursed: AC 11 (Appears +1)' },
];

const rangedWeaponBonusTable = [
{ range: [1, 64],  bonus: `+${Math.floor(Math.random() * 3) + 1}`},
{ range: [65, 94], bonus: `+${Math.floor(Math.random() * 3) + 1} vs. ${specialEnemyTable[Math.floor(Math.random() * specialEnemyTable.length)]}`},
{ range: [95, 98], bonus: `+${Math.floor(Math.random() * 3) + 1} and ${specialAbilityTable[Math.floor(Math.random() * specialAbilityTable.length)]}`},
{ range: [99, 100], bonus: 'Cursed, -1*' },
];

const meleeWeaponBonusTable = [
{ range: [1, 40], bonus: '+1' },
{ range: [41, 50], bonus: '+2' },
{ range: [51, 55], bonus: '+3' },
{ range: [56, 57], bonus: '+4' },
{ range: [58, 58], bonus: '+5' },
{ range: [59, 85], bonus: `+${Math.floor(Math.random() * 3) + 1} vs. ${specialEnemyTable[Math.floor(Math.random() * specialEnemyTable.length)]}`},
{ range: [86, 95], bonus: `+${Math.floor(Math.random() * 3) + 1} and ${specialAbilityTable[Math.floor(Math.random() * specialAbilityTable.length)]}`},
{ range: [96, 100], bonus: `Cursed: -${Math.floor(Math.random() * 3) + 1}`},
];

const potionsTable = [
{ range: [1, 3], type: 'Clairaudience' },
{ range: [4, 6], type: 'Clairvoyance' },
{ range: [7, 8], type: 'Cold Resistance' },
{ range: [9, 11], type: 'Control Animal' },
{ range: [12, 13], type: 'Control Dragon' },
{ range: [14, 16], type: 'Control Giant' },
{ range: [17, 19], type: 'Control Human' },
{ range: [20, 22], type: 'Control Plant' },
{ range: [23, 25], type: 'Control Undead' },
{ range: [26, 32], type: 'Delusion' },
{ range: [33, 35], type: 'Diminution' },
{ range: [36, 39], type: 'Fire Resistance' },
{ range: [40, 43], type: 'Flying' },
{ range: [44, 47], type: 'Gaseous Form' },
{ range: [48, 51], type: 'Giant Strength' },
{ range: [52, 55], type: 'Growth' },
{ range: [56, 59], type: 'Healing' },
{ range: [60, 63], type: 'Heroism' },
{ range: [64, 68], type: 'Invisibility' },
{ range: [69, 72], type: 'Invulnerability' },
{ range: [73, 76], type: 'Levitation' },
{ range: [77, 80], type: 'Longevity' },
{ range: [81, 84], type: 'Mind Reading' },
{ range: [85, 86], type: 'Poison' },
{ range: [87, 89], type: 'Polymorph Self' },
{ range: [90, 97], type: 'Speed' },
{ range: [98, 100], type: 'Treasure Finding' },
];

const scrollsTable = [
{ range: [1, 3], type: `Scroll of ${getScrollSpells('Cleric', 1)}`},
{ range: [4, 6], type: `Scroll of ${getScrollSpells('Cleric', 2)}`},
{ range: [7, 8], type: `Scroll of ${getScrollSpells('Cleric', 3)}`},
{ range: [9, 9], type: `Scroll of ${getScrollSpells('Cleric', 4)}`},
{ range: [10, 15], type: `Scroll of ${getScrollSpells('Mage', 1)}`},
{ range: [16, 20], type: `Scroll of ${getScrollSpells('Mage', 2)}`},
{ range: [21, 25], type: `Scroll of ${getScrollSpells('Mage', 3)}`},
{ range: [26, 29], type: `Scroll of ${getScrollSpells('Mage', 4)}`},
{ range: [30, 32], type: `Scroll of ${getScrollSpells('Mage', 5)}`},
{ range: [33, 34], type: `Scroll of ${getScrollSpells('Mage', 6)}`},
{ range: [35, 35], type: `Scroll of ${getScrollSpells('Mage', 6)}`},
{ range: [36, 40], type: 'Cursed Scroll' },
{ range: [41, 46], type: 'Scroll of Protection from Elementals' },
{ range: [47, 56], type: 'Scroll of Protection from Lycanthropes' },
{ range: [57, 61], type: 'Scroll of Protection from Magic' },
{ range: [62, 75], type: 'Scroll of Protection from Undead' },
{ range: [76, 85], type: 'Map to Treasure Type A' },
{ range: [86, 89], type: 'Map to Treasure Type E' },
{ range: [90, 92], type: 'Map to Treasure Type G' },
{ range: [93, 100], type: 'Map to 1d4 Magic Items' },
];

const wandsStavesRodsTable = [
{ range: [1, 8], type: 'Rod of Cancellation' },
{ range: [9, 13], type: 'Snake Staff' },
{ range: [14, 17], type: 'Staff of Commanding' },
{ range: [18, 28], type: 'Staff of Healing' },
{ range: [29, 30], type: 'Staff of Power' },
{ range: [31, 34], type: 'Staff of Striking' },
{ range: [35, 35], type: 'Staff of Wizardry' },
{ range: [36, 40], type: 'Wand of Cold' },
{ range: [41, 45], type: 'Wand of Enemy Detection' },
{ range: [46, 50], type: 'Wand of Fear' },
{ range: [51, 55], type: 'Wand of Fireballs' },
{ range: [56, 60], type: 'Wand of Illusion' },
{ range: [61, 65], type: 'Wand of Lightning Bolts' },
{ range: [66, 73], type: 'Wand of Magic Detection' },
{ range: [74, 79], type: 'Wand of Paralysis' },
{ range: [80, 84], type: 'Wand of Polymorph' },
{ range: [85, 92], type: 'Wand of Secret Door Detection' },
{ range: [93, 100], type: 'Wand of Trap Detection' },
];

const miscellaneousItemsTable = [
{ range: [1, 57], subtable: 'Effect Subtable 1' },
{ range: [58, 100], subtable: 'Effect Subtable 2' },
];

const effectSubtable1 = [
{ range: [1, 1], effect: 'Blasting', form: 'G' },
{ range: [2, 5], effect: 'Blending', form: 'F' },
{ range: [6, 13], effect: 'Cold Resistance', form: 'F' },
{ range: [14, 17], effect: 'Comprehension', form: 'E' },
{ range: [18, 22], effect: 'Control Animal', form: 'C' },
{ range: [23, 29], effect: 'Control Human', form: 'C' },
{ range: [30, 35], effect: 'Control Plant', form: 'C' },
{ range: [36, 37], effect: 'Courage', form: 'G' },
{ range: [38, 40], effect: 'Deception', form: 'F' },
{ range: [41, 52], effect: 'Delusion', form: 'A' },
{ range: [53, 55], effect: 'Djinni Summoning', form: 'C' },
{ range: [56, 67], effect: 'Doom', form: 'G' },
{ range: [68, 80], effect: 'Fire Resistance', form: 'F' },
{ range: [81, 85], effect: 'Invisibility', form: 'F' },
{ range: [86, 95], effect: 'Levitation', form: 'B' },
{ range: [96, 97], effect: 'Mind Reading', form: 'C' },
{ range: [98, 100], effect: 'Panic', form: 'G' },
];

const effectSubtable2 = [
{ range: [1, 7], effect: 'Protection +1', form: 'F' },
{ range: [8, 10], effect: 'Protection +2', form: 'F' },
{ range: [11, 11], effect: 'Protection +3', form: 'F' },
{ range: [12, 14], effect: 'Protection from Energy Drain', form: 'F' },
{ range: [15, 20], effect: 'Protection from Scrying', form: 'F' },
{ range: [21, 23], effect: 'Regeneration', form: 'C' },
{ range: [24, 29], effect: 'Scrying', form: 'H' },
{ range: [30, 32], effect: 'Scrying, Superior', form: 'H' },
{ range: [33, 39], effect: 'Speed', form: 'B' },
{ range: [40, 42], effect: 'Spell Storing', form: 'C' },
{ range: [43, 50], effect: 'Spell Turning', form: 'F' },
{ range: [51, 69], effect: 'Stealth', form: 'B' },
{ range: [70, 72], effect: 'Telekinesis', form: 'C' },
{ range: [73, 74], effect: 'Telepathy', form: 'C' },
{ range: [75, 76], effect: 'Teleportation', form: 'C' },
{ range: [77, 78], effect: 'True Seeing', form: 'D' },
{ range: [79, 88], effect: 'Water Walking', form: 'B' },
{ range: [89, 99], effect: 'Weakness', form: 'C' },
{ range: [100, 100], effect: 'Wishes', form: 'C' },
];

const formTable = {

A : [
{ item: "Bell (or Chime)", chance: [1,2]},
{ item: "Belt or Girdle", chance: [2,5]},
{ item: "Boots", chance: [6,13]},
{ item: "Bowl", chance: [14,15]},
{ item: "Cloak", chance: [16,28]},
{ item: "Crystal Ball or Orb", chance: [29,31]},
{ item: "Drums", chance: [32,33]},
{ item: "Helm", chance: [34,38]},
{ item: "Horn", chance: [39,43]},
{ item: "Lens", chance: [44,46]},
{ item: "Mirror", chance: [47,49]},
{ item: "Pendant", chance: [50,67]},
{ item: "Ring", chance: [68,100]}
],

B : [
{ item: "Boots", chance: [1,25] },
{ item: "Pendant", chance: [26,50]},
{ item: "Ring", chance: [51,100]}
],

C : [
{ item: "Pendant", chance: [1,40]},
{ item: "Ring", chance: [41,100]}
],

D : [
{ item: "Lens", chance: [1,17]},
{ item: "Mirror", chance: [18,21]},
{ item: "Pendant", chance: [22,50]},
{ item: "Ring", chance: [51,100]}
],

E : [
{ item: "Helm", chance: [1,40] },
{ item: "Pendant", chance: [41,80]},
{ item: "Ring", chance: [81,100]}
],

F : [
{ item: "Belt or Girdle", chance: [1,7] },
{ item: "Cloak", chance: [8,38] },
{ item: "Pendant", chance: [39,50] },
{ item: "Ring", chance: [51,100] }
],

G : [
{ item: "Bell (or Chime)", chance: [1,17]},
{ item: "Drums", chance: [18,50]},
{ item: "Horn", chance: [51,100]},
],

H : [ 
{ item: "Bowl", chance: [1,17]},   
{ item: "Crystal Ball or Orb", chance:[18,67]}, 
{ item: "Mirror", chance:[68,100]}, 
]

}

const rareItems = [
{ range: [1, 5], 
type: 'Bag of Devouring',  
desc: "This device appears, to all tests, to be a normal Bag of Holding, and in fact it performs exactly like one at first. However, all items placed within disappear forever 1d6+6 turns later. The bag continues to weigh whatever it did after the items were placed within it (that is, one-tenth the total weight of the items), until it is opened and discovered to be empty."},
{ range: [6, 20],
type: 'Bag of Holding',
desc: "This device is a bag which appears to be about 2 feet wide and 4 feet deep. It opens into an extradimensional space, and is able to hold more than should be possible: up to 500 pounds of weight, and up to 70 cubic feet of volume. The bag weighs one-tenth as much as the total of the objects held within. Any object to be stored in the bag must fit through the opening, which has a circumference of 4 feet. Puncturing or tearing the bag will destroy its magic and cause all contents to be lost forever. If this item is turned inside out all contents are dumped. The bag is unharmed, but it will no longer work until it is turned right side out again. If living creatures are placed inside they will suffocate within a turn (with exceptions for creatures resistant to suffocation as determined by the GM). The bag's volume cannot be overfilled (as excess items simply cannot be put inside), but if overloaded above 500 pounds and then lifted it will be torn. Getting any particular item from the bag requires the bearer to spend a round searching during which no movement may be made." },
{ range: [21, 32], 
type: 'Boots of Traveling and Leaping',
desc: "These boots allow the wearer to make great leaps, jumping up to 10' high and/or 30' across. They improve the wearer's movement so greatly that they also increase their movement rate on land by an additional 10' per round."},
{ range: [33, 47], 
type: 'Broom of Flying',
desc: "This broom is able to fly through the air for up to 9 hours per day (split up as its owner desires). The broom can carry 200 pounds and fly at a speed of 40 feet, or up to 400 pounds at a speed at 30 feet. In addition, the broom can travel alone to any destination named by the owner as long as they have a good idea of the location and layout of that destination. It comes to its owner from as far away as 300 yards when the command word is spoken."},
{ range: [48, 57], 
type: 'Device of Summoning Elementals', 
desc: "These devices all grant the power to summon and control an elemental. As noted, the GM is likely to choose to allow only certain types of Elementals, so not all of these devices may be available in your campaign. When one of these devices is activated in accordance with the summoning rules described for the Elemental monster entry on page 88, an appropriate elemental appears and follows the summoner's commands."},
{ range: [58, 59], 
type: 'Efreeti Bottle', 
desc: "This item may appear as an ornate bottle, or sometimes as a magic lamp. It can be activated once per day, by opening it if it takes the form of a bottle or by rubbing it if it takes the form of a lamp. When activated, smoke pours out and forms into an efreeti. The efreeti released was trapped in the bottle and forced to serve whoever activates it. However, an efreeti who has spent too long in a bottle may have lost its mind, and if this happens the efreeti will begin a frenzied attack upon whoever activated the bottle, disappearing when either the user of the bottle or the efreeti is dead. There is, fortunately, only a 1 in 10 chance this will happen. On the other hand, there is also a 1 in 10 chance that the efreeti of the bottle is able to grant three wishes to the user. If this is the case, the efreeti will perform no other service, and cannot return to the bottle after it is activated until the user makes a wish. Subsequent wishes require additional activations, and upon the final wish being granted the efreeti disappears for good. Roll 1d10 when the bottle is first activated; on a roll of 1, the efreeti is insane, while on a roll of 0 the efreeti has three wishes to grant. If neither of these results is rolled, the efreeti will serve the user for up to one hour per day for 101 days, after which time it is freed and will disappear."},
{ range: [60, 64], 
type: 'Flying Carpet', 
desc: "This item appears to be a fancy rug of the sort found in the castle of a king. It has the power to fly, carrying those upon it as if they stand upon a solid surface. A flying carpet is typically 5' x 8' in size and can carry up to 500 pounds at a movement rate of 100' per round, or up to 1,000 pounds (its maximum capacity) at a rate of 50' per round. A flying carpet can fly at any speed up to its maximum, and can hover on command."},
{ range: [65, 81], 
type: 'Gauntlets of Ogre Power',
desc: "These thick leather gloves grant the wearer a Strength bonus of +4 (instead of their own Strength bonus). Both gauntlets must be worn for the magic to be effective."},
{ range: [82, 86], 
type: 'Girdle of Giant Strength',
desc: "This broad leather belt grants the wearer the strength of a giant. For so long as it is worn, the wearer gains a Strength bonus of +5 (instead of their own Strength bonus), and can throw large stones just as a stone giant does."},
{ range: [87, 88], 
type: 'Mirror of Imprisonment',
desc: "This item can appear as any style of full-length or larger mirror. It is a form of magical trap which can be set or deactivated by speaking a command word followed by 'activate' or 'deactivate.' When in its active state, any character or creature who stands within 30 feet of the mirror and sees its reflection must save vs. Spells or be drawn bodily into the mirror, including all items worn or carried. The victim is placed within one of 20 metaphysical cells inside the mirror. Those trapped in the mirror are mere reflections and are unable to take any action. The last character who spoke the command word to the mirror is immune to its power, as are undead, constructs, and any creature that lacks eyes. A character who speaks the command word and then calls the number of a cell will cause the reflection of the occupant of that cell to appear in the mirror. The trapped creature can move and speak but cannot cast spells or take any other real action. The controlling character may interrogate the trapped victim if desired; though, the mirror does not compel the victim to respond or to be truthful. The controller may at any time speak the command word again and say 'return' and the victim will be returned to its cell; or, they can say 'come out' to free them."},
{ range: [89, 100], 
type: 'Rope of Climbing',
desc: "This 50 foot long rope is about ½ inch in diameter, but is capable of supporting up to 3,000 pounds if tied to a secure anchor point. When the user holds one end of the rope and speaks the command word, the rope animates, moving like a snake at a rate of 10' per round in whatever direction the user commands. The rope is even able to move into a completely vertical position if so ordered. It can be commanded to tie itself to any anchor point within reach (since the user must continue holding one end of the rope, it can reach no more than 50 feet from that point). The rope has no real strength and thus cannot lift or support any weight if not tied to an anchor point."},
];


function makeGem() {
    
  const rollType = rollDice(1, 100);
  const type = gemTypeTable.find(gem => gem.range[0] <= rollType && gem.range[1] >= rollType).type; 
  
  const rollValue = rollDice(1, 6);
  const value = gemsValueTable[rollValue - 1];

  const rollValueAdjust = rollDice(2, 6);
  const valueAdjust = valueAdjustmentTable.find(adjustment => adjustment.roll === rollValueAdjust).adjustment;
  const priceZoti = ammendPrices(value.baseValue * valueAdjust);
  
  const foundRoll = parseDice(value.numberFound);
  const found = rollDice(foundRoll.numDice, foundRoll.diceSides);

  return {
    found: found,
    stone: type,
    desc: value.type,
    value: valueAdjust,
    price: priceZoti
  }
}

function getGem(){

  const gem = makeGem();

  const HTML = `${gem.found}x ${gem.desc} ${gem.stone}s <br><i>(${gem.price})</i><br>`;
  
  return HTML;


}

function makeJewelry() {

  const gem = makeGem()

  const preciousMetals = [
    "Gold",
    "Silver",
    "Platinum",
    "Palladium",
    "Rhodium",
    "Iridium",
    "Osmium",
    "Ruthenium"
  ];

  const itemRoll = rollDice(1, 100);
  const item = jewelryTable.find(jewelry => jewelry.range[0] <= itemRoll && jewelry.range[1] >= itemRoll).type;
  const material = preciousMetals[Math.floor(Math.random() * preciousMetals.length)];

  const rollValue = rollDice(2,8) * 100;
  const rollValueAdjust = rollDice(2, 6);
  const valueAdjust = valueAdjustmentTable.find(adjustment => adjustment.roll === rollValueAdjust).adjustment;

  const totalPrice = ammendPrices((gem.value * gem.found) + (rollValue * valueAdjust));

  const HTML = `${material} ${item} inset with ${gem.found}x ${gem.desc} ${gem.stone}s<br><i>(${totalPrice})</i><br>`;
  
  return HTML; 
  
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
          // Handle the case where dice is a fixed number (e.g., '1d1')
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

function randomTreasureType(level) {
  const lootTypes = [
    {type: "P", range: [0, 10]},
    {type: "Q, P", range: [11, 20]},
    {type: "R, Q, P", range: [21, 50]},
    {type: "S, R, Q, P", range: [51, 70]},
    {type: "T, S, R, Q, P", range: [71, 80]},
    {type: "U", range: [81, 95]},
    {type: "V", range: [96, 1000]}
  ];

  let roll = level * 5

  for (const loot of lootTypes) {
    if (roll >= loot.range[0] && roll <= loot.range[1]) {
      return loot.type;
    }
  }

  // If no match is found (shouldn't happen with proper ranges)
  return "P"; // Default to "P" if no match is found
}

function rollTreasure(treasure, locationFilter) {

  
  let noTreasure = `<i>No treasure is at this location. It may have already been plundered, or rumour of it was false.</i><br>`

  if (treasure[0] === "npc") {
    const level = treasure[1]; // Extract level from the `treasure` array
    treasure = randomTreasureType(level)};

  // Extract the treasure types from the treasure parameter
  const treasureRegex = /([A-Z](?:,[A-Z])*)\s*(each|in lair)|None|Special|([A-Z])/gi;
  const matches = [...treasure.matchAll(treasureRegex)];

  if (/^\d$/.test(treasure)) { //For unguraded treasures
    matches.push([treasure, treasure, undefined, undefined]);
  }

  console.log(matches)

  if (matches.length > 0) {
  let treasureEntries = '';
  let returnHTML = ``;
  
  matches.forEach(match => {
  const types = match[1] ? match[1].split(',').map(type => type.trim()) : (match[3] ? [match[3]] : []);
  const location = match[2] ? match[2].toLowerCase() : (match[3] ? 'each' : match[0].toLowerCase());
  
  if (locationFilter && location !== locationFilter) {
  return;
  }

  let totalCoinValue = 0;

  const conversionRates = {
    Copper: 0.01,   // 100 copper = 1 gold
    Silver: 0.1,    // 10 silver = 1 gold
    Electrum: 0.5,  // 2 electrum = 1 gold
    Gold: 1,        // 1 gold = 1 gold
    Platinum: 10    // 1 platinum = 10 gold
  };
  
  types.forEach(type => { //ROLL LOOT
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
  let roll = rollDice(diceParse.numDice, diceParse.diceSides, diceParse.multiplier);

  const isCoin = ['Copper', 'Silver', 'Electrum', 'Gold', 'Platinum'].includes(key);

  if (isCoin) {
    // Convert to gold value and add to total
    totalCoinValue += roll * conversionRates[key];
  }
  
  if(key === 'Gems'){
  for (let i = 0; i < roll; i++) {
  treasureEntries += `${getGem()} <br>`;
  }
  } else if(key === 'Jewelry'){
  for (let i = 0; i < roll; i++) {
  treasureEntries += `${makeJewelry()} <br>`;
  }
  }else if(key === 'magicItems'){
  for (let i = 0; i < roll; i++) {
  treasureEntries += `${makeMagicItem()} <br>`;
  } 
  }}}}

  treasureEntries += ``;
 
  }
  });
  
  if(totalCoinValue > 0){

  const coins = ammendPrices(totalCoinValue, true)
  
  
  returnHTML = `<b>Coins: </b><i>(${coins})</i><br><br>`;
  returnHTML += treasureEntries;

  }

  if (location === 'none') {returnHTML = noTreasure}
  if (location === 'special') {returnHTML += `<b>Treasure ${location}</b>`}
  });

  return returnHTML || noTreasure;
  }
  
  return 'Treasure not found';
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
