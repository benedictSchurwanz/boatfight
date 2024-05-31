import React, { useContext } from "react";
import { GameInfoContainer, GameInfoHeader } from "../../styles";
import BoatList from "./BoatList";
import TargetInputForm from "./TargetInputForm";
import { SetupContext } from "../../state/contexts";
import HorizontalToggle from "../GameSetup/HorizontalToggle";

const GameInfoBox = () => {
  const { state: setup } = useContext(SetupContext);

  return (
    <GameInfoContainer>
      <GameInfoHeader>
        Your Fleet: {setup.placeBoatsMsg && "Place your boats"}
      </GameInfoHeader>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BoatList />
        <HorizontalToggle />
      </div>
      <TargetInputForm />
    </GameInfoContainer>
  );
};

export default GameInfoBox;
