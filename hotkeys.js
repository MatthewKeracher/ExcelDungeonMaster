function addHotkeys() {

    let selectedColorElement = null;
    let isShiftHeld = false;

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase(); // Convert the pressed key to lowercase
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
        const placeName = document.getElementById('placeName');

        // Check if inputs are not focused
        if (
            !textDiv.contains(document.activeElement) &&
            !placeName.contains(document.activeElement) &&
            !commandLine.contains(document.activeElement)
        ) {

            if (key === 'shift') {
                isShiftHeld = true;

                if(isPainting){
                    toggleAutoPaint(true);
                }

            }

            // Handle Ctrl key
            if (isCmdOrCtrl) {
                switch (key) {
                    
                     
                }
                   
                
            }

            if(isShiftHeld === true){

                switch (key) {
                 
                    case '>':
                        handleEnter();
                        break;
                    case '<':
                        handleExit();
                        break;
                    }
            }else{

            if(isHexMap === true){

                switch (key) {
                //For HexNav
                case 'w':
                moveHex('up');
                break;
                case 'q':
                moveHex('up-left');
                break;
                case 'e':
                moveHex('up-right');
                break;
                case 's':
                moveHex('down');
                break;
                case 'a':
                moveHex('down-left');
                break;
                case 'd':
                moveHex('down-right');
                break;
                }

            }else{

            switch (key) {
                //For HexNav
                case 'w':
                moveCell('up');
                break;
                case 's':
                moveCell('down');
                break;
                case 'a':
                moveCell('left');
                break;
                case 'd':
                moveCell('right');
                break;
                }

            }

            switch (key) {
                // For Toolbar
                case 'Escape':
                    event.preventDefault();
                    currentMode = 'map';
                    toggleModes();
                    break;
                case '`':
                    event.preventDefault(); // Prevent default action
                    currentMode = 'command';
                    toggleModes();
                    break;
                case 'tab':
                    event.preventDefault(); // Prevent default action
                    currentMode = 'edit';
                    toggleModes();
                    break;
                case 'n':
                    event.preventDefault(); // Prevent default action
                    currentMode = 'edit';
                    toggleModes();
                    placeName.focus();
                    break;
                case 'p':
                    handlePaint();
                    break;
                case 'f':
                    handleFill();
                    break;
                case 'l':
                    handleLoad();
                    break;
                case 'x':
                    handleExport();
                    break;
                case 'g':
                    handleGrid();
                    break;
                

                // For Painting
                case '1':
                    selectedColorElement = document.getElementById('color1');
                    break;
                case '2':
                    selectedColorElement = document.getElementById('color2');
                    break;
                case '3':
                    selectedColorElement = document.getElementById('color3');
                    break;
                case '4':
                    selectedColorElement = document.getElementById('color4');
                    break;
                case '5':
                    selectedColorElement = document.getElementById('color5');
                    break;
                case '6':
                    selectedColorElement = document.getElementById('color6');
                    break;
                case '7':
                    selectedColorElement = document.getElementById('color7');
                    break;
                case '8':
                    selectedColorElement = document.getElementById('color8');
                    break;
                case '9':
                    selectedColorElement = document.getElementById('color9');
                    break;
                case '0':
                    selectedColorElement = document.getElementById('eraser');
                    break;


            }
        }

            // If a valid palette box is found, update the current color
            if (selectedColorElement && isPainting) {
                currentColor = window.getComputedStyle(selectedColorElement).backgroundColor;
            }

            // Add event listener for keyup
            document.addEventListener('keyup', (event) => {
                const key = event.key.toLowerCase();

                // Check for the Shift key
                if (key === 'shift') {
                    isShiftHeld = false;
                    //toggleHexLabelsVisibility(false);
                    if(isPainting){
                        toggleAutoPaint(false);
                    }
                }
            });

            function toggleAutoPaint(isVisible) {
                const hexLabels = document.querySelectorAll('.hexLabel');
                hexLabels.forEach(label => {
                    let hasName = label.textContent;
                    label.style.display = isVisible && hasName ? 'block' : 'none'; // Change to 'inline-block' if needed
                });
            }
        }else if(currentMode === 'command'){

                switch (event.key) {
                    case 'Escape':
                        event.preventDefault();
                        currentMode = 'map';
                        toggleModes();
                        break;
                    case 'Enter':
                        event.preventDefault(); 
                        currentMode = 'map';
                        toggleModes();
                    break;
                    case '`':
                        event.preventDefault(); 
                        currentMode = 'command';
                        toggleModes();
                    break; 
                }
           
        }else if (currentMode === 'edit'){

            switch (event.key) {
                case 'Escape':
                    event.preventDefault();
                    currentMode = 'map';
                    toggleModes();
                    break;
                case 'tab':
                    event.preventDefault(); 
                    currentMode = 'map';
                    toggleModes();
                break;
                case '`':
                    event.preventDefault(); 
                    currentMode = 'command';
                    toggleModes();
                break; 
            }



        }
    });
}


addHotkeys();
