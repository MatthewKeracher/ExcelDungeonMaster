const XP = [
{"hit": "< 1", "XP": 10, "AB": 3},
{"hit": 1, "XP": 25, "AB": 12},
{"hit": 2, "XP": 75, "AB": 25},
{"hit": 3, "XP": 145, "AB": 30},
{"hit": 4, "XP": 240, "AB": 40},
{"hit": 5, "XP": 360, "AB": 45},
{"hit": 6, "XP": 500, "AB": 55},
{"hit": 7, "XP": 670, "AB": 65},
{"hit": 8, "XP": 875, "AB": 70},
{"hit": 9, "XP": 1075, "AB": 75},
{"hit": 10, "XP": 1300, "AB": 90},
{"hit": 11, "XP": 1575, "AB": 95},
{"hit": 12, "XP": 1875, "AB": 100},
{"hit": 13, "XP": 2175, "AB": 110},
{"hit": 14, "XP": 2500, "AB": 115},
{"hit": 15, "XP": 2850, "AB": 125},
{"hit": 16, "XP": 3250, "AB": 135},
{"hit": 17, "XP": 3600, "AB": 145},
{"hit": 18, "XP": 4000, "AB": 160},
{"hit": 19, "XP": 4500, "AB": 175},
{"hit": 20, "XP": 5250, "AB": 200},
{"hit": 21, "XP": 6000, "AB": 225},
{"hit": 22, "XP": 6750, "AB": 250},
{"hit": 23, "XP": 7500, "AB": 275},
{"hit": 24, "XP": 8250, "AB": 300},
{"hit": 25, "XP": 9000, "AB": 325}
]

