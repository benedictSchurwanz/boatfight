import { createContext, useReducer } from "react";
import initialState from "./initialState";
import { gameReducer, playersReducer, boardReducer, setupReducer } from "./reducers";
import { initialBoardGrid } from "./initialBoardState";

export const GameContext = createContext()
export const PlayersContext = createContext({
	1: {},
	2: {},
})
export const BoardContext = createContext()
export const SetupContext = createContext()

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
	const [state, dispatch] = useReducer(boardReducer, initialBoardGrid)
	
	return (
		<BoardContext.Provider value={{ state, dispatch }}>
			{children}
		</BoardContext.Provider>
	)
}

export const SetupProvider = ({ children }) => {
	const [state, dispatch] = useReducer(setupReducer, initialState.setup)
	
	return (
		<SetupContext.Provider value={{ state, dispatch }}>
			{children}
		</SetupContext.Provider>
	)
}
