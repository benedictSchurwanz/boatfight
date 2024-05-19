import React, { useContext } from "react";
import { GameContext, PlayersContext } from "../../state/contexts";
import { BoatListUL } from "../../styles";

const BoatList = () => {
	const { state: game, dispatch: gameDispatch } = useContext(GameContext)
	const { currentPlayer } = game;
  const { state: players, dispatch: playersDispatch } = useContext(PlayersContext);
	const player = players[currentPlayer]
  const fleet = player.fleet

  return (
    <BoatListUL>
      {fleet.map((boat) => (
        <li key={boat.name}>{boat.name}</li>
      ))}
    </BoatListUL>
  );
};

export default BoatList;
