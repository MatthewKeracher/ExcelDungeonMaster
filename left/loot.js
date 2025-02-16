function getScrollSpells(npcClass, level) {

const possibleSpells = spells.filter(spell => parseInt(spell.Level) === parseInt(level) && spell.Class === npcClass);
const randomSpell = possibleSpells[Math.floor(Math.random() * possibleSpells.length)];    
return randomSpell.Name;
    
}

const loot = {
A: {
Copper: { percentage: 50, dice: '5d6' },
Silver: { percentage: 60, dice: '5d6' },
Electrum: { percentage: 40, dice: '5d4' },
Gold: { percentage: 70, dice: '10d6' },
Platinum: { percentage: 50, dice: '1d10' },
Gems: { percentage: 50, dice: '6d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 100, dice: '6d6' }
},
B: {
Copper: { percentage: 75, dice: '5d10' },
Silver: { percentage: 50, dice: '5d6' },
Electrum: { percentage: 50, dice: '5d4' },
Gold: { percentage: 50, dice: '3d6' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 25, dice: '1d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 25, dice: '1d6' }
},
C: {
Copper: { percentage: 60, dice: '6d6' },
Silver: { percentage: 60, dice: '5d4' },
Electrum: { percentage: 30, dice: '2d6' },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 25, dice: '1d4' },
Jewelry: { percentage: 50, dice: '1d4' },
magicItems: { percentage: 15, dice: '1d2' },
},
D: {
Copper: { percentage: 30, dice: '4d6' },
Silver: { percentage: 45, dice: '6d6' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 90, dice: '5d8' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 30, dice: '1d8' },
Jewelry: { percentage: 30, dice: '1d8' },
magicItems: { percentage: 20, dice: '1d2' }, //plus potion
},
E: {
Copper: { percentage: 30, dice: '2d8' },
Silver: { percentage: 60, dice: '6d10' },
Electrum: { percentage: 50, dice: '3d8' },
Gold: { percentage: 50, dice: '4d10' },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 10, dice: '1d10' },
Jewelry: { percentage: 10, dice: '1d10' },
magicItems: { percentage: 30, dice: '1d4' }, //plus scroll
},
F: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 40, dice: '3d8' },
Electrum: { percentage: 50, dice: '4d8' },
Gold: { percentage: 85, dice: '6d10' },
Platinum: { percentage: 70, dice: '2d8' },
Gems: { percentage: 20, dice: '2d12' },
Jewelry: { percentage: 10, dice: '1d12' },
magicItems: { percentage: 35, dice: '1d4' },
Special: { percentage: 35, dice: '1d4'}, //exceptions: ['weapons'], additional: ['+ 1 potion', '+ 1 scroll'] }
},
G: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 0, dice: null },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 90, dice: '4d6x10' },
Platinum: { percentage: 75, dice: '5d8' },
Gems: { percentage: 25, dice: '3d6' },
Jewelry: { percentage: 25, dice: '1d10' },
magicItems: { percentage: 50, dice: '1d4' }, //plus scroll
},
H: {
Copper: { percentage: '*', dice: '8d10' },
Silver: { percentage: '*', dice: '6d10x10' },
Electrum: { percentage: '*', dice: '3d10x10' },
Gold: { percentage: '*', dice: '5d8x10' },
Platinum: { percentage: '*', dice: '9d8' },
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
Platinum: { percentage: 80, dice: '3d10' },
Gems: { percentage: 50, dice: '2d6' },
Jewelry: { percentage: 50, dice: '6d6' },
magicItems: { percentage: 15, dice: '1d1' },
},
J: {
Copper: { percentage: 45, dice: '3d8' },
Silver: { percentage: 45, dice: '1d8' },
Electrum: { percentage: 0, dice: null },
Gold: { percentage: 0, dice: null },
Platinum: { percentage: 0, dice: null },
Gems: { percentage: 0, dice: null },
Jewelry: { percentage: 0, dice: null },
magicItems: { percentage: 0, dice: null }
},
K: {
Copper: { percentage: 0, dice: null },
Silver: { percentage: 90, dice: '2d10' },
Electrum: { percentage: 35, dice: '1d8' },
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
Gold: { percentage: 90, dice: '4d10' },
Platinum: { percentage: 90, dice: '2d8' }, //x10
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

