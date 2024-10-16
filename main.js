const textDiv = document.getElementById('textDiv');
let isEditing = false;

// Listen for the Shift+Enter key press to toggle between editing modes
document.addEventListener('keydown', function (e) {
    if (e.shiftKey && e.key === 'Enter') {
        e.preventDefault()
        if (!isEditing) {
            
            const textContent = textDiv.innerHTML;
            textDiv.innerHTML = `<textarea id="textInput" style="white-space: pre-wrap; width: 100%; height: 100%; border: none; background: black; color: lime;">${textContent}</textarea>`;
            const textarea = document.getElementById('textInput');
            textarea.focus();
            textarea.setSelectionRange(textContent.length, textContent.length);

            isEditing = true;

            // Add blur event listener to the textarea
            textarea.addEventListener('blur', function () {
                // Use setTimeout to delay the replacement of the textarea with the div content
                setTimeout(() => {
                    textDiv.innerHTML = textarea.value.trim() || ""
                    isEditing = false;
                }, 0); // Delay the execution to ensure the blur event finishes
            });
        } else {
            // Exit edit mode by replacing the textarea with the div content
            const textarea = document.getElementById('textInput');
            if (textarea) {
                // Use setTimeout to delay the replacement of the textarea
                setTimeout(() => {
                    textDiv.innerHTML = textarea.value.trim() || ""
                    isEditing = false;
                }, 0);
            }
        }
    }
});
