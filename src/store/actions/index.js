import { createAction } from "@reduxjs/toolkit";

// we want to create actions for each reducer
// Do we though?
// the player reducer could select game[player] and use that
export const saveGame = createAction("game/save")
