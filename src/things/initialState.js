

export const game = {
	game_id: Date.now,

	player1: {},
	player1_board: [], 
	player1_fleet: [],
	player1_score: 0,

	player2: {},
	player2_board: [],
	player2_fleet: [],
	player2_score: 0,
	
	game_is_won: () => {
		return this.player1.is_dead || this.player2.is_dead
	},
	
	declare_winner: () => {  },
	
	winner: "",
}

export const player = {
	player_id: Date.now,
	player_name: "",
	games_played: [],	
	is_dead: (fleet) => {
		// loop through fleet; is boat sunk? 
		// First boat that is not sunk, function returns false. 
		// Otherwise returns true.
		for (let i = 0; i < fleet.length; i++) {
			if (fleet[i].is_floating) {
				return false;
			}
		};
		
		return true;
	}
}

export const boat = {
	name: "",
	size: 0,
	current_health: 0,
	is_sunk: () => { return this.current_health <= 0 },
	is_floating: () => { return this.current_health > 0 },
}

export const shot = {
	is_a_hit: null,
	is_a_miss: !this.is_hit,
}
