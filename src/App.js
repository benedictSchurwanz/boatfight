// Dependencies
import React from "react";

// React Components
import Board from "./components/Board/Board";
import { InfoDisplay } from "./components/InfoDisplay/InfoDisplay.js";

// CSS
import "./index.css";

// Styled Components
import { AppContainer, Title, GameDisplay } from "./styles/styled-components";

function App() {
  return (
    <AppContainer>
      <Title>BoatFight</Title>
      <GameDisplay>
        <Board />
        <InfoDisplay />
      </GameDisplay>
    </AppContainer>
  );
}

export default App;

/* Do Next:

*/
