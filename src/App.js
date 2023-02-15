// Dependencies
import React from "react";

// React Components
import Board from "./components/Board/Board";
import GameInfoBox from "./components/GameInfoBox/GameInfoBox.js";

// CSS
import "./index.css";

// Styled Components
import { AppContainer, Title, GameDisplay } from "./styles";

function App() {
  return (
    <AppContainer>
      <Title>BoatFight</Title>
      <GameDisplay>
        <Board />
        <GameInfoBox />
      </GameDisplay>
    </AppContainer>
  );
}

export default App;

/* Do Next:

*/
