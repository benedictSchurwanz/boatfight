// Game state

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	
}

export const gameData = createSlice({
	name: 'game',
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		}
	}
})

export const { setName } = gameData.actions

export default gameData.reducer
