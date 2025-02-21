const items = {
"weapons": [
{
"name": "Hand Axe",
"cost": "4",
"size": "S",
"weight": "5",
"damage":"1d6",
"description": "Small, light axe, good for throwing"
},
{
"name": "Battle Axe",
"cost": "7",
"size": "M",
"weight": "7",
"damage":"1d8",
"description": "A standard axe for combat"
},
{
"name": "Great Axe",
"cost": "14",
"size": "L",
"weight": "15",
"damage":"1d10",
"description":"A larger, heavier axe for combat"
},
{
"name": "Pickaxe (Military Pick)",
"cost": "6",
"size": "S",
"weight": "4",
"damage":"1d6",
"description": "A weapon with a sharpened spike instead of a blade."
},
{
"name": "Mattock (Footman's Pick)",
"cost":"8",
"size":"M",
"weight":"6",
"damage":"1d8",
"description": "A larger pickaxe, similar to the military pick, but larger and heavier."
},
{
"name": "Dagger",
"cost": "2",
"size": "S",
"weight": "1",
"damage":"1d4",
"description": "A short, sharp blade, good for thrusting."
},
{
"name": "Defending Dagger",
"cost": "7",
"size": "S",
"weight": "2",
"damage":"1d4",
"description":"A dagger with features to help catch or defend against other blades"
},
{
"name": "Silver Dagger",
"cost":"25",
"size":"S",
"weight":"1",
"damage":"1d4",
"description":"A dagger with a silver blade, effective against lycanthropes."
},
{
"name": "Shortsword / Cutlass",
"cost": "6",
"size": "S",
"weight": "3",
"damage":"1d6",
"description":"A shorter sword, good for thrusting or slashing."
},
{
"name": "Longsword / Scimitar",
"cost": "10",
"size": "M",
"weight": "4",
"damage":"1d8",
"description": "A versatile, medium-length sword for slashing and thrusting."
},
{
"name": "Two-Handed Sword",
"cost": "18",
"size": "L",
"weight": "10",
"damage":"1d10",
"description":"A large sword requiring two hands to use."
},
{
"name": "Warhammer",
"cost": "4",
"size": "S",
"weight": "6",
"damage":"1d6",
"description":"A hammer balanced for throwing or melee."
},
{
"name": "Light Mace",
"cost": "5",
"size": "S",
"weight": "5",
"damage":"1d6",
"description":"A small, light mace, better suited for mounted combat or smaller characters."
},
{
"name": "Mace",
"cost": "6",
"size": "M",
"weight": "10",
"damage":"1d8",
"description":"A standard bludgeoning weapon with a head."
},
{
"name": "Morningstar",
"cost": "7",
"size": "M",
"weight": "7",
"damage":"1d8",
"description":"A mace with spikes or blades on the head."
},
{
"name": "Maul / Great Mace",
"cost": "10",
"size": "L",
"weight": "16",
"damage":"1d10",
"description":"Larger, two-handed versions of the hammer and mace."
},
{
"name": "Spear",
"cost": "5",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A simple weapon with a pointed end. Can be thrown one-handed, used in melee one-handed, or melee two-handed."
},
{
"name": "Fork / Trident",
"cost": "6",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A spear with a double or triple-pronged head, can be used to entangle."
},
{
"name": "Boar Spear",
"cost": "6",
"size": "M",
"weight": "5",
"damage":"1d6 (one-handed or thrown), 1d8 (two-handed)",
"description":"A spear with a crossbar to prevent impaled opponents from reaching the wielder."
},
{
"name": "Lance",
"cost": "10",
"size": "L",
"weight": "10",
"damage":"1d8",
"description":"A larger, sturdier spear, best used when mounted."
},
{
"name": "Quarterstaff",
"cost":"2",
"size":"L",
"weight":"4",
"damage":"1d6",
"description":"A long pole that functions as a headless spear."
},
{
"name": "Pole Arm",
"cost": "9",
"size": "L",
"weight": "15",
"damage":"1d10",
"description":"A long pole weapon, typically with a blade, axe, or spike on top."
},
{
"name":"Chain",
"cost":"9",
"size":"M/L",
"weight":"3",
"damage":"1d4",
"description":"A length of chain that can be used as a weapon."
},
{
"name": "Flail",
"cost":"8",
"size":"M",
"weight":"6",
"damage":"1d8",
"description":"A weapon with a weighted head attached to a handle by a chain."
},
{
"name":"Great Flail",
"cost":"12",
"size":"L",
"weight":"15",
"damage":"1d10",
"description":"A larger, two-handed version of a flail."
},
{
"name": "Whip",
"cost":"3",
"size":"M",
"weight":"2",
"damage":"1d3",
"description":"A flexible weapon good for entangling."
},
{
"name": "Club/Cudgel/Walking Staff",
"cost": "0.2",
"size": "M",
"weight": "1",
"damage":"1d4",
"description":"A simple bludgeoning weapon."
},
{
"name": "Silver Walking Stick/Staff",
"cost":"4",
"size":"M",
"weight":"1",
"damage":"1d4",
"description":"A walking stick with a silver head or handle."
},
{
"name":"Greatclub",
"cost":"3",
"size":"L",
"weight":"8",
"damage":"1d8",
"description":"A heavy, two-handed club."
},
{
"name":"Sap/Blackjack",
"cost":"1",
"size":"S",
"weight":"1",
"damage":"1d4 (subduing)",
"description":"A small, subduing weapon."
},
{
"name":"Hook",
"cost":"0.6",
"size":"S",
"weight":"1",
"damage":"1d4",
"description":"A hook-shaped weapon or implement."
},
{
"name": "Sickle",
"cost":"2",
"size":"S",
"weight":"2",
"damage":"1d6",
"description":"An inward-curved cutting weapon"
},
{
"name":"Scythe",
"cost":"7",
"size":"L",
"weight":"10",
"damage":"1d8",
"description":"A large, inward-curved cutting weapon"
},
{
"name": "Shortbow",
"cost": "25",
"size": "M",
"weight": "2",
"damage":"1d6",
"description": "A bow with a shorter stave, good for smaller characters."
},
{
"name": "Longbow",
"cost": "60",
"size": "L",
"weight": "3",
"damage":"1d8",
"description": "A bow with a longer stave for more power and range."
},
{
"name": "Light Crossbow",
"cost": "30",
"size": "M",
"weight": "7",
"damage":"1d6",
"description": "A lighter crossbow with shorter range and less damage."
},
{
"name": "Heavy Crossbow",
"cost": "50",
"size": "L",
"weight": "14",
"damage":"1d8",
"description":"A more powerful crossbow with longer range and more damage."
},
{
"name": "Hand Crossbow",
"cost":"150",
"size":"S",
"weight":"3",
"damage":"1d3",
"description":"A small, one-handed crossbow with short range and less power."
},
{
"name": "Bullet Crossbow",
"cost":"30",
"size":"M",
"weight":"7",
"damage":"N/A",
"description":"A crossbow that fires a bullet."
},
{
"name": "Sling",
"cost": "1",
"size": "S",
"weight": "*",
"damage":"1d4 with sling bullets, 1d3 with stones",
"description": "A simple tool that launches a small projectile at high speed."
},
{
"name": "Bola",
"cost": "2",
"size":"S",
"weight":"2",
"damage":"1d3",
"description":"A weapon with weights on the ends of a cord, good for entangling."
},
{
"name": "Dart / Throwing Blade",
"cost":"1",
"size":"S",
"weight":"* to ½",
"damage":"1d3",
"description":"A small, sharp projectile."
},
{
"name": "Javelin",
"cost":"1",
"size":"M",
"weight":"2",
"damage":"1d4",
"description":"A spear-like weapon designed for throwing."
},
{
"name": "Blowgun",
"cost":"2",
"size":"M",
"weight":"2",
"damage":"1d3",
"description":"A long, hollow tube that uses lung power to fire small darts."
},
{
"name": "Net",
"cost":"20",
"size":"M",
"weight":"5",
"damage":"N/A",
"description":"A weapon used to entangle."
},
{
"name": "Spade",
"cost":"2",
"size":"M",
"weight":"4",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name": "Crowbar",
"cost":"2",
"size":"M",
"weight":"5",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name":"Pitchfork",
"cost":"1",
"size":"M",
"weight":"3",
"damage":"1d6",
"description":"A tool that can be used as an improvised weapon."
},
{
"name":"Frying Pan",
"cost":"0.8",
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
"cost":"1",
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
"cost": "4"
},
{
"name": "Belt Pouch",
"weight": "*",
"cost": "1"
},
{
"name": "Bit and bridle",
"weight": "3",
"cost":"1.5"
},
{
"name":"Candles, 12",
"weight": "*",
"cost": "1"
},
{
"name":"Chalk, small bag of pieces",
"weight": "*",
"cost": "2"
},
{
"name": "Cloak",
"weight": "1",
"cost": "2"
},
{
"name": "Clothing, common outfit",
"weight": "1",
"cost": "4"
},
{
"name":"Glass bottle or vial",
"weight":"*",
"cost":"1"
},
{
"name": "Grappling Hook",
"weight": "4",
"cost": "2"
},
{
"name":"Holy Symbol",
"weight":"*",
"cost":"25"
},
{
"name":"Holy Water, per vial",
"weight":"*",
"cost":"10"
},
{
"name":"Horseshoes & shoeing",
"weight":"10",
"cost":"1"
},
{
"name":"Ink, per jar",
"weight":"½",
"cost":"8"
},
{
"name":"Iron Spikes, 12",
"weight":"1",
"cost":"1"
},
{
"name":"Ladder, 10 ft.",
"weight":"20",
"cost":"1"
},
{
"name":"Lantern",
"weight":"2",
"cost":"5"
},
{
"name":"Lantern, Bullseye",
"weight":"3",
"cost":"14"
},
{
"name":"Lantern, Hooded",
"weight":"2",
"cost":"8"
},
{
"name":"Manacles (without padlock)",
"weight":"4",
"cost":"6"
},
{
"name": "Map or scroll case",
"weight": "½",
"cost": "1"
},
{
"name": "Mirror, small metal",
"weight":"*",
"cost": "7"
},
{
"name":"Oil (per flask)",
"weight":"1",
"cost":"1"
},
{
"name":"Padlock (with 2 keys)",
"weight":"1",
"cost":"12"
},
{
"name":"Paper (per sheet)",
"weight":"**",
"cost":"1"
},
{
"name":"Pole, 10' wooden",
"weight":"10",
"cost":"1"
},
{
"name": "Quill",
"weight": "**",
"cost": "0.1"
},
{
"name":"Quill Knife",
"weight":"*",
"cost":"1"
},
{
"name": "Quiver or Bolt case",
"weight": "1",
"cost": "1"
},
{
"name":"Rope, Hemp (per 50 ft.)",
"weight":"5",
"cost":"1"
},
{
"name": "Rope, Silk (per 50 ft.)",
"weight": "2",
"cost": "10"
},
{
"name":"Sack, Large",
"weight":"*",
"cost":"1"
},
{
"name":"Sack, Small",
"weight":"*",
"cost":"0.5"
},
{
"name": "Saddle, Pack",
"weight":"15",
"cost": "5"
},
{
"name": "Saddle, Riding",
"weight":"35",
"cost": "10"
},
{
"name":"Saddlebags, pair",
"weight":"7",
"cost":"4"
},
{
"name": "Spellbook (128 pages)",
"weight":"1",
"cost": "25"
},
{
"name": "Tent, Large (ten men)",
"weight":"20",
"cost": "25"
},
{
"name": "Tent, Small (one man)",
"weight":"10",
"cost": "5"
},
{
"name": "Thieves' picks and tools",
"weight": "1",
"cost":"25"
},
{
"name":"Tinderbox, flint and steel",
"weight":"1",
"cost":"3"
},
{
"name":"Torches, 6",
"weight":"1",
"cost":"1"
},
{
"name":"Whetstone",
"weight":"1",
"cost":"1"
},
{
"name":"Whistle",
"weight":"**",
"cost":"1"
},
{
"name": "Wineskin/Waterskin",
"weight":"2",
"cost": "1"
},
{
"name": "Winter blanket",
"weight":"3",
"cost": "1"
}
],
"armor":[
{
"name": "No Armor",
"cost": 0,
"weight": 0,
"AC": 11,
"description": "Unarmored."
},
{
"name": "Padded or Quilted",
"cost": 15,
"weight": 10,
"AC": 12,
"description": "Created from layers of cloth. Often ceremonial, offers minimal protection. Good insulation for winter, but requires frequent laundering. Used as undergarment for metal armors."
},
{
"name": "Hide",
"cost": 10,
"weight": 30,
"AC": 13,
"description": "Made from cured beast hide sewn to clothing. Common in remote or barbaric areas. Hot and itchy, but offers protection similar to leather."
},
{
"name": "Leather",
"cost": 20,
"weight": 15,
"AC": 13,
"description": "Made of hardened and/or layered leather pieces sewn to a cloth undergarment. Offers flexibility and moderate protection."
},
{
"name": "Studded Leather",
"cost": 30,
"weight": 25,
"AC": 14,
"description": "Leather armor with metal studs or small plates riveted to it. Offers added protection at slight cost of mobility."
},
{
"name": "Ring Mail",
"cost": 25,
"weight": 30,
"AC": 14,
"description": "Steel rings sewn directly to a soft, supple leather undergarment. Offers great flexibility and decent protection."
},
{
"name": "Brigandine",
"cost": 80,
"weight": 30,
"AC": 15,
"description": "Cloth or leather garment lined with small steel plates, riveted to the fabric. Typically worn over padded undergarment. AC 14 and weight 20 lbs if worn without undergarment."
},
{
"name": "Chain Mail",
"cost": 60,
"weight": 40,
"AC": 15,
"description": "Interwoven metal rings worn over padded undergarment. Very flexible and durable. AC 14 and weight 30 lbs if worn without undergarment."
},
{
"name": "Scale Mail",
"cost": 80,
"weight": 55,
"AC": 16,
"description": "Metal scales woven to an undergarment. Offers flexibility and moderate protection. Includes Lamellar armor."
},
{
"name": "Splint Mail",
"cost": 100,
"weight": 45,
"AC": 16,
"description": "Chain mail with small strips of thick metal interwoven. Offers better protection than regular chain mail but heavier and less flexible."
},
{
"name": "Banded Mail",
"cost": 200,
"weight": 35,
"AC": 16,
"description": "Laminar armor with overlapping metal strips. Includes vambraces, greaves, and/or armored sleeves. Lighter than other armors in its category but may be more difficult to maintain."
},
{
"name": "Plate Mail",
"cost": 300,
"weight": 50,
"AC": 17,
"description": "Large metal plates covering torso, arms, and legs, attached to chain mail. Worn over padded undergarment. AC 16 and weight 40 lbs if worn without undergarment."
},
{
"name": "Field Plate Mail",
"cost": 500,
"weight": 70,
"AC": 18,
"description": "Solid plate armor pieces with sliding parts, hinges, and straps. Small chain mail pieces cover joints. Must be custom fitted. AC 17 and weight 60 lbs if worn without undergarment."
},
{
"name": "Full Plate Mail",
"cost": 1500,
"weight": 80,
"AC": 19,
"description": "Superior design of field plate armor. Covers wearer more fully, generally without chain mail. Deflects weapon strikes from vulnerable joints. -1 penalty to attack rolls due to limited mobility. Requires assistance to put on, takes at least 1 turn to don."
}
],

"clothing":[
{"name": "Baldric, Belt Sash", "cost": "0.8", "weight": 1, "description": "A Baldric or Belt Sash is a belt worn across the torso with attachment for a scabbard. Typically this rests the weapon at the hip, but a scabbard could easily be attached to the back of the baldric for an over-the-shoulder draw. Small pouches or weapon scabbards may be attached to a baldric strap. This includes Bandoleers."},
{"name": "Belt", "cost": "0.6", "weight": "*", "description": "A Belt is a strip of leather worn around the waist to help hold up a person's trousers or pants. A scabbard could also be hung from it."},
{"name": "Belt Hook or Ring", "cost": "0.1", "weight": 1, "description": "A Hook or Ring is a weapon attachment for a belt or strap, to hold an axe, hammer, or mace. It is effectively a scabbard for a hafted weapon."},
{"name": "Belt, Money Belt", "cost": "4", "weight": 1, "description": "A Money belt is a broad leather belt including one or two slim, hidden pouches for hiding coins or other small goods It has a maximum capacity of about 50 coins."},
{"name": "Belt, Weapon Belt", "cost": "1", "weight": 2, "description": "A Weapon belt is a large, heavy belt designed to distribute the weight of a weapon across the hips, while holding it in position for easy retrieval."},
{"name": "Bracers", "cost": "0.6", "weight": "½", "description": "Bracers are strips of leather that wrap around the lower arm between the elbow and wrist, providing protection to archers from the bowstring striking the inside of the lower arm while firing a bow."},
{"name": "Bustle", "cost": "3", "weight": 1, "description": "A Bustle is similar to a skirt and actually fits under a skirt to give it a fuller shape."},
{"name": "Corset", "cost": "1", "weight": 1, "description": "A Corset is a support garment commonly worn to hold and train the torso into a desired shape. It is usually either boned cloth or leather."},
{"name": "Corset, Leather", "cost": "5", "weight": 2, "description": ""},
{"name": "Girdle", "cost": "1", "weight": 1, "description": "A Girdle is a strip of cloth that is wrapped and tied around a person's midsection and provides some relief to back pain from riding in a saddle over long distances. A Gorget is a band of cloth worn around the neck without the knot showing."},
{"name": "Gorget", "cost": "3", "weight": 2, "description": ""},
{"name": "Sash", "cost": "0.2", "weight": "*", "description": "A Sash is a cloth or silk version of a belt that is usually used to hold a robe, surcoat, or toga tightly to the body. A Scabbard covers the blade of a knife or sword, and may be readily attached to a belt or harness to safely carry the weapon."},
{"name": "Sash, Silk", "cost": "10", "weight": "*", "description": ""},
{"name": "Scabbard Suspenders", "cost": "0.7", "weight": "½", "description": ""},
{"name": "Scabbard, Medium", "cost": "0.3", "weight": 1, "description": ""},
{"name": "Scabbard, Small", "cost": "1 sp", "weight": "*", "description": ""},
{"name": "Suspenders / Braces", "cost": "4 sp", "weight": "*", "description": "Suspenders/Braces are strips of cloth that connect to trousers or pants and go over the shoulders to hold the trousers/pants up."},
{"name": "Cap", "cost": "0.1", "weight": "*", "description": "A Cap is a soft fabric headcover with no real shape, usually without a brim. Woolen Caps are the traditional beanie cap."},
{"name": "Cap, Woolen", "cost": "0.2", "weight": "*", "description": "A Cap is a soft fabric headcover with no real shape, usually without a brim. Woolen Caps are the traditional beanie cap."},
{"name": "Hat, Cloth", "cost": "0.5", "weight": 1, "description": "A Hat is a shaped head covering with a brim. A Headband is a leather band to keep the wearer's hair out of their eyes."},
{"name": "Hat, Fur", "cost": "1", "weight": 2, "description": "A Hat is a shaped head covering with a brim. A Headband is a leather band to keep the wearer's hair out of their eyes."},
{"name": "Hat, Straw", "cost": "0.02", "weight": 1, "description": "A Hat is a shaped head covering with a brim. A Headband is a leather band to keep the wearer's hair out of their eyes."},
{"name": "Headband", "cost": "0.07", "weight": "*", "description": "A Headband, Tooled is a finely tooled and decorated version of the headband."},
{"name": "Headband, Tooled", "cost": "0.2", "weight": "*", "description": "A Headband, Tooled is a finely tooled and decorated version of the headband."},
{"name": "Hood or Cowl, Wool or Linen", "cost": "0.2", "weight": 1, "description": "A Hood is a detachable piece of clothing to wear with a cape that covers the wearers head. A Cowl is a hood with a very short cape piece that covers the shoulders."},
{"name": "Scarf", "cost": "0.5", "weight": 1, "description": "A Scarf is a square of cloth that is folded on the diagonal and then tied under the wearer's chin."},
{"name": "Turban", "cost": "0.3", "weight": 2, "description": "A Turban is a length of cloth that is wrapped around the wearer's head, usually in arid or desert settings. During dust storms, a portion of the turban can be brought down over the wearer's eyes and mouth to prevent sand from getting in the wearer's face."},
{"name": "Veil, Silk", "cost": "1", "weight": "*", "description": "A Veil is a short piece of cloth that is hung over the wearer's face for religious ceremonies or to cover a disfigurement. A Thief may want to wear one as part of a disguise."},
{"name": "Wig", "cost": "1", "weight": 1, "description": "A Wig is a close-fitting cloth with either human or animal hair that is styled, and many times worn by members of government or law. A Thief may try to style one as part of a disguise."},
{"name": "Cape, Full", "cost": "0.7", "weight": 1, "description": "A Full Cape is a section of cloth that extends from the neck to thefloor, and is attached at the neck by a brooch or clasp. A hood can be attached to cover the wearer's head during inclement weather or to hide one's appearance."},
{"name": "Cape, Half", "cost": "0.4", "weight": "½", "description": "A Half Cape is a section of cloth that extends from the neck to the waist, and is attached at the neck by a brooch or clasp. A hood can be attached to cover the wearer's head during inclement weather or to hide one's appearance."},
{"name": "Cloak, Adventurers", "cost": "2", "weight": 1, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. Adventurer's Cloaks are full-length with a long hood that can be used to stash valuables."},
{"name": "Cloak, Fur", "cost": "4", "weight": 2, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. Fur Cloaks are full length hooded cloaks made of tanned furs."},
{"name": "Cloak, Fur trimmed", "cost": "10", "weight": 1, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. Fur Trimmed Cloaks are plain cloaks, with strips of fur trimming the edges. They are also usually more decorated and colorful."},
{"name": "Cloak, Leather", "cost": "4", "weight": 2, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. Leather Cloaks are full length hooded cloaks made of leather instead of wool."},
{"name": "Cloak, Plain", "cost": "0.5", "weight": 1, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. A Plain Cloak can be either short or full-length, and has a closer-fitting hood."},
{"name": "Cloak, Traveling", "cost": "0.8", "weight": 1, "description": "A Cloak is similar to a cape, but includes a hood to cover the wearer's head. Traveling Cloaks are half-length and have a slit to allow the cloak to be draped over either side of a rider's horse. "},
{"name": "Coat, Long", "cost": "0.8", "weight": 1, "description": "A Coat, Long is a long sleeved coat that falls to about the mid-shins, and is made of wool, felt, serge or canvas."},
{"name": "Coat, Leather", "cost": "2", "weight": 1, "description": "Leather Coats are the same cut, but made of soft leather."},
{"name": "Coat, Fur", "cost": "8", "weight": 2, "description": "Fur Coats are full length coats, well tanned with the fur on the outside."},
{"name": "Jacket", "cost": "1", "weight": 1, "description": "A Jacket is a long-sleeved covering for a shirt. It can either be pulled over the head or buttoned."},
{"name": "Jacket, Leather", "cost": "2", "weight": 1, "description": "A Jacket is a long-sleeved covering for a shirt. It can either be pulled over the head or buttoned."},
{"name": "Surcoat", "cost": "6 sp", "weight": "*", "description": "A Surcoat is a section of cloth with a hole cut out that fits over the wearer's head. It is generally worn by knights as a cover over armor and may have the knight's heraldry embroidered upon it, though an embroidered version will cost twice as much."},
{"name": "Tabards", "cost": "2", "weight": "*", "description": "A Tabard is similar to a Surcoat, but is meant for royal courts with even fancier embroidery that is related to the king's heraldry."},
{"name": "Toga", "cost": "1", "weight": 1, "description": "A Toga is a lightweight length of material that is wrapped around the body and is draped over one shoulder."},
{"name": "Apron, Canvas", "cost": "1", "weight": 1, "description": "An Apron is a loose piece of material that has a loop that goes over the wearer's head with two long strings at the sides that are either tied in the back or are wrapped around the waist and tied at the front.Canvas is used for covering where the user isn't exposed to heat very often. Tavern keeps, cooks, butchers, potters, and artists are the most common users. "},
{"name": "Apron, Leather", "cost": "2", "weight": 2, "description": "An Apron is a loose piece of material that has a loop that goes over the wearer's head with two long strings at the sides that are either tied in the back or are wrapped around the waist and tied at the front. Leather is used where there is a chance of something that could go through a canvas apron for such professions as smithies (any), coopers (barrel makers), armorers, weapon makers, and masons."},
{"name": "Blouse, Linen", "cost": "0.1", "weight": "*", "description": "A Blouse is a loose-fitting shirt buttoned down the front. This is the upper clothing worn by many commoners and craftspeople."},
{"name": "Breeches", "cost": "0.1", "weight": "*", "description": "Breeches are short pants ending just below the knee. A Doublet is a long-sleeved jacket that is fitted down to the waist."},
{"name": "Doublet", "cost": "1", "weight": 1, "description": ""},
{"name": "Gown or Dress, common", "cost": "1.2", "weight": 1, "description": ""},
{"name": "Hose", "cost": "5 sp", "weight": "*", "description": "A Hose is a tight-fitting footed legging that comes up to the crotch."},
{"name": "Hose Supporter/Garter", "cost": "0.5", "weight": "**", "description": "Hose Supporters comes in two types; a garter that fits around the leg, and a garter belt that fits around the body and has several thongs hanging down that attach to the top of the hose."},
{"name": "Jerkin, Leather", "cost": "2", "weight": 1, "description": "A Jerkin is a sleeveless jacket that may be worn over a doublet."},
{"name": "Jerkin, Wool or Linen", "cost": "1", "weight": "*", "description": "A Jerkin is a sleeveless jacket that may be worn over a doublet."},
{"name": "Leggings", "cost": "0.9", "weight": "*", "description": "Leggings are tight cloth or leather pants that use a heavier material than hose."},
{"name": "Leggings, Leather", "cost": "2", "weight": "*", "description": ""},
{"name": "Loincloth", "cost": "0.02", "weight": "**", "description": "A Loincloth is usually made from leather or animal skins and just covers the wearer's private parts. It is mostly used by barbarians, ogres, and trolls."},
{"name": "Robe, Common", "cost": "0.9", "weight": 2, "description": "A Robe is a garment that extends to the floor, and is usually worn by royalty, Magic-Users, and Clerics. The Common version is not adorned and is used for daily wear."},
{"name": "Robe, Embroidered", "cost": "10", "weight": 3, "description": "A Robe is a garment that extends to the floor, and is usually worn by royalty, Magic-Users, and Clerics. An Embroidered robe is for formal occasions. "},
{"name": "Robe, Lounging", "cost": "2", "weight": 2, "description": "A Robe is a garment that extends to the floor, and is usually worn by royalty, Magic-Users, and Clerics. The Lounging version isn't made for heavy use, and is usually of a light material."},
{"name": "Tunic", "cost": "0.8", "weight": "*", "description": "A Tunic is a loose garment draped over the shoulders and going at least to the wearer's knees if not the floor. A Shirt or Chemise is a loose-fitting garment similar to a blouse that is pulled over the head."},
{"name": "Shirt or Chemise", "cost": "0.8", "weight": "*", "description": ""},
{"name": "Shirt or Chemise, Silk", "cost": "15", "weight": "*", "description": ""},
{"name": "Skirt or Kilt", "cost": "0.8", "weight": "*", "description": "A Skirt or Kilt is a form of garment that covers the wearers mid-section and extends at least to the knees. Skirts are usually floor length. Kilts are a kind of skirt specifically worn by men. The pattern of the plaid on a kilt is an indication of the tribe that a man is from."},
{"name": "Skirt or Kilt, Leather", "cost": "2", "weight": "*", "description": "A Skirt or Kilt is a form of garment that covers the wearers mid-section and extends at least to the knees. Skirts are usually floor length."},
{"name": "Trousers or Trews", "cost": "0.8", "weight": "*", "description": "Trousers or Trews are garments with two legs and covering the waist. Trousers are looser-fitting than leggings. Trews are tighter fitting than trousers but still looser than leggings and are typically plaid like kilts. The plaid pattern is again an indication of the tribe to which the wearer belongs."},
{"name": "Trousers or Trews, Leather", "cost": "2", "weight": "*", "description": "Trousers or Trews are garments with two legs and covering the waist."},
{"name": "Vest, Cloth w/Pockets", "cost": "0.8", "weight": "*", "description": "Vests are sleeveless garments worn over a shirt."},
{"name": "Vest, Fur / Leather", "cost": "2", "weight": "*", "description": "Vests are sleeveless garments worn over a shirt."},
{"name": "Boots, High", "cost": "2", "weight": 2, "description": "Boots are a kind of shoe with a top that covers the ankle or higher. High boots go up to the wearer's knee, but the upper portion is loose. Since boots have a harder sole that the leather is attached to, they make a lot of noise on tile floors. A Thief trying to Move Silently while wearing them has a 10% penalty."},
{"name": "Boots,Swash-topped", "cost": "2", "weight": 2, "description": "Boots are a kind of shoe with a top that covers the ankle or higher. Swash-topped boots go up to the wearer's knee, but the upper portion is loose and have a section that is folded over from the top. Since boots have a harder sole that the leather is attached to, they make a lot of noise on tile floors. A Thief trying to Move Silently while wearing them has a 10% penalty. "},
{"name": "Boots, Low", "cost": "1", "weight": 1, "description": "Boots are a kind of shoe with a top that covers the ankle or higher. Low boots come up just over the wearer's ankles. Since boots have a harder sole that the leather is attached to, they make a lot of noise on tile floors. A Thief trying to Move Silently while wearing them has a 10% penalty."},
{"name": "Boots, Riding", "cost": "3", "weight": 2, "description": "Boots are a kind of shoe with a top that covers the ankle or higher. Riding boots are knee-high with a tight-fitting upper portion. Since boots have a harder sole that the leather is attached to, they make a lot of noise on tile floors. A Thief trying to Move Silently while wearing them has a 10% penalty."},
{"name": "Foot wraps", "cost": "0.03", "weight": "*", "description": "Foot wraps are long pieces of cloth that are wrapped around the feet to prevent cuts or scrapes while walking in the cold or over rough ground, and are usually worn by peasants. Thieves could use these with a bonus of 10% when Moving Silently. "},
{"name": "Sandals", "cost": "0.05", "weight": "*", "description": "Sandals are hard-soled footwear with leather straps to fasten them."},
{"name": "Shoes", "cost": "0.8", "weight": "½", "description": "Shoes are footwear that doesn't go above the user's ankles. They have a hard sole and can be noisy on tiled floors."},
{"name": "Shoes, Moccasins", "cost": "2", "weight": "*", "description": " Moccasins have a soft sole which allow a Thief a 5% better chance of Moving Silently."},
{"name": "Slippers", "cost": "1.5", "weight": "*", "description": "Slippers are like moccasins without a back portion, but there is a chance that they could fall off while walking or running. "},
{"name": "Snowshoes", "cost": "20", "weight": 2, "description": "Snowshoes are a loop of wood with a mesh of leather thongs across it. It is tied onto a pair of shoes to allow the wearer to walk on top of snow, but at 1/3 of their movement rate."},
{"name": "Gloves", "cost": "0.7", "weight": "**", "description": "Gloves are hand coverings with each finger separated. Use a -2 modifier to Dexterity if a character is wearing gloves and tries to do an action requiring a DEX roll."},
{"name": "Gloves, Fur Lined", "cost": "4", "weight": "*", "description": "Gloves are hand coverings with each finger separated. Use a -2 modifier to Dexterity if a character is wearing gloves and tries to do an action requiring a DEX roll."},
{"name": "Mittens", "cost": "0.3", "weight": "**", "description": " Mittens are hand coverings where the fingers are all together. Use a -4 modifier to Dexterity if a character is wearing mittens and attempts an action involving that ability score."}
],
"packs":[

{"name": "Bag Option 1", 
"cost": 7, 
"weight": 2.2, 
"description": "Backpack (normal or Halfling), Weapon Belt, Large Pouch. Capacity: 45 lb (35 lb for Halflings."},
{"name": "Bag Option 2", 
"cost": 11.8, 
"weight": 3.4, 
"description": "Oilskin Satchel, Baldric, Weapon Belt, Large Pouch, Belt Pouch(2). Capacity: 24 lb."
},
{"name": "Bag Option 2", 
"cost": 11.8, 
"weight": 3.4, 
"description": "Oilskin Satchel, Baldric, Weapon Belt, Large Pouch, Belt Pouch(2). Capacity: 24 lb."
},
{
"name": "Adventurer Pack 2",
"cost": 10.0,
"weight": 12.0,
"description": "Glass bottle; Iron Spikes, 12; Pole, 10 ft wooden; Map or scroll case; Mirror, small metal. Ready for anything."
},
{
"name": "Cleric Pack",
"cost": 60.0,
"weight": 18.3,
"description": "Bandages (10), Holy symbol, holy water (1), parchment (2), ink and quill, 1 week rations, tinderbox, waterskin. Protect and spread the faith."
},
{
"name": "Fighter Pack",
"cost": 21.0,
"weight": 22.8,
"description": "Bandages (5), Oil, cooking pot, 1 week rations, 3 large sacks, tinderbox, torches (6), waterskin, whetstone. Camp and battle basics."
},
{
"name": "Magic-User Pack",
"cost": 37.0,
"weight": 18.7,
"description": "Writing ink and quill, parchment (5), scroll case(2), spellbook*, hand mirror, 1 week rations, Torches (6), Tinderbox, glass vial. Scholar & Spellcaster. *The spell book is free for beginning Magic-Users; weight figure assumes a travel spellbook (½ lb)."
},
{
"name": "Thief Pack",
"cost": 58.0,
"weight": 31.2,
"description": "Candles (12), crowbar, grappling hook, mallet, iron spikes (12), 1 wk rations, large sack, small lens, Thieves' tools, tinderbox, waterskin, whetstone. Tools of the trade."
},
{
"name": "Dungeon Mapper",
"cost": 17.0,
"weight": 1.2,
"description": "10 sheets paper, ink, quill & quill knife, writing board, bag of chalk pieces."
},
{
"name": "Camp Cook Kit",
"cost": 24.0,
"weight": 23.0,
"description": "Iron pan, iron pot, Fire grate, mess kit, common spices, dried meat (2lb), standard rations (5 days), teapot."
}
],

"containers":[
{
"name": "Beltpouch",
"cost": 1.0,
"weight": 0.0,
"description": "Volume held: 1/4 cu ft. Weight held: 2 pounds."
},
{
"name": "Large Pouch or Purse",
"cost": 2.0,
"weight": 0.0,
"description": "Volume held: 1/2 cu ft. Weight held: 5 pounds. Pouches are small bags or pockets attached to a belt, tucked in a pocket, or hung from a cord. "
},
{
"name": "Backpack, Adventurer's",
"cost": 4.0,
"weight": 0.0,
"description": "Volume held: 3 cu ft. Weight held: 40 pounds. Backpacks are assumed to be of heavy canvas or leather."
},
{
"name": "Backpack, Halfling",
"cost": 4.0,
"weight": 0.0,
"description": "Volume held: 1 1/2 cu ft. Weight held: 30 pounds. Backpacks are assumed to be of heavy canvas or leather."
},
{
"name": "Backpack, Knapsack",
"cost": 3.0,
"weight": 0.0,
"description": "Volume held: 2 cu ft. Weight held: 25 pounds. A Knapsack is a small cloth backpack, basically a sack with shoulder straps."
},
{
"name": "Backpack, Wicker",
"cost": 0.07,
"weight": 0.0,
"description": "Volume held: 2 cu ft. Weight held: 15 pounds. A Wicker backpack is essentially an inexpensive and not very sturdy basket with shoulder straps."
},
{
"name": "Pack Vest",
"cost": 10.0,
"weight": 1.0,
"description": "Volume held: 2 cu ft. Weight held: 15 pounds. A Packvest is a leather vest set with multiple pouches and pockets on the front, sides, and inside, and a thin pouch set into the back. While it does not have the capacity of a full backpack, it is less cumbersome, fitting closer to the body and putting various tools and items within easy reach."
},
{
"name": "Satchel / Haversack",
"cost": 0.6,
"weight": 0.0,
"description": "Volume held: 1 cu ft. Weight held: 10 pounds. A Satchel or Haversack is a cloth or canvas shoulder- slung bag, designed to rest on the hip or slung behind. Generally a satchel is easier to access than a backpack, but displaces most hip weapons (anything larger than a dagger or handaxe). It is not uncommon to attach a Haversack to a Baldric, giving it a sturdier and more useful strap. These bags are large enough to hold a fair- sized book (such as a spellbook), making them popular among Magic-Users. These bags may be built with internal compartments. The Oilskin Satchel is made from waterproofed leather, providing better protection to its contents."
},
{
"name": "Satchel, Oilskin",
"cost": 6.0,
"weight": 0.0,
"description": "Water resistant. Volume held: 1 cu ft. Weight held: 15 pounds. A Satchel or Haversack is a cloth or canvas shoulder- slung bag, designed to rest on the hip or slung behind. Generally a satchel is easier to access than a backpack, but displaces most hip weapons (anything larger than a dagger or handaxe). It is not uncommon to attach a Haversack to a Baldric, giving it a sturdier and more useful strap. These bags are large enough to hold a fair- sized book (such as a spellbook), making them popular among Magic-Users. These bags may be built with internal compartments. The Oilskin Satchel is made from waterproofed leather, providing better protection to its contents."
},
{
"name": "Bag, Cloth",
"cost": 0.04,
"weight": 0.0,
"description": "Volume held: 1/4 cu ft. Weight held: 5 pounds."
},
{
"name": "Bag, Cloth, tiny",
"cost": 0.02,
"weight": 0.0,
"description": "Volume and weight held not specified."
},
{
"name": "Sack, Large",
"cost": 1.0,
"weight": 0.0,
"description": "Volume held: 4 cu ft. Weight held: 40 pounds. Sacks are made from burlap (a rough hemp fiber material), cotton, or leather, and are basically a tube- shaped.  Burlap is used mostly for large grains and small vegetables like corn (maize), beans, peppers, and hard- rind fruits like apples, oranges, and other citrus. Cotton material is used for small grains like rice, oats, or barley and for dry powdery material like flour and sugar."
},
{
"name": "Sack, Large Leather",
"cost": 2.0,
"weight": 0.0,
"description": "Volume held: 4 cu ft. Weight held: 60 pounds. Leather will provide a waterproof protection for dry powdery material and anything else stored in a sack. "
},
{
"name": "Sack, Small",
"cost": 0.5,
"weight": 0.0,
"description": "Volume held: 2 cu ft. Weight held: 20 pounds. Sacks are made from burlap (a rough hemp fiber material), cotton, or leather, and are basically a tube- shaped.  Burlap is used mostly for large grains and small vegetables like corn (maize), beans, peppers, and hard- rind fruits like apples, oranges, and other citrus. Cotton material is used for small grains like rice, oats, or barley and for dry powdery material like flour and sugar."
},
{
"name": "Sack, Small Leather",
"cost": 1.0,
"weight": 0.0,
"description": "Volume held: 2 cu ft. Weight held: 30 pounds. Leather will provide a waterproof protection for dry powdery material and anything else stored in a sack. "
},
{
"name": "Saddle Bags, Large",
"cost": 4.0,
"weight": 7.0,
"description": "Volume held: 1 cu ft. Weight held: 10 pounds. Saddle bags are leather bags designed to fit over the back of a riding saddle and provide some storage on a ridden animal. The bags are tied to the saddle to prevent them from falling off. A person can throw them over their shoulder to make sure any valuables that are in the saddlebags are not stolen while the rider is off their mount. The size is in relation to the size of the riding animal."
},
{
"name": "Saddle Bags, Small",
"cost": 3.0,
"weight": 5.0,
"description": "Volume held: 1/2 cu ft. Weight held: 5 pounds. Saddle bags are leather bags designed to fit over the back of a riding saddle and provide some storage on a ridden animal. The bags are tied to the saddle to prevent them from falling off. A person can throw them over their shoulder to make sure any valuables that are in the saddlebags are not stolen while the rider is off their mount. The size is in relation to the size of the riding animal."
}
],
"tools": [
{
"name": "Bell, small",
"cost": 1.0,
"weight": 0.0,
"description": "A small bell."
},
{
"name": "Bellows",
"cost": 10.0,
"weight": 3.0,
"description": "A Bellows is a fire tending tool that is about a foot long with a leather air bag between two wooden handles. When the handles are squeezed together, air will blow out the nozzle of the air bag, increasing the heat of a fire as well as clearing dust or ash."
},
{
"name": "Block and tackle",
"cost": 5.0,
"weight": 2.0,
"description": "A Block and tackle is a system of two or more pulleys with a rope threaded between them to reduce the weight of loads that are being lifted. The effective weight is reduced by ¼ with one pulley (lifting at load up 50 feet with 100 feet of rope), ½ with two pulleys (with 200 feet of rope), and by with three pulleys (with 400 feet of rope).⅔"
},
{
"name": "Bucket",
"cost": 0.5,
"weight": 2.0,
"description": "Holds up to 5 gallons. Weight when full: 15 pounds."
},
{
"name": "Canvas",
"cost": 0.4,
"weight": 5.0,
"description": "Per square yard."
},
{
"name": "Chain, Heavy",
"cost": 4.0,
"weight": 10.0,
"description": "Per foot of heavy chain."
},
{
"name": "Chain, Light",
"cost": 3.0,
"weight": 5.0,
"description": "Per foot of light chain."
},
{
"name": "Chisel",
"cost": 2.0,
"weight": 2.0,
"description": "A tool for carving or cutting hard materials."
},
{
"name": "Crowbar",
"cost": 2.0,
"weight": 10.0,
"description": "A Crowbar a bar of iron that curves at one end in a kind of hook shape. The end itself is flattened with a narrow split on the tip to help pull nails out of a board. The other end is flattened without a split to help pry one piece of wood from another or force open a jammed or locked door, or heavy objects such as a stone coffin lid. In game terms, add one to the die roll range when forcing a door with this tool. For example, a character with 16 Strength would open doors on 1-3 on 1d6; with a crowbar, the range becomes 1-4 on 1d6."
},
{
"name": "Fishing net",
"cost": 4.0,
"weight": 1.0,
"description": "10 feet square."
},
{
"name": "Grease Pot",
"cost": 5.0,
"weight": 5.0,
"description": "Grease is a thick, slippery lubricant made from made from animal fat, or oil from the ground. It is sold in a tin or jar, and is useful for cooking or lubrication. Not all forms are flammable or edible."
},
{
"name": "Hammer or Mallet",
"cost": 3.0,
"weight": 2.0,
"description": "A tool for striking or pounding."
},
{
"name": "Hand Drill",
"cost": 10.0,
"weight": 3.0,
"description": "A tool for making holes."
},
{
"name": "Hourglass",
"cost": 25.0,
"weight": 3.0,
"description": "Measures one hour."
},
{
"name": "Ladder",
"cost": 1.0,
"weight": 20.0,
"description": "10 feet long."
},
{
"name": "Marbles, Bag",
"cost": 0.8,
"weight": 1.0,
"description": "A bag of marbles."
},
{
"name": "Needle, sewing",
"cost": 0.5,
"weight": 0.0,
"description": "A small needle for sewing."
},
{
"name": "Paint, per gallon",
"cost": 1.5,
"weight": 4.0,
"description": "Cost ranges from 1-2 gp per gallon."
},
{
"name": "Paint, small pot",
"cost": 0.2,
"weight": 1.0,
"description": "A small pot of paint."
},
{
"name": "Pick Axe, Mining",
"cost": 4.0,
"weight": 7.0,
"description": "A Pick Axe is a 'T' shaped tool with a wooden handle, and a combination metal hammer and pick at the end. It is designed for breaking up stones and soil or prying things open. It is also used for prospecting or ice climbing. It deals 1d3 points of damage if used as a weapon."
},
{
"name": "Pliers",
"cost": 1.0,
"weight": 1.0,
"description": "A hand tool used to hold objects firmly."
},
{
"name": "Pole, 10 ft Collapsing",
"cost": 50.0,
"weight": 15.0,
"description": " Collapsing Pole is a handy invention consisting of ten 1- foot wood sections, and two metal end caps. Each piece is threaded so that the pieces can be combined to make a pole of any needed length. Collapsing poles from the same maker may be combined for longer reach.  "
},
{
"name": "Pole, 10 ft wooden",
"cost": 1.0,
"weight": 10.0,
"description": "A standard 10-foot wooden pole."
},
{
"name": "Scissors",
"cost": 0.5,
"weight": 1.0,
"description": "A cutting instrument."
}
],
"dungeon":[
{
"name": "Candles",
"cost": 1.0,
"weight": 0.0,
"description": "12 candles. A Candle will shed light over a 5 foot radius, with dim light extending a further 5 feet. A normal candle will burn about 3 turns per inch of height."
},
{
"name": "Chalk",
"cost": 2.0,
"weight": 0.0,
"description": "Small bag of chalk pieces. Chalk is useful for 'blazing a trail' through a dungeon or ruin to ensure that the adventurers can find their way back out again."
},
{
"name": "Charcoal sticks",
"cost": 1.0,
"weight": 0.0,
"description": "Sticks of charcoal for writing or drawing. Charcoal consists of pieces of carbonized wood, which can be used like chalk (making black markings), or may be added to tinder."
},
{
"name": "Coal Keeper",
"cost": 2.0,
"weight": 1.0,
"description": "A small, lined ceramic pot designed to hold and keep a small coal or ember lit for several hours. While this will resist moisture and wind, immersion will extinguish the coal immediately."
},
{
"name": "Cord/Strap",
"cost": 0.1,
"weight": 1.0,
"description": "Per 3 feet of cord or strap. A short length of thin rope, leather, or a short belt for tying something to an arm, leg, or other accessories. This can secure a scabbard to an arm or leg, or attach a pouch to a baldric, or the strap of a backpack."
},
{
"name": "Flask, Silver",
"cost": 20.0,
"weight": 1.0,
"description": "A silver flask for holding liquids. Flasks are metal containers with stoppers that hold between 8 and 12 oz of liquid."
},
{
"name": "Flask, Steel",
"cost": 2.0,
"weight": 1.0,
"description": "A steel flask for holding liquids. Flasks are metal containers with stoppers that hold between 8 and 12 oz of liquid."
},
{
"name": "Iron Spikes",
"cost": 1.0,
"weight": 1.0,
"description": "12 iron spikes. Iron Spikes are useful for spiking doors closed (or spiking them open) and may be used as crude pitons in appropriate situations."
},
{
"name": "Jar or Bottle, Ceramic",
"cost": 0.4,
"weight": 1.0,
"description": "A ceramic container for liquids or small items. Jars include lids or stoppers and have a volume of 8-16 oz (double or halve price for larger/smaller volumes). They are good for wet or dry materials, but prone to breakage."
},
{
"name": "Jar or Bottle, Glass",
"cost": 1.2,
"weight": 1.0,
"description": "A glass container for liquids or small items. Jars include lids or stoppers and have a volume of 8-16 oz (double or halve price for larger/smaller volumes). They are good for wet or dry materials, but prone to breakage."
},
{
"name": "Ladder, Rope",
"cost": 3.0,
"weight": 10.0,
"description": "25 feet of rope ladder. A Rope Ladder is a regularly knotted rope, or two lengths of rope, strung with rungs, with a single line at top for a hook. It typically has an 850 lb capacity."
},
{
"name": "Lantern, Bullseye",
"cost": 14.0,
"weight": 3.0,
"description": "A lantern with a focused beam of light. A Lantern (Bulls-eye) is similar to a hooded lantern, only it is closed on all but one lensed side. This lamp projects light up to 30 feet, and 30 feet at its widest, and includes a shutter."
},
{
"name": "Lantern, Hooded",
"cost": 8.0,
"weight": 2.0,
"description": "A lantern with an adjustable hood. A Hooded Lantern has a shutter mechanism to close off the light and prevent it from being seen."
},
{
"name": "Lens, small",
"cost": 8.0,
"weight": 0.0,
"description": "A small magnifying lens. A Lens enlarges the image of an object; a bare lens is smaller and is limited to 2-3x magnification. Both can be used to attempt to start fires using strong sunlight."
},
{
"name": "Magnifying glass",
"cost": 100.0,
"weight": 0.0,
"description": "A tool for viewing small objects or text. A Magnifying Glass consists of a large lens held in a frame with a handle. It is of higher quality with a minimum of 5x magnification. Can be used to attempt to start fires using strong sunlight."
},
{
"name": "Mirror, small metal",
"cost": 7.0,
"weight": 0.0,
"description": "A small metal mirror. A Mirror is useful in a dungeon environment for many reasons. For instance, it is the only way to look at a medusa without being turned to stone. Mirrors are also useful for looking around corners, and can be used outdoors to send signals using reflected sunlight."
},
{
"name": "Mirror, small silver",
"cost": 25.0,
"weight": 0.0,
"description": "A small silver mirror. A Mirror is useful in a dungeon environment for many reasons. For instance, it is the only way to look at a medusa without being turned to stone. Mirrors are also useful for looking around corners, and can be used outdoors to send signals using reflected sunlight."
},
{
"name": "Paper or Parchment",
"cost": 1.0,
"weight": 0.0,
"description": "Per sheet of paper or parchment. Paper of decent quality, refined papyrus, cotton, cloth, or wood pulp, or parchment – depending on the setting & availability."
},
{
"name": "Fine Paper or Vellum",
"cost": 4.0,
"weight": 0.0,
"description": "Per sheet of fine paper or vellum. High quality paper and vellum is not necessarily more durable, but will take ink better, and is required for magic writing (both books and scrolls)."
},
{
"name": "Rope, Hemp",
"cost": 1.0,
"weight": 5.0,
"description": "Per 50 feet of hemp rope. Hemp Rope is ½ inch in diameter and has a breaking strength of 1,600 pounds. A safe working load for a rope is normally one-quarter of the breaking strength. One or more knots in a rope cut the breaking strength in half."
},
{
"name": "Rope, Silk",
"cost": 10.0,
"weight": 2.0,
"description": "Per 50 feet of silk rope. Silk Rope is about 3/8 inch in diameter and has a breaking strength of 1,600 pounds, although it weighs considerably less than hemp rope. The notes regarding rope strength given for hemp rope apply here also."
},
{
"name": "String/Twine",
"cost": 0.2,
"weight": 1.0,
"description": "100 feet of string or twine. String / Twine holds up to 30 lb."
},
{
"name": "Wax, beeswax",
"cost": 0.3,
"weight": 1.0,
"description": "A block of beeswax. Wax, beeswax is a softer wax, useful for making impressions, hasty patches, stuffing in ears, etc."
}
],
"provisions":[
{
"name":"Rations, Dry, one week",
"weight":"14",
"cost":"10"
},
{
"name": "Pickled fish, 5 gal barrel",
"cost": 3.0,
"weight": 30
},
{
"name": "Pickled vegetables, quart",
"cost": 1.0,
"weight": 1
},
{
"name": "Sugar",
"cost": 1.0,
"weight": 1
},
{
"name": "Fruit, dried",
"cost": 0.2,
"weight": 1
},
{
"name": "Nuts",
"cost": 1.0,
"weight": 1
},
{
"name": "Fresh fruits, common (per lb)",
"cost": 1.0,
"weight": 1
},
{
"name": "Fresh fruits, rare/imported (per lb)",
"cost": 10.0,
"weight": 1
},
{
"name": "Candied fruit/herbs (oz)",
"cost": {
"min": 0.5,
"max": 5.0
},
"weight": 0
},
{
"name": "Cured meats (salted, smoked, dried, etc)",
"cost": 4.0,
"weight": 1
},
{
"name": "Carcass, Game Animal",
"cost": "1.0 per HD",
"weight": "varies"
},
{
"name": "Herbs / Spices, common",
"cost": 0.5,
"weight": 1
},
{
"name": "Herbs / Spices, uncommon",
"cost": 1.0,
"weight": 1
},
{
"name": "Herbs / Spices, Rare",
"cost": 2.0,
"weight": 1
},
{
"name": "Herbs / Spices, Exotic",
"cost": 15.0,
"weight": 1
},
{
"name": "Garlic, 1 bulb",
"cost": 0.05,
"weight": 0
},
{
"name": "Salt (1lb)",
"cost": 1.0,
"weight": 1
},
{
"name": "Grain (raw)",
"cost": 0.01,
"weight": 1
},
{
"name": "Meal (rough)",
"cost": 0.02,
"weight": 1
},
{
"name": "Flour (fine)",
"cost": 0.03,
"weight": 1
},
{
"name": "Wood (lumber), 1 cord (128 cubic feet)",
"cost": 50.0,
"weight": 5000
},
{
"name": "Firewood (per day)",
"cost": 0.01,
"weight": 20
},
{
"name": "Tobacco, per pouch",
"cost": 0.5,
"weight": 1
},
{
"name": "Tobacco, high quality",
"cost": 1.0,
"weight": 1
},
{
"name": "Halfling pipeweed",
"cost": 2.0,
"weight": 1
}
]
}

const inn = {
"meals":[
{
"name": "Meal, Poor",
"cost": 0.05,

"description": "Includes dark or rough bread, butter or hard cheese, porridge, broth soups or simple stew, and 'Chef's specials'."
},
{
"name": "Meal, Common",
"cost": 0.1,

"description": "Includes good bread & cheese, hearty stew, roast fowl or small game, cured meats, fruits and vegetables in season."
},
{
"name": "Meal, Merchant's (Good quality)",
"cost": 0.2,

"description": "Includes roast meats, cheeses, light breads, fruits and vegetables, soups, and more 'prepared' dishes. Preserved fruits are offered as well."
},
{
"name": "Meal, Rich",
"cost": 1.0,

"description": "Offers a few courses of different foods like those listed in the Merchant listing, of exceptional quality."
},
{
"name": "Meal, Banquet (per person)",
"cost": 10.0,

"description": "Includes multiple courses and a variety of offerings. The price includes personnel for service, but does not cover entertainment."
}
],
"booze": [
{
"name": "Small Beer",
"cost": 0.05,
"weight": "pint",
"description": "Small Beer is a low-alcohol beer. This lightly-fermented brew is almost a liquid snack, and keeps clean better than water. Suitable for adventuring, though it may turn ‘dank’ if left in a wineskin for too long. Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries."
},
{
"name": "Small Beer",
"cost": 0.4,
"weight": "gallon pitcher",
"description": "Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Small Beer is a low-alcohol beer. This lightly-fermented brew is almost a liquid snack, and keeps clean better than water. Suitable for adventuring, though it may turn ‘dank’ if left in a wineskin for too long."
},
{
"name": "Applejack",
"cost": 0.05,
"weight": "pint",
"description": "Applejack is a strong and cheap brandy produced from apples."
},
{
"name": "Applejack",
"cost": 0.4,
"weight": "gallon pitcher",
"description": "Applejack is a strong and cheap brandy produced from apples."
},
{
"name": "Beer, common",
"cost": 0.05,
"weight": "pint",
"description": "Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Beer, common",
"cost": 0.4,
"weight": "bottle",
"description": "Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Beer, quality",
"cost": 0.2,
"weight": "pitcher",
"description": "Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Beer, quality",
"cost": 1.6,
"weight": "bottle",
"description": "Beers are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Ale, common",
"cost": 0.1,
"weight": "pint",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Ale, common",
"cost": 0.8,
"weight": "gallon pitcher",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Ale, quality",
"cost": 0.4,
"weight": "pint",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Ale, quality",
"cost": 3.0,
"weight": "gallon pitcher",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},

{
"name": "Ale, exceptional",
"cost": 1,
"weight": "pint",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},

{
"name": "Ale, exceptional",
"cost": 8,
"weight": "gallon pitcher",
"description": "Ales are brewed or fermented from grains that use yeast to make the alcohol content. These are generally not as potent as spirits and are usually produced at monasteries. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},
{
"name": "Cider, common",
"cost": 0.1,
"weight": "pint",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice."
},
{
"name": "Cider, common",
"cost": 0.8,
"weight": "bottle",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice."
},
{
"name": "Cider, quality",
"cost": 0.4,
"weight": "pint",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Cider, quality",
"cost": 3,
"weight": "gallon pitcher",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Cider, exceptional",
"cost": 1,
"weight": "pint",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},
{
"name": "Cider, exceptional",
"cost": 8,
"weight": "gallon pitcher",
"description": "Cider is generally made from non-citrus fermented fruit juices like apples, pears, peaches, and many different berries. Citruses like oranges, limes, and lemons have acids that kill the yeast used to ferment the juice. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},
{
"name": "Wine, common",
"cost": 0.2,
"weight": "glass",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Wine, common",
"cost": 1.6,
"weight": "bottle",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Wine, common",
"cost": 1,
"weight": "gallon pitcher",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Wine, quality",
"cost": 1,
"weight": "glass",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Wine, quality",
"cost": 5,
"weight": "bottle",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Wine, quality",
"cost": 10,
"weight": "gallon pitcher",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Wine, exceptional",
"cost": 6,
"weight": "glass",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},
{
"name": "Wine, exceptional",
"cost": 30,
"weight": "bottle",
"description": "Wine is made from fermented grape juices (or sometimes other berries or fruits). The type of grapes determine the color and flavor of the wine. Monasteries often produce the best wines. Exceptional drinks are the best available, including rare brews, good vintages, or imports such as Elvish Wines and Dwarven Spirits. The prices given are minimum."
},
{
"name": "Mead, common",
"cost": 0.1,
"weight": "pint",
"description": "Mead is made with honey diluted with water or apple juice, and fermented with wine yeast. It is a potent drink popular in northern climates. Common drinks are the cheapest, and are a passable- quality offering."
},
{
"name": "Mead, common",
"cost": 0.5,
"weight": "bottle",
"description": "Mead is made with honey diluted with water or apple juice, and fermented with wine yeast. It is a potent drink popular in northern climates. Common drinks are the cheapest, and are a passable- quality offering."
},

{
"name": "Mead, quality",
"cost": 0.1,
"weight": "pint",
"description": "Mead is made with honey diluted with water or apple juice, and fermented with wine yeast. It is a potent drink popular in northern climates. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},
{
"name": "Mead, quality",
"cost": 0.5,
"weight": "bottle",
"description": "Mead is made with honey diluted with water or apple juice, and fermented with wine yeast. It is a potent drink popular in northern climates. Quality drinks are among the best local brews or vintages. These will be pleasing to more refined tastes."
},

{
"name": "Spirits, rotgut",
"cost": 0.03,
"weight": "shot",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Rotgut is a poorly-fermented drink mixed with more water than alcohol. "
},
{
"name": "Spirits, rotgut",
"cost": 0.6,
"weight": "bottle",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Rotgut is a poorly-fermented drink mixed with more water than alcohol. "
},
{
"name": "Spirits, common",
"cost": 0.1,
"weight": "shot",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Common spirits are half water and half alcohol and have an acceptable taste."
},
{
"name": "Spirits, common",
"cost": 2,
"weight": "bottle",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Common spirits are half water and half alcohol and have an acceptable taste."
},
{
"name": "Spirits, quality",
"cost": 1,
"weight": "shot",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Quality spirits are cut with 25% water and have a very good taste. "
},
{
"name": "Spirits, quality",
"cost": 20,
"weight": "bottle",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Quality spirits are cut with 25% water and have a very good taste. "
},
{
"name": "Spirits, exceptional",
"cost": 5,
"weight": "shot",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Exceptional spirits are not cut and usually are not mixed with any other liquids. The prices given are minimum."
},
{
"name": "Spirits, exceptional",
"cost": 100,
"weight": "bottle",
"description": "Spirits are fermented alcohols that are boiled again to remove the water and increase the alcohol content. The type of spirit is dependent on the grain, grape, fruit, or berry used as a base. These are generally made by a local farmer. Quality depends on the experience of the person making the spirit and the quality of the crop. Spirits are generally mixed or ‘cut’ with water to make the bottle last longer. Exceptional spirits are not cut and usually are not mixed with any other liquids. The prices given are minimum."
}

],

"services":[
{
"name": "Grain and stabling for horse (daily)",
"cost": 0.5,
"description": "Usually done at a Livery or Stable. Liveries offer comprehensive services including farrier service and tack. Stables associated with inns may require owners to feed their own horses."
},
{
"name": "Inn lodging, Private Room (per day)",
"cost": 2.0,
"description": "Includes a room and a day's meals. Room cleaned daily, good-quality meals, and no sharing of room or bed."
},
{
"name": "Inn lodging, Private Room (per week)",
"cost": 8.0,
"description": "Includes a room and a week's meals. Room cleaned daily, good-quality meals, and no sharing of room or bed."
},
{
"name": "Inn lodging, Common (per day)",
"cost": 0.5,
"description": "Includes a room and a day's meals. Room shared with another person, common meals provided. Rooms cleaned about 3 times a week."
},
{
"name": "Inn lodging, Common (per week)",
"cost": 3.0,
"description": "Includes a room and a week's meals. Room shared with another person, common meals provided. Rooms cleaned about 3 times a week."
},
{
"name": "Inn lodging, Poor (per day)",
"cost": 0.05,
"description": "Includes a room and a day's meals. Lackluster meals, room and bed shared with 3 others. Room cleaned about once a week."
},
{
"name": "Inn lodging, Poor (per week)",
"cost": 0.2,
"description": "Includes a room and a week's meals. Lackluster meals, room and bed shared with 3 others. Room cleaned about once a week."
},
{
"name": "Separate latrine for rooms (per month)",
"cost": 2.0,
"description": "A separate room or shed for a latrine, available for more expensive lodgings. Common and poor accommodations typically have shared latrines."
}
]


}


