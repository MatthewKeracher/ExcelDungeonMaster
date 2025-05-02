class LocationManager {
    constructor() {
      this.locations = [];
    }
    byName(name) {
      return this.locations.find((loc) => loc.name === name);
    }

    byType(type){
        return this.locations.find((loc) => loc.type === type);
    }

    add(location) {
      this.locations.push(new Location(location));
    }

    search(value, key = "name"){
        return this.locations.find((char) => char[key] === value);
    }

  }
  


class Location {
    name = "";
    description = "";
    type = "location";
    occupants = [];
    constructor(location) {
      this.name = location?.name || "Unknown Location";
      this.description = location?.description || "No description available.";
      this.type = location?.type || "Cave";
    }
  
    get occupants() {
      return this.description;
    }

    addChar(occupant) {
      this.occupants.push(occupant);
    }

    remChar(occupant) {
      this.occupants = this.occupants.filter((o) => o !== occupant);
      occupant.location = {};
    }

  }

