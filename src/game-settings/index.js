const fleet_options = {
  default: [
    { name: "Carrier",
      size: 5 },
    { name: "Battleship",
      size: 4 },
    { name: "Cruiser",
      size: 3 },
    { name: "Submarine",
      size: 3 },
    { name: "Destroyer",
      size: 2 },
  ],
};

const newBoat = (name, size) => {
  return {
    name: name,
    hp_max: size,
    hp_current: size,
  };
};

// The following should be a function that checks the value in the store/settings
// and chooses the proper fleet accordingly,
// returning it to the set up function - probably the fleet setup function

const createFleet = (chosen_option = "default") => {
  const fleet_format = fleet_options[chosen_option];
  
  return (
    fleet_format.map(boat => newBoat(boat.name, boat.size))
  )
}

// Right now, there's only one fleet to select, so the fleet chosen will be the default.
const fleet = createFleet()

export {
  fleet
};
