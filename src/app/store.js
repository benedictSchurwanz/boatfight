import { configureStore } from '@reduxjs/toolkit'
import playerReducer from '../store/playerData'
import gameReducer from '../store/gameData'

export const store = configureStore({
	reducer: {
		game: gameReducer,
		player: playerReducer, // this is playerSlice.reducer from playerSlice.js
	}
})
