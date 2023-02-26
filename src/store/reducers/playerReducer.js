import { createReducer, createAction } from "@reduxjs/toolkit";

export const newPlayer = createAction("player/newPlayer");

const initialState = {
  playerName: "",
  fleet: [],
  boats_floating: 0,
  boats_I_have_sunk: 0,
  has_won: false,
};

const playerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(newPlayer, (state, action) => {
      console.log("newPlayer case in Player reducer")
    })
    .addDefaultCase((state) => state);
});

export default playerReducer;
