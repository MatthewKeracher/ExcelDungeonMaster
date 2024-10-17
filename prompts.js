let monsters = [];

async function loadMonsters() {
    try {
        const response = await fetch('data/monsters.json'); // Adjust path if necessary
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        monsters = await response.json(); // Store the JSON data in the monsters array
        //console.log(monsters); // Log the data to confirm it has loaded
    } catch (error) {
        console.error('Error loading monsters:', error);
    }
}

// Call the loadMonsters function when the page loads
window.onload = loadMonsters;

function toggleEditMode() {

    isPainting = true
    handlePaint();


    if (!isEditing) {
       //Enter
        textDiv.style.display = "none";
        writeBox.style.display = "block";
        writeBox.focus();
        
        const textContent = textDiv.innerHTML;
        
        writeBox.setSelectionRange(textContent.length, textContent.length);
        isEditing = true;

        writeBox.addEventListener('blur', function () {
            setTimeout(() => {
                textDiv.innerHTML = handlePrompts() || "";
                isEditing = false;
            }, 0); 
        });

    } else {
        //Exit
        textDiv.style.display = "block";
        writeBox.style.display = "none";
        isEditing = false;

        if (writeBox.style.display === 'none') {
            setTimeout(() => {
                textDiv.innerHTML = handlePrompts() || "";
                
            }, 0);
        }

        saveHex();

    }
}

document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        toggleEditMode();  
    }
});

function handlePrompts() {
    const writeBox = document.getElementById('writeBox');
    const textDiv = document.getElementById('textDiv');
    
    let inputText = writeBox.value;
    
    // Handle dice roll commands like {{roll 1d6}}
    inputText = inputText.replace(/{{roll (\d+)d(\d+) ([\w\s]+)}}/g, function(match, numDice, diceSides, monsterName) {
        return searchMonster(monsterName.trim(), rollDice(parseInt(numDice), parseInt(diceSides)));
    });
    
   return inputText
}

// Function to roll a number of dice
function rollDice(numDice, diceSides) {
    let total = 0;
    for (let i = 0; i < numDice; i++) {
        total += Math.floor(Math.random() * diceSides) + 1;
    }
    return total;
}

function searchMonster(monsterName, numAppearing) {
      // Initialize variables for the closest match
      let foundMonster = null;
      let highestScore = 0;
  
      // Loop through all monsters to find the closest match
      monsters.forEach(monster => {
          const score = getSimilarityScore(monster.name.toLowerCase(), monsterName.toLowerCase());
  
          // Update the closest monster if the current score is higher
          if (score > highestScore) {
              highestScore = score;
              foundMonster = monster;
          }
      });
  
      // If a closest match is found, process it
      if (foundMonster) {
        let result = `<br><b>${numAppearing} ${foundMonster.name}: </b>`;
        result += `AC: ${foundMonster.ac}; HD: ${foundMonster.hit}; #At: ${foundMonster.attack}; Dam: ${foundMonster.dam}; `;
        result += `Mv: ${foundMonster.move}; Sv: ${foundMonster.saveAs}; ML: ${foundMonster.morale}; Tr: ${foundMonster.treasure}; XP: ${foundMonster.xp} ea.\n<b>HP:</b><br>`;
        
        // Loop to create multiple entries based on the number appearing
        for (let i = 0; i < numAppearing; i++) {
            const hitPoints = parseHitPoints(foundMonster.hit)

            const hpValue = parseInt(hitPoints); // Convert hitPoints to an integer
            let checkboxesHTML = ''; // String to hold the checkbox HTML

            // Create checkboxes
            for (let j = 0; j < hpValue; j++) {
                checkboxesHTML += `☐` // `<span class="hp-checkbox" onclick="toggleCheckbox(this)">☐</span>`;
            
                // Add a tab (or new line) after every 5 checkboxes
                if ((j + 1) % 5 === 0 && j + 1 < hpValue) {
                    checkboxesHTML += '&nbsp;&nbsp;&nbsp;'; // Add some space to separate groups of checkboxes
                }

                if ((j + 1) % 20 === 0 && j + 1 < hpValue) {
                    checkboxesHTML += '<br>\t&nbsp;'; // Add some space to separate groups of checkboxes
                }
            }

            // Create the formatted monster output with checkboxes
            result += `&nbsp;${hitPoints} \t ${checkboxesHTML}\n`;
        }

      result += `<br><hr>`
      return result
    }
}

function toggleCheckbox(checkbox) {
    if (checkbox.textContent === '☐') {
        checkbox.textContent = '☒'; // Optional: change to filled checkbox symbol
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