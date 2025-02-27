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
  
    function getRandomEncounters(){

      let HTML = `<div class="noSave"><b>Weather Effects:</b> ${weather.description}<br><br><hr><br></div>` 
  
      return HTML
    }
    
    rollWeather(100);
    console.log(weather)
  