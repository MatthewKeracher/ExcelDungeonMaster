function addHotkeys() {

    let selectedColorElement = null;

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase(); // Convert the pressed key to lowercase
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isCmdOrCtrl = isMac ? event.metaKey : event.ctrlKey;
        const placeName = document.getElementById('placeName');

        // Check if inputs are not focused
        if (
            !writeBox.contains(document.activeElement) &&
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
                    case '[':
                        event.preventDefault(); // Prevent default action
                        currentMode = 'edit';
                        toggleModes();
                        break;
                    case ']':
                        console.log('click')
                        event.preventDefault(); // Prevent default action
                        currentMode = 'command';
                        toggleModes();
                        break;
                }
            }

            switch (key) {
                // For Nav
                case 'c':
                    handlePaint();
                    break;
                case 'f':
                    handleFill();
                    break;
                case 'l':
                    handleLoad();
                    break;
                case 's':
                    handleExport();
                    break;
                case 'e':
                    handleEnter();
                    break;
                case 'q':
                    handleExit();
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
        }else{

            // Handle Ctrl key
            if (isCmdOrCtrl && currentMode === "edit") {
                switch (key) {
                    case '[':
                        event.preventDefault();
                        currentMode = 'map';
                        toggleModes();
                        break;
                    case ']':
                        event.preventDefault(); // Prevent default action
                        currentMode = 'command';
                        toggleModes();
                        break;
                }
            } else if (isCmdOrCtrl && currentMode === "command") {
                switch (key) {
                    case '[':
                        event.preventDefault();
                        currentMode = 'edit';
                        toggleModes();
                        break;
                    case ']':
                        event.preventDefault(); // Prevent default action
                        currentMode = 'map';
                        toggleModes();
                        break;
                }
            }


        }
    });
}


addHotkeys();
