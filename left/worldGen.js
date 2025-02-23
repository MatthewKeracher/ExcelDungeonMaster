let year = 0;
const elvenLifeSpan = 12000; //Months
const mortalLifeSpan = 1200; //Months
const nelyaCuibrar = 450; //Start Elves
let cuibriExtracted = 0;
let recordsArray = []
let taxedMonths = 2; // Tax amount

//Culling
let War = false;
let warDead = 0;
let Witches = false;
let witchesBurned = 0;
let Mancers = false;
let halflingsMade = 0;


const genData = {
elves: [],
humans: [],
halflings: [],
dwarves: [],
};


// Create initial elves
for (let i = 0; i < nelyaCuibrar; i++) {

let elf = {
sex : Math.random() < 0.5 ? "man" : "woman",
loa: Math.floor(Math.random() * (45 - 25 + 1)) + 25, //loa = age.
cuibri: elvenLifeSpan, //gas in the tank
lanwa: elvenLifeSpan  // size of the tank
}
genData.elves.push(elf);
};

let totalEBirths = 0;
let totalHBirths = 0;
let totalHfBirths = 0;
let totaldwfBirths = 0;

let totalEDeaths = 0;
let totalHDeaths = 0;
let totalHfDeaths = 0;
let totaldwfDeaths = 0;

function getMean(array){
const Sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const Mean = Sum / array.length;
return Mean
}

