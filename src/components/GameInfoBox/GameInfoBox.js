import React from "react";
import fleet from "../../game-settings";
import { GameInfoContainer } from "../../styles";

const GameInfoBox = () => {
  const boatList = fleet;
  console.log(boatList);
  return (
    <GameInfoContainer>
      <ul>
        {boatList.map((boat) => (
          <li>{boat.name}</li>
        ))}
      </ul>
    </GameInfoContainer>
  );
};

export default GameInfoBox;
