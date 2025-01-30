
const items = {
"weapons": [
{
"name": "Hand Axe",
"cost": "4 gp",
"size": "S",
"weight": "5",
"damage":"1d6",
"description": "Small, light axe, good for throwing"
},
{
"name": "Battle Axe",
"cost": "7 gp",
"size": "M",
"weight": "7",
"damage":"1d8",
"description": "A standard axe for combat"
},
{
"name": "Great Axe",
"cost": "14 gp",
"size": "L",
"weight": "15",
"damage":"1d10",
"description":"A larger, heavier axe for combat"
},
{
"name": "Pickaxe (Military Pick)",
"cost": "6 gp",
"size": "S",
"weight": "4",
"damage":"1d6",
"description": "A weapon with a sharpened spike instead of a blade."
},
{
"name": "Mattock (Footman's Pick)",
"cost":"8 gp",
"size":"M",
"weight":"6",
"damage":"1d8",
"description": "A larger pickaxe, similar to the military pick, but larger and heavier."
},
{
"name": "Dagger",
"cost": "2 gp",
"size": "S",
"weight": "1",
"damage":"1d4",
"description": "A short, sharp blade, good for thrusting."
},
{
"name": "Defending Dagger",
"cost": "7 gp",
"size": "S",
"weight": "2",
"damage":"1d4",
"description":"A dagger with features to help catch or defend against other blades"
},
{
"name": "Silver Dagger",
"cost":"25 gp",
"size":"S",
"weight":"1",
"damage":"1d4",
"description":"A dagger with a silver blade, effective against lycanthropes."
},
{
"name": "Shortsword / Cutlass",
"cost": "6 gp",
"size": "S",
"weight": "3",
"damage":"1d6",
"description":"A shorter sword, good for thrusting or slashing."
},
{
"name": "Longsword / Scimitar",
"cost": "10 gp",
"size": "M",
"weight": "4",
"damage":"1d8",
"description": "A versatile, medium-length sword for slashing and thrusting."
},
{
"name": "Two-Handed Sword",
"cost": "18 gp",
"size": "L",
"weight": "10",
"damage":"1d10",
"description":"A large sword requiring two hands to use."
},
{
"name": "Warhammer",
"cost": "4 gp",
"size": "S",
"weight": "6",
"damage":"1d6",
"description":"A hammer balanced for throwing or melee."
},
{
"name": "Light Mace",
"cost": "5 gp",
"size": "S",
"weight": "5",
"damage":"1d6",
"description":"A small, light mace, better suited for mounted combat or smaller characters."
},
{
"name": "Mace",
"cost": "6 gp",
"size": "M",
"weight": "10",
"damage":"1d8",
"description":"A standard bludgeoning weapon with a head."
},
{
"name": "Morningstar",
"cost": "7 gp",
"size": "M",
"weight": "7",
"damage":"1d8",
"description":"A mace with spikes or blades on the head."
},
{
"name": "Maul / Great Mace",
"cost": "10 gp",
"size": "L",
"weight": "16",
"damage":"1d10",
"description":"Larger, two-handed versions of the hammer and mace."
},
{
"name": "Spear",
"cost": "5 gp",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A simple weapon with a pointed end. Can be thrown one-handed, used in melee one-handed, or melee two-handed."
},
{
"name": "Fork / Trident",
"cost": "6 gp",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A spear with a double or triple-pronged head, can be used to entangle."
},
{
"name": "Boar Spear",
"cost": "6 gp",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A spear with a crossbar to prevent impaled opponents from reaching the wielder."
},
{
"name": "Lance",
"cost": "10 gp",
"size": "L",
"weight": "10",
"damage":"1d8",
"description":"A larger, sturdier spear, best used when mounted."
},
{
"name": "Quarterstaff",
"cost":"2 gp",
"size":"L",
"weight":"4",
"damage":"1d6",
"description":"A long pole that functions as a headless spear."
},
{
"name": "Pole Arm",
"cost": "9 gp",
"size": "L",
"weight": "15",
"damage":"1d10",
"description":"A long pole weapon, typically with a blade, axe, or spike on top."
},
{
"name":"Chain",
"cost":"9 gp",
"size":"M/L",
"weight":"3",
"damage":"1d4",
"description":"A length of chain that can be used as a weapon."
},
{
"name": "Flail",
"cost":"8 gp",
"size":"M",
"weight":"6",
"damage":"1d8",
"description":"A weapon with a weighted head attached to a handle by a chain."
},
{
"name":"Great Flail",
"cost":"12 gp",
"size":"L",
"weight":"15",
"damage":"1d10",
"description":"A larger, two-handed version of a flail."
},
{
"name": "Whip",
"cost":"3 gp",
"size":"M",
"weight":"2",
"damage":"1d3",
"description":"A flexible weapon good for entangling."
},
{
"name": "Club/Cudgel/Walking Staff",
"cost": "2 sp",
"size": "M",
"weight": "1",
"damage":"1d4",
"description":"A simple bludgeoning weapon."
},
{
"name": "Silver Walking Stick/Staff",
"cost":"4 gp",
"size":"M",
"weight":"1",
"damage":"1d4",
"description":"A walking stick with a silver head or handle."
},
{
"name":"Greatclub",
"cost":"3 gp",
"size":"L",
"weight":"8",
"damage":"1d8",
"description":"A heavy, two-handed club."
},
{
"name":"Sap/Blackjack",
"cost":"1 gp",
"size":"S",
"weight":"1",
"damage":"1d4 (subduing)",
"description":"A small, subduing weapon."
},
{
"name":"Hook",
"cost":"6 sp",
"size":"S",
"weight":"1",
"damage":"1d4",
"description":"A hook-shaped weapon or implement."
},
{
"name": "Sickle",
"cost":"2 gp",
"size":"S",
"weight":"2",
"damage":"1d6",
"description":"An inward-curved cutting weapon"
},
{
"name":"Scythe",
"cost":"7 gp",
"size":"L",
"weight":"10",
"damage":"1d8",
"description":"A large, inward-curved cutting weapon"
},
{
"name": "Shortbow",
"cost": "25 gp",
"size": "M",
"weight": "2",
"damage":"1d6",
"description": "A bow with a shorter stave, good for smaller characters."
},
{
"name": "Longbow",
"cost": "60 gp",
"size": "L",
"weight": "3",
"damage":"1d8",
"description": "A bow with a longer stave for more power and range."
},
{
"name": "Light Crossbow",
"cost": "30 gp",
"size": "M",
"weight": "7",
"damage":"1d6",
"description": "A lighter crossbow with shorter range and less damage."
},
{
"name": "Heavy Crossbow",
"cost": "50 gp",
"size": "L",
"weight": "14",
"damage":"1d8",
"description":"A more powerful crossbow with longer range and more damage."
},
{
"name": "Hand Crossbow",
"cost":"150 gp",
"size":"S",
"weight":"3",
"damage":"1d3",
"description":"A small, one-handed crossbow with short range and less power."
},
{
"name": "Bullet Crossbow",
"cost":"30 gp",
"size":"M",
"weight":"7",
"damage":"N/A",
"description":"A crossbow that fires a bullet."
},
{
"name": "Sling",
"cost": "1 gp",
"size": "S",
"weight": "*",
"damage":"1d4 with sling bullets, 1d3 with stones",
"description": "A simple tool that launches a small projectile at high speed."
},
{
"name": "Bola",
"cost": "2 gp",
"size":"S",
"weight":"2",
"damage":"1d3",
"description":"A weapon with weights on the ends of a cord, good for entangling."
},
{
"name": "Dart / Throwing Blade",
"cost":"1 gp",
"size":"S",
"weight":"* to ½",
"damage":"1d3",
"description":"A small, sharp projectile."
},
{
"name": "Javelin",
"cost":"1 gp",
"size":"M",
"weight":"2",
"damage":"1d4",
"description":"A spear-like weapon designed for throwing."
},
{
"name": "Blowgun",
"cost":"2 gp",
"size":"M",
"weight":"2",
"damage":"1d3",
"description":"A long, hollow tube that uses lung power to fire small darts."
},
{
"name": "Net",
"cost":"20 gp",
"size":"M",
"weight":"5",
"damage":"N/A",
"description":"A weapon used to entangle."
},
{
"name": "Spade",
"cost":"2 gp",
"size":"M",
"weight":"4",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name": "Crowbar",
"cost":"2 gp",
"size":"M",
"weight":"5",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name":"Pitchfork",
"cost":"1 gp",
"size":"M",
"weight":"3",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name":"Frying Pan",
"cost":"8 sp",
"size":"S",
"weight":"4",
"damage":"1d4",
"description":"A cooking tool that can be used as an improvised weapon."
},
{
"name":"Torch (fire damage)",
"cost":"N/A",
"size":"S",
"weight":"*",
"damage":"1d3",
"description":"A source of light that can be used as an improvised weapon, dealing fire damage."
},
{
"name":"Punch",
"cost":"N/A",
"size":"N/A",
"weight":"N/A",
"damage":"1d3",
"description":"An unarmed attack"
},
{
"name":"Kick",
"cost":"N/A",
"size":"N/A",
"weight":"N/A",
"damage":"1d4",
"description":"An unarmed attack"
},
{
"name":"Gauntlet/Pommel",
"cost":"N/A",
"size":"N/A",
"weight":"N/A",
"damage":"1d3",
"description":"An unarmed attack using a gauntlet or the pommel of a weapon"
},
{
"name":"Cestus/Spiked Gauntlet",
"cost":"1 gp",
"size":"S",
"weight":"2",
"damage":"1d3",
"description":"A gauntlet with spikes on it."
}
],
"general": [
{
"name": "Backpack (Standard or Halfling)",
"weight": "*",
"cost": "4 gp"
},
{
"name": "Belt Pouch",
"weight": "*",
"cost": "1 gp"
},
{
"name": "Bit and bridle",
"weight": "3",
"cost":"15 sp"
},
{
"name":"Candles, 12",
"weight": "*",
"cost": "1 gp"
},
{
"name":"Chalk, small bag of pieces",
"weight": "*",
"cost": "2 gp"
},
{
"name": "Cloak",
"weight": "1",
"cost": "2 gp"
},
{
"name": "Clothing, common outfit",
"weight": "1",
"cost": "4 gp"
},
{
"name":"Glass bottle or vial",
"weight":"*",
"cost":"1 gp"
},
{
"name": "Grappling Hook",
"weight": "4",
"cost": "2 gp"
},
{
"name":"Holy Symbol",
"weight":"*",
"cost":"25 gp"
},
{
"name":"Holy Water, per vial",
"weight":"*",
"cost":"10 gp"
},
{
"name":"Horseshoes & shoeing",
"weight":"10",
"cost":"1 gp"
},
{
"name":"Ink, per jar",
"weight":"½",
"cost":"8 gp"
},
{
"name":"Iron Spikes, 12",
"weight":"1",
"cost":"1 gp"
},
{
"name":"Ladder, 10 ft.",
"weight":"20",
"cost":"1 gp"
},
{
"name":"Lantern",
"weight":"2",
"cost":"5 gp"
},
{
"name":"Lantern, Bullseye",
"weight":"3",
"cost":"14 gp"
},
{
"name":"Lantern, Hooded",
"weight":"2",
"cost":"8 gp"
},
{
"name":"Manacles (without padlock)",
"weight":"4",
"cost":"6 gp"
},
{
"name": "Map or scroll case",
"weight": "½",
"cost": "1 gp"
},
{
"name": "Mirror, small metal",
"weight":"*",
"cost": "7 gp"
},
{
"name":"Oil (per flask)",
"weight":"1",
"cost":"1 gp"
},
{
"name":"Padlock (with 2 keys)",
"weight":"1",
"cost":"12 gp"
},
{
"name":"Paper (per sheet)",
"weight":"**",
"cost":"1 gp"
},
{
"name":"Pole, 10' wooden",
"weight":"10",
"cost":"1 gp"
},
{
"name": "Quill",
"weight": "**",
"cost": "1 sp"
},
{
"name":"Quill Knife",
"weight":"*",
"cost":"1 gp"
},
{
"name": "Quiver or Bolt case",
"weight": "1",
"cost": "1 gp"
},
{
"name":"Rations, Dry, one week",
"weight":"14",
"cost":"10 gp"
},
{
"name":"Rope, Hemp (per 50 ft.)",
"weight":"5",
"cost":"1 gp"
},
{
"name": "Rope, Silk (per 50 ft.)",
"weight": "2",
"cost": "10 gp"
},
{
"name":"Sack, Large",
"weight":"*",
"cost":"1 gp"
},
{
"name":"Sack, Small",
"weight":"*",
"cost":"5 sp"
},
{
"name": "Saddle, Pack",
"weight":"15",
"cost": "5 gp"
},
{
"name": "Saddle, Riding",
"weight":"35",
"cost": "10 gp"
},
{
"name":"Saddlebags, pair",
"weight":"7",
"cost":"4 gp"
},
{
"name": "Spellbook (128 pages)",
"weight":"1",
"cost": "25 gp"
},
{
"name": "Tent, Large (ten men)",
"weight":"20",
"cost": "25 gp"
},
{
"name": "Tent, Small (one man)",
"weight":"10",
"cost": "5 gp"
},
{
"name": "Thieves' picks and tools",
"weight": "1",
"cost":"25 gp"
},
{
"name":"Tinderbox, flint and steel",
"weight":"1",
"cost":"3 gp"
},
{
"name":"Torches, 6",
"weight":"1",
"cost":"1 gp"
},
{
"name":"Whetstone",
"weight":"1",
"cost":"1 gp"
},
{
"name":"Whistle",
"weight":"**",
"cost":"1 gp"
},
{
"name": "Wineskin/Waterskin",
"weight":"2",
"cost": "1 gp"
},
{
"name": "Winter blanket",
"weight":"3",
"cost": "1 gp"
}
],
"armor": [
{
"name": "No Armor",
"cost": "0 gp",
"weight": "0",
"AC": "11",
"description": "No armor worn."
},
{
"name": "Padded or Quilted Armor",
"cost": "15 gp",
"weight": "10",
"AC": "12",
"description": "Created from layers of cloth; offers minimal protection, but good insulation."
},
{
"name": "Padded Overcoat",
"cost": "25 gp",
"weight": "25",
"AC":"14",
"description":"Thick overcoat made of wool and leather that provides padded armor."
},
{
"name": "Padded Vest",
"cost":"10 gp",
"weight":"10",
"AC":"12",
"description":"Thick vest made of wool and leather that provides padded armor."
},
{
"name": "Hide Armor",
"cost": "10 gp",
"weight": "30",
"AC": "13",
"description":"Armor made from animal hides."
},
{
"name": "Leather Armor",
"cost": "20 gp",
"weight": "15",
"AC": "13",
"description":"Armor made from hardened leather."
},
{
"name": "Studded Leather Armor",
"cost": "30 gp",
"weight": "25",
"AC": "14",
"description":"Leather armor reinforced with metal studs or small plates."
},
{
"name": "Ring Mail Armor",
"cost": "25 gp",
"weight": "30",
"AC": "14",
"description": "Rings of steel sewn to an undergarment."
},
{
"name": "Brigandine Armor",
"cost": "80 gp",
"weight": "30",
"AC": "15 (or 14 if no padded undergarment)",
"description": "Cloth or leather garment with small oblong steel plates riveted inside."
},
{
"name": "Chain Mail Armor",
"cost": "60 gp",
"weight": "40",
"AC": "15 (or 14 if no padded undergarment)",
"description": "Interwoven rings of metal; flexible and durable."
},
{
"name": "Scale Mail Armor",
"cost":"80 gp",
"weight":"55",
"AC":"16",
"description":"Metal scales directly woven to an undergarment for moderate protection."
},
{
"name": "Splint Mail Armor",
"cost":"100 gp",
"weight":"45",
"AC":"16",
"description":"Chain mail with small strips of thick metal interwoven for better protection."
},
{
"name": "Banded Mail Armor",
"cost": "200 gp",
"weight": "35",
"AC": "16",
"description": "Laminar armor with overlapping strips or bands of metal."
},
{
"name": "Plate Mail Armor",
"cost": "300 gp",
"weight": "50",
"AC": "17 (or 16 if no padded undergarment)",
"description":"Large plates of hard metal covering the torso, arms, and legs."
},
{
"name":"Field Plate Mail",
"cost":"500 gp",
"weight":"70",
"AC":"18 (or 17 if no padded undergarment)",
"description":"Solid pieces of plate armor with complicated sliding parts, hinges, and straps, must be custom fitted."
},
{
"name": "Full Plate Mail",
"cost": "1,500 gp",
"weight": "80",
"AC": "19",
"description":"Complete suit of plate armor providing maximum protection."
},
{
"name": "Shield",
"cost": "various",
"weight": "various",
"AC": "+1 or +1/+1 or +1/+3",
"description": "A defensive item used to block attacks."
},
{
"name": "Buckler",
"cost": "5 gp",
"weight":"2",
"AC":"+1/0",
"description": "Small shield worn on forearm that provides protection in melee combat only."
},
{
"name":"Medium Shield",
"cost":"7 gp",
"weight":"5",
"AC":"+1/+1",
"description":"A standard shield, provides protection in melee and missile combat."
},
{
"name":"Tower Shield",
"cost":"15 gp",
"weight":"12",
"AC":"+1/+3",
"description":"A large shield that provides the greatest protection against missile fire."
},
{
"name":"Piece Mail Armor",
"cost":"various",
"weight":"various",
"AC":"+1 per 2 pieces, up to +3",
"description":"Individual pieces of plate armor combined to form a set."
}
]

}
 
 
 
  function generateItemsTable(type) {
    if (!items[type] || items[type].length === 0) {
        return '<p>No items found for this type.</p>';
    }

    const firstItem = items[type][0];
    const headers = Object.keys(firstItem).filter(header => header !== 'description');

    let tableHTML = '<table border="1" style="border-collapse: collapse;">';
    
    // Generate table headers
    tableHTML += '<thead><tr>';
    headers.forEach(header => {
        tableHTML += `<th>${header.charAt(0).toUpperCase() + header.slice(1)}</th>`;
    });
    tableHTML += '</tr></thead>';

    // Generate table body
    tableHTML += '<tbody>';
    items[type].forEach(item => {
        // Main row with item details
        tableHTML += '<tr>';
        headers.forEach(header => {
            tableHTML += `<td contenteditable="true">${item[header]}</td>`;
        });
        tableHTML += '</tr>';

        // Description row (if exists)
        if (item.description) {
            tableHTML += `<tr>
                <td colspan="${headers.length}" style="color: gray; font-style: italic;">${item.description}</td>
            </tr>`;
        }
    });
    tableHTML += '</tbody></table>';

    return tableHTML;
}






