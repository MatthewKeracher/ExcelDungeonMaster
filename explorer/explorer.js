let lastDropdownValue = getDropdownValue();

function triggerJournal(){

loadJournal()

const logo = document.getElementById("startLogo");
logo.style.display = "none";

if(grid.style.display === 'none'){
grid.style.display = 'block';
explorer.style.display = 'none';
explorerShowing = false;

}else{

grid.style.display = 'none';
explorer.style.display = 'block';
explorerShowing = true;

}

}

function getNewJournalId(data, obj) {
    const ids = [];

    if(obj && obj.id){return obj.id}
  
    // Function to recursively extract IDs from the data structure
    function extractIds(data) {
      for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
          if (Array.isArray(data[key])) {
            data[key].forEach(item => {
              if (item && typeof item === 'object' && item.id) {
                ids.push(parseInt(item.id));
              }
            });
          } else {
            if (data[key].id) {
              ids.push(parseInt(data[key].id));
            }
            extractIds(data[key]); // Recursive call for nested objects
          }
        }
      }
    }
  
    extractIds(data); // Start extracting IDs from the root data
  
    // Find the next available ID starting from 1
    let nextId = 1;
    while (ids.includes(nextId)) {
      nextId++;
    }
  
    return nextId;
  }
  
function moveLocationJournals(){

const locations = EXCEL_DM.journal.Locations;

locations.forEach((entry, i) => {
const locationObj = getObj(entry.scale);

if(!locationObj.journal){locationObj.journal = []}

locationObj.journal.push(entry);
//console.log(locationObj.name, locationObj.journal.length)

})

//console.log(locations)
}

