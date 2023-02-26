import { combineReducers } from "redux";
import game from "./gameReducer";
import player from "./playerReducer";
import boat from "./boatReducer";
import shot from "./shotReducer";
import settings from "./settingsReducer";

const root = combineReducers({
  game: game,
  player: player,
  boat: boat,
  shot: shot,
  settings: settings,
});

export default root;
