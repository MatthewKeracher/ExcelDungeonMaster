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
  "name":"Rations, Dry, one week",
  "weight":"14",
  "cost":"10"
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
  "armor": [
  {
  "name": "No Armor",
  "cost": "0",
  "weight": "0",
  "AC": "11",
  "description": "No armor worn."
  },
  {
  "name": "Padded or Quilted Armor",
  "cost": "15",
  "weight": "10",
  "AC": "12",
  "description": "Created from layers of cloth; offers minimal protection, but good insulation."
  },
  {
  "name": "Padded Overcoat",
  "cost": "25",
  "weight": "25",
  "AC":"14",
  "description":"Thick overcoat made of wool and leather that provides padded armor."
  },
  {
  "name": "Padded Vest",
  "cost":"10",
  "weight":"10",
  "AC":"12",
  "description":"Thick vest made of wool and leather that provides padded armor."
  },
  {
  "name": "Hide Armor",
  "cost": "10",
  "weight": "30",
  "AC": "13",
  "description":"Armor made from animal hides."
  },
  {
  "name": "Leather Armor",
  "cost": "20",
  "weight": "15",
  "AC": "13",
  "description":"Armor made from hardened leather."
  },
  {
  "name": "Studded Leather Armor",
  "cost": "30",
  "weight": "25",
  "AC": "14",
  "description":"Leather armor reinforced with metal studs or small plates."
  },
  {
  "name": "Ring Mail Armor",
  "cost": "25",
  "weight": "30",
  "AC": "14",
  "description": "Rings of steel sewn to an undergarment."
  },
  {
  "name": "Brigandine Armor",
  "cost": "80",
  "weight": "30",
  "AC": "15 (or 14 if no padded undergarment)",
  "description": "Cloth or leather garment with small oblong steel plates riveted inside."
  },
  {
  "name": "Chain Mail Armor",
  "cost": "60",
  "weight": "40",
  "AC": "15 (or 14 if no padded undergarment)",
  "description": "Interwoven rings of metal; flexible and durable."
  },
  {
  "name": "Scale Mail Armor",
  "cost":"80",
  "weight":"55",
  "AC":"16",
  "description":"Metal scales directly woven to an undergarment for moderate protection."
  },
  {
  "name": "Splint Mail Armor",
  "cost":"100",
  "weight":"45",
  "AC":"16",
  "description":"Chain mail with small strips of thick metal interwoven for better protection."
  },
  {
  "name": "Banded Mail Armor",
  "cost": "200",
  "weight": "35",
  "AC": "16",
  "description": "Laminar armor with overlapping strips or bands of metal."
  },
  {
  "name": "Plate Mail Armor",
  "cost": "300",
  "weight": "50",
  "AC": "17 (or 16 if no padded undergarment)",
  "description":"Large plates of hard metal covering the torso, arms, and legs."
  },
  {
  "name":"Field Plate Mail",
  "cost":"500",
  "weight":"70",
  "AC":"18 (or 17 if no padded undergarment)",
  "description":"Solid pieces of plate armor with complicated sliding parts, hinges, and straps, must be custom fitted."
  },
  {
  "name": "Full Plate Mail",
  "cost": "1,500",
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
  "cost": "5",
  "weight":"2",
  "AC":"+1/0",
  "description": "Small shield worn on forearm that provides protection in melee combat only."
  },
  {
  "name":"Medium Shield",
  "cost":"7",
  "weight":"5",
  "AC":"+1/+1",
  "description":"A standard shield, provides protection in melee and missile combat."
  },
  {
  "name":"Tower Shield",
  "cost":"15",
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
    ]
    }




