let scaledObjs = [];

function triggerJournal(){

    const logo = document.getElementById("startLogo");
    logo.style.display = "none";

if(grid.style.display === 'none'){
    grid.style.display = 'block';
    journal.style.display = 'none';
    journalShowing = false;
  
  }else{

    grid.style.display = 'none';
    journal.style.display = 'block';
    journalShowing = true;
  }

loadJournal()

}

function loadJournal() {
  // Clear
  journalSideBar.innerHTML = '';
  
  journalData.forEach(entry => {
   if(entry.id === ""){
    //(entry)
    let entryId;

    let i = 0;
    let alreadyExists;

    do {
        entryId = i;
        alreadyExists = journalData.find(entry => entry.id === entryId);
        i++;
    } while (alreadyExists);

    entry.id = entryId.toString();

   }

   if(entry.name === ""){
    entry.name = 'Untitled Entry ' + entry.id
   }
  });

  // DropDown
  fillScaleSelector();

  // Add New Button
  const addNewButton = createAddNewButton();
  journalSideBar.appendChild(addNewButton);

  // Organize entries by scale
  const entriesByScale = {};

  scaledObjs.forEach(obj => {
      entriesByScale[obj.id] = {
          name: obj.name,
          entries: []
      };
  });

  journalData.forEach(item => {
      if (item.name === '') return;
      if (entriesByScale[item.scale]) {
          entriesByScale[item.scale].entries.push(item);
      }
  });

  // Populate left column with organized links
  scaledObjs.forEach(obj => {
      const scale = obj.id;
      const scaleData = entriesByScale[scale];
    
      if (scaleData) { //&& scaleData.entries.length > 0
  
          const headerLink = document.createElement('a');
          headerLink.textContent = scaleData.name;
          headerLink.style.color = "gold";

          if(obj.settings !== false && obj.id !== '0.0'){

          headerLink.style.color = "hotpink";
          headerLink.href = '#';
          headerLink.style.cursor = 'pointer'; 
  
          
          headerLink.addEventListener('click', (e) => {
              e.preventDefault();

             
              
              entryName.value = scaleData.name + ' Settings';
              
              journalLeft.innerHTML = makeSettingsMenu(scale);
              journalRight.innerHTML = ``;
              journalId.textContent = ``;
              scaleSelector.style.display = "none";
              
          });
        }
  
          journalSideBar.appendChild(headerLink);
 
          scaleData.entries.sort((a, b) => a.name.localeCompare(b.name));

          // Now create and append the sorted links
          scaleData.entries.forEach(item => {
              const linkWrapper = createEntryLink(item);
              journalSideBar.appendChild(linkWrapper);
          });
      }
  });

  focusOnTargetEntry();
  addKeyboardNavigation();

  entryName.disabled = true;
  journalLeft.disabled = true;
  journalRight.disabled = true;
  journalLeft.contentEditable = false;
  journalRight.contentEditable = false;

}

function makeSettingsMenu(objId){

//get initial inflation value
const obj = data.find(entry => entry.id === objId);
const inf =  obj && obj.settings && 
             obj.settings.inflation ?
             obj.settings.inflation : 1;

const inflationHTML = `<div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 10px;">
            <span>Inflation:</span>
            <input id="inflationSetter" objId="${objId}" class="inputBox" onchange="updateInflation(this.value, this.getAttribute('objId'))" value="${inf}">
            </div>`

let optionsHTML = '';

const hexType = obj && obj.settings && 
obj.settings.hexType ?
obj.settings.hexType : "Grassland";

Object.keys(overlandEncounters).forEach(key => {
    const selected = key === hexType ? 'selected' : '';
    optionsHTML += `<option value="${key}" ${selected}>${key}</option>`;
  });

const hexTypeSetting = `
<div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 10px;">
<span>Hex Type:</span>
<select class="inputBox" id="wanderingDropdown" objId="${objId}" onchange="updateHexType(this.value, this.getAttribute('objId'))">
${optionsHTML}
</select>
</div>
`;

const randEnc = obj && obj.settings && 
obj.settings.randomEncounters ?
obj.settings.randomEncounters : "On";

const encounters = `
<div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-bottom: 10px;">
<span>Random Encounters:</span>
<select class="inputBox" id="wanderingDropdown" objId="${objId}" onchange="updateRandomEncounters(this.value, this.getAttribute('objId'))">
<option value="on" ${randEnc === "on" ? 'selected' : ''}>On</option>
<option value="off" ${randEnc === "off" ? 'selected' : ''}>Off</option>
</select>
</div>
`;

return `${inflationHTML}${hexTypeSetting}${encounters}`;

}

function updateRandomEncounters(value, objId){

const obj = data.find(entry => entry.id === objId);
obj.settings = {randomEncounters: value}

}

function updateHexType(value, objId){

const obj = data.find(entry => entry.id === objId);
obj.settings = {hexType: value}

}

function updateInflation(value, objId){

const obj = data.find(entry => entry.id === objId);
obj.settings = {inflation: value}

console.log(obj)

}

function getNewJournalId(){

    let entryId
    let i = 1;
    let alreadyExists;

    do {
        entryId = i;
        alreadyExists = journalData.find(entry => parseInt(entry.id) === parseInt(entryId));
        i++;
    } while (alreadyExists);

    //console.log(entryId)
    return entryId


}

