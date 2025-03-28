
function tableToObj(table) {
    // Check if the table exists
    if (!table) {
        console.error(`No table found.`);
        return null;
    }

    // Get all table rows
    const rows = table.querySelectorAll('tr');
    const result = {};

    // Iterate through each row starting from the second row (index 1)
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const cells = row.querySelectorAll('td, th');
        
        // Check if the row has exactly two cells
        if (cells.length === 2 && !cells[0].classList.contains('tableHeader')) {
            const key = cells[0].textContent.trim().toLowerCase();
            const value = cells[1].textContent.trim();
            result[key] = value;
        }
    }

    result.name = entryName.value;
    result.description = journalRight.innerHTML;
    result.id = journalId.textContent

    return result;
}



function extractTableValues(divName) {
// Get the table content
const div = document.getElementById(divName);
let tableRows = div.querySelectorAll('tr');

// Initialize an empty array to store the entries
let entries = [];

// Loop through each row (excluding the header)
for (let i = 1; i < tableRows.length; i++) {
let row = tableRows[i];
let cells = row.querySelectorAll('td');

let entry = cells[1].textContent;
entries.push(entry);
}

return entries

}

function tableFromObj(obj, excludedKeys){

let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';

// Determine headers based on the structure of the monster
const headers = Object.keys(obj).flatMap(key => {
if (typeof obj[key] === 'object') {
return Object.keys(obj[key]).map(subKey => `${key}.${subKey}`);
}
return key;
}).filter(key => !excludedKeys.includes(key)); 

tableHTML += `<thead><tr><th class="tableCell tableHeader" colspan="2"><b>${obj.name}</b></th></tr></thead>`;

tableHTML += '<tbody>';
headers.forEach(header => {
tableHTML += '<tr>';
tableHTML += `<td class="tableCell"><b>${header.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</b></td>`;
const [key, subKey] = header.split('.');
let value = (subKey ? obj[key][subKey] : obj[key]);

tableHTML += `<td class="tableCell">${value}</td>`;
tableHTML += '</tr>';
});


tableHTML += '</tbody></table>';
tableHTML += `<br><br>`;


return tableHTML

}    

function getColumnCells(table, columnName) {
const rows = table.rows;
const cells = [];
let columnIndex = -1;

// Find the index of the specified column
const headerRow = rows[0];
for (let i = 0; i < headerRow.cells.length; i++) {
if (headerRow.cells[i].textContent.trim() === columnName) {
columnIndex = i;
break;
}
}

// If the column is found, collect its cells
if (columnIndex !== -1) {
for (let i = 1; i < rows.length; i++) {
const cell = rows[i].cells[columnIndex];
if (cell) {
cells.push(cell);
}
}
}

return cells;
}
