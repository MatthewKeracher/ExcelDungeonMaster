let scaledObjs = [];

function triggerJournal(){

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
  journalLeft.innerHTML = '';
  console.log(journalData)

  // DropDown
  fillScaleSelector();

  // Add New Button
  const addNewButton = createAddNewButton();
  journalLeft.appendChild(addNewButton);

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
      //const scale = item.scale.split('.').slice(0, -1).join('.');
      if (entriesByScale[item.scale]) {
          entriesByScale[item.scale].entries.push(item);
      }
  });

  // Populate left column with organized links
  scaledObjs.forEach(obj => {
      const scale = obj.id;
      const scaleData = entriesByScale[scale];

      if (scaleData && scaleData.entries.length > 0) {
          // Add header
          console.log(scaleData)
          const header = document.createElement('h4');
          header.textContent = scaleData.name;
          header.style.color = "gold";
          journalLeft.appendChild(header);

          // Add entries for this scale
          scaleData.entries.forEach(item => {
              const linkWrapper = createEntryLink(item);
              journalLeft.appendChild(linkWrapper);
          });
      }
  });

  focusOnTargetEntry();
  addKeyboardNavigation();
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
      journalRight.innerHTML = '';
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
      journalRight.innerHTML = item.desc;
      journalId.textContent = item.id;
      scaleSelector.value = item.scale;
  });

  linkWrapper.appendChild(link);
  return linkWrapper;
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
      if (currentMode === 'map') {
          if (e.key === 'w' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Delete') {
              e.preventDefault();

              const currentFocus = document.activeElement;
              const currentIndex = Array.from(entryLinks).indexOf(currentFocus);

              if (e.key === 'Delete') {
                  handleDeleteEntry(entryLinks, currentIndex);
              } else {
                  navigateEntries(entryLinks, currentIndex, e.key);
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
journalRight.innerHTML = '';
journalId.textContent = '';

loadJournal();
saveData();

}

}

function saveJournalEntry(){

let saveEntry = {

scale: scaleSelector.value,
id: journalId.textContent,
name: entryName.value,
desc: journalRight.innerHTML,

}

//Data Maintenance
journalData.forEach(entry => {
if (!entry.scale){entry.scale = "0.0"}
})

console.log(journalData)

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
  let currentObj = getObj(coords); // Initial object, e.g., '0.0.2.3'

  while (currentObj.id !== '0.0') {
      scaledObjs.push(currentObj);
      currentObj = getObj(parseParent(currentObj.id));
  }

  // Add the final '0.0' object
  scaledObjs.push(currentObj);

  // Clear existing options
  scaleSelector.innerHTML = '';

  // Add options based on scaledObjs in reverse order
  for (let i = scaledObjs.length - 1; i >= 0; i--) {
      const obj = scaledObjs[i];
      const newOption = document.createElement('option');
      newOption.value = obj.id;
      newOption.text = obj.name;
      
      // Make the '0.0' option selected by default
      if (obj.id === coords) {
          newOption.selected = true;
      }
      
      scaleSelector.appendChild(newOption);
      scaleSelector.style.display = "none";
  }
}

