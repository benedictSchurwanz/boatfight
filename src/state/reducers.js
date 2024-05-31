import {
  PLACE_BOATS_START,
  PLACE_BOAT_NOT_LEGAL,
  PLACE_BOAT_LEGAL,
  GAME_SETUP_START,
	PLACE_BOAT_ORIENTATION_FLIP,
} from "./constants";

export const gameReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const playersReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const boardReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const setupReducer = (state, action) => {
  switch (action.type) {
    case GAME_SETUP_START: {
      return {
        ...state,
        status: true,
        placeBoatHighlightColor: "red",
        placeBoatIsHorizontal: true,
      };
    }
    case PLACE_BOATS_START: {
      const gamestate = action.payload.gamestate;
      const playerstate = action.payload.playerstate;
      const currentPlayer = playerstate[gamestate.currentPlayer];

      return {
        ...state,
        placeBoatsMsg: true,
        placeBoatsGrayText: !state.placeBoatsGrayText,
        currentBoatIndex: action.payload.boatIndex,
        currentBoat: currentPlayer.fleet[action.payload.boatIndex],
      };
    }
    case PLACE_BOAT_LEGAL: {
      return {
        ...state,
        placeBoatHighlightColor: "green",
      };
    }
    case PLACE_BOAT_NOT_LEGAL: {
      return {
        ...state,
        placeBoatHighlightColor: "red",
      };
    }
		case PLACE_BOAT_ORIENTATION_FLIP: {
			return {
				...state,
				placeBoatIsHorizontal: !state.placeBoatIsHorizontal
			}
		}
    default:
      return state;
  }
};
