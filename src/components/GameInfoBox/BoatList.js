import React, { useContext } from "react";
import { GameContext, PlayersContext } from "../../state/contexts";
import { useCurrentPlayer } from "../../state/hooks";
import { BoatListUL } from "../../styles";

const BoatList = () => {
	const player = useCurrentPlayer()
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
