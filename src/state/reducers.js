import { PLACE_BOATS_START, STATUS_GAME_SETUP } from "./constants";

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
    case PLACE_BOATS_START: {
			const gamestate = action.payload.gamestate;
			const playerstate = action.payload.playerstate;
			const currentPlayer = playerstate[gamestate.currentPlayer]
			
      return {
        ...state,
				placeBoatsMsg: true,
				placeBoatsGrayText: !state.placeBoatsGrayText,
				currentBoatIndex: action.payload.boatIndex,
				currentBoat: currentPlayer.fleet[action.payload.boatIndex]
      };
    }
    case STATUS_GAME_SETUP:
      return {
        ...state,
        status: true,
      };
    default:
      return state;
  }
};
