import { configureStore } from '@reduxjs/toolkit'
import gameReducer from '../store/gameData'
import playerReducer from '../store/playerData'

export const store = configureStore({
	reducer: {
		game: gameReducer,
		player: playerReducer,
	}
})
