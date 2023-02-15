// Game settings

function Boat(name, length) {
  this.name = name;
  this.length = length;
}

const DEFAULT_FLEET = [
  new Boat("Carrier", 5),
  new Boat("Battleship", 4),
  new Boat("Cruiser", 3),
  new Boat("Submarine", 3),
  new Boat("Destroyer", 2),
];

// I want to export the fleet chosen by the game settings.
// right now, there's only one fleet to select, so the fleet chosen will be the default.
//

function setupFleet() {
  return DEFAULT_FLEET;
}

export default DEFAULT_FLEET;
