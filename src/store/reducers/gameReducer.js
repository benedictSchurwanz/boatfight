// Dependencies
import { createReducer } from "@reduxjs/toolkit";

import { saveGame } from "../actions";

const initialState = {
  player1: {},
  player2: {},
  whose_turn_is_it: "",
  turn_number: 0,
  game_over: false,
  winner: "",
};

const gameReducer = createReducer(initialState, (builder) => {
  builder
    // .addCase(actionName, (state, action) => {
    // .addCase(saveGame, (state, action) => {
      
    //   return state;
    // })
    // .addCase(nextTurn, (state, action) => {
    //   return state;
    // })
    // .addCase(declareWinner, (state) => {
    //   return state;
    // })
    .addDefaultCase((state) => state);
});

export default gameReducer;
