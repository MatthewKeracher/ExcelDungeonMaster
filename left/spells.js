function handleSpellCommands(params) {
    const [searchTerms, number] = params.trim().split(/\s+(?=\d+$)/);

    if (searchTerms && number) {
        // Filter spells by class and level
        let results = spells
            .filter(entry => 
                entry.class.toLowerCase() === searchTerms.toLowerCase() && 
                entry.level.toString() === number.trim()
            )
            .map(spell => spell.name);  // Extract only the names

        return results.length > 0 ? results.join(', ') : "No spells found matching the criteria.";
    } else if (searchTerms) {
        // Search for a specific spell by name
        let spell = searchFor(searchTerms, spells);          
        return spell ? makeSpellEntry(spell) : "Spell not found.";
    } else {
        return "Invalid input. Please provide a spell name or class and level.";
    }
}


function makeSpellEntry(spell) {
    // Define the keys to exclude from the table
    let excludedKeys = ['name', 'description', 'Book', 'Page', 'Source'];

    // Determine headers based on the structure of the monster
    const headers = Object.keys(spell).flatMap(key => {
        if (typeof spell[key] === 'object') {
            return Object.keys(spell[key]).map(subKey => `${key}.${subKey}`);
        }
        return key;
    }).filter(key => !excludedKeys.includes(key)); 

    let tableHTML = '<div class="noSave"><table border="1" class="table" style="border-collapse: collapse;">';

    // Generate table header that spans both columns
    tableHTML += `<thead><tr><th class="tableCell tableHeader" colspan="2"><b>${spell.name}</b></th></tr></thead>`;

    // Generate table body with each attribute as a row
    tableHTML += '<tbody>';
    headers.forEach(header => {
        tableHTML += '<tr>';
        tableHTML += `<td class="tableCell"><b>${header.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</b></td>`;
        const [key, subKey] = header.split('.');
        let value = (subKey ? spell[key][subKey] : spell[key]);

        tableHTML += `<td class="tableCell">${value}</td>`;
        tableHTML += '</tr>';
    });


    tableHTML += '</tbody></table>';
    tableHTML += `<br><br>`;
    tableHTML += `${spell.description}</div>`;

    return tableHTML;
}