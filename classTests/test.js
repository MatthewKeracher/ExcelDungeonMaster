const locations = new LocationManager();
const chars = new CharacterManager();

locations.add(
    new Location({
      name: "The Dark Cave",
      description: "A dark and spooky cave.",
    })
  );

locations.add(
new Location({
    name: "The Boat",
    description: "A bobbing boat.",
    type: "Boat"
    })
  );

chars.add(
    new Character({
      name: "Even",
      description: "A brave warrior from the north.",
      alignment: "Chaotic Good",
    })
  );
  
  chars.add(
    new NewNPC({
      name: "Odd",
    })
  );
  
  chars.search("Even").increaseLevel;
  
  chars
    .search("Even")
    .goTo(locations.byName("The Dark Cave"));
  
  chars
    .search("Odd")
    .goTo(locations.byName("The Dark Cave"));

  locations
    .search("The Dark Cave")
    .remChar(chars.search("Odd"));


function log(...args) {
  console.log(...args);
}

log("Characters in the system:");
chars.all().forEach((char) => {
  log(`- ${char.name} (${char.class}, Level ${char.level}), Type: ${char.type}`);
});

log(
  "Locations in the system:",
  locations.locations.map((loc) => `${loc.name} (${loc.type})`)
);
``;


