import { createReducer } from "@reduxjs/toolkit";
  
const initialState = {
  playerName: "Player ",
  fleet: [],
  boats_floating: 0,
  boats_I_have_sunk: 0,
  has_won: false,
  // is_dead: !this.has_won
}

const playerReducer = createReducer(initialState, (builder) => {
  builder
    .addDefaultCase((state) => state)
});

export default playerReducer;