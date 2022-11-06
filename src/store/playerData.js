// Player state

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	lifetime_score: {
		games_played: null,
		games_won: null,
		games_lost: null,
	},
	current_score: {},	
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

// "Action creators are generated for each case of the reducer function"
export const { setName } = playerSlice.actions

// this .reducer becomes "playerReducer" in src/app/store.js
export default playerSlice.reducer

/*
createSlice:
- name: name
- initialState: initial state
- reducers: the "actions" that are performed, the state-changing things. The entry is how state is changed, the action.payload is what it's changed to.

The keys in the reducers object become action creator functions which can be returned from playerSlice.actions.
	Those action creators are then pulled out of this file to use in other files that need to change state. 
*/