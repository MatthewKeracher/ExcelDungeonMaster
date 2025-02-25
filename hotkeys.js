Mousetrap.bind('>', function() {

    if(!journalShowing){

    //console.log('handleEnter():')
    const logo = document.getElementById("startLogo");
    logo.style.display = "none";
    
    captureGridSize();
    
    //Set selected cell as regionObj
    regionObj = getObj(idBox.textContent);
    
    regionObj.scrollData = {
    X: scrollConvert(grid.scrollLeft, "percentage", "X"), 
    Y: scrollConvert(grid.scrollTop, "percentage", "Y"), 
    Z: gridContainer.style.zoom}
    
    //console.log(scrollData)
    //console.log('X: ' + grid.scrollLeft, 'Y: ' + grid.scrollTop)
    
    const regionName = document.getElementById('regionName');
    regionName.textContent = regionObj?.name? regionObj.name : "Excel_DM";
    coords = regionObj.id;
    
    loadGrid();
    goToEntry(regionObj.id);

    }
    
    });

Mousetrap.bind('<', function() {
    
    if(!journalShowing){
    
    //Move scrollbar to be over regionObj
    scrollData = regionObj.scrollData
    
    //Remove 2 digits from coords and go there.
    coords = parseParent(regionObj.id);
    
    if(regionObj.id === '0.0'){makeNewOuterLevel()}
    
    //Get Obj for parent cell.
    let returnObj = regionObj
    regionObj = getObj(coords);
    
    
    //Set parent cell name as region name. 
    const regionName = document.getElementById('regionName');
    regionName.textContent = regionObj && regionObj.name !== ''? regionObj.name : "Excel_DM"
    
    loadGrid();
    goToEntry(returnObj.id);
    showInactivityImage()

    }
    
    });

Mousetrap.bind(['shift+w', 'shift+i'], function() { 
   if (!isPainting && !isHexMap) addCellToZone('up');
    });   
Mousetrap.bind(['shift+a', 'shift+j'], function() { 
    if (!isPainting && !isHexMap) addCellToZone('left');
    });  
Mousetrap.bind(['shift+s', 'shift+k'], function() { 
    if (!isPainting && !isHexMap) addCellToZone('down');
    });   
Mousetrap.bind(['shift+d', 'shift+l'], function() { 
    if (!isPainting && !isHexMap) addCellToZone('right');
    });  
Mousetrap.bind('shift', function() { 
    if(!isHexMap && currentMode === 'map'){
    clipZone(); 
    }}, 'keyup'); 


    
Mousetrap.bind(['w', 'i'], function() { 
        if (isImaging) {moveImage('up')}
        else if (isHexMap && !journalShowing) moveHex('up');
        else if (!isHexMap && !journalShowing) moveFocus('up');
    });   
Mousetrap.bind(['a', 'j'], function() { 
        if (isImaging) {moveImage('left')}
        else if (isHexMap && !journalShowing) moveHex('down-left');
        else if (!isHexMap && !journalShowing) moveFocus('left');
    });  
Mousetrap.bind(['s', 'k'], function() { 
        if (isImaging) {moveImage('down')}
        else if (isHexMap && !journalShowing) moveHex('down');
        else if (!isHexMap && !journalShowing) moveFocus('down');
    });   
Mousetrap.bind(['d', 'l'], function() { 
        if (isImaging) {moveImage('right')}
        else if (isHexMap && !journalShowing) moveHex('down-right');
        else if (!isHexMap && !journalShowing) moveFocus('right');
    });   
Mousetrap.bind(['q', 'u'], function() { 
    if (isImaging) {sizeImage('decrease')}    
    else if (isHexMap && !journalShowing) moveHex('up-left');  
    });   
Mousetrap.bind(['e', 'o'], function() {  
    if (isImaging) {sizeImage('increase')}    
    else if (isHexMap && !journalShowing) moveHex('up-right');
    });     
Mousetrap.bind('p', function() {  
        handlePaint();
    });  
Mousetrap.bind('f', function() {  
        handleFill();
    });



