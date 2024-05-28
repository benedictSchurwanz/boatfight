// Functions for setting up the game.
// Use these functions to dispatch multiple actions involved in the game setup process. 

import { PLACE_BOATS_START, STATUS_GAME_SETUP } from "../state/constants"

export const useGameSetup = ({gamestate, playerstate, setupdispatch}) => {
	const boatIndex = 0;
	
	setupdispatch({type: STATUS_GAME_SETUP})
	setupdispatch({type: PLACE_BOATS_START, payload: {gamestate, playerstate, boatIndex}})
}

export const place_a_boat = () => {
	
}