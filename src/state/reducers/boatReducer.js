import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  length: 0,
  boatSquares: []
}

const boatReducer = createReducer(initialState, (builder) => {
  builder
    .addDefaultCase((state) => state)
});

export default boatReducer;