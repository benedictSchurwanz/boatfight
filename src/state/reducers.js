import { PLACE_BOATS } from "./constants";

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
		case PLACE_BOATS: 
			return ({
				...state,
				msgPlaceBoats: true
			})
		default: 
			return state;
	}
}