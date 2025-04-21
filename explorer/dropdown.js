function addToDropdown(name, parent = "parent", color = "lime", settings = false){
    const obj = {
        name: toTitleCase(name),
        key: name,
        parentKey: parent,
        settings: settings,
        color: color
    }

    addtoSelector(obj, settings);
}

function addtoSelector(obj, settings = false){

    const scaleSelector = document.getElementById('scaleSelector');
    
    const newOption = document.createElement('option');    
    newOption.value =  settings? obj.parentKey : [obj.parentKey, obj.key].join('.'); // Join the key and parentKey with a dot
    newOption.text = obj.name;
    newOption.style.color = obj.color;
    newOption.setAttribute("location", settings);
    scaleSelector.appendChild(newOption);

}

function getDropdownValue() {
    
    const dropdownValue = scaleSelector.value;
    
    if (dropdownValue.startsWith('0.0')) {
    
    const locId = dropdownValue;
    const locationObj = getObj(locId);
    return locationObj;
    
    }else{

    const dropdownParts = dropdownValue.split('.');
    const parentKey = dropdownParts[0];
    const key = dropdownParts[1];

    return {parent: parentKey, child: key};

    }}

function parseAddress(address){

    const dropdownParts = address.split('.');
    const parentKey = dropdownParts[0];
    const key = dropdownParts[1];

    return {parent: parentKey, child: key};

}


