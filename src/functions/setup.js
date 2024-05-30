// Functions for setting up the game.
// Use these functions to dispatch multiple actions involved in the game setup process. 

import { HORIZONTAL, PLACE_BOATS_START, PLACE_BOAT_ILLEGAL, PLACE_BOAT_LEGAL, GAME_SETUP_START, VERTICAL } from "../state/constants"

export const useGameSetup = ({gamestate, playerstate, setupdispatch}) => {
	const boatIndex = 0;
	
	setupdispatch({type: GAME_SETUP_START})
	setupdispatch({type: PLACE_BOATS_START, payload: {gamestate, playerstate, boatIndex}})
}

export const place_a_boat = ({activeCell, isHorizontal}) => {
	const row = activeCell.row
	const col = activeCell.col
	
	console.log("row", row, "col", col, "isHorizontal", isHorizontal)
	
	let coordinate
	(isHorizontal) ?	
		coordinate = col : // for horizontal boats, we count columns
		coordinate = row
	
	console.log(coordinate)
	console.log(coordinate + 5 <= 10)
}

export const check_available_space = ({length, row, col, isHorizontal, dispatch}) => {
	
}
