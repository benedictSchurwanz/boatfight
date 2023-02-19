import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  game_id: Date.now(),
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(actionName, (state, action) => {
    // state.value++ , state.value += action.payload
    .addCase();
});

export default gameReducer;