function loadJournal() { 
// Clear
explorerSideBar.innerHTML = '';
const scaleSelector = document.getElementById('scaleSelector');
scaleSelector.innerHTML = '';

function addRegionEntries(obj){
if(!obj){return}
if(!obj.name && !obj.journal){return};
if(!obj.journal){obj.journal = []}
let subHeadLink = createSubHeaderLink("hotpink", obj, "Locations");
addToDropdown(obj.name, obj.id, "hotpink", true)
explorerSideBar.appendChild(subHeadLink);

const addNewButton = createAddNewButton(obj.name, obj.id);
explorerSideBar.appendChild(addNewButton);
// let entriesHere = EXCEL_DM.journal.Locations.filter(entry => entry.scale === obj.id)
let entriesHere = obj.journal;

entriesHere.forEach(entry => {
if(!entry.name){entry.name = "Untitled Entry"};


const linkWrapper = createEntryLink(entry, obj.name, obj.id);
explorerSideBar.appendChild(linkWrapper);
})
}

function addNPCs(){

  let npcs = EXCEL_DM.journal.People;
  let npcLocations = [...new Set(npcs.map(entry => entry.location))];

  npcLocations.forEach(location => {

    let subHeadLink = createSubHeaderLink("cyan", {name: location}, "People");
    addToDropdown(location, "People", "cyan", false)
    explorerSideBar.appendChild(subHeadLink);

    let npcsHere = npcs.filter(entry => entry.location === location).sort((a, b) => a.name.localeCompare(b.name));

    npcsHere.forEach(npc => {

      const linkWrapper = createEntryLink(npc, location, ["parent", "People"].join('.'));
      explorerSideBar.appendChild(linkWrapper);


    })


  })


}

function addJournalEntries(data, headerColor){ 

for (const key in data) {

let headerLink = createHeaderLink(headerColor, key);
addToDropdown(key, "parent", headerColor, false)

explorerSideBar.appendChild(headerLink);

if(key === "People"){
addNPCs()
}

if(key === "Locations"){
let idBox = document.getElementById('idBox');
let currentObj = getObj(idBox.textContent); // Initial object, e.g., '0.0.2.3'
//
// moveLocationJournals()
addRegionEntries(currentObj)

while (currentObj.id !== '0.0' && currentObj !== undefined) {

currentObj = getObj(parseParent(currentObj.id));
addRegionEntries(currentObj)

}
}else if(key !== "Favourites"){

const addNewButton = createAddNewButton(key, ["parent", key].join('.'));
explorerSideBar.appendChild(addNewButton);

}

for (const subKey in data[key]) {

if (typeof data[key][subKey] === 'object' && !Array.isArray(data[key][subKey])) { 

const obj = data[key][subKey];
obj.id = getNewJournalId(EXCEL_DM.journal, obj);


if(key === "Locations"){continue} //Skip Locations
if(key === "People"){continue} //Skip People

const linkWrapper = createEntryLink(obj, key, ["parent", key].join('.'));
explorerSideBar.appendChild(linkWrapper);


}else{ 

let subHeadLink = createSubHeaderLink("cyan", {name: subKey}, key);
addToDropdown(subKey, key, "cyan", false)
explorerSideBar.appendChild(subHeadLink);

for (const index in data[key][subKey]) {

const obj = data[key][subKey][index];
obj.id = getNewJournalId(EXCEL_DM.journal, obj);

const linkWrapper = createEntryLink(obj, subKey, [key, subKey].join('.'));
explorerSideBar.appendChild(linkWrapper);

}

}
}
}
}

addJournalEntries(EXCEL_DM.journal, "gold"); 
addJournalEntries(EXCEL_DM.system, "orange"); 


focusOnTargetEntry();
addKeyboardNavigation();

entryName.disabled = true;
explorerLeft.disabled = true;
explorerRight.disabled = true;
explorerLeft.contentEditable = false;
explorerRight.contentEditable = false;

try{

if(explorer.style.display === "none"){

let currentLocation = document.getElementById(idBox.textContent);

if(currentLocation){
currentLocation.click();
}else{
let currentRegion = document.getElementById(coords);
currentRegion.click();
}

}else{

let lastSection
let lastSubSection

if(lastDropdownValue.parent === "parent"){
lastSection = document.querySelector(`[select = "${lastDropdownValue.child}"]`)
lastSection.click();
//console.log(lastDropdownValue)
scaleSelector.value = "parent" + "." + lastDropdownValue.child;
}else{
  lastSection = document.querySelector(`[select = "${lastDropdownValue.parent}"]`)
  lastSection.click();
  lastSubSection = document.querySelector(`[select = "${lastDropdownValue.parent}.${lastDropdownValue.child}"]`)
  lastSubSection.click();
  scaleSelector.value = lastDropdownValue.parent + '.' + lastDropdownValue.child;
 
}


//console.log(scaleSelector.value)

}}catch{}

}

function createHeaderLink(color, name, selectValue = name){

const headerLink = document.createElement('a');

headerLink.textContent = toTitleCase(name);
headerLink.classList.add('entryLink');
headerLink.setAttribute("name", name);
headerLink.setAttribute("select", selectValue);
headerLink.style.color = color;

headerLink.addEventListener('click', (e) => {

e.preventDefault();

const name = headerLink.getAttribute("name");
//scaleSelector.value = 'parent.'+ name;

const children = document.querySelectorAll(`a.entryLink[parent="${name}"]`); 

children.forEach(entryLink => {
entryLink.style.display = entryLink.style.display === 'none' ? 'block' : 'none';

const childName = entryLink.getAttribute("name");
const grandChildren = document.querySelectorAll(`a.entryLink[parent="${childName}"]`);

grandChildren.forEach(grandChild => {
if(entryLink.style.display === 'none'){grandChild.style.display = 'none'}
});


});

})

return headerLink;

}

function createSubHeaderLink(color, obj, parent, selectValue = [parent, obj].join('.')){

const subHeadLink = document.createElement('a');

subHeadLink.textContent = toTitleCase(obj.name);
subHeadLink.classList.add('entryLink');
subHeadLink.setAttribute("name", obj.name);
subHeadLink.setAttribute("id", obj.id);
subHeadLink.setAttribute("parent", parent);
subHeadLink.setAttribute("select", selectValue);
subHeadLink.style.color = color;

if(color !== "hotpink"){ 
subHeadLink.style.display = 'none';
}

subHeadLink.addEventListener('click', (e) => {

e.preventDefault();


// lastDropdownValue = getDropdownValue();

const name = subHeadLink.getAttribute("name");
const parent = subHeadLink.getAttribute("parent")
scaleSelector.value =  parent + '. '+ name;

const children = document.querySelectorAll(`a.entryLink[parent="${name}"]`); 

children.forEach(entryLink => {
entryLink.style.display = entryLink.style.display === 'none' ? 'block' : 'none';
});

makeSettingsMenu(parent, obj)


})

return subHeadLink;

}

