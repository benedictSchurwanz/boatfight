// Dependencies
import { nanoid } from "nanoid";

// CONSTANTS
export const EMPTY = "EMPTY";
export const HIT = "HIT";
export const MISS = "MISS";
export const OPEN = "OPEN";

// object construction
const createGame = () => {
	return {
		id: nanoid(),
		player1: {},
		player2: {},
		turn_number: 0,
		game_over: false,
	};
};

const createPlayer = () => {
	return {
		name: "",
		board: [],
		fleet: [],
	};
};

const createBoard = () => {
	return new Array(10, new Array(10, createCell()));
};

const createCell = () => {
	return {
		which_boat_is_here: EMPTY,
		hit_miss_open: OPEN,
	};
};

const createFleet = (fleet) => {
	return fleet;
};

const assembleObjects = () => {
	const game = createGame();

	game.player1 = createPlayer();
	game.player2 = createPlayer();
	game.player1.board = createBoard();
	game.player2.board = createBoard();
	game.player1.fleet = createFleet();
	game.player2.fleet = createFleet();

	return game;
};

const createObjects = () => {
	const game = assembleObjects();
};

export default createObjects;
