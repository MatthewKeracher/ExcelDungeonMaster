
function handleTableCommand(params) {
let [rows, cols] = params.split(' ').map(Number);

// Handle cases where only one number is provided
if (!isNaN(rows) && isNaN(cols)) {
cols = 1; // Default cols to 1 if not provided
}

// Validate input
if (isNaN(rows) || isNaN(cols)) {
return '\n{Invalid table format. Use "add table rows cols"}';
}

function generateTable(rows = 8, cols = 2) {
let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';
for (let i = 0; i < rows; i++) {
tableHTML += '<tr>';
for (let j = 0; j < cols; j++) {
if (i === 0) {
// Add tableHeader class for the first row
tableHTML += `<td contenteditable="false" tabindex="0" class="tableCell tableHeader"></td>`;
} else {
tableHTML += `<td contenteditable="false" tabindex="0" class="tableCell"></td>`;
}
}
tableHTML += '</tr>';
}
tableHTML += '</table>';

return tableHTML;
}

return generateTable(rows + 1, cols);
}

function assembleTables(){

    let objTableDiv = document.getElementById("objTable")  
    if(!objTableDiv){return null}

    let objTable = tableToObj(objTableDiv, ["ora"])
  
    const allTables = document.querySelectorAll('table');
    const childTables = Array.from(allTables).filter(table => table.id !== "objTable");
  
    childTables.forEach(table => {
  
      let tableObj = tableToObj(table);
      let objName = table.id;
      let tableType = table.getAttribute('type');
   
   if(tableType === "obj"){
    console.log(objName)
    objTable[objName] = tableObj.reduce((acc, item) => {
        // Use the property that should be the key, e.g., item.ability
        acc[item.ability] = item;
        return acc;
      }, {});
    }

    if(tableType === "array"){

    objTable[objName] = tableObj;

    }
  
    })
  
    return objTable
    
  }

function tableToObj(table, excludeKeys = []) {

let asHTML = false;

if (!table) {
table = document.querySelector('table')
asHTML = true;
}

if (!table) {
return 'No table found.';
}

//---- 

const rows = table.querySelectorAll('tr');
if (rows.length === 0) return null;

const firstRowCells = rows[0].querySelectorAll('td, th');

// CASE 1: First row is a single cell - treat as key-value pairs
if (firstRowCells.length === 2) {
const result = {};
for (let i = 0; i < rows.length; i++) {
const cells = rows[i].querySelectorAll('td, th');
if (cells.length === 2) {
const key = cells[0].textContent.trim().toLowerCase();
const value = cells[1].textContent.trim();
if (!excludeKeys.includes(key)) {
result[key] = value;
}
} else if (cells.length === 1) {
// Optionally, store the single cell as a special property (e.g., 'name')
const key = 'name';
const value = cells[0].textContent.trim();
if (!excludeKeys.includes(key)) {
result[key] = value;
}
}
}
return result;
}

// CASE 2: First row has multiple cells - treat as headers
const headers = Array.from(firstRowCells).map(cell =>
cell.textContent.trim().toLowerCase()
);

let result = [];

for (let i = 1; i < rows.length; i++) {
const cells = rows[i].querySelectorAll('td, th');
if (cells.length === 0) continue;
const rowObj = {};
for (let j = 0; j < cells.length; j++) {
const header = headers[j] || `column${j+1}`;
rowObj[header] = cells[j].textContent.trim();
}
result.push(rowObj);
}

if(asHTML){
result = JSON.stringify(result, null, 2)
}

return result;
}

function splitObj(obj) {

if (obj == null || typeof obj !== "object") return [];
const main = {};
const extracted = [];

for (const [key, value] of Object.entries(obj)) {
if (value && typeof value === "object" && !Array.isArray(value)) {
// Instead of pushing { key: value }, spread the inner object
extracted.push({ ...value, key });
} else {
main[key] = value;
}
}

return [main, ...extracted];
}


function tableFromObj(obj, excludedKeys = [], id = undefined) {

const allObjs = splitObj(obj)
let returnHTML = ``;

allObjs.forEach((obj,i) => {

const firstEntry = Object.values(obj)[0];
const headers = (typeof firstEntry === "object" && firstEntry !== null) ? Object.keys(firstEntry) : [];
const tableId = i === 0? id : obj.key;

let table = ``;

if(headers.length === 0){

table = `<table class="table" type="array" id="${tableId}" style="border-collapse: collapse;"><tbody>`;

for (const key in obj) {
if(!excludedKeys.includes(key) && key !== "key"){
table += `
<tr>
<th class = "tableKey" >${key}</th>
<td class = "tableCell">${obj[key]}</td>
</tr>`;
}
}

table += '</tbody></table>';

}else{

table = `<table class="table" type="obj" id="${tableId}" style="border-collapse: collapse;"><tbody>`;

//Add Columns
headers.filter(header => !excludedKeys.includes(header) && header !== "key").forEach(header => {
table += `<th class="tableHeader">${header}</th>`;
});

table += '</tr></thead><tbody>';

// Add rows
for (const key in obj) {
if(key !== "key"){

table += '<tr>';

headers.filter(header => !excludedKeys.includes(header)).forEach(header => {
table += `<td class = "tableCell">${obj[key][header]}</td>`;
});

table += '</tr>';
}
}

table += '</tbody></table>';


}

returnHTML += table;

})

return returnHTML
}