function createEntryLink(obj, parent, selectValue) {

const linkWrapper = document.createElement('div');
const link = document.createElement('a');

link.classList.add('entryLink');
link.setAttribute("select", selectValue);
link.setAttribute("parent", parent);
link.setAttribute('tabindex', '0');
link.href = '#';

link.textContent = obj.name;
link.id = obj.id;

if(selectValue !== "parent.Favourites"){ //Hide Children except Favourites
link.style.display = 'none';    
}

link.addEventListener('click', (e) => {
e.preventDefault();

loadJournalEntry(obj, selectValue);

});

linkWrapper.appendChild(link);
return linkWrapper;
}

function createAddNewButton(parent, selectValue) {
    const linkWrapper = document.createElement('div');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Add New to ' + parent;
    link.id = "addNewEntry";
    link.classList.add('entryLink');
    link.style.color = "whitesmoke"
    link.setAttribute("parent", parent);
    link.style.display = "none";
    
    link.addEventListener('click', (e) => {
    e.preventDefault();
    makeNewJournalEntry(selectValue)
    
    });
    
    linkWrapper.appendChild(link);
    return linkWrapper;
}

function loadJournalEntry(obj, selectValue){


    explorerLeft.innerHTML = ``;
    explorerRight.innerHTML = ``;
    
    const address = parseAddress(selectValue);
    console.log(address)

    scaleSelector.style.display = "block";
    scaleSelector.value = selectValue;
    lastDropdownValue = getDropdownValue();
    entryName.value = obj.name;
    explorerId.textContent = obj.id;
    
    if(address.parent === "Items" || address.child === "monsters" || address.parent === "spells" || address.child === "People" || address.child === "classes") {

    if(obj.race){
    updateNPC(obj)
    }

    explorerRight.innerHTML = tableFromObj(obj, ['name', 'description', 'id'], "objTable")
    explorerLeft.innerHTML = autoSpacing(obj.description);
    
    }else {
    
    explorerLeft.innerHTML = obj.left;
    explorerRight.innerHTML = obj.right;
    
    }
    
    updateTables();

}

function makeNewJournalEntry(selectValue){

  entryName.value = '';
  explorerLeft.innerHTML = ``;
  explorerRight.innerHTML = ``;
  scaleSelector.value = selectValue;

  lastDropdownValue = getDropdownValue();
  explorerId.textContent = getNewJournalId(EXCEL_DM.journal);

  const address = parseAddress(selectValue);

  if(address.child === "People"){

  entryName.value = 'New Character';
  const obj = new NPC("human", "fighter", 1, 'New Character', explorerId.textContent);  
  const NPCTable = tableFromObj(obj, ["id", "description", "name"], "objTable")
  explorerRight.innerHTML = NPCTable;

  //console.log(obj)
        
  }

  currentMode = 'edit';
  toggleModes();  

}

function focusOnTargetEntry() {
let targetId = explorerId.textContent;
if (targetId) {
const targetElement = document.getElementById(targetId);
if (targetElement) {
targetElement.focus();
}
}
}

function addKeyboardNavigation() {
const entryLinks = document.querySelectorAll('.entryLink');

document.addEventListener('keydown', (e) => {
// Check if the current mode is 'map' and journal is showing
if (currentMode === 'map' && explorerShowing) {
const currentFocus = document.activeElement;

// Check if the focused element is one of the entry links
if (Array.from(entryLinks).includes(currentFocus)) {
// Check for specific keys
if (e.key === 'w' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Delete') {
e.preventDefault();

const currentIndex = Array.from(entryLinks).indexOf(currentFocus);

// Handle delete entry action
if (e.key === 'Delete' && explorerShowing) {
handleDeleteEntry(entryLinks, currentIndex);
} else {
// Navigate through entries based on key pressed
navigateEntries(entryLinks, currentIndex, e.key);
}
}
}
}
});
}

