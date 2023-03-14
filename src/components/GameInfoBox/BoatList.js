import React, { useContext } from "react";
import { GameContext, PlayersContext } from "../../state/contexts";
import { BoatListUL } from "../../styles";

const BoatList = () => {
	const { game } = useContext(GameContext)
	const { currentPlayer } = game;
  const { players } = useContext(PlayersContext);
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