const dragonTables = {
"Yellow": [
{
"category": 1,
"hit": 2,
"attackBonus": "+2",
"breathWeapon": "None",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d4",
"tail": "1d4"
},
"spells": ["-", "-", "-"]
},
{
"category": 2,
"hit": 3,
"attackBonus": "+3",
"breathWeapon": "Heat, Cone: 50' by 25'",
"chanceTalking": "10%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d6"
},
"spells": ["1", "-", "-"]
},
{
"category": 3,
"hit": 4,
"attackBonus": "+4",
"breathWeapon": "Heat, Cone: 60' by 30'",
"chanceTalking": "15%",
"damage": {
"claw": "1d6",
"bite": "2d8",
"tail": "1d6"
},
"spells": ["2", "-", "-"]
},
{
"category": 4,
"hit": 5,
"attackBonus": "+5",
"breathWeapon": "Heat, Cone: 70' by 30'",
"chanceTalking": "20%",
"damage": {
"claw": "1d6",
"bite": "2d10",
"tail": "1d8"
},
"spells": ["3", "-", "-"]
},
{
"category": 5,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "Heat, Cone: 80' by 35'",
"chanceTalking": "30%",
"damage": {
"claw": "1d6",
"bite": "2d10",
"tail": "1d8"
},
"spells": ["3", "1", "-"]
},
{
"category": 6,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Heat, Cone: 85' by 40'",
"chanceTalking": "40%",
"damage": {
"claw": "1d8",
"bite": "2d10",
"tail": "1d8"
},
"spells": ["3", "2", "-"]
},
{
"category": 7,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Heat, Cone: 90' by 45'",
"chanceTalking": "50%",
"damage": {
"claw": "1d8",
"bite": "2d12",
"tail": "1d10"
},
"spells": ["3", "3", "1"]
}
],
"Sea": [
{
"category": 1,
"hit": 5,
"attackBonus": "+5",
"breathWeapon": "None",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d4"
},
"spells": ["-", "-", "-"]
},
{
"category": 2,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "Steam, Cloud: 70' by 25'",
"chanceTalking": "15%",
"damage": {
"claw": "1d6",
"bite": "3d4"
},
"spells": ["1", "-", "-"]
},
{
"category": 3,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Steam, Cloud: 80' by 30'",
"chanceTalking": "20%",
"damage": {
"claw": "1d6",
"bite": "3d6"
},
"spells": ["2", "1", "-"]
},
{
"category": 4,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Steam, Cloud: 90' by 40'",
"chanceTalking": "30%",
"damage": {
"claw": "1d6",
"bite": "3d8"
},
"spells": ["3", "2", "-"]
},
{
"category": 5,
"hit": 9,
"attackBonus": "+8",
"breathWeapon":"Steam, Cloud: 95' by 45'",
"chanceTalking": "45%",
"damage": {
"claw": "1d6",
"bite": "3d8"
},
"spells": ["3", "3", "-"]
},
{
"category": 6,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Steam, Cloud: 100' by 50'",
"chanceTalking": "55%",
"damage": {
"claw": "1d8",
"bite": "3d8"
},
"spells": ["4", "3", "1"]
},
{
"category": 7,
"hit": 11,
"attackBonus": "+9",
"breathWeapon": "Steam, Cloud: 100' by 55'",
"chanceTalking": "65%",
"damage": {
"claw": "1d10",
"bite": "3d10"
},
"spells": ["4", "4", "2"]
}
],
"Black": [
{
"category": 1,
"hit": 4,
"attackBonus": "+4",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d4",
"tail": "1d4"
},
"spells": ["-", "-", "-"]
},
{
"category": 2,
"hit": 5,
"attackBonus": "+5",
"breathWeapon": "Acid, Line: 70' by -",
"chanceTalking": "15%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d4"
},
"spells": ["1", "-", "-"]
},
{
"category": 3,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "Acid, Line: 80' by -",
"chanceTalking": "20%",
"damage": {
"claw": "1d6",
"bite": "2d8",
"tail": "1d4"
},
"spells": ["2", "-", "-"]
},
{
"category": 4,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Acid, Line: 90' by -",
"chanceTalking": "25%",
"damage": {
"claw": "1d6",
"bite": "2d10",
"tail": "1d6"
},
"spells": ["4", "-", "-"]
},
{
"category": 5,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Acid, Line: 95' by -",
"chanceTalking": "35%",
"damage": {
"claw": "1d6",
"bite": "2d10",
"tail": "1d6"
},
"spells": ["4", "1", "-"]
},
{
"category": 6,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Acid, Line: 100' by 40'",
"chanceTalking": "50%",
"damage": {
"claw": "1d8",
"bite": "2d10",
"tail": "1d8"
},
"spells": ["4", "2", "1"]
},
{
"category": 7,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Acid, Line: 100' by 45'",
"chanceTalking": "60%",
"damage": {
"claw": "1d8",
"bite": "2d12",
"tail": "1d8"
},
"spells": ["4", "3", "2"]
}
],
"Turtle"
: [
{
"category": 1,
"hit": 15,
"attackBonus": "+11",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d6",
"bite": "4d6"
},
"spells": ["-", "-", "-"]
},
{
"category": 2,
"hit": 20,
"attackBonus": "+13",
"breathWeapon": "Steam, Cloud: 50' by 25'",
"chanceTalking": "15%",
"damage": {
"claw": "2d4",
"bite": "6d6"
},
"spells": ["-", "-", "-"]
},
{
"category": 3,
"hit": 25,
"attackBonus": "+14",
"breathWeapon": "Steam, Cloud: 75' by 50'",
"chanceTalking": "20%",
"damage": {
"claw": "2d6",
"bite": "8d6"
},
"spells": ["1", "-", "-"]
},
{
"category": 4,
"hit": 30,
"attackBonus": "+15",
"breathWeapon": "Steam, Cloud: 100' by 75'",
"chanceTalking": "30%",
"damage": {
"claw": "2d8",
"bite": "10d6"
},
"spells": ["2", "1", "-"]
},
{
"category": 5,
"hit": 35,
"attackBonus": "+16",
"breathWeapon": "Steam, Cloud: 125' by 100'",
"chanceTalking": "45%",
"damage": {
"claw": "2d10",
"bite": "12d6"
},
"spells": ["2", "2", "-"]
},
{
"category": 6,
"hit": 40,
"attackBonus": "+16",
"breathWeapon": "Steam, Cloud: 150' by 125'",
"chanceTalking": "55%",
"damage": {
"claw": "2d12",
"bite": "14d6"
},
"spells": ["3", "2", "-"]
},
{
"category": 7,
"hit": 45,
"attackBonus": "+16",
"breathWeapon": "Steam, Cloud: 175' by 150'",
"chanceTalking": "65%",
"damage": {
"claw": "3d10",
"bite": "16d6"
},
"spells": ["3", "3", "-"]
}
],
"Ice": [
{
"category": 1,
"hit": 3,
"attackBonus": "+3",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d4",
"tail": "1d4"
},
"spells": ["-", "-", "-"]
},
{
"category": 2,
"hit": 4,
"attackBonus": "+4",
"breathWeapon": "Cold, Cone: 60' by 25'",
"chanceTalking": "10%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d4"
},
"spells": ["1", "-", "-"]
},
{
"category": 3,
"hit": 5,
"attackBonus": "+5",
"breathWeapon": "Cold, Cone: 70' by 30'",
"chanceTalking": "15%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d4"
},
"spells": ["2", "-", "-"]
},
{
"category": 4,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "Cold, Cone: 80' by 30'",
"chanceTalking": "20%",
"damage": {
"claw": "1d4",
"bite": "2d8",
"tail": "1d4"
},
"spells": ["3", "-", "-"]
},
{
"category": 5,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Cold, Cone: 85' by 35'",
"chanceTalking": "30%",
"damage": {
"claw": "1d4",
"bite": "2d8",
"tail": "1d4"
},
"spells": ["3", "1", "-"]
},
{
"category": 6,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Cold, Cone: 90' by 40'",
"chanceTalking": "40%",
"damage": {
"claw": "1d6",
"bite": "2d10",
"tail": "1d6"
},
"spells": ["3", "2", "-"]
},
{
"category": 7,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Cold, Cone: 95' by 45'",
"chanceTalking": "50%",
"damage": {
"claw": "1d8",
"bite": "2d10",
"tail": "1d6"
},
"spells": ["3", "3", "1"]
}
],
"Red": [
{
"category": 1,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d4"
},
"spells": ["-", "-", "-", "-", "-"]
},
{
"category": 2,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Fire, Cone: 70' by 30'",
"chanceTalking": "15%",
"damage": {
"claw": "1d6",
"bite": "3d6",
"tail": "1d6"
},
"spells": ["1", "-", "-", "-", "-"]
},
{
"category": 3,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Fire, Cone: 80' by 35'",
"chanceTalking": "30%",
"damage": {
"claw": "1d8",
"bite": "4d6",
"tail": "1d6"
},
"spells": ["2", "1", "-", "-", "-"]
},
{
"category": 4,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Fire, Cone: 90' by 45'",
"chanceTalking": "50%",
"damage": {
"claw": "1d8",
"bite": "4d8",
"tail": "1d8"
},
"spells": ["3", "2", "1", "-", "-"]
},
{
"category": 5,
"hit": 11,
"attackBonus": "+9",
"breathWeapon": "Fire, Cone: 95' by 50'",
"chanceTalking": "60%",
"damage": {
"claw": "1d8",
"bite": "5d8",
"tail": "1d8"
},
"spells": ["4", "3", "2", "1", "-"]
},
{
"category": 6,
"hit": 12,
"attackBonus": "+10",
"breathWeapon": "Fire, Cone: 100' by 55'",
"chanceTalking": "70%",
"damage": {
"claw": "1d10",
"bite": "5d8",
"tail": "1d8"
},
"spells": ["5", "4", "2", "2", "1"]
},
{
"category": 7,
"hit": 13,
"attackBonus": "+11",
"breathWeapon": "Fire, Cone: 110' by 60'",
"chanceTalking": "85%",
"damage": {
"claw": "1d10",
"bite": "6d8",
"tail": "1d10"
},
"spells": ["5", "5", "3", "2", "2"]
}
],
"Red":  [
{
"category": 1,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d6",
"tail": "1d4"
},
"spells": ["-", "-", "-", "-"]
},
{
"category": 2,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Lightning, Line: 80'",
"chanceTalking": "15%",
"damage": {
"claw": "1d4",
"bite": "3d6",
"tail": "1d6"
},
"spells": ["1", "-", "-", "-"]
},
{
"category": 3,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Lightning, Line: 90'",
"chanceTalking": "20%",
"damage": {
"claw": "1d6",
"bite": "3d8",
"tail": "1d6"
},
"spells": ["2", "1", "-", "-"]
},
{
"category": 4,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Lightning, Line: 100'",
"chanceTalking": "40%",
"damage": {
"claw": "1d8",
"bite": "3d8",
"tail": "1d8"
},
"spells": ["4", "2", "-", "-"]
},
{
"category": 5,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Lightning, Line: 100'",
"chanceTalking": "50%",
"damage": {
"claw": "1d8",
"bite": "3d8",
"tail": "1d8"
},
"spells": ["4", "3", "1", "-"]
},
{
"category": 6,
"hit": 11,
"attackBonus": "+9",
"breathWeapon": "Lightning, Line: 110' by 55'",
"chanceTalking": "60%",
"damage": {
"claw": "1d8",
"bite": "3d8",
"tail": "1d8"
},
"spells": ["4", "4", "2", "-"]
},
{
"category": 7,
"hit": 12,
"attackBonus": "+10",
"breathWeapon": "Lightning, Line: 120' by 60'",
"chanceTalking": "70%",
"damage": {
"claw": "1d10",
"bite": "3d10",
"tail": "1d8"
},
"spells": ["5", "4", "2", "1"]
}
],
"Green":  [
{
"category": 1,
"hit": 5,
"attackBonus": "+5",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d4",
"bite": "2d4",
"tail": "1d4"
},
"spells": ["-", "-", "-", "-"]
},
{
"category": 2,
"hit": 6,
"attackBonus": "+6",
"breathWeapon": "Poison Gas, Cloud: 70' by 25'",
"chanceTalking": "15%",
"damage": {
"claw": "1d6",
"bite": "3d4",
"tail": "1d4"
},
"spells": ["1", "-", "-", "-"]
},
{
"category": 3,
"hit": 7,
"attackBonus": "+7",
"breathWeapon": "Poison Gas, Cloud: 80' by 30'",
"chanceTalking": "20%",
"damage": {
"claw": "1d6",
"bite": "3d6",
"tail": "1d6"
},
"spells": ["2", "1", "-", "-"]
},
{
"category": 4,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "Poison Gas, Cloud: 90' by 40'",
"chanceTalking": "30%",
"damage": {
"claw": "1d6",
"bite": "3d8",
"tail": "1d6"
},
"spells": ["3", "2", "-", "-"]
},
{
"category": 5,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Poison Gas, Cloud: 95' by 45'",
"chanceTalking": "45%",
"damage": {
"claw": "1d6",
"bite": "3d8",
"tail": "1d6"
},
"spells": ["3", "3", "1", "-"]
},
{
"category": 6,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Poison Gas, Cloud: 100' by 50'",
"chanceTalking": "55%",
"damage": {
"claw": "1d8",
"bite": "3d8",
"tail": "1d8"
},
"spells": ["4", "3", "2", "-"]
},
{
"category": 7,
"hit": 11,
"attackBonus": "+9",
"breathWeapon": "Poison Gas, Cloud: 100' by 55'",
"chanceTalking": "65%",
"damage": {
"claw": "1d10",
"bite": "3d10",
"tail": "1d8"
},
"spells": ["4", "4", "3", "1"]
}
],
"Cloud": [
{
"category": 1,
"hit": 8,
"attackBonus": "+8",
"breathWeapon": "-",
"chanceTalking": "0%",
"damage": {
"claw": "1d6",
"bite": "3d6",
"tail": "1d4"
},
"spells": ["-", "-", "-", "-", "-", "-"]
},
{
"category": 2,
"hit": 9,
"attackBonus": "+8",
"breathWeapon": "Special: 70' by 30'",
"chanceTalking": "35%",
"damage": {
"claw": "1d6",
"bite": "4d6",
"tail": "1d6"
},
"spells": ["1", "-", "-", "-", "-", "-"]
},
{
"category": 3,
"hit": 10,
"attackBonus": "+9",
"breathWeapon": "Special: 80' by 35'",
"chanceTalking": "70%",
"damage": {
"claw": "1d6",
"bite": "5d6",
"tail": "1d6"
},
"spells": ["2", "1", "-", "-", "-", "-"]
},
{
"category": 4,
"hit": 11,
"attackBonus": "+9",
"breathWeapon": "Special: 90' by 45'",
"chanceTalking": "85%",
"damage": {
"claw": "2d4",
"bite": "6d6",
"tail": "2d4"
},
"spells": ["3", "2", "1", "-", "-", "-"]
},
{
"category": 5,
"hit": 12,
"attackBonus": "+10",
"breathWeapon": "Special: 95' by 50'",
"chanceTalking": "90%",
"damage": {
"claw": "2d4",
"bite": "6d6",
"tail": "2d6"
},
"spells": ["4", "3", "2", "1", "-", "-"]
},
{
"category": 6,
"hit": 13,
"attackBonus": "+11",
"breathWeapon": "Special: 100' by 55'",
"chanceTalking": "95%",
"damage": {
"claw": "2d6",
"bite": "7d6",
"tail": "2d6"
},
"spells": ["5", "4", "3", "2", "1", "-"]
},
{
"category": 7,
"hit": 14,
"attackBonus": "+11",
"breathWeapon": "Special: 110' by 60'",
"chanceTalking": "95%",
"damage": {
"claw": "2d8",
"bite": "7d6",
"tail": "2d8"
},
"spells": ["6", "5", "4", "3", "2", "1"]
}
]     
}

