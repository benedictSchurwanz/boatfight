import React from "react";
import { GameInfoContainer, GameInfoHeader } from "../../styles";
import BoatList from "./BoatList";
import TargetInputForm from "./TargetInputForm";
import { msgPlaceBoats } from "../../state/initialState";

const GameInfoBox = () => {
  return (
    <GameInfoContainer>
      <GameInfoHeader>Your Fleet: {msgPlaceBoats && "Place your boats"}</GameInfoHeader>
      <BoatList />
      <TargetInputForm />
    </GameInfoContainer>
  );
};

export default GameInfoBox;