function categoryTable(key = "general", inflation = 1, tableId = undefined){

const data = {
key: EXCEL_DM.journal.Items[key].reduce((acc, item) => {
acc[item.name] = {
...item,
Ora: ammendPrices(item.cost, inflation)
};
return acc;
}, {})
};

const existingTable = document.getElementById(tableId);

if (existingTable) {
existingTable.remove(); // Remove the existing table if it exists
}

const container = document.createElement('div');
container.innerHTML = tableFromObj(data, ['cost', 'id', 'damage', 'size', 'description'], tableId);

return container

}

function getColumnCells(table, columnName) {
const rows = table.rows;
const cells = [];
let columnIndex = -1;

const headerRow = rows[0];
for (let i = 0; i < headerRow.cells.length; i++) {
if (headerRow.cells[i].textContent.trim() === columnName) {
columnIndex = i;
break;
}
}

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

function sortTables(order) {

const tables = document.querySelectorAll('table');

tables.forEach(table => {

let headers = Array.from(table.querySelectorAll('.tableHeader'));

const sortIndex = headers.findIndex(header => header.innerText.trim() === 'Sort');


if (sortIndex !== -1) {
const tbody = table.querySelector('tbody');
const rows = Array.from(tbody.rows);

rows.sort((a, b) => {
const valueA = parseInt(a.cells[sortIndex].innerText);
const valueB = parseInt(b.cells[sortIndex].innerText);
return (order === 1 ? valueA - valueB : valueB - valueA); // Ascending or Descending
});

tbody.innerHTML = '';
rows.forEach(row => tbody.appendChild(row));
}
});
}

function tableFromJSON(sectionStr, subSectionStr, chance = 100) {

let section;
let subSection;
let dataToUse;

if (sectionStr) {
section = eval(sectionStr);
}

if (subSectionStr) {
subSection = section[subSectionStr];
}

if (!section) {
return `<p>No table found for name: ${sectionStr}.</p>`;
}

if (subSection) {
dataToUse = Object.entries(subSection).flatMap(([key, value]) => {
if (typeof value === 'object' && !Array.isArray(value)) {
return { name: key, ...value };
}
return { name: key, value };
});
} else {
dataToUse = Object.values(section).flat();
}

if (!Array.isArray(dataToUse) || dataToUse.length === 0) {
return `No data found in ${sectionStr} table for entry: ${subSectionStr}.`;
}

// Determine headers based on the structure of the first item
const headers = Object.keys(dataToUse[0]).flatMap(key => {
if (typeof dataToUse[0][key] === 'object') {
return Object.keys(dataToUse[0][key]).map(subKey => `${key}.${subKey}`);
}
return key;
});

let tableHTML = '<table border="1" class="table" style="border-collapse: collapse;">';


// Generate table headers
tableHTML += '<thead><tr>';
headers.forEach(header => {

const formattedHeader = header
.replace(/([A-Z])/g, ' $1') // Add space before capital letters
.replace(/^./, str => str.toUpperCase()); // Uppercase the first letter
tableHTML += `<th class="tableCell tableHeader">${formattedHeader}</th>`;

//tableHTML += `<th class="tableCell">${header.split('.').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</th>`;
});
tableHTML += '</tr></thead>';

// Generate table body
tableHTML += '<tbody>';
dataToUse.forEach(item => {

if(chance && rollDice(1, 100) > chance) {return} // Roll for Chance of Occuring

tableHTML += '<tr>';
headers.forEach(header => {
const [key, subKey] = header.split('.');
let value = subKey ? item[key][subKey] : item[key];

let cellAttributes = ``;

if(key === "cost"){
cellAttributes += `originalPrice="${value}"`
value = ammendPrices(value)
}

let cellClass = "tableCell";

if (key === "description") {
cellClass += " description-cell";
}

tableHTML += `<td ${cellAttributes} class="${cellClass}">${value}</td>`;

});
tableHTML += '</tr>';
});
tableHTML += '</tbody></table>';

return tableHTML;
}

function updateTables() {
const tableCells = document.querySelectorAll('.tableCell');

if (currentMode === 'edit') {
tableCells.forEach(cell => {
cell.contentEditable = "true";
cell.setAttribute('tabindex', '0');

cell.addEventListener('focus', function() {
const range = document.createRange();
//range.selectNodeContents(cell);
const selection = window.getSelection();
selection.removeAllRanges();
selection.addRange(range);
});
});
} else {
tableCells.forEach(cell => cell.contentEditable = "false");
}

const rows = document.querySelectorAll('tr');
rows.forEach(row => {
const maxHeight = Array.from(row.cells)
.filter(cell => !cell.classList.contains('description-cell'))
.reduce((max, cell) => Math.max(max, cell.offsetHeight), 0);

const descCell = row.querySelector('.description-cell');
if (descCell) {
descCell.style.setProperty('--row-height', '100px');
descCell.classList.add('collapsed');
}
});


const tables = document.querySelectorAll('.table');

tables.forEach(table => {

table.style.width = "95%"
table.borders = 1

});

}






