import React from "react";
import { GameInfoContainer, GameInfoHeader } from "../../styles";
import BoatList from "./BoatList";
import TargetInputForm from "./TargetInputForm";

const GameInfoBox = () => {
  return (
    <GameInfoContainer>
      <GameInfoHeader>Your Fleet</GameInfoHeader>
      <BoatList />
      <TargetInputForm />
    </GameInfoContainer>
  );
};

export default GameInfoBox;
