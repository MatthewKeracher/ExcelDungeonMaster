// Function to save data to localStorage
function saveData() {
localStorage.setItem('data', JSON.stringify(data));
}

// Function to load data from localStorage
function loadData() {
const savedData = localStorage.getItem('data');
if (savedData) {
data = JSON.parse(savedData);  // Convert back from JSON string to array
}
}

function saveEntry(){

const idBox = document.getElementById('idBox');
const textDiv = document.getElementById('textDiv');
const placeName = document.getElementById('placeName')


let exists = data.find(entry => entry.id === idBox.textContent)

if(exists){
exists.name = placeName.value;
exists.desc = textDiv.innerHTML;

if(exists.desc !== "" && exists.name === ""){
    exists.name = "*"
    }

}else{
const saveEntry = {
id: idBox.textContent,
name: placeName.value,
desc: textDiv.innerHTML,
}

if(saveEntry.desc !== "" && saveEntry.name === ""){
saveEntry.name = "*"
}

data.push(saveEntry)
}
}


//loadData();
updateGrid();





