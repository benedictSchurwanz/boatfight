import { combineReducers } from "redux";
import gameReducer from "./gameReducer";
import playerReducer from "./playerReducer";
import boatReducer from "./boatReducer";
import shotReducer from "./shotReducer";

const rootReducer = combineReducers({
  game: gameReducer,
  player: playerReducer,
  boat: boatReducer,
  shot: shotReducer,
});

export default rootReducer;
