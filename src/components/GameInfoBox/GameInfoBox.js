import React from "react";
import { GameInfoContainer, GameInfoHeader } from "../../styles";
import BoatList from "./BoatList";
import TargetInputForm from "./TargetInputForm";

const GameInfoBox = (props) => {
  return (
    <GameInfoContainer>
      <GameInfoHeader>Your Fleet</GameInfoHeader>
      <BoatList />
      <TargetInputForm dispatch={props.dispatch}/>
    </GameInfoContainer>
  );
};

export default GameInfoBox;
