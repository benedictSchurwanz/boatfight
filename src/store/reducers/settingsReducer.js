// Dependencies
import { createReducer, createAction } from "@reduxjs/toolkit";

// Action Creators
export const fleet = createAction("settings/fleet")

const initialState = {
	fleet: "DEFAULT"
}

const settingsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(fleet, (state, action) => {
			state.fleet = action.payload;
			return state;
		})
		.addDefaultCase((state) => state)
})

export default settingsReducer;