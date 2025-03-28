const classTables = {
fighter : [
{ level: 1, XP: "0", hitDice: '1d8' , attackBonus: 1},
{ level: 2, XP: "2000", hitDice: '2d8' , attackBonus: 2},
{ level: 3, XP: 4000, hitDice: '3d8' , attackBonus: 2},
{ level: 4, XP: 8000, hitDice: '4d8' , attackBonus: 3},
{ level: 5, XP: 16000, hitDice: '5d8' , attackBonus: 4},
{ level: 6, XP: 32000, hitDice: '6d8' , attackBonus: 4},
{ level: 7, XP: 64000, hitDice: '7d8' , attackBonus: 5},
{ level: 8, XP: 120000, hitDice: '8d8' , attackBonus: 6},
{ level: 9, XP: 240000, hitDice: '9d8' , attackBonus: 6},
{ level: 10, XP: 360000, hitDice: '9d8+2' , attackBonus: 6},
{ level: 11, XP: 480000, hitDice: '9d8+4' , attackBonus: 7},
{ level: 12, XP: 600000, hitDice: '9d8+6' , attackBonus: 7},
{ level: 13, XP: 720000, hitDice: '9d8+8' , attackBonus: 8},
{ level: 14, XP: 840000, hitDice: '9d8+10' , attackBonus: 8},
{ level: 15, XP: 960000, hitDice: '9d8+12' , attackBonus: 8},
{ level: 16, XP: 1080000, hitDice: '9d8+14' , attackBonus: 9},
{ level: 17, XP: 1200000, hitDice: '9d8+16' , attackBonus: 9},
{ level: 18, XP: 1320000, hitDice: '9d8+18' , attackBonus: 10},
{ level: 19, XP: 1440000, hitDice: '9d8+20' , attackBonus: 10},
{ level: 20, XP: 1560000, hitDice: '9d8+22' , attackBonus: 10},
],
cleric : [
{ level: 1, XP: 0, hitDice: '1d6', spells: [0, 0, 0, 0, 0, 0] , attackBonus: 1},
{ level: 2, XP: 1500, hitDice: '2d6', spells: [1, 0, 0, 0, 0, 0] , attackBonus: 1},
{ level: 3, XP: 3000, hitDice: '3d6', spells: [2, 0, 0, 0, 0, 0] , attackBonus: 2},
{ level: 4, XP: 6000, hitDice: '4d6', spells: [2, 1, 0, 0, 0, 0] , attackBonus: 2},
{ level: 5, XP: 12000, hitDice: '5d6', spells: [2, 2, 0, 0, 0, 0] , attackBonus: 3},
{ level: 6, XP: 24000, hitDice: '6d6', spells: [2, 2, 1, 0, 0, 0] , attackBonus: 3},
{ level: 7, XP: 48000, hitDice: '7d6', spells: [3, 2, 2, 0, 0, 0] , attackBonus: 4},
{ level: 8, XP: 90000, hitDice: '8d6', spells: [3, 2, 2, 1, 0, 0] , attackBonus: 4},
{ level: 9, XP: 180000, hitDice: '9d6', spells: [3, 3, 2, 2, 0, 0] , attackBonus: 5},
{ level: 10, XP: 270000, hitDice: '9d6+1', spells: [3, 3, 2, 2, 1, 0] , attackBonus: 5},
{ level: 11, XP: 360000, hitDice: '9d6+2', spells: [4, 3, 3, 2, 2, 0] , attackBonus: 5},
{ level: 12, XP: 450000, hitDice: '9d6+3', spells: [4, 4, 3, 2, 2, 1] , attackBonus: 6},
{ level: 13, XP: 540000, hitDice: '9d6+4', spells: [4, 4, 3, 3, 2, 2] , attackBonus: 6},
{ level: 14, XP: 630000, hitDice: '9d6+5', spells: [4, 4, 4, 3, 2, 2] , attackBonus: 6},
{ level: 15, XP: 720000, hitDice: '9d6+6', spells: [4, 4, 4, 3, 3, 2] , attackBonus: 7},
{ level: 16, XP: 810000, hitDice: '9d6+7', spells: [5, 4, 4, 3, 3, 2] , attackBonus: 7},
{ level: 17, XP: 900000, hitDice: '9d6+8', spells: [5, 5, 4, 3, 3, 2] , attackBonus: 7},
{ level: 18, XP: 990000, hitDice: '9d6+9', spells: [5, 5, 4, 4, 3, 3] , attackBonus: 8},
{ level: 19, XP: 1080000, hitDice: '9d6+10', spells: [6, 5, 4, 4, 3, 3] , attackBonus: 8},
{ level: 20, XP: 1170000, hitDice: '9d6+11', spells: [6, 5, 5, 4, 3, 3] , attackBonus: 8},
],
thief : [
{ level: 1, XP: 0, hitDice: '1d4' , attackBonus: 1, attackBonus: 1},
{ level: 2, XP: 1250, hitDice: '2d4' , attackBonus: 1},
{ level: 3, XP: 2500, hitDice: '3d4' , attackBonus: 2},
{ level: 4, XP: 5000, hitDice: '4d4' , attackBonus: 2},
{ level: 5, XP: 10000, hitDice: '5d4' , attackBonus: 3},
{ level: 6, XP: 20000, hitDice: '6d4' , attackBonus: 3},
{ level: 7, XP: 40000, hitDice: '7d4' , attackBonus: 4},
{ level: 8, XP: 75000, hitDice: '8d4' , attackBonus: 4},
{ level: 9, XP: 150000, hitDice: '9d4' , attackBonus: 5},
{ level: 10, XP: 225000, hitDice: '9d4+2' , attackBonus: 5},
{ level: 11, XP: 300000, hitDice: '9d4+4' , attackBonus: 5},
{ level: 12, XP: 375000, hitDice: '9d4+6' , attackBonus: 6},
{ level: 13, XP: 450000, hitDice: '9d4+8' , attackBonus: 6},
{ level: 14, XP: 525000, hitDice: '9d4+10' , attackBonus: 6},
{ level: 15, XP: 600000, hitDice: '9d4+12' , attackBonus: 7},
{ level: 16, XP: 675000, hitDice: '9d4+14' , attackBonus: 7},
{ level: 17, XP: 750000, hitDice: '9d4+16' , attackBonus: 7},
{ level: 18, XP: 825000, hitDice: '9d4+18' , attackBonus: 8},
{ level: 19, XP: 900000, hitDice: '9d4+20' , attackBonus: 8},
{ level: 20, XP: 975000, hitDice: '9d4+22' , attackBonus: 8},
],
mage : [
{ level: 1, XP: 0, hitDice: '1d4', spells: [1, 0, 0, 0, 0, 0], attackBonus: 1},
{ level: 2, XP: 2500, hitDice: '2d4', spells: [2, 0, 0, 0, 0, 0], attackBonus: 1},
{ level: 3, XP: 5000, hitDice: '3d4', spells: [2, 1, 0, 0, 0, 0], attackBonus: 1},
{ level: 4, XP: 10000, hitDice: '4d4', spells: [2, 2, 0, 0, 0, 0], attackBonus: 2},
{ level: 5, XP: 20000, hitDice: '5d4', spells: [2, 2, 1, 0, 0, 0], attackBonus: 2},
{ level: 6, XP: 40000, hitDice: '6d4', spells: [3, 2, 2, 0, 0, 0], attackBonus: 3},
{ level: 7, XP: 80000, hitDice: '7d4', spells: [3, 2, 2, 1, 0, 0], attackBonus: 3},
{ level: 8, XP: 150000, hitDice: '8d4', spells: [3, 3, 2, 2, 0, 0], attackBonus: 3},
{ level: 9, XP: 300000, hitDice: '9d4', spells: [3, 3, 2, 2, 1, 0], attackBonus: 4},
{ level: 10, XP: 450000, hitDice: '9d4+1', spells: [4, 3, 3, 2, 2, 0], attackBonus: 4},
{ level: 11, XP: 600000, hitDice: '9d4+2', spells: [4, 4, 3, 2, 2, 1], attackBonus: 4},
{ level: 12, XP: 750000, hitDice: '9d4+3', spells: [4, 4, 3, 3, 2, 2], attackBonus: 4},
{ level: 13, XP: 900000, hitDice: '9d4+4', spells: [4, 4, 4, 3, 2, 2], attackBonus: 5},
{ level: 14, XP: 1050000, hitDice: '9d4+5', spells: [4, 4, 4, 3, 3, 2], attackBonus: 5},
{ level: 15, XP: 1200000, hitDice: '9d4+6', spells: [5, 4, 4, 3, 3, 2], attackBonus: 5},
{ level: 16, XP: 1350000, hitDice: '9d4+7', spells: [5, 5, 4, 3, 3, 2], attackBonus: 6},
{ level: 17, XP: 1500000, hitDice: '9d4+8', spells: [5, 5, 4, 4, 3, 3], attackBonus: 6},
{ level: 18, XP: 1650000, hitDice: '9d4+9', spells: [6, 5, 4, 4, 3, 3], attackBonus: 6},
{ level: 19, XP: 1800000, hitDice: '9d4+10', spells: [6, 5, 5, 4, 3, 3], attackBonus: 7},
{ level: 20, XP: 1950000, hitDice: '9d4+11', spells: [6, 5, 5, 4, 4, 3], attackBonus: 7},
],
ranger: [
{ level: 1, XP: 0, hitDice: '1d8' },
{ level: 2, XP: 2200, hitDice: '2d8' },
{ level: 3, XP: 4400, hitDice: '3d8' },
{ level: 4, XP: 8800, hitDice: '4d8' },
{ level: 5, XP: 17600, hitDice: '5d8' },
{ level: 6, XP: 35200, hitDice: '6d8' },
{ level: 7, XP: 70400, hitDice: '7d8' },
{ level: 8, XP: 132000, hitDice: '8d8' },
{ level: 9, XP: 264000, hitDice: '9d8' },
{ level: 10, XP: 396000, hitDice: '9d8+2' },
{ level: 11, XP: 528000, hitDice: '9d8+4' },
{ level: 12, XP: 660000, hitDice: '9d8+6' },
{ level: 13, XP: 792000, hitDice: '9d8+8' },
{ level: 14, XP: 924000, hitDice: '9d8+10' },
{ level: 15, XP: 1056000, hitDice: '9d8+12' },
{ level: 16, XP: 1188000, hitDice: '9d8+14' },
{ level: 17, XP: 1320000, hitDice: '9d8+16' },
{ level: 18, XP: 1452000, hitDice: '9d8+18' },
{ level: 19, XP: 1584000, hitDice: '9d8+20' },
{ level: 20, XP: 1716000, hitDice: '9d8+22' },
],
assassin: [
{ level: 1, XP: 0, hitDice: '1d4' },
{ level: 2, XP: 1375, hitDice: '2d4' },
{ level: 3, XP: 2750, hitDice: '3d4' },
{ level: 4, XP: 5500, hitDice: '4d4' },
{ level: 5, XP: 11000, hitDice: '5d4' },
{ level: 6, XP: 22000, hitDice: '6d4' },
{ level: 7, XP: 44000, hitDice: '7d4' },
{ level: 8, XP: 82500, hitDice: '8d4' },
{ level: 9, XP: 165000, hitDice: '9d4' },
{ level: 10, XP: 247500, hitDice: '9d4+2' },
{ level: 11, XP: 330000, hitDice: '9d4+4' },
{ level: 12, XP: 412500, hitDice: '9d4+6' },
{ level: 13, XP: 495000, hitDice: '9d4+8' },
{ level: 14, XP: 577500, hitDice: '9d4+10' },
{ level: 15, XP: 660000, hitDice: '9d4+12' },
{ level: 16, XP: 742500, hitDice: '9d4+14' },
{ level: 17, XP: 825000, hitDice: '9d4+16' },
{ level: 18, XP: 907500, hitDice: '9d4+18' },
{ level: 19, XP: 990000, hitDice: '9d4+20' },
{ level: 20, XP: 1072500, hitDice: '9d4+22' },
]}

