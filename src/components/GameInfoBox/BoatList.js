import React, { useContext } from "react";
import { BoatListUL } from "../../styles";
import { GameContext } from "../../App";

const BoatList = () => {
  const { game } = useContext(GameContext);
  const fleet = game[game.current_player].fleet

  return (
    <BoatListUL>
      {fleet.map((boat) => (
        <li key={boat.name}>{boat.name}</li>
      ))}
    </BoatListUL>
  );
};

export default BoatList;
