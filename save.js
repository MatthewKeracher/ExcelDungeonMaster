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

function saveHex(){

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

function colorGrid(){

const hexagons = document.querySelectorAll(".hex");

hexagons.forEach(hex => {

const col = hex.getAttribute('col');
const row = hex.getAttribute('row');
const id =  coords + '.' + row + '.' + col;

const saveEntry = data.find(entry => entry.id === id)

if(saveEntry){
hex.querySelector('.left').style.borderRightColor = saveEntry.color;
hex.querySelector('.middle').style.backgroundColor = saveEntry.color;
hex.querySelector('.right').style.borderLeftColor = saveEntry.color;
}else{
hex.querySelector('.left').style.borderRightColor =  "rgba(215, 234, 215, 0.573)";
hex.querySelector('.middle').style.backgroundColor =  "rgba(215, 234, 215, 0.573)";
hex.querySelector('.right').style.borderLeftColor =  "rgba(215, 234, 215, 0.573)";


}

})

}

loadData();
colorGrid();



