import React, { useContext } from "react";
import { UL } from "../../styles";
import { GameContext } from "../../App";

const BoatList = () => {
  const { game } = useContext(GameContext);
  const fleet = game[game.current_player].fleet

  return (
    <UL>
      {fleet.map((boat) => (
        <li key={boat.name}>{boat.name}</li>
      ))}
    </UL>
  );
};

export default BoatList;
