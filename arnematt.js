class CharacterManager {
  constructor() {
    this.characters = [];
  }

  addCharacter(character) {
    this.characters.push(character);
  }

  getCharacterById(id) {
    return this.characters.find((char) => char.id === id);
  }

  getAllCharacters() {
    return this.characters;
  }
}


class Character {
  id = "";
  name = "";
  description = "";
  alignment = "";
  race = "";
  class = "";
  level = 0;
  location = {};
  
  constructor(char) {
    this.id = char?.id || crypto.randomUUID(), // generates something like this: "f116fb21-79f2-4ec0-8a81-85b5837ea0f3"
    this.name = char?.name || "Anatoly Anonymous",
    this.level = char?.level || 1,
    this.alignment = char?.alignment || "Neutral Neutral",
    this.race = char?.race || "Human",
    this.class = char?.class || "Fighter",
    this.description = char?.description || `Write something interesting here.`
  }
}

class NewNPC extends Character {
  occupation = "";
  home = {};
  coins = [];
  items = []
  constructor(char) {
    super(char);
    this.occupation = char?.occupation || "Peasant",
    this.home = char?.home || {},
    this.coins = char?.coins || [],
    this.items = char?.items || []
  }
}