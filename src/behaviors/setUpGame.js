import { nanoid } from "@reduxjs/toolkit";

export const EMPTY = "EMPTY"
export const HIT = "HIT"
export const MISS = "MISS"
export const OPEN = "OPEN"

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
		fleet: [] 
	};
};

const createCell = () => {
	return {
		which_boat_is_here: EMPTY,
		hit_miss_open: OPEN
	}
}

const createBoard = () => {
	return new Array(
		10,
		new Array(
			10,
			createCell()
		) 
	)
};

const setUpGame = () => {
  const game = createGame();
  const player1 = createPlayer();
  const player2 = createPlayer();
};

export default setUpGame;
