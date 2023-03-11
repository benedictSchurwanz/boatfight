import { fleet_type } from "../game-settings";

// CONSTANTS
export const EMPTY = "EMPTY";
export const HIT = "HIT";
export const MISS = "MISS";
export const OPEN = "OPEN";

const game = {
  current_player: "1",
  turn_number: 0,
  game_over: false,
};

const emptyCell = {
	boat: EMPTY,
	shot: OPEN,
}

const createBoard = () => {
	// Create an array with 10 copies of
	// an array with 10 copies of
	// this object: { boat: EMPTY, shot: OPEN }	
	
	// Array.from(array-like object, function of what to put in each spot)
	
	// empty array, length: 10
	const gridContainer = Array(10)
	
	// row of 10 "emptyCell"s
	const emptyRow = Array.from(Array(10), () => emptyCell)
	
	// fill empty array with rows
	const grid = Array.from(gridContainer, () => emptyRow)
	
	return grid
};

const createBoat = (name, size) => {
	return {
		name: name,
		hp_max: size,
		hp_current: size,
	}
}

const createFleet = (fleet_type) => {
  return fleet_type.map((boat) => {
		return createBoat(boat.name, boat.size)
	});
};

const initialState = {
  current_player: game.current_player,
	turn_number: game.turn_number,
	game_over: game.game_over,
  "1": {
		name: "",
    board: createBoard(),
		fleet: createFleet(fleet_type),
  },
  "2": {
		name: "",
    board: createBoard(),
		fleet: createFleet(fleet_type),
  },
};

export default initialState;
