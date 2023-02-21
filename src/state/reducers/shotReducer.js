import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  is_a_hit: false,
  is_a_miss: false,
  // open: (this.is_a_hit || this.is_a_miss)
};

const shotReducer = createReducer(initialState, (builder) => {
  builder
    .addDefaultCase((state) => state);
});

export default shotReducer;