Mousetrap.bind('1', function() {  
        selectedColorElement = document.getElementById('color1');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('2', function() {  
        selectedColorElement = document.getElementById('color2');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('3', function() {  
        selectedColorElement = document.getElementById('color3');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('4', function() {  
        selectedColorElement = document.getElementById('color4');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('5', function() {  
        selectedColorElement = document.getElementById('color5');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('6', function() {  
        selectedColorElement = document.getElementById('color6');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('7', function() {  
        selectedColorElement = document.getElementById('color7');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('8', function() {  
        selectedColorElement = document.getElementById('color8');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('9', function() {  
        selectedColorElement = document.getElementById('color9');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });
Mousetrap.bind('0', function() {  
        selectedColorElement = document.getElementById('eraser');
        setCurrentColor(selectedColorElement);
        paintCurrentCell();
    });

Mousetrap.bindGlobal('`', function(e) {  
    
        switch (currentMode){
    
            case 'map':
            e.preventDefault(); 
            currentMode = 'command';
            toggleModes(journalShowing? e.target: '');  
            break;
    
            case 'edit':
    
            e.preventDefault(); 
            currentMode = 'command';
            toggleModes(journalShowing? e.target: '');  
    
            break;
    
            case 'command':
            e.preventDefault(); 
            expandConsole(journalShowing? e.target: '');
    
        }
    });
    
Mousetrap.bindGlobal('escape', function(e) { 
    
        switch (currentMode){
    
            case 'map':
            triggerJournal();
    
            break;
    
            case 'edit':
    
            e.preventDefault();
            currentMode = 'map';
            toggleModes();
    
            break;
    
            case 'command':
            e.preventDefault();
            currentMode = 'map';
            commandLine.style.height = '30px'
            toggleModes();
            break;
    
    }
    
    });

    
Mousetrap.bindGlobal('enter', function(e) { 
    
        switch (currentMode){
    
            case 'map':
    
            let currentCell = getCurrentDiv();
            if(isFilling){fillCells(currentCell)}

            break;
    
            case 'edit':
    
            break;
    
            case 'command':
            e.preventDefault();
            currentMode = 'map';
            commandLine.style.height = '30px'
            toggleModes();
            break;
    
    }
    
    });
    
Mousetrap.bindGlobal('tab', function(e) { 
    
        switch (currentMode){
    
            case 'map':
            e.preventDefault(); 
            currentMode = 'edit';
            toggleModes(); 
            
            break;
            
            case 'edit':
            
            break;
            
            case 'command':
       
            break;
    
        };
    
    });

    Mousetrap.bind('n', function(e) { 
        e.preventDefault();  
        currentMode = 'edit';
        toggleModes();
        if(!journalShowing){
        placeName.focus();
        placeName.select();}
    });
    Mousetrap.bind('y', function(e) { 
        e.preventDefault();  
        currentMode = 'edit';
        toggleModes();
        if(!journalShowing){
        placeSymbol.focus();
        placeSymbol.select();}
    });

Mousetrap.bind(['ctrl+c', 'command+c'], function() {  
    copyTile();
    });
Mousetrap.bind(['ctrl+v', 'command+v'], function() {  
    pasteTile();
    });

    Mousetrap.bind(['-', '-'], function() {  
        changeZoom('out');
        });
    Mousetrap.bind(['=', '+'], function() {  
        changeZoom('in');
        });

    Mousetrap.bind('del', function() { 
        let currentCell = getCurrentDiv()
        if(!journalShowing){
        if(currentCell.classList.contains('inZone')){
        removeCellFromZone(currentCell)
        }else{
            showPrompt('Delete this tile and contents?').then(shouldDelete => {
                if (shouldDelete) {}
                deleteTile();
                })
        }};
    });

// Predefined YouTube video URL
const videoUrl = 'https://youtu.be/d9YM_9CVmtc'; // Replace with your desired video URL

// Function to extract video ID from YouTube URL
function getYouTubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

Mousetrap.bind('1', function() {  

   let url = "https://youtu.be/jBhrlz3G0Uo";
   let embeddedUrl = url.replace("youtu.be/", "youtu.be/embed/");

    let player = `<iframe width="0" height="0" src=${embeddedUrl}?autoplay=1&start=2307" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    textDiv.innerHTML += player 
 
});

Mousetrap.bind('0', function() {  
    
    textDiv.innerHTML = `` 
 
});

