import { createSlice } from "@reduxjs/toolkit";

// see notes on redux toolkit at end of file

const initialState = {
	name: ""
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

export default playerSlice.reducer

/*
createSlice:
- name: name
- initialState: initial state
- reducers: the "actions" that are performed, the state-changing things. The entry is how state is changed, the action.payload is what it's changed to.

The keys in the reducers object become action creator functions which can be returned from playerSlice.actions.
	Those action creators are then pulled out of this file to use in other files that need to change state. 
*/