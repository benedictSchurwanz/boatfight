// Dependencies
import React from "react";
// Styles
import { GameContainer } from "../../styles";
// App Components
import Board from "../Game/Board/Board";
import GameInfoBox from "./GameInfoBox/GameInfoBox";

function Game() {
  return (
    <GameContainer>
      <Board />
      <GameInfoBox />
    </GameContainer>
  );
}

export default Game;