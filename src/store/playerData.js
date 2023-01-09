// Player state

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",

}

export const playerSlice = createSlice({
	name: 'player', 
	initialState,
	reducers: {
		setName: (state, action) => {
			state.name = action.payload
		}
	}
})

export const { setName } = playerSlice.actions

export default playerSlice.reducer
