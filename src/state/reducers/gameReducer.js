// Dependencies
import { createReducer, createAction } from "@reduxjs/toolkit";

// Action Creators
export const setup = createAction("game/setup");
export const nextTurn = createAction("game/nextTurn");
export const declareWinner = createAction("game/declareWinner");

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
    .addCase(setup, (state, action) => {
        console.log(state)
        return state;
      })
      .addCase(nextTurn, (state, action) => {
        return state;
      })
      .addCase(declareWinner, (state) => {
      return state;
    })
    .addDefaultCase((state) => state);
});

export default gameReducer;
