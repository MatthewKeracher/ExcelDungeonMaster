let isEditing = false;
const textDiv = document.getElementById('textDiv'); // Assume this is your editable div

// Function to toggle between edit and view mode
function toggleEditMode() {
    if (!isEditing) {
        // Enter edit mode
        const textContent = textDiv.innerHTML;
        textDiv.innerHTML = `<textarea id="textInput">${textContent}</textarea>`;
        const textarea = document.getElementById('textInput');
        textarea.focus();
        textarea.setSelectionRange(textContent.length, textContent.length);
        isEditing = true;

        // Add blur event listener to the textarea
        textarea.addEventListener('blur', function () {
            // Use setTimeout to delay the replacement of the textarea with the div content
            setTimeout(() => {
                textDiv.innerHTML = textarea.value.trim() || "";
                isEditing = false;
            }, 0); // Delay the execution to ensure the blur event finishes
        });
    } else {
        // Exit edit mode
        const textarea = document.getElementById('textInput');
        if (textarea) {
            setTimeout(() => {
                textDiv.innerHTML = textarea.value.trim() || "";
                isEditing = false;
            }, 0);
        }
    }
}

// Keydown event listener to trigger toggle on Shift+Enter
document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault();
        toggleEditMode();  // Call the reusable function
    }
});


