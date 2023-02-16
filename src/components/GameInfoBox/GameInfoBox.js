import React from "react";
import { FormContainer, GameInfoContainer, GameInfoHeader } from "../../styles";
import BoatList from "./BoatList";

const GameInfoBox = () => {
  return (
    <GameInfoContainer>
      <GameInfoHeader>Your Fleet</GameInfoHeader>
      <BoatList />
      <FormContainer>
        hi
      </FormContainer>
    </GameInfoContainer>
  );
};

export default GameInfoBox;
