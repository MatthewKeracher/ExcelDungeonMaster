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

  function loadJournal(){
  
    //Clear
    journalLeft.innerHTML = '';
  
    // Add New Button
    const linkWrapper = document.createElement('div');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'Add New Entry';
  
      link.addEventListener('click', (e) => {
          e.preventDefault();
          entryName.value = '';
          journalRight.innerHTML = '';
      });
  
      linkWrapper.appendChild(link);
      link.id = "addNewEntry";
      link.classList.add('entryLink');
      journalLeft.appendChild(linkWrapper);
      const addNewEntry = document.getElementById('addNewEntry');
      addNewEntry.focus();
  
    // Populate left column with links
    journalData.forEach(item => {
      if(item.name === ''){return}
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
      });
      linkWrapper.appendChild(link);
      journalLeft.appendChild(linkWrapper);
  });

  let targetId = journalId.textContent
  if(targetId){
  document.getElementById(targetId).focus();
  }
  
  // Get all entry links
  const entryLinks = document.querySelectorAll('.entryLink');
  
  // Add keydown event listener to the document
  document.addEventListener('keydown', (e) => {
      if (currentMode === 'map'){
      if (e.key === 'w' || e.key === 's' || e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Delete') {
          e.preventDefault(); // Prevent default scrolling
  
          const currentFocus = document.activeElement;
          const currentIndex = Array.from(entryLinks).indexOf(currentFocus);
  
          let newIndex;
          if(e.key === 'Delete'){
            showPrompt('Are you sure you want to delete this journal entry?').then(shouldDelete => {
                if (shouldDelete && entryLinks[currentIndex].id) {
                    deleteJournalEntry(entryLinks[currentIndex].id)
                }
                });
          }else if (e.key === 'w' || e.key === 'ArrowUp') {
              newIndex = currentIndex > 0 ? currentIndex - 1 : entryLinks.length - 1;
          } else {
              newIndex = currentIndex < entryLinks.length - 1 ? currentIndex + 1 : 0;
          }
         
          try{
          entryLinks[newIndex].focus();
          entryLinks[newIndex].click();
          }catch{
          //entryLinks[newIndex].focus();
          //entryLinks[newIndex].click();
          }
  
          
      }}
  });

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

id: journalId.textContent,
name: entryName.value,
desc: journalRight.innerHTML,

}

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