import { useContext } from "react";
import { GameContext, PlayersContext } from "./contexts";

// export const getCell = (props) => {
//   return props;
// };

// take state, retrieve player object at key of current player
export const useCurrentPlayer = () => {
	const { game } = useContext(GameContext)
	const { current } = game;
  const { players } = useContext(PlayersContext);
	const player = players[current]
	
	return player;
};
