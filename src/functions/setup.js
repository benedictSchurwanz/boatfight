// Functions for setting up the game.

import { PLACE_BOATS } from "../state/constants"

// Use these functions to dispatch multiple actions involved in the game setup process. 

export const useGameSetup = (dispatch) => {
	dispatch({type: PLACE_BOATS})
}