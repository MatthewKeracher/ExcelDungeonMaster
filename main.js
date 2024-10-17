let data = [];
let coords = '0.0';
let region = 'Excel_DM'
let currentObj = [];

let isEditing = false;
let isPainting = false;

const textDiv = document.getElementById('textDiv'); // Assume this is your editable div
const writeBox = document.getElementById('writeBox'); // Assume this is your editable div

//Create Label
const hoverLabel = document.createElement('div');
hoverLabel.className = 'hover-label';
document.body.appendChild(hoverLabel);

function parse(str){

// Split the string into an array of numbers
const numbersArray = str.split('.');

// Remove the last two elements
const trimmedArray = numbersArray.slice(0, -2);

// Join the remaining numbers back into a string
const resultString = trimmedArray.join('.');

if(resultString !== ''){
coords = resultString
}
    
}

function getObj(coords){

const obj = data.find(entry => entry.id === coords)
return obj

}


function toggleEditMode() {

    isPainting = true
    handlePaint();


    if (!isEditing) {
       //Enter
        textDiv.style.display = "none";
        writeBox.style.display = "block";
        writeBox.focus();
        
        const textContent = textDiv.innerHTML;
        
        writeBox.setSelectionRange(textContent.length, textContent.length);
        isEditing = true;

        writeBox.addEventListener('blur', function () {
            setTimeout(() => {
                textDiv.innerHTML = writeBox.value.trim() || "";
                isEditing = false;
            }, 0); 
        });

    } else {
        //Exit
        textDiv.style.display = "block";
        writeBox.style.display = "none";
        isEditing = false;

        if (writeBox.style.display === 'none') {
            setTimeout(() => {
                textDiv.innerHTML = writeBox.value.trim() || "";
                
            }, 0);
        }

        saveHex();

    }
}

document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        toggleEditMode();  
    }
});

let currentColor = 'rgb(17, 132, 17)'; // Default color

function setColor(color) {
    currentColor = color;
    console.log('Selected color:', currentColor);

}

let inactivityTimer;

// Function to show the inactivity image
function showInactivityImage() {
    const container = document.getElementById('logoContainer');
    container.style.display = 'block';
}

// Function to hide the inactivity image
function hideInactivityImage() {
    const inactivityImage = document.getElementById('logoContainer');
    inactivityImage.style.display = 'none';
}

// Reset the inactivity timer
function resetInactivityTimer() {
    // Clear any existing timer
    clearTimeout(inactivityTimer);

    // Hide the inactivity image if it's currently displayed
    hideInactivityImage();

    // Start a new timer for 10 seconds (10000 milliseconds)
    inactivityTimer = setTimeout(() => {
        showInactivityImage();
    }, 10000); // 10 seconds of inactivity
}

// Listen for user activity (mouse movement, key presses, etc.)
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);

// Start the initial inactivity timer when the page loads
resetInactivityTimer();




