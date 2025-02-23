let year = 0;
const elvenLifeSpan = 12000; //Months
const mortalLifeSpan = 1200; //Months
const nelyaCuibrar = 450; //Start Elves
let cuibriExtracted = 0;
let taxedMonths = 2; // Tax amount

//Culling
let War = false;
let warDead = 0;
let Witches = false;
let witchesBurned = 0;
let Mancers = false; //Make Halflings
let halflingsMade = 0;


//cuibri: years left to live
//loa: years have lives
//lanwa: years of cuibri can store

const houseList = ["Veluna"];

// Create a houses object where each property represents a house
const houses = {};

houseList.forEach(houseName => {
    houses[houseName] = {
        elves: [],
        humans: [],
        halflings: [],
    };
});

// Create initial elves
Object.keys(houses).forEach(houseName => {
    const currentHouse = houses[houseName];
    
    // Add individual elf entries 
    for (let i = 0; i < Math.floor(nelyaCuibrar/houseList.length); i++) {

        let elf = {
            sex : Math.random() < 0.5 ? "man" : "woman",
            loa: Math.floor(Math.random() * (45 - 25 + 1)) + 25, //loa = age.
            cuibri: elvenLifeSpan, //gas in the tank
            lanwa: elvenLifeSpan  // size of the tank
        }

        currentHouse.elves.push(elf);
      }     
    
});

let totalEBirths = 0;
let totalHBirths = 0;
let totalHfBirths = 0;

let totalEDeaths = 0;
let totalHDeaths = 0;
let totalHfDeaths = 0;

function getMean(array){
    const Sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const Mean = Sum / array.length;
    return Mean
    }