function navigateEntries(entryLinks, currentIndex, key) {
let newIndex;
if (key === 'w' || key === 'ArrowUp') {
newIndex = currentIndex > 0 ? currentIndex - 1 : entryLinks.length - 1;
} else {
newIndex = currentIndex < entryLinks.length - 1 ? currentIndex + 1 : 0;
}

try {
entryLinks[newIndex].focus();
entryLinks[newIndex].click();
} catch (error) {
console.error('Navigation error:', error);
}
}

function delObjFromArray(obj, array){

//console.log(obj, array)

let exists = array.findIndex(entry => parseInt(entry.id) === parseInt(obj.id))

//console.log(array[exists])

if(exists > -1 && explorerShowing === true){
array.splice(exists, 1)
entryName.value = '';
explorerLeft.innerHTML = ``;
explorerRight.innerHTML = ``;
explorerId.textContent = '';

loadJournal();
saveData();
}else{

}

}

function delEntry(delObj, address){

//console.log('Deleting:', delObj, address)

if(address.parent && address.child){  

const parent = address.parent;
const child = address.child;
const journal = EXCEL_DM.journal;


if(parent === "parent"){

delObjFromArray(delObj, journal[child]);

}else{

delObjFromArray(delObj, journal[parent][child]);

}

}else{

delObjFromArray(delObj, address.journal);
}

}

function handleDeleteEntry(entryLinks, currentIndex) {

showPrompt('Are you sure you want to delete this journal entry?').then(shouldDelete => {
if (shouldDelete && entryLinks[currentIndex].id) {

if(explorerId.textContent === "X"){return} 

const dropDownValue = getDropdownValue();

let delObj = {id: explorerId.textContent};

delEntry(delObj, dropDownValue);
}

})}

function saveJournalKnot(){

//Start of method to save journal entries. Routes based on entry type.

function saveObjToArray(obj, array){

if(!array){return}

console.log(obj, array, obj.id);

let exists = array.findIndex(entry => parseInt(entry.id) === parseInt(obj.id))

if(obj.name === ''){obj.name = "Untitled Entry"}

if(exists > -1){
console.warn('Found saveEntry for ' + array[exists].name) 
array[exists] = obj;
}else{
console.error('Could not find saveEntry for ' + obj.name) 
array.push(obj);
}



}

if(explorerId.textContent === "X"){return} 

const dropDownValue = getDropdownValue();

const areEqual = JSON.stringify(dropDownValue) === JSON.stringify(lastDropdownValue); //for Moving Entries

let saveEntry = {

id: explorerId.textContent,
name: entryName.value,
left: explorerLeft.innerHTML,
right: explorerRight.innerHTML,

//filterDiv(explorerRight, "randomEncounter"),

}

if(dropDownValue.parent && dropDownValue.child){  

const parent = dropDownValue.parent;
const child = dropDownValue.child;

//This is save in EXCEL_DM.journal[parentKey][key]

let rightTables = assembleTables()

let saveObject = {

id: explorerId.textContent,
name: entryName.value,
description: explorerLeft.innerHTML,
...rightTables,

//filterDiv(explorerRight, "randomEncounter"),

}

let toSave = rightTables? saveObject: saveEntry;

if(parent === "parent"){

saveObjToArray(toSave, EXCEL_DM.journal[child]);

}else{

saveObjToArray(toSave, EXCEL_DM.journal[parent][child]);

}

}

else{

//This is saved under the Location's object in mapData

saveObjToArray(saveEntry, dropDownValue.journal);

}

if(!areEqual){delEntry({id:explorerId.textContent}, lastDropdownValue)}
loadJournal();
saveData();

};







