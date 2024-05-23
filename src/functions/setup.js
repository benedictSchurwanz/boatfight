// Functions for setting up the game.
// Use these functions to dispatch multiple actions involved in the game setup process. 

import { PLACE_BOATS, STATUS_GAME_SETUP } from "../state/constants"

export const useGameSetup = (dispatch) => {
	dispatch({type: STATUS_GAME_SETUP})
	dispatch({type: PLACE_BOATS})
}