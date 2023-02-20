import { createReducer, createAction } from "@reduxjs/toolkit";

const setup = createAction("game/setup")
const declareWinner = createAction("game/declareWinner")

const initialState = {
  player1: {},
  player2: {},
  whose_turn_is_it: "",
  turn_number: 0,
  // game_over: (this.player1.is_dead || this.player2.is_dead), // this will be a behavior function
  winner: ""
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(actionName, (state, action) => {
    // state.value++ , state.value += action.payload
    .addCase(setup, (state) => state)
    .addCase(declareWinner, (state) => state)
    .addDefaultCase((state) => state)
});

export default gameReducer;
