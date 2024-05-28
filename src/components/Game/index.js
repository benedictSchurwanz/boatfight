// Dependencies
import React from "react";
// React Components
import Board from "../Board";
import GameInfoBox from "../GameInfoBox";
// Styles
import { GameContainer } from "../../styles";
import { GameSetup } from "../GameSetup";

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
