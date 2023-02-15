import React from "react";
import fleet from "../../game-settings";
import { GameInfoContainer, GameInfoHeader, UL } from "../../styles";

const GameInfoBox = () => {
  const boatList = fleet;

  return (
    <GameInfoContainer>
      <GameInfoHeader>Your Fleet</GameInfoHeader>
      <UL>
        {boatList.map((boat) => (
          <li key={boat.name}>{boat.name}</li>
        ))}
      </UL>
    </GameInfoContainer>
  );
};

export default GameInfoBox;