function worldGen() {

    // Store results for each year
    let results = [];
 
    Object.entries(houses).forEach(([houseName, house]) => {

    let elves = house.elves;
    let humans = house.humans;
    let halflings = house.halflings;

        function extractCuibri(amount, cause, race = "elves"){
            let added = false;
            const members = eval(race) 
            cuibriExtracted += amount;

            for (const member of members) {
            if (member.cuibri + amount < member.lanwa) {
            member.cuibri += amount; 
            added = true;
            break; 
            }}

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
            
            
            if (!added && race === "elves") {
            // If Elves are all full, then give to the Elflings to expand their lanwa!
            const elflings = elves.filter(elf => elf.loa < 5);
            if (elflings.length > 0) {
            const index = Math.floor(Math.random() * elflings.length);
            elflings[index].cuibri += amount;
            elflings[index].lanwa += amount;
            }}};

            
            // if (year % 50 === 0 && year > 0) {
            // console.clear()
            // const sortedElves = elves.slice().sort((a, b) => b.cuibri - a.cuibri);
            // const startIndex = 450; 
            // const topCount = 5; 

            // for (let i = startIndex; i < Math.min(startIndex + topCount, sortedElves.length); i++) {
            // const elf = sortedElves[i];
            // console.log(`${elf.loa} years old. [${Math.floor(elf.cuibri/12)}/${Math.floor(elf.lanwa/12)}]`);
            // }
           
            // }

     
    //CUIBRAR
    let Elves = [];
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

            elf.cuibri -= 12; //Increase Age
            elf.loa++; 

            eLanwa.push(elf.lanwa);
            eCuirbri.push(elf.cuibri);
            eLoa.push(elf.loa);


            if (elf.cuibri <= 0) {
            totalEDeaths++;
            } else {
            livingElves.push(elf);

            }}

            const eLanwaMean = getMean(eLanwa);
            const eCuirbriMean = getMean(eCuirbri);
            const eLoaMean = getMean(eLoa);

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

 
    // Human
    let Humans = [];
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

            for (const human of humans) {

                if (human.sex === "woman") {
                    hWomen++
                    if (human.loa <= 1) {
                        hWBabies++
                    }else if(human.loa < 16){
                        if(Mancers){
                            hWChildren++
                            let HalflingRoll = rollDice(1,20);
                            if(HalflingRoll > 10){
                                extractCuibri(Math.floor(human.cuibri/2), "Mancers", "humans")
                                halflings.push(human)
                            }}
                        
                    }else if(human.loa < 45){
                        hMothers.push(human);
                        hWAdults++
                    }else{
                        //Burn the Heretics who practice Black Magic!
                        if(Witches){
                            hWElders++
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
                        if(Mancers){
                            hMChildren++
                            let HalflingRoll = rollDice(1,20);
                            if(HalflingRoll > 10){
                                extractCuibri(Math.floor(human.cuibri/2), "Mancers", "humans")
                                halflings.push(human)
                                
                            }}
                        
                    }else if(human.loa < 45){

                        //Send young men to fight for the Elf Lords!+
                        if(War){
                            hMAdults++
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

            human.cuibri -= 12; //Increase Age
            human.loa++;

            hCuirbri.push(human.cuibri);
            hLoa.push(human.loa);
    
            if (human.cuibri <= 0) {
            totalHDeaths++;
            } else {
            livingHumans.push(human);

       
        
            
        if (human.loa > 25) {  // CUIBRI TAX TO THE ELF_LORDS!
            human.cuibri -= taxedMonths;
            extractCuibri(taxedMonths);

            }}};

            const hCuirbriMean = getMean(hCuirbri);
            const hLoaMean = getMean(hLoa);

    // Birth new humans        
    humans = livingHumans;
    let hBirthrate = Math.random() * (15 - 5) + 5;        
    let hBirths = Math.ceil((hBirthrate / 100) * hMothers.length);

    for (let i = 0; i < hBirths; i++) {
        let human = {
            parents: "humans",
            sex: Math.random() < 0.5 ? "man" : "woman",
            loa: 0,
            cuibri: mortalLifeSpan,
            lanwa: mortalLifeSpan,
        };

        humans.push(human);
        totalHBirths++;
    }

    // Halflings
    let Halflings = [];
    let livingHalflings = [];
    const hfMothers = [];
    const hfFathers = [];
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

             if (halfling.sex === "woman") {
                 hfWomen++
                 if (halfling.loa <= 1) {
                     hfWBabies++
                 }else if(halfling.loa < 16){
                     if(Mancers){
                        hfWChildren++
                         let HalflingRoll = rollDice(1,20);
                         if(HalflingRoll > 17){
                             extractCuibri(Math.floor(halfling.cuibri/2), "Mancers", "humans")
                         }}
                    
                 }else if(halfling.loa < 45){
                     hfMothers.push(halfling);
                     hfWAdults++
                 }else{
                     //Burn the Heretics who practice Black Magic!
                     if(Witches){
                        hfWElders++
                         let witchRoll = rollDice(1,20);
                         if(witchRoll > 10){
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
                     if(Mancers){
                         let HalflingRoll = rollDice(1,20);
                         if(HalflingRoll > 17){
                             extractCuibri(Math.floor(halfling.cuibri/2), "Mancers", "humans")
                             
                         }}
                     
                 }else if(halfling.loa < 45){
                    hfFathers.push(halfling);
                    hfMAdults++

                     //Send young men to fight for the Elf Lords!+
                     if(War){
                     let warRoll = rollDice(1,20);
                     if(warRoll > 10){
                         extractCuibri(halfling.cuibri, "War")
                         halfling.cuibri = 0}
                     }
  
                 }else{
                     hfMElders++
                 }
             }

         halfling.cuibri -= 12; //Increase Age
         halfling.loa++;

         hfCuirbri.push(halfling.cuibri);
         hfLoa.push(halfling.loa);
 
         if (halfling.cuibri <= 0) {
         totalHfDeaths++;
         } else {
         livingHalflings.push(halfling);

    
     
         
     if (halfling.loa > 25) {  // CUIBRI TAX TO THE ELF_LORDS!
         halfling.cuibri -= taxedMonths;
         extractCuibri(taxedMonths);

         }}};

         const hfCuirbriMean = getMean(hfCuirbri);
         const hfLoaMean = getMean(hfLoa);

 // Birth new humans        
 halflings = livingHalflings;
 let hfBirthrate = Math.random() * (15 - 5) + 5;        
 let hfBirths = Math.ceil((hfBirthrate / 100) * hfMothers.length);

 for (let i = 0; i < hfBirths; i++) {
     let halfling = {
         parents: "halflings",
         sex: Math.random() < 0.5 ? "man" : "woman",
         loa: 0,
         cuibri: mortalLifeSpan,
         lanwa: mortalLifeSpan,
     };

     halflings.push(halfling);
     totalHfBirths++;
 }

    //Check for War 
    if(hMAdults > 10000){War = true}else{War = false};
    if(hWAdults > 10000){Witches = true}else{Witches = false};
    if(hWChildren > hMAdults && hWChildren > 8000|| hWChildren > hWAdults && hWChildren > 8000){Mancers = true}else{Mancers = false};
   

    //Important!
    house.elves = elves;
    house.humans = humans;

    Humans = {
        Extracted: Math.floor(cuibriExtracted / 12000) + ' millenia.',
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
        // Mean: {
        // Cuirbri: Math.floor(hCuirbriMean / 12) + ' years.',
        // Loa: Math.floor(hLoaMean) + ' years.',
        // },
        };

    Elves = {
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

    Halflings = {
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
        // Mean: {
        // Cuirbri: Math.floor(hCuirbriMean / 12) + ' years.',
        // Loa: Math.floor(hLoaMean) + ' years.',
        // },
        };
       
    //Store Results     
    results.push({
    Year: year,
    [houseName]: {...elves[0]},
    Elves: Elves,
    Humans: Humans,  
    Halflings: Halflings,      
    });   
 
})

    year++
    return JSON.stringify(results, null, 2); 
    
}

 
 