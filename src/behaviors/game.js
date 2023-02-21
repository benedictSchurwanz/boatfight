const game_is_won = (player1, player2) => {
	return (player1.is_dead || player2.is_dead)
}

const declare_winner = (player1, player2) => {
	return null;
}

export {
	game_is_won,
	declare_winner,
}
