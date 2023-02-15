// Dependencies
import React from "react";

// React Components
import Board from "./components/Board/Board";
import GameInfoBox from "./components/GameInfoBox/GameInfoBox.js";

// CSS
import "./index.css";

// Styled Components
import { AppContainer, Title, GameContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Title>BoatFight</Title>
      <GameContainer>
        <Board />
        <GameInfoBox />
      </GameContainer>
    </AppContainer>
  );
}

export default App;

/* Do Next:

*/
