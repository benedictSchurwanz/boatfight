import { useContext } from "react";
import { GameContext } from "../App";

export const getCell = (props) => {
  // I want to get the player obj out of the context

  return props;
};

// take state, retrieve player object at key of current player
export const useCurrentPlayer = () => {
  const game = useContext(GameContext);
  const { current } = game;
};
