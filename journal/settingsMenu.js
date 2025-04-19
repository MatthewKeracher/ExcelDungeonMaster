const contexts = {"Village": [], "Tavern": [], "Workshop": [], "Default": []}

function makeSettingsMenu(parent, obj){

switch(parent) {
case "Locations":

    makeLocationSettings(obj)

break;

case "Items":

    entryName.value = toTitleCase(obj.name);
    journalLeft.innerHTML = "";
    journalRight.innerHTML = "";
    journalId.textContent = "X";

    let table = categoryTable(obj.name, 1.3, "itemsTable");
    journalLeft.appendChild(table)
   

break;
}

}

function createSettingContainer(labelText) {

    const container = document.createElement('div');
    container.style.display = "flex";
    container.style.justifyContent = "space-between";
    container.style.alignItems = "center";
    container.style.width = "95%";
    container.style.marginBottom = "10px";

    const label = document.createElement('span');
    label.textContent = toTitleCase(labelText);
    label.style.fontFamily = "SoutaneBlack"
    label.style.fontSize = "16px"

    container.appendChild(label);

    return container;

}

function makeLocationSettings(obj){
    entryName.value = toTitleCase(obj.name);
    journalLeft.innerHTML = "";
    journalRight.innerHTML = "";
    scaleSelector.value = obj.id;
    journalId.textContent = "X";

    if(!obj.settings) {obj.settings = { // Default settings
        inflation: 1, 
        context: "Default",
        hexType: "Grassland",
        workshop: "General",
        randomEncounters: "On",
        encounterChance: 1,
    }} 
    
    const contextSetting = makeDropdownSetting(obj, obj.settings, "context", contexts)
    journalRight.appendChild(contextSetting)
    
    if(obj.settings.context === "Workshop"){

    const itemsTable = makeDropdownSetting(obj, obj.settings, "workshop", EXCEL_DM.journal.Items);
    journalRight.appendChild(itemsTable);

    const inflationEntry = makeInputSetting(obj, obj.settings, "inflation", {type: "number"});
    journalRight.appendChild(inflationEntry);

    let shopStock = categoryTable(obj.settings.workshop, obj.settings.inflation, "workshopTable");
    journalLeft.appendChild(shopStock);

    }else if(obj.settings.context === "Tavern"){

    makeInputSetting(obj, obj.settings, "inflation", {type: "number"});

    let servicesMenu = categoryTable("services", obj.settings.inflation, "servicesTable");
    journalRight.appendChild(servicesMenu);

    let drinksMenu = categoryTable("booze", obj.settings.inflation, "boozeTable");
    journalLeft.appendChild(drinksMenu);

    let foodMenu = categoryTable("meals", obj.settings.inflation, "mealTable");
    journalRight.appendChild(foodMenu);

    }else{

    const hexTypeEntry = makeDropdownSetting(obj, obj.settings, "hexType", encounters);
    journalRight.appendChild(hexTypeEntry);

    const encoutersOn = makeDropdownSetting(obj, obj.settings, "randomEncounters", {"On": [], "Off": []});
    journalRight.appendChild(encoutersOn);

    const encounterChance = makeInputSetting(obj, obj.settings, "encounterChance", {type: "number", min: 1, max: 6});
    journalRight.appendChild(encounterChance);

    const encounterTable = document.createElement('div');
    encounterTable.innerHTML = tableFromObj(encounters[obj.settings.hexType])
    journalLeft.appendChild(encounterTable);

    }

}

function makeDropdownSetting(obj, targetObj, setting, options) {

    const savedOption = targetObj[setting];
    const container = createSettingContainer(setting);

    const select = document.createElement('select');
    select.className = "inputBox";
    select.id = setting;

    // Helper to generate options from object or array
    if (Array.isArray(options)) {
        options.forEach(opt => {
            const key = typeof opt === 'string' ? opt : String(opt);
            const option = document.createElement('option');
            option.value = key;
            option.textContent = toTitleCase(key);
            if (key === savedOption) option.selected = true;
            select.appendChild(option);
        });
     } else if (typeof options === 'object' && options !== null) {
        Object.keys(options).forEach(key => {
            const option = document.createElement('option');
            option.value = key; // Use the key as the value
            option.textContent = toTitleCase(key); // Use the key as the label
            if (key === savedOption) option.selected = true;
            select.appendChild(option);
        });
    }

    select.addEventListener('change', function() {
        targetObj[setting] = this.value;
        saveData();

        makeLocationSettings(obj);
        

    });

    container.appendChild(select);

    return container;


}

function makeInputSetting(obj, targetObj, setting, {type = "string", min = null, max = null}, subKey = null) {
    const container = createSettingContainer(setting);

    const input = document.createElement('input');
    input.className = "inputBox";
    input.id = setting;
    input.type = type;
    if(min){input.min = min}
    if(max){input.max = max}    

    // If subKey is provided (for nested properties like score), use it
    input.value = subKey ? targetObj[setting][subKey] : targetObj[setting];

    input.addEventListener('change', function() {
        if (subKey) {
            targetObj[setting][subKey] = (type === "number") ? Number(this.value) : this.value;
        } else { 
            targetObj[setting] = (type === "number") ? Number(this.value) : this.value;
        }

        console.log(targetObj)

        saveData();

        
        makeLocationSettings(obj);
        
    });

    container.appendChild(input);
   return container;
}






