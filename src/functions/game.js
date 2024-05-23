// import { useGameContext } from "../state/hooks";

export const game_is_won = (player1, player2) => {
  return player1.is_dead || player2.is_dead;
};

export const declare_winner = (player1, player2) => {
  return null;
};

// export const useCurrentPlayer = () => {
//   // const [state] = useGameContext()
	
// 	// return state.currentPlayer
// 	return null
// };