const skills = {
thief : [
{ level: 1, openLocks: 25, removeTraps: 20, pickPockets: 30, moveSilently: 25, climbWalls: 80, hide: 10, listen: 30 },
{ level: 2, openLocks: 30, removeTraps: 25, pickPockets: 35, moveSilently: 30, climbWalls: 81, hide: 15, listen: 34 },
{ level: 3, openLocks: 35, removeTraps: 30, pickPockets: 40, moveSilently: 35, climbWalls: 82, hide: 20, listen: 38 },
{ level: 4, openLocks: 40, removeTraps: 35, pickPockets: 45, moveSilently: 40, climbWalls: 83, hide: 25, listen: 42 },
{ level: 5, openLocks: 45, removeTraps: 40, pickPockets: 50, moveSilently: 45, climbWalls: 84, hide: 30, listen: 46 },
{ level: 6, openLocks: 50, removeTraps: 45, pickPockets: 55, moveSilently: 50, climbWalls: 85, hide: 35, listen: 50 },
{ level: 7, openLocks: 55, removeTraps: 50, pickPockets: 60, moveSilently: 55, climbWalls: 86, hide: 40, listen: 54 },
{ level: 8, openLocks: 60, removeTraps: 55, pickPockets: 65, moveSilently: 60, climbWalls: 87, hide: 45, listen: 58 },
{ level: 9, openLocks: 65, removeTraps: 60, pickPockets: 70, moveSilently: 65, climbWalls: 88, hide: 50, listen: 62 },
{ level: 10, openLocks: 68, removeTraps: 63, pickPockets: 74, moveSilently: 68, climbWalls: 89, hide: 53, listen: 65 },
{ level: 11, openLocks: 71, removeTraps: 66, pickPockets: 78, moveSilently: 71, climbWalls: 90, hide: 56, listen: 68 },
{ level: 12, openLocks: 74, removeTraps: 69, pickPockets: 82, moveSilently: 74, climbWalls: 91, hide: 59, listen: 71 },
{ level: 13, openLocks: 77, removeTraps: 72, pickPockets: 86, moveSilently: 77, climbWalls: 92, hide: 62, listen: 74 },
{ level: 14, openLocks: 80, removeTraps: 75, pickPockets: 90, moveSilently: 80, climbWalls: 93, hide: 65, listen: 77 },
{ level: 15, openLocks: 83, removeTraps: 78, pickPockets: 94, moveSilently: 83, climbWalls: 94, hide: 68, listen: 80 },
{ level: 16, openLocks: 84, removeTraps: 79, pickPockets: 95, moveSilently: 85, climbWalls: 95, hide: 69, listen: 83 },
{ level: 17, openLocks: 85, removeTraps: 80, pickPockets: 96, moveSilently: 87, climbWalls: 96, hide: 70, listen: 86 },
{ level: 18, openLocks: 86, removeTraps: 81, pickPockets: 97, moveSilently: 89, climbWalls: 97, hide: 71, listen: 89 },
{ level: 19, openLocks: 87, removeTraps: 82, pickPockets: 98, moveSilently: 91, climbWalls: 98, hide: 72, listen: 92 },
{ level: 20, openLocks: 88, removeTraps: 83, pickPockets: 99, moveSilently: 93, climbWalls: 99, hide: 73, listen: 95 },
],
cleric: [
{ level: 1, Skeleton: 13, Zombie: 17, Ghoul: 19, Wight: 'No', Wraith: 'No', Mummy: 'No', Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 2, Skeleton: 11, Zombie: 15, Ghoul: 18, Wight: 20, Wraith: 'No', Mummy: 'No', Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 3, Skeleton: 9, Zombie: 13, Ghoul: 17, Wight: 19, Wraith: 'No', Mummy: 'No', Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 4, Skeleton: 7, Zombie: 11, Ghoul: 15, Wight: 18, Wraith: 20, Mummy: 'No', Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 5, Skeleton: 5, Zombie: 9, Ghoul: 13, Wight: 17, Wraith: 19, Mummy: 'No', Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 6, Skeleton: 3, Zombie: 7, Ghoul: 11, Wight: 15, Wraith: 18, Mummy: 20, Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 7, Skeleton: 2, Zombie: 5, Ghoul: 9, Wight: 13, Wraith: 17, Mummy: 19, Spectre: 'No', Vampire: 'No', Ghost: 'No' },
{ level: 8, Skeleton: 'Automatic', Zombie: 3, Ghoul: 7, Wight: 11, Wraith: 15, Mummy: 18, Spectre: 20, Vampire: 'No', Ghost: 'No' },
{ level: 9, Skeleton: 'Automatic', Zombie: 2, Ghoul: 5, Wight: 9, Wraith: 13, Mummy: 17, Spectre: 19, Vampire: 'No', Ghost: 'No' },
{ level: 10, Skeleton: 'Automatic', Zombie: 'Automatic', Ghoul: 3, Wight: 7, Wraith: 11, Mummy: 15, Spectre: 18, Vampire: 20, Ghost: 'No' },
{ level: 11, Skeleton: 'Damaged', Zombie: 'Automatic', Ghoul: 2, Wight: 5, Wraith: 9, Mummy: 13, Spectre: 17, Vampire: 19, Ghost: 'No' },
{ level: 12, Skeleton: 'Damaged', Zombie: 'Automatic', Ghoul: 'Automatic', Wight: 3, Wraith: 7, Mummy: 11, Spectre: 15, Vampire: 18, Ghost: 20 },
{ level: 13, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Automatic', Wight: 2, Wraith: 5, Mummy: 9, Spectre: 13, Vampire: 17, Ghost: 19 },
{ level: 14, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Automatic', Wight: 'Automatic', Wraith: 3, Mummy: 7, Spectre: 11, Vampire: 15, Ghost: 18 },
{ level: 15, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Automatic', Wraith: 2, Mummy: 5, Spectre: 9, Vampire: 13, Ghost: 17 },
{ level: 16, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Automatic', Wraith: 'Automatic', Mummy: 3, Spectre: 7, Vampire: 11, Ghost: 15 },
{ level: 17, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Damaged', Wraith: 'Automatic', Mummy: 2, Spectre: 5, Vampire: 9, Ghost: 13 },
{ level: 18, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Damaged', Wraith: 'Automatic', Mummy: 'Automatic', Spectre: 3, Vampire: 7, Ghost: 11 },
{ level: 19, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Damaged', Wraith: 'Damaged', Mummy: 'Automatic', Spectre: 2, Vampire: 5, Ghost: 9 },
{ level: 20, Skeleton: 'Damaged', Zombie: 'Damaged', Ghoul: 'Damaged', Wight: 'Damaged', Wraith: 'Damaged', Mummy: 'Automatic', Spectre: 'Automatic', Vampire: 3, Ghost: 7 },
],
ranger: [
{ level: 1, moveSilently: 25, hide: 10, tracking: 40 },
{ level: 2, moveSilently: 30, hide: 15, tracking: 44 },
{ level: 3, moveSilently: 35, hide: 20, tracking: 48 },
{ level: 4, moveSilently: 40, hide: 25, tracking: 52 },
{ level: 5, moveSilently: 45, hide: 30, tracking: 56 },
{ level: 6, moveSilently: 50, hide: 35, tracking: 60 },
{ level: 7, moveSilently: 55, hide: 40, tracking: 64 },
{ level: 8, moveSilently: 60, hide: 45, tracking: 68 },
{ level: 9, moveSilently: 65, hide: 50, tracking: 72 },
{ level: 10, moveSilently: 68, hide: 53, tracking: 75 },
{ level: 11, moveSilently: 71, hide: 56, tracking: 78 },
{ level: 12, moveSilently: 74, hide: 59, tracking: 81 },
{ level: 13, moveSilently: 77, hide: 62, tracking: 84 },
{ level: 14, moveSilently: 80, hide: 65, tracking: 87 },
{ level: 15, moveSilently: 83, hide: 68, tracking: 90 },
{ level: 16, moveSilently: 85, hide: 69, tracking: 91 },
{ level: 17, moveSilently: 87, hide: 70, tracking: 92 },
{ level: 18, moveSilently: 89, hide: 71, tracking: 93 },
{ level: 19, moveSilently: 91, hide: 72, tracking: 94 },
{ level: 20, moveSilently: 93, hide: 73, tracking: 95 },
],
assassin: [
{ level: 1, openLocks: 15, pickPockets: 20, moveSilently: 20, climbWalls: 70, hide: 5, listen: 25, poison: 25 },
{ level: 2, openLocks: 19, pickPockets: 25, moveSilently: 25, climbWalls: 72, hide: 10, listen: 29, poison: 30 },
{ level: 3, openLocks: 23, pickPockets: 30, moveSilently: 30, climbWalls: 74, hide: 15, listen: 33, poison: 35 },
{ level: 4, openLocks: 27, pickPockets: 35, moveSilently: 35, climbWalls: 76, hide: 20, listen: 37, poison: 40 },
{ level: 5, openLocks: 31, pickPockets: 40, moveSilently: 40, climbWalls: 78, hide: 25, listen: 41, poison: 45 },
{ level: 6, openLocks: 35, pickPockets: 45, moveSilently: 45, climbWalls: 80, hide: 30, listen: 45, poison: 50 },
{ level: 7, openLocks: 39, pickPockets: 50, moveSilently: 50, climbWalls: 82, hide: 35, listen: 49, poison: 55 },
{ level: 8, openLocks: 43, pickPockets: 55, moveSilently: 55, climbWalls: 84, hide: 40, listen: 53, poison: 60 },
{ level: 9, openLocks: 47, pickPockets: 60, moveSilently: 60, climbWalls: 86, hide: 45, listen: 57, poison: 65 },
{ level: 10, openLocks: 50, pickPockets: 63, moveSilently: 63, climbWalls: 87, hide: 48, listen: 60, poison: 69 },
{ level: 11, openLocks: 53, pickPockets: 66, moveSilently: 66, climbWalls: 88, hide: 51, listen: 63, poison: 73 },
{ level: 12, openLocks: 56, pickPockets: 69, moveSilently: 69, climbWalls: 89, hide: 54, listen: 66, poison: 77 },
{ level: 13, openLocks: 59, pickPockets: 72, moveSilently: 72, climbWalls: 90, hide: 57, listen: 69, poison: 81 },
{ level: 14, openLocks: 62, pickPockets: 75, moveSilently: 75, climbWalls: 91, hide: 60, listen: 72, poison: 85 },
{ level: 15, openLocks: 65, pickPockets: 78, moveSilently: 78, climbWalls: 92, hide: 63, listen: 75, poison: 89 },
{ level: 16, openLocks: 66, pickPockets: 79, moveSilently: 80, climbWalls: 93, hide: 64, listen: 77, poison: 91 },
{ level: 17, openLocks: 67, pickPockets: 80, moveSilently: 82, climbWalls: 94, hide: 65, listen: 79, poison: 93 },
{ level: 18, openLocks: 68, pickPockets: 81, moveSilently: 84, climbWalls: 95, hide: 66, listen: 81, poison: 95 },
{ level: 19, openLocks: 69, pickPockets: 82, moveSilently: 86, climbWalls: 96, hide: 67, listen: 83, poison: 97 },
{ level: 20, openLocks: 70, pickPockets: 83, moveSilently: 88, climbWalls: 97, hide: 68, listen: 85, poison: 99 },
]
}

const modifiers = [
{ range: { min: 1, max: 3 }, bonus: -3 },
{ range: { min: 4, max: 5 }, bonus: -2 },
{ range: { min: 6, max: 8 }, bonus: -1 },
{ range: { min: 9, max: 12 }, bonus: 0 },
{ range: { min: 13, max: 15 }, bonus: 1 },
{ range: { min: 16, max: 17 }, bonus: 2 },
{ range: { min: 18, max: 18 }, bonus: 3 },
];

const savingThrows = {
fighter : [
{ level: 0, deathRay: 13, magicWands: 14, paralysisPetrify: 15, dragonBreath: 16, spells: 18 },
{ level: 1, deathRay: 12, magicWands: 13, paralysisPetrify: 14, dragonBreath: 15, spells: 17 },
{ level: 2, deathRay: 11, magicWands: 12, paralysisPetrify: 14, dragonBreath: 15, spells: 16 },
{ level: 3, deathRay: 11, magicWands: 11, paralysisPetrify: 13, dragonBreath: 14, spells: 15 },
{ level: 4, deathRay: 10, magicWands: 11, paralysisPetrify: 12, dragonBreath: 14, spells: 15 },
{ level: 5, deathRay: 10, magicWands: 10, paralysisPetrify: 11, dragonBreath: 13, spells: 14 },
{ level: 6, deathRay: 9, magicWands: 9, paralysisPetrify: 10, dragonBreath: 12, spells: 14 },
{ level: 7, deathRay: 9, magicWands: 9, paralysisPetrify: 10, dragonBreath: 12, spells: 14 },
{ level: 8, deathRay: 8, magicWands: 8, paralysisPetrify: 9, dragonBreath: 13, spells: 13 },
{ level: 9, deathRay: 8, magicWands: 8, paralysisPetrify: 9, dragonBreath: 13, spells: 13 },
{ level: 10, deathRay: 7, magicWands: 7, paralysisPetrify: 8, dragonBreath: 12, spells: 12 },
{ level: 11, deathRay: 7, magicWands: 7, paralysisPetrify: 8, dragonBreath: 12, spells: 12 },
{ level: 12, deathRay: 6, magicWands: 6, paralysisPetrify: 7, dragonBreath: 11, spells: 11 },
{ level: 13, deathRay: 6, magicWands: 6, paralysisPetrify: 7, dragonBreath: 11, spells: 11 },
{ level: 14, deathRay: 5, magicWands: 5, paralysisPetrify: 6, dragonBreath: 10, spells: 10 },
{ level: 15, deathRay: 5, magicWands: 5, paralysisPetrify: 6, dragonBreath: 10, spells: 10 },
{ level: 16, deathRay: 4, magicWands: 4, paralysisPetrify: 5, dragonBreath: 9, spells: 9 },
{ level: 17, deathRay: 4, magicWands: 4, paralysisPetrify: 5, dragonBreath: 9, spells: 9 },
{ level: 18, deathRay: 3, magicWands: 3, paralysisPetrify: 4, dragonBreath: 8, spells: 8 },
{ level: 19, deathRay: 3, magicWands: 3, paralysisPetrify: 4, dragonBreath: 8, spells: 8 },
{ level: 20, deathRay: 2, magicWands: 2, paralysisPetrify: 3, dragonBreath: 7, spells: 7 },
],

mage : [
{ level: 1, deathRay: 13, magicWands: 14, paralysisPetrify: 13, dragonBreath: 16, spells: 15 },
{ level: 2, deathRay: 13, magicWands: 14, paralysisPetrify: 13, dragonBreath: 15, spells: 14 },
{ level: 3, deathRay: 13, magicWands: 14, paralysisPetrify: 13, dragonBreath: 15, spells: 14 },
{ level: 4, deathRay: 12, magicWands: 13, paralysisPetrify: 12, dragonBreath: 15, spells: 13 },
{ level: 5, deathRay: 12, magicWands: 12, paralysisPetrify: 11, dragonBreath: 14, spells: 13 },
{ level: 6, deathRay: 11, magicWands: 11, paralysisPetrify: 10, dragonBreath: 14, spells: 12 },
{ level: 7, deathRay: 11, magicWands: 11, paralysisPetrify: 10, dragonBreath: 13, spells: 12 },
{ level: 8, deathRay: 10, magicWands: 10, paralysisPetrify: 9, dragonBreath: 13, spells: 11 },
{ level: 9, deathRay: 10, magicWands: 9, paralysisPetrify: 9, dragonBreath: 13, spells: 11 },
{ level: 10, deathRay: 9, magicWands: 9, paralysisPetrify: 8, dragonBreath: 12, spells: 10 },
{ level: 11, deathRay: 9, magicWands: 8, paralysisPetrify: 7, dragonBreath: 12, spells: 11 },
{ level: 12, deathRay: 8, magicWands: 7, paralysisPetrify: 6, dragonBreath: 11, spells: 11 },
{ level: 13, deathRay: 8, magicWands: 7, paralysisPetrify: 6, dragonBreath: 11, spells: 10 },
{ level: 14, deathRay: 7, magicWands: 6, paralysisPetrify: 5, dragonBreath: 10, spells: 10 },
{ level: 15, deathRay: 7, magicWands: 6, paralysisPetrify: 5, dragonBreath: 10, spells: 9 },
{ level: 16, deathRay: 6, magicWands: 5, paralysisPetrify: 4, dragonBreath: 9, spells: 9 },
{ level: 17, deathRay: 6, magicWands: 5, paralysisPetrify: 4, dragonBreath: 9, spells: 8 },
{ level: 18, deathRay: 5, magicWands: 4, paralysisPetrify: 3, dragonBreath: 8, spells: 8 },
{ level: 19, deathRay: 5, magicWands: 4, paralysisPetrify: 3, dragonBreath: 8, spells: 7 },
{ level: 20, deathRay: 4, magicWands: 3, paralysisPetrify: 2, dragonBreath: 7, spells: 6 },
],
cleric : [
{ level: 1, deathRay: 11, magicWands: 12, paralysisPetrify: 14, dragonBreath: 16, spells: 15 },
{ level: 2, deathRay: 10, magicWands: 11, paralysisPetrify: 13, dragonBreath: 15, spells: 14 },
{ level: 3, deathRay: 9, magicWands: 10, paralysisPetrify: 13, dragonBreath: 15, spells: 14 },
{ level: 4, deathRay: 9, magicWands: 10, paralysisPetrify: 12, dragonBreath: 14, spells: 13 },
{ level: 5, deathRay: 8, magicWands: 9, paralysisPetrify: 12, dragonBreath: 14, spells: 13 },
{ level: 6, deathRay: 8, magicWands: 9, paralysisPetrify: 11, dragonBreath: 13, spells: 12 },
{ level: 7, deathRay: 7, magicWands: 8, paralysisPetrify: 11, dragonBreath: 13, spells: 12 },
{ level: 8, deathRay: 7, magicWands: 8, paralysisPetrify: 10, dragonBreath: 12, spells: 11 },
{ level: 9, deathRay: 6, magicWands: 7, paralysisPetrify: 10, dragonBreath: 12, spells: 11 },
{ level: 10, deathRay: 6, magicWands: 7, paralysisPetrify: 9, dragonBreath: 11, spells: 10 },
{ level: 11, deathRay: 5, magicWands: 6, paralysisPetrify: 9, dragonBreath: 11, spells: 10 },
{ level: 12, deathRay: 5, magicWands: 6, paralysisPetrify: 8, dragonBreath: 10, spells: 9 },
{ level: 13, deathRay: 4, magicWands: 5, paralysisPetrify: 8, dragonBreath: 10, spells: 9 },
{ level: 14, deathRay: 4, magicWands: 5, paralysisPetrify: 7, dragonBreath: 9, spells: 8 },
{ level: 15, deathRay: 3, magicWands: 4, paralysisPetrify: 7, dragonBreath: 9, spells: 8 },
{ level: 16, deathRay: 3, magicWands: 4, paralysisPetrify: 6, dragonBreath: 8, spells: 7 },
{ level: 17, deathRay: 2, magicWands: 3, paralysisPetrify: 6, dragonBreath: 8, spells: 7 },
{ level: 18, deathRay: 2, magicWands: 3, paralysisPetrify: 5, dragonBreath: 7, spells: 6 },
{ level: 19, deathRay: 1, magicWands: 2, paralysisPetrify: 5, dragonBreath: 7, spells: 6 },
{ level: 20, deathRay: 1, magicWands: 2, paralysisPetrify: 4, dragonBreath: 6, spells: 5 },
],
thief: [
{ level: 1, deathRay: 13, magicWands: 14, paralysisPetrify: 13, dragonBreath: 16, spells: 15 },
{ level: 2, deathRay: 12, magicWands: 14, paralysisPetrify: 12, dragonBreath: 15, spells: 14 },
{ level: 3, deathRay: 12, magicWands: 14, paralysisPetrify: 12, dragonBreath: 15, spells: 14 },
{ level: 4, deathRay: 11, magicWands: 13, paralysisPetrify: 12, dragonBreath: 14, spells: 13 },
{ level: 5, deathRay: 11, magicWands: 13, paralysisPetrify: 11, dragonBreath: 13, spells: 13 },
{ level: 6, deathRay: 10, magicWands: 12, paralysisPetrify: 11, dragonBreath: 12, spells: 12 },
{ level: 7, deathRay: 10, magicWands: 12, paralysisPetrify: 11, dragonBreath: 12, spells: 12 },
{ level: 8, deathRay: 9, magicWands: 12, paralysisPetrify: 10, dragonBreath: 11, spells: 11 },
{ level: 9, deathRay: 9, magicWands: 10, paralysisPetrify: 10, dragonBreath: 10, spells: 11 },
{ level: 10, deathRay: 8, magicWands: 10, paralysisPetrify: 9, dragonBreath: 9, spells: 10 },
{ level: 11, deathRay: 7, magicWands: 9, paralysisPetrify: 9, dragonBreath: 8, spells: 9 },
{ level: 12, deathRay: 7, magicWands: 9, paralysisPetrify: 8, dragonBreath: 7, spells: 9 },
{ level: 13, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 14, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 15, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 16, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 17, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 18, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 19, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
{ level: 20, deathRay: 6, magicWands: 8, paralysisPetrify: 8, dragonBreath: 6, spells: 8 },
]


}

const races = [
    { race: 'halfling', deathRay: 4, magicWands: 4, paralysisPetrify: 4, dragonBreath: 3, spells: 4 },
    { race: 'human', deathRay: 0, magicWands: 0, paralysisPetrify: 0, dragonBreath: 0, spells: 0 },
    { race: 'elf', deathRay: 0, magicWands: 2, paralysisPetrify: 1, dragonBreath: 0, spells: 2  },
    { race: 'dwarf', deathRay: 4, magicWands: 4, paralysisPetrify: 4, dragonBreath: 3, spells: 4 },
]

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

function makeNPC(race, npcClass, level, npcName) {
    const stats = {
        name: npcName ? npcName : "John Smith",
        class: npcClass.charAt(0).toUpperCase() + npcClass.slice(1),
        race: race.charAt(0).toUpperCase() + race.slice(1),
    };

    let HTML = '<table border="none" class="table">';

    // Create the table header
    HTML += '<tr>';
    HTML += '<td contenteditable="false" tabindex="0" class="tableCell tableHeader">';
    HTML += `<b>${stats.name}</b>`;
    HTML += '</td>';
    HTML += '<td contenteditable="false" tabindex="0" class="tableCell tableHeader">';
    HTML += `<b>Level ${level} ${stats.race} ${stats.class}</b>`;
    HTML += '</td>';
    HTML += '</tr>';

    // Column 1
    HTML += '<tr><td contenteditable="false" tabindex="0" class="tableCell">';

    // Hitpoints
    const hitDice = readClassTables(npcClass, level, 'hitDice');
    const hitPoints = parseHitPoints(hitDice); // Assume this function calculates HP based on HD
    const scores = makeScores(stats.class);

    // Attack Bonus
    const attackBonus = readClassTables(npcClass, level, 'attackBonus');
    const melee = attackBonus + scores.find(score => score.name === 'str').bonus;
    const ranged = attackBonus + scores.find(score => score.name === 'dex').bonus;

    HTML += `HP: (${hitDice}) ${hitPoints} <br>` //makeHitBoxes(hitPoints, hitDice);
    HTML += `Melee: +${melee}  Ranged: +${ranged}  <br><br>`;

    if (scores) {
        scores.forEach(score => {
            HTML += `${score.name.toUpperCase()}: ${score.score} (${score.bonus})<br>`;
        });
    }

    const XP = readClassTables(npcClass + 1, level, 'attackBonus');

    // Saving Throws
    const savingThrows = getSaveThrows(npcClass, level, race);
    if (savingThrows) {
        HTML += '<br><u>Saving Throws:</u><br>';
        Object.keys(savingThrows).forEach(key => {
            if (key !== 'level') {
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                HTML += `${formattedKey}: ${savingThrows[key]}<br>`;
            }
        });
    }


    
    HTML += '</td>'
    
    //Column 2
    HTML += '<td contenteditable="false" tabindex="0" class="tableCell">'
    
    // // Other Information
    // HTML += '<br>';
    // for (const [key, value] of Object.entries(stats)) {
    //     if (key !== 'name' && key !== 'class' && key !== 'race') {
    //         HTML += `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value} `;
    //     }
    // }

    // Skills
    const skills = getSkills(npcClass, level);
    if (skills) {
        HTML += '<u>Skills:</u><br>';
        Object.keys(skills).forEach(key => {
            if (key !== 'level') {
                const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                HTML += `${formattedKey}: ${skills[key]}<br>`;
            }
        });
        HTML += `<br><br>`
    }

    // Spells
    const spells = getSpells(npcClass, level);
    if (spells) {
        HTML += '<u>Spells:</u><br>';
        spells.forEach(spell => {
            HTML += `${spell.name}<br>`;
        });
        HTML += `<br><br>`
    }


    HTML += '<u>Loot:</u><br>';
    HTML += rollTreasure(["npc", level], "each");
    
    HTML += '</td></tr>';
    HTML += '</table><br>';

    return HTML;
}

function generateRandomItemsTable(categories) {
let tableHTML = '<table border="1" style="border-collapse: collapse;">';

// Generate body with random items
tableHTML += '<tbody>';
categories.forEach(category => {
if (items[category] && items[category].length > 0) {
const randomItem = items[category][Math.floor(Math.random() * items[category].length)];
tableHTML += `<tr>
<td contenteditable="true" style="min-width: 100px; padding: 5px;">${randomItem.name}</td>
<td contenteditable="true" style="min-width: 50px; padding: 5px;">${randomItem.damage? randomItem.damage: randomItem.AC? "AC " + randomItem.AC: ""}</td>
<td contenteditable="true" style="min-width: 50px; padding: 5px;">${randomItem.weight + ' lbs'} </td>
</tr>
`;
} else {
tableHTML += '<td contenteditable="true" style="min-width: 100px; padding: 5px;">No item available</td>';
}
});
tableHTML += '</tbody></table>';

return tableHTML;
}

function makeScores(npcClass){

const scoreNames = ["str", "dex", "int", "wis", "con", "cha", "soc", "psy", "luk"];
let scores = [];

scoreNames.forEach(scoreName => {

let prime

switch (npcClass) {

case 'Fighter':
prime = 'str'
break;

case 'Thief':
prime = 'dex'
break;

case 'Cleric':
prime = 'wis'
break;

case 'Mage':
prime = 'int'
break;

default:
}

let score = 0;
let bonus = 0;

if (prime === scoreName) {
// Generate scores from 13 to 18
score = Math.floor(Math.random() * (6)) + 13; // This gives scores 13-18
} else {
score = Math.floor(Math.random() * (12)) + 7;
}




for (const entry of modifiers) {
if (score >= entry.range.min && score <= entry.range.max) {
bonus = entry.bonus;
}
}


scores.push({name: scoreName, score: score, bonus: bonus})

})

return scores;

}

function readClassTables(npcClass, level, lookUp){




let classKey = npcClass.toLowerCase();

if(classKey === 'ranger'){classKey = 'fighter'};
if(classKey === 'assassin'){classKey = 'thief'};

const classTable = classTables[classKey];

if (classTable) {

const entry = classTable.find(row => row.level === level);

return entry[lookUp] || null; // Return the found entry or null if not found
} else {
return null; // Handle invalid class
}

}

function getSaveThrows(npcClass, level, race) {
    let classKey = npcClass.toLowerCase();
    if (classKey === 'ranger') { classKey = 'fighter'; }
    if (classKey === 'assassin') { classKey = 'thief'; }

    let raceKey = !race ? 'human' : race.toLowerCase();

    const classTable = savingThrows[classKey];
    const raceTable = races.find(r => r.race === raceKey);

    if (classTable && raceTable) {
        let entry = classTable.find(row => row.level === level);

        // Add Race Bonuses to Saving Throws
        for (const key in entry) {
            if (entry.hasOwnProperty(key) && key !== 'level') {
                let bonus = raceTable[key];
                if (bonus) {
                    entry[key] += ` (+${bonus})`;
                }
            }
        }

        return entry || null; // Return the found entry or null if not found
    } else {
        return null; // Handle invalid class or race
    }
}

function getSkills(npcClass, level){

const classKey = npcClass.toLowerCase();
const classTable = skills[classKey];

if (classTable) {
const entry = classTable.find(row => row.level === level);
return entry || null; // Return the found entry or null if not found
} else {
return null; // Handle invalid class
}

}

function getSpells(npcClass, level) {
// Get the spell slots available for the NPC's class and level
const spellSlotsArray = readClassTables(npcClass, level, "spells");
const classProper = npcClass.charAt(0).toUpperCase() + npcClass.slice(1);

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


// Filter spells based on class, current spell level, and ensure they haven't been used
const availableSpells = spells.filter(entry => 
entry.class === classProper && parseInt(entry.level) === spellLevel && !usedSpells.has(entry.name));

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
selectedSpells.push(chosenSpell);
usedSpells.add(chosenSpell.name);

// Remove the chosen spell from available spells to avoid duplicates
availableSpells.splice(randomIndex, 1);
}
});

return selectedSpells; // Return the array of selected spells
}




 



