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
const writeBox = document.getElementById('writeBox');
const placeName = document.getElementById('placeName')

let exists = data.find(entry => entry.id === idBox.textContent)

if(exists){
exists.name = placeName.value;
exists.desc = writeBox.value;
exists.color = isPainting? currentColor : exists.color;
}else{
const saveEntry = {
id: idBox.textContent,
name: placeName.value,
desc: writeBox.value,
color: isPainting? currentColor : '',
}

data.push(saveEntry)
}
}


loadData();
updateGrid();





