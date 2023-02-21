// Dependencies
import React from "react";
// Styles
import { GameInfoContainer, GameInfoHeader } from "../../styles";
// Components
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
