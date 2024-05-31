// Functions for setting up the game.
// Use these functions to dispatch multiple actions involved in the game setup process.

import {
  PLACE_BOATS_START,
  PLACE_BOAT_NOT_LEGAL,
  PLACE_BOAT_LEGAL,
  GAME_SETUP_START,
} from "../state/constants";

export const useGameSetup = ({ gamestate, playerstate, setupdispatch }) => {
  const boatIndex = 0;

  setupdispatch({ type: GAME_SETUP_START });
  setupdispatch({
    type: PLACE_BOATS_START,
    payload: { gamestate, playerstate, boatIndex },
  });
};

export const place_a_boat = ({ activeCell, length, isHorizontal, dispatch }) => {
  const row = activeCell.row;
  const col = activeCell.col;

  console.log("row", row, "col", col, "isHorizontal", isHorizontal);

  let coordinate;
	
  isHorizontal
    ? (coordinate = col) // for horizontal boats, we count columns
    : (coordinate = row);

  let legal = true;

  console.log(coordinate)
	
	coordinate + length <= 10
    ? (legal = true)
    : (legal = false);

  legal
    ? dispatch({ type: PLACE_BOAT_LEGAL })
    : dispatch({ type: PLACE_BOAT_NOT_LEGAL });
};

export const check_available_space = ({
  length,
  row,
  col,
  isHorizontal,
  dispatch,
}) => {};