function createAddNewButton() {
  const linkWrapper = document.createElement('div');
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Add New Entry';
  link.id = "addNewEntry";
  link.classList.add('entryLink');

  link.addEventListener('click', (e) => {
      e.preventDefault();
      entryName.value = '';
       journalLeft.innerHTML = ``;
      journalRight.innerHTML = ``;
      scaleSelector.value = coords;
      journalId.textContent = getNewJournalId();
      currentMode = 'edit';
      toggleModes();
  });

  linkWrapper.appendChild(link);
  return linkWrapper;
}

function createEntryLink(item) {
  const linkWrapper = document.createElement('div');
  const link = document.createElement('a');
  link.classList.add('entryLink');
  link.setAttribute('tabindex', '0');
  link.href = '#';
  link.textContent = item.name;
  link.id = item.id;

  link.addEventListener('click', (e) => {
      e.preventDefault();

      entryName.value = item.name;
      journalLeft.innerHTML = item.left;
      journalRight.innerHTML = item.right;
      journalId.textContent = item.id;
      scaleSelector.style.display = "block";
      scaleSelector.value = item.scale;
      styleTables();
      formatTables();
      
  });

  linkWrapper.appendChild(link);
  return linkWrapper;
}

function styleTables() {
    // Select all <th> elements
    const headers = document.querySelectorAll('th');
    headers.forEach(header => {
        
        if(!header.classList.contains('tableHeader')){
            header.classList.add('tableHeader')
        }

        header.style = ''

    });

    // Select all <td> elements
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        
        if(!cell.classList.contains('tableCell')){
            cell.classList.add('tableCell')
        }

        cell.style = ''

    });
}

function focusOnTargetEntry() {
  let targetId = journalId.textContent;
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
        if (currentMode === 'map' && journalShowing) {
            const currentFocus = document.activeElement;
            
            // Check if the focused element is one of the entry links
            if (Array.from(entryLinks).includes(currentFocus)) {
                // Check for specific keys
                if (e.key === 'w' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Delete') {
                    e.preventDefault();

                    const currentIndex = Array.from(entryLinks).indexOf(currentFocus);

                    // Handle delete entry action
                    if (e.key === 'Delete' && journalShowing) {
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


function handleDeleteEntry(entryLinks, currentIndex) {
  showPrompt('Are you sure you want to delete this journal entry?').then(shouldDelete => {
      if (shouldDelete && entryLinks[currentIndex].id) {
          deleteJournalEntry(entryLinks[currentIndex].id);
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


function deleteJournalEntry(entryId){

let exists = journalData.findIndex(entry => entry.id === entryId);

//console.log('entry index: ', exists)
//console.log('journalShowing ', journalShowing)

if(exists > -1 && journalShowing === true){

//console.log('deleting...')
journalData.splice(exists, 1)
entryName.value = '';
journalLeft.innerHTML = ``;
journalRight.innerHTML = ``;
journalId.textContent = '';

loadJournal();
saveData();

}

}

function saveJournalEntry(){

let scaleSelector = document.getElementById('scaleSelector')

let saveEntry = {

scale: scaleSelector.value,
id: journalId.textContent,
name: entryName.value,
left: journalLeft.innerHTML,
right: journalRight.innerHTML,

}

//Data Maintenance
journalData.forEach(entry => {
if (!entry.scale){entry.scale = "0.0"}
})

//console.log(journalData)

if(journal.name !== ''){

let exists = journalData.findIndex(entry => entry.id === saveEntry.id)
//console.log(saveEntry.id)

if(exists > -1){
journalData[exists] = saveEntry;
}else{
//console.log(exists)
journalData.push(saveEntry);
}

loadJournal();
};

}

function fillScaleSelector() {
    
  // Get the select element
  const scaleSelector = document.getElementById('scaleSelector');

  scaledObjs = [];

  scaledObjs.push({
    name: 'Session Log',
    id: 'SL',
    settings: false,
    })

  let currentObj = getObj(coords); // Initial object, e.g., '0.0.2.3'

  while (currentObj.id !== '0.0') {
      scaledObjs.push(currentObj);
      currentObj = getObj(parseParent(currentObj.id));
  }

  // Add the final '0.0' object
  scaledObjs.push(currentObj);

  // Clear existing options
  scaleSelector.innerHTML = '';

    scaledObjs.push({
    name: 'Player Characters',
    id: 'PC',
    settings: false,
    })

    scaledObjs.push({
    name: 'Rules',
    id: 'BFRPG',
    settings: false,
    })

   

  // Add options based on scaledObjs in reverse order
  for (let i = scaledObjs.length - 1; i >= 0; i--) {
      const obj = scaledObjs[i];
      const newOption = document.createElement('option');
      newOption.value = obj.id;
      newOption.text = obj.name;
      
      scaleSelector.appendChild(newOption);
      //scaleSelector.style.display = "none";
  }

  try{
   const searchId = journalId.textContent;
   const foundEntry = journalData.find(entry => parseInt(entry.id) === parseInt(searchId));
   scaleSelector.value = foundEntry.scale;
  }catch{
   scaleSelector.value = coords;
  }

}

