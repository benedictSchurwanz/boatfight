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

const createBoard = () => {
  return new Array(
    10,
    new Array(10, {
      floating_here: EMPTY,
      shot_status: OPEN,
    })
  );
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
		name: "Alice",
    board: createBoard(),
		fleet: createFleet(fleet_type),
  },
  "2": {
		name: "Bob",
    board: createBoard(),
		fleet: createFleet(fleet_type),
  },
};

export default initialState;
