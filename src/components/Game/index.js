// Dependencies
import React from "react";
// React Components
import Board from "../Board";
import GameInfoBox from "../GameInfoBox";
import GameSetup from "../GameSetup";
// Styles
import { GameContainer } from "../../styles";

const Game = () => {
  return (
    <GameContainer>
			<GameSetup />
      <Board />
      <GameInfoBox />
    </GameContainer>
  );
};

export default Game;
