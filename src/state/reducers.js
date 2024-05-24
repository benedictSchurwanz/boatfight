import { PLACE_BOATS, STATUS_GAME_SETUP } from "./constants";

export const gameReducer = (state, action) => {
	switch (action.type) {
		default: 
			return state;		
	}	
}

export const playersReducer = (state, action) => {
	switch (action.type) {
		default: 
			return state;		
	}	
}

export const boardReducer = (state, action) => {
	switch (action.type) {
		default: 
			return state;		
	}	
}

export const setupReducer = (state, action) => {
	switch (action.type) {
		case PLACE_BOATS: {
			return ({
				...state,
				status: true,
				placeBoatsMsg: true, 
				placeBoatsGrayText: !state.placeBoatsGrayText,
				currentBoatIndex: 0
			})
		}
		case STATUS_GAME_SETUP: 
			return ({
				...state,
				statusGameSetup: true
			})
		default: 
			return state;
	}
}