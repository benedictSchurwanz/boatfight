import { createAction } from "@reduxjs/toolkit";

export const setup = createAction("game/setup");
export const nextTurn = createAction("game/nextTurn");
export const declareWinner = createAction("game/declareWinner");