function worldGen() {

// Store results for each year
let results = [];
results.push({Year : year})

let elves = genData.elves;
let humans = genData.humans;
let halflings = genData.halflings;
let dwarves = genData.dwarves;


function extractCuibri(amount, cause, race = "elves"){
switch (cause){
case "Witches":
witchesBurned ++
break;
case "Mancers":
halflingsMade ++
break;
case "War":
warDead ++
break;
}

let added = false;
const members = eval(race) 
cuibriExtracted += amount;

for (const member of members) {
if (member.cuibri + amount < member.lanwa) {
member.cuibri += amount; 
added = true;
break; 
}}

if (!added && race === "elves") {
// If Elves are all full, then give to the Elflings to expand their lanwa!
const elflings = elves.filter(elf => elf.loa < 5);
if (elflings.length > 0) {
const index = Math.floor(Math.random() * elflings.length);
elflings[index].cuibri += amount;
elflings[index].lanwa += amount;
}}};



if(elves){
let livingElves = [];
const eMothers = [];
const eFathers = [];
const eLanwa = [];
const eCuirbri = [];
const eLoa = [];

//Census
let eMen = 0;
let eMBabies = 0;
let eMChildren = 0;
let eMAdults = 0;   

let eWomen = 0;
let eWBabies = 0;
let eWChildren = 0;
let eWAdults = 0;


for (const elf of elves) {

elf.cuibri -= 12; //Increase Age
elf.loa++; 

eLanwa.push(elf.lanwa);
eCuirbri.push(elf.cuibri);
eLoa.push(elf.loa);


if (elf.cuibri <= 0) {
totalEDeaths++;
} else {
livingElves.push(elf);

if (elf.sex === "woman") {
eWomen++
if (elf.loa <= 1) {
eWBabies++
}else if(elf.loa < 50){
eWChildren++
}else{
eMothers.push(elf);
eWAdults++
}

} else if (elf.sex === "man") {
eMen++
if (elf.loa <= 1) {
eMBabies++
}else if(elf.loa < 50){
eMChildren++
}else {
eFathers.push(elf);
eMAdults++
}
}




}}

const eLanwaMean = getMean(eLanwa);
const eCuirbriMean = getMean(eCuirbri);
const eLoaMean = getMean(eLoa);

const elvesData = {
    Extracted: Math.floor(cuibriExtracted / 12000) + ' millenia.',
    Population: {
    Total: elves.length === 0 ? "EXTINCT" : elves.length,
    Men:{   
    Adults: eMAdults,
    Children: eMChildren,
    Babies: eMBabies,
    Total: eMen,
    },
    Women:{        
    Adults: eWAdults,
    Children: eWChildren,
    Babies: eWBabies,
    Total: eWomen,
    }},
    Births: totalEBirths,
    Deaths: totalEDeaths,
    Mean: {
    Cuirbri: Math.floor(eCuirbriMean / 12) + ' years.',
    Lanwa: Math.floor(eLanwaMean / 12) + ' years.',
    Loa: Math.floor(eLoaMean) + ' years.',
    },
    };

    
results.push({Elves: elvesData});

elves = livingElves;
let eBirthRate = Math.random() * (15 - 5) + 5;
let eBirths = Math.ceil((eBirthRate / 100) * eMothers.length);

for (let i = 0; i < eBirths; i++) {
let race = Math.random() < 0.1 ? "elf" : "human";

if (race === "human") {
let human = {
parents: "humans",
sex: Math.random() < 0.5 ? "man" : "woman",
loa: 0,
cuibri: mortalLifeSpan,
lanwa: mortalLifeSpan,
};

humans.push(human);
totalHBirths++;
} else {
// Randomly select a mother and father
const mother = eMothers[Math.floor(Math.random() * eMothers.length)];
const father = eFathers[Math.floor(Math.random() * eFathers.length)];
const melyanna = 100 + Math.floor((mother.cuibri / 3) + (father.cuibri / 3));

let elfling = {
parents: "elves",
sex: Math.random() < 0.5 ? "man" : "woman",
loa: 0,
cuibri: melyanna,
lanwa: melyanna,
};

// Update the cuibri values of the parents
mother.cuibri = Math.floor((mother.cuibri / 3) * 2);
father.cuibri = Math.floor((father.cuibri / 3) * 2);

elves.push(elfling);
totalEBirths++;
}
}
}

if(humans){
let halflingsToRemove = [];
let livingHumans = [];
const hMothers = [];
const hFathers = [];
const hCuirbri = [];
const hLoa = [];

//Census
let hMen = 0;
let hMBabies = 0;
let hMChildren = 0;
let hMAdults = 0;
let hMElders = 0;

let hWomen = 0;
let hWBabies = 0;
let hWChildren = 0;
let hWAdults = 0;
let hWElders = 0;

humans.forEach((human, index) => {

human.cuibri -= 12; //1. Increase Age.
human.loa++;

hCuirbri.push(human.cuibri);
hLoa.push(human.loa);

if (human.cuibri <= 0) { //2. Kill Them.
totalHDeaths++;
} else {
livingHumans.push(human);

if (human.sex === "woman") {
hWomen++
if (human.loa <= 1) {
hWBabies++
}else if(human.loa < 16){
hWChildren++
if(Mancers){
let HalflingRoll = rollDice(1,20);
//Mancers have come to prey on street children and orphans!
if(HalflingRoll > 10){
let amount = Math.ceil(human.cuibri * 0.75)
extractCuibri(amount, "Mancers", "humans")
halflings.push({ ...human })
halflingsToRemove.push(index);
}}
}else if(human.loa < 45){
hMothers.push(human);
hWAdults++
if(Witches){
let witchRoll = rollDice(1,20);
if(witchRoll > 13){
extractCuibri(human.cuibri, "Witches")
human.cuibri = 0
}
}
}else{
hWElders++
if(Witches){
let witchRoll = rollDice(1,20);
if(witchRoll > 10){
extractCuibri(human.cuibri, "Witches")
human.cuibri = 0
}
}
}

} else if (human.sex === "man") {
hMen++

if (human.loa <= 1) {
hMBabies++
}else if(human.loa < 16){
hMChildren++
if(Mancers){
let HalflingRoll = rollDice(1,20);
if(HalflingRoll > 10){
let amount = Math.ceil(human.cuibri * 0.75)
extractCuibri(amount, "Mancers", "humans")
halflings.push({ ...human })
halflingsToRemove.push(index);

}}

}else if(human.loa < 45){
hMAdults++
//Send young men to fight for the Elf Lords!+
if(War){    
hFathers.push(human);
let warRoll = rollDice(1,20);
if(warRoll > 10){
extractCuibri(human.cuibri, "War")
human.cuibri = 0}
}

}else{
hMElders++
}
}

for (let i = halflingsToRemove.length - 1; i >= 0; i--) {
humans.splice(halflingsToRemove[i], 1); // Remove the human from the array
}


if (human.loa > 25) {  // CUIBRI TAX TO THE ELF_LORDS!
human.cuibri -= taxedMonths;
extractCuibri(taxedMonths);
}}});

const hCuirbriMean = getMean(hCuirbri);
const hLoaMean = getMean(hLoa);

const humansData = {
    Population: {
    Total: humans.length === 0 ? "EXTINCT" : humans.length,
    Men:{   
    Elders: hMElders,
    Adults: hMAdults,
    Children: hMChildren,
    Babies: hMBabies,
    Total: hMen,
    },
    Women:{        
    Elders: hWElders,
    Adults: hWAdults,
    Children: hWChildren,
    Babies: hWBabies,
    Total: hWomen,
    }},
    Births: totalHBirths,
    Deaths: totalHDeaths,
    Mean: {
    Cuirbri: Math.floor(hCuirbriMean / 12) + ' years.',
    Loa: Math.floor(hLoaMean) + ' years.',
    },
    };

results.push({Humans: humansData});

// Birth new humans        
humans = livingHumans;
let hBirthrate = Math.random() * (15 - 5) + 5;        
let hBirths = Math.ceil((hBirthrate / 100) * hMothers.length);

for (let i = 0; i < hBirths; i++) {

let race = Math.random() < 0.1 ? "dwarf" : "human";

if (race === "human") {

let human = {
parents: "humans",
sex: Math.random() < 0.5 ? "man" : "woman",
loa: 0,
cuibri: mortalLifeSpan,
lanwa: mortalLifeSpan,
};

humans.push(human);
totalHBirths++;
}else{

let dwarf = {
parents: "dwarves",
sex: Math.random() < 0.5 ? "man" : "woman",
loa: 0,
cuibri: mortalLifeSpan,
lanwa: mortalLifeSpan,
};

dwarves.push(dwarf);
totaldwfBirths++;

}
}

//Check for War 
if(hMAdults > 10000){War = true}else{War = false};
if(hWAdults > 10000){Witches = true}else{Witches = false};
if((hWChildren + hMChildren > (hMAdults + hWAdults) * 2) && (hWChildren + hMChildren > 10000)){Mancers = true}else{Mancers = false};

}

if(halflings){
let livingHalflings = [];
const hfCuirbri = [];
const hfLoa = [];

//Census
let hfMen = 0;
let hfMBabies = 0;
let hfMChildren = 0;
let hfMAdults = 0;
let hfMElders = 0;

let hfWomen = 0;
let hfWBabies = 0;
let hfWChildren = 0;
let hfWAdults = 0;
let hfWElders = 0;

for (const halfling of halflings) {

halfling.cuibri -= 12; //Increase Age
halfling.loa++;

hfCuirbri.push(halfling.cuibri);
hfLoa.push(halfling.loa);

if (halfling.cuibri <= 0) {
totalHfDeaths++;
} else {
livingHalflings.push(halfling);

if (halfling.sex === "woman") {
hfWomen++
if (halfling.loa <= 1) {
hfWBabies++
}else if(halfling.loa < 16){
hfWChildren++

}else if(halfling.loa < 45){
hfWAdults++
}else{
hfWElders++
//Burn the Heretics who practice Black Magic!
if(Witches){
let witchRoll = rollDice(1,20);
if(witchRoll > 17){
extractCuibri(halfling.cuibri, "Witches")
halfling.cuibri = 0
}
}
}

} else if (halfling.sex === "man") {
hfMen++
if (halfling.loa <= 1) {
hfMBabies++
}else if(halfling.loa < 16){
hfMChildren++

}else if(halfling.loa < 45){
hfMAdults++

//Send young men to fight for the Elf Lords!+
if(War){
let warRoll = rollDice(1,20);
if(warRoll > 17){
extractCuibri(halfling.cuibri, "War")
halfling.cuibri = 0}
}

}else{
hfMElders++
}
}

if (halfling.loa > 25) {  // CUIBRI TAX TO THE ELF_LORDS!
halfling.cuibri -= taxedMonths;
extractCuibri(taxedMonths);

}}};

const hfCuirbriMean = getMean(hfCuirbri);
const hfLoaMean = getMean(hfLoa);

const halflingsData = {
    Population: {
    Total: halflings.length === 0 ? "EXTINCT" : halflings.length,
    Men:{   
    Elders: hfMElders,
    Adults: hfMAdults,
    Children: hfMChildren,
    Babies: hfMBabies,
    Total: hfMen,
    },
    Women:{        
    Elders: hfWElders,
    Adults: hfWAdults,
    Children: hfWChildren,
    Babies: hfWBabies,
    Total: hfWomen,
    }},
    Births: totalHfBirths,
    Deaths: totalHfDeaths,
    Mean: {
    Cuirbri: Math.floor(hfCuirbriMean / 12) + ' years.',
    Loa: Math.floor(hfLoaMean) + ' years.',
    },
    };

results.push({Halflings: halflingsData});

halflings = livingHalflings;
}

if(dwarves){
let livingDwarves = [];
const dwfMothers = [];
const dwfFathers = [];
const dwfCuibri = [];
const dwfLoa = [];

//Census
let dwfMen = 0;
let dwfMBabies = 0;
let dwfMChildren = 0;
let dwfMAdults = 0;
let dwfMElders = 0;

let dwfWomen = 0;
let dwfWBabies = 0;
let dwfWChildren = 0;
let dwfWAdults = 0;
let dwfWElders = 0;

for (const dwarf of dwarves) {

dwarf.cuibri -= 12; //Increase Age
dwarf.loa++;

dwfCuibri.push(dwarf.cuibri);
dwfLoa.push(dwarf.loa);

if (dwarf.cuibri <= 0) { //2. Kill Them.
totaldwfDeaths++;
} else {
livingDwarves.push(dwarf);

if (dwarf.sex === "woman") {
dwfWomen++
if (dwarf.loa <= 1) {
dwfWBabies++
}else if(dwarf.loa < 16){
dwfWChildren++
}else if(dwarf.loa < 45){
dwfWAdults++
dwfMothers.push(dwarf);
}else{
dwfWElders++
}

} else if (dwarf.sex === "man") {
dwfMen++
if (dwarf.loa <= 1) {
dwfMBabies++
}else if(dwarf.loa < 16){
dwfMChildren++
} else if (dwarf.load === 16) { // Ithil Lifegiving Ceremony
    
    const familyMembers = [
        { member: dwfMothers[Math.floor(Math.random() * dwfMothers.length)], name: "mother" },
        { member: dwfWElders[Math.floor(Math.random() * dwfWElders.length)], name: "grandMother" },
        { member: dwfMAdults[Math.floor(Math.random() * dwfMAdults.length)], name: "mothersBrother" },
        { member: dwfMElders[Math.floor(Math.random() * dwfMElders.length)], name: "mothersFather" }
    ];

    let zotiCount = 1; 

    familyMembers.forEach(familyMember => {
        if (familyMember.member) {
            zotiCount++;
        }
    });

    const zoti = Math.ceil(dwarf.cuibri / zotiCount);

    familyMembers.forEach(familyMember => {
        if (familyMember.member) {
            familyMember.member.cuibri += Math.ceil(zoti);
        }
    });

    // Set the dwarf's cuibri
    dwarf.cuibri = zoti;
}else if (dwarf.loa < 45){
dwfMAdults++
dwfFathers.push(dwarf);

if(War){    
    let warRoll = rollDice(1,20);
    if(warRoll > 10){
    extractCuibri(dwarf.cuibri, "War")
    dwarf.cuibri = 0}
    }

}else{
dwfMElders++
}
}
}
}

const dwfCuibriMean = getMean(dwfCuibri);
const dwfLoaMean = getMean(dwfLoa);

const dwarvesData = {
    Population: {
    Total: dwarves.length === 0 ? "EXTINCT" : dwarves.length,
    Men:{   
    Elders: dwfMElders,
    Adults: dwfMAdults,
    Children: dwfMChildren,
    Babies: dwfMBabies,
    Total: dwfMen,
    },
    Women:{        
    Elders: dwfWElders,
    Adults: dwfWAdults,
    Children: dwfWChildren,
    Babies: dwfWBabies,
    Total: dwfWomen,
    }},
    Births: totaldwfBirths,
    Deaths: totaldwfDeaths,
    Mean: {
    Cuirbri: Math.floor(dwfCuibriMean / 12) + ' years.',
    Loa: Math.floor(dwfLoaMean) + ' years.',
    },
    };

results.push({Dwarves: dwarvesData});

// Birth new Dwarves        
dwarves = livingDwarves;
let dwfBirthrate = Math.random() * (6 - 1) + 1;   
let dwfBirths = Math.ceil((dwfBirthrate / 100) * dwfMothers.length);

for (let i = 0; i < dwfBirths; i++) {

let dwarf = {
parents: "dwarves",
sex: Math.random() < 0.5 ? "man" : "woman",
loa: 0,
cuibri: mortalLifeSpan,
lanwa: mortalLifeSpan,
};

dwarves.push(dwarf);
totaldwfBirths++;
}
}

//Important!
genData.elves = elves;
genData.humans = humans;
genData.halflings = halflings;
genData.dwarves = dwarves;

if (year % 100 === 0 && year !== 0) {
    recordsArray.push(results)
    }
  
year++
return JSON.stringify(results, null, 2); 

}


