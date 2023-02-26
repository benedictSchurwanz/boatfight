// Dependencies
import React from "react";
// React Components
import Board from "../Board";
import GameInfoBox from "../GameInfoBox";
// Styles
import { GameContainer } from "../../styles";

function Game() {
  return (
    <GameContainer>
      <Board />
      <GameInfoBox />
    </GameContainer>
  );
}

export default Game;
