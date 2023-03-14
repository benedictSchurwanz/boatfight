import { useContext } from "react";
import { GameContext, PlayersContext } from "./contexts";

// export const getCell = (props) => {
//   return props;
// };

export const usePlayer = (player_id) => {
  const { players } = useContext(PlayersContext);
  const player = players[player_id];

  return player;
};

// retrieve the player object for the current player
export const useCurrentPlayer = () => {
  const { game } = useContext(GameContext);
  const { current } = game;
  const player = usePlayer(current);

  return player;
};

// retrieve the board for the given player
// export const useBoard = (player_id) => {
//   const player = usePlayer(player_id)
// 	return player;
// };
