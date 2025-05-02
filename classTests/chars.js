class CharacterManager {
  constructor() {
    this.characters = [];
  }

  add(character) {
    this.characters.push(character);
  }

  all() {
    return this.characters;
  }

  search(value, key = "name"){
    return this.characters.find((char) => char[key] === value);
  }

  delete(key, value){
    this.characters = this.characters.filter((char) => char[key] !== value)
    return this.characters;
  }

 
}

class Character {
  type = "character";
  id = "";
  name = "";
  level = 0;
  alignment = "";
  race = "";
  class = "";
  location = {};
  description = "";

  constructor(char) {
    this.id = char?.id || crypto.randomUUID(); // Generates a UUID
    this.name = char?.name || "Anatoly Anonymous";
    this.level = char?.level || 1;
    this.alignment = char?.alignment || "Neutral Neutral";
    this.race = char?.race || "Human";
    this.class = char?.class || "Fighter";
    this.description = char?.description || "Write something interesting here.";
  }

  edit(key, value) {
    this[key] = value;
  }

  get increaseLevel() {
    this.level++;
  }

  goTo(location) {
    this.location = location;
    location.addChar(this);
  }

}

class NewNPC extends Character { 
  occupation = "";
  home = {};
  coins = [];
  items = [];
  type = "npc";
  constructor(char) {
    super(char);
    this.class = char?.class || "NPC";
    this.occupation = char?.occupation || "Peasant";
    this.home = char?.home || {};
    this.coins = char?.coins || [];
    this.items = char?.items || [];
  }
}



