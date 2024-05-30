// Functions for setting up the game.
// Use these functions to dispatch multiple actions involved in the game setup process. 

import { HORIZONTAL, PLACE_BOATS_START, PLACE_BOAT_ILLEGAL, PLACE_BOAT_LEGAL, GAME_SETUP_START, VERTICAL } from "../state/constants"

export const useGameSetup = ({gamestate, playerstate, setupdispatch}) => {
	const boatIndex = 0;
	
	setupdispatch({type: GAME_SETUP_START})
	setupdispatch({type: PLACE_BOATS_START, payload: {gamestate, playerstate, boatIndex}})
}

export const place_a_boat = ({targetCell, orientation}) => {
	const row = targetCell.row
	const col = targetCell.col
	
	console.log("row", row, "col", col, "orientation", orientation)
}

export const check_available_space = ({length, row, col, orientation, dispatch}) => {
	let coordinate = row
	console.log("coordinate", coordinate)
		
}
