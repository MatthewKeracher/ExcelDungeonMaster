let data = [];

let isEditing = false;
let isPainting = false;

const textDiv = document.getElementById('textDiv'); // Assume this is your editable div
const writeBox = document.getElementById('writeBox'); // Assume this is your editable div


function toggleEditMode() {
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



