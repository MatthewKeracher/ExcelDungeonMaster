function makeNPC(npcClass, level, npcName) {
   
    // Dummy statistics for NPC classes; this can be expanded or pulled from your data
    const npcStats = {
        fighter: { name: 'Fighter', ac: 15, hit: level+'d8', attack: '1', dam: '1d8', move: 30, saveAs: 'Fighter', morale: 8, treasure: 'Low', xp: 50 },
        mage: { name: 'Mage', ac: 12, hit: level, attack: '1', dam: '1d6', move: 30, saveAs: 'Mage', morale: 7, treasure: 'Average', xp: 40 },
        thief: { name: 'Thief', ac: 14, hit: level, attack: '1', dam: '1d4', move: 30, saveAs: 'Thief', morale: 6, treasure: 'Average', xp: 30 },
        cleric: { name: 'Cleric', ac: 13, hit: level + 1, attack: '1', dam: '1d8', move: 30, saveAs: 'Cleric', morale: 8, treasure: 'Low', xp: 45 },
    };

    let properClass = npcClass.charAt(0).toUpperCase() + npcClass.slice(1)

    const stats = npcStats[npcClass];
    if (!stats) {
        return `Invalid NPC class: ${properClass}`;
    }

    let result = `<b>${npcName} Level ${level} ${properClass}.</b> \n`

    // Dynamically add each stat from the stats object
    for (const [key, value] of Object.entries(stats)) {
        if (key !== 'name') { // Exclude the name from detailed stats output
            result += `<b>${key.charAt(0).toUpperCase() + key.slice(1)}:</b> ${value} `;
        }
    }

    result += `\n<b>HP:</b>`;

    // Simulate hit points based on the NPC's HD
        const hitPoints = parseHitPoints(stats.hit); // Assume this function calculates HP based on HD
        const hpValue = parseInt(hitPoints);
        let checkboxesHTML = '';

        // Create checkboxes for HP
        for (let j = 0; j < hpValue; j++) {
            checkboxesHTML += `☐`;

            // Hitbox Spacing
            if ((j + 1) % 5 === 0 && j + 1 < hpValue) {
                checkboxesHTML += '&nbsp;&nbsp;&nbsp;';
            }
            if ((j + 1) % 20 === 0 && j + 1 < hpValue) {
                checkboxesHTML += '<br>\t&nbsp;';
            }
        }

        result += `\t&nbsp; ${hitPoints} \t ${checkboxesHTML}\n`;
    

    result += `<br><hr>`;
    return result;
}

