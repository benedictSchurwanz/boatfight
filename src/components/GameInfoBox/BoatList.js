import React, { useContext } from "react";
import { GameContext, PlayersContext, SetupContext } from "../../state/contexts";
import { BoatListUL } from "../../styles";

const BoatList = () => {
	const { state: game } = useContext(GameContext)
	const { currentPlayer } = game;
  const { state: players } = useContext(PlayersContext);
	const player = players[currentPlayer]
  const fleet = player.fleet
	const { state: setup } = useContext(SetupContext)

  return (
    <BoatListUL>
      {fleet.map((boat) => (
        <li 
					key={boat.name}
					className={setup.placeBoatsGrayText ? "placeBoatsGrayText" : ""}
				>
					{boat.name}
				</li>
      ))}
    </BoatListUL>
  );
};

export default BoatList;
