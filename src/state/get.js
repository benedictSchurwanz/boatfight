import { useContext } from "react";
import { GameContext } from "../App";

export const getCell = (props) => {
	// I want to get the player obj out of the context 
	
	
	
	return props
}
/*
state: {
	current_player_id
	turn_number
	game_over
	"1": {
		name,
		board
		fleet
	}
	"2": ...
}
*/

// take state, retrieve player object at key of current player
export const useCurrentPlayer = () => {
	const game	= useContext(GameContext)
	const cp = game[game.current_player_id]
	
	return cp
}
