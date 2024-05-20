import { createContext, useReducer } from "react";
import initialState from "./initialState";
import { gameReducer, playersReducer, boardReducer } from "./reducers";

export const GameContext = createContext({})
export const PlayersContext = createContext({
	1: {},
	2: {},
})
export const BoardContext = createContext({})

export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, initialState.game)
	
	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{children}
		</GameContext.Provider>
	)
}

export const PlayersProvider = ({ children }) => {
	const [state, dispatch] = useReducer(playersReducer, initialState.players)
	
	return (
		<PlayersContext.Provider value={{ state, dispatch }}>
			{children}
		</PlayersContext.Provider>
	)
}

export const BoardProvider = ({ children }) => {
	const [state, dispatch] = useReducer(boardReducer, {})
	
	return (
		<BoardContext.Provider value={{ state, dispatch }}>
			{children}
		</BoardContext.Provider>
	)
}
