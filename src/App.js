// Dependencies
import React from "react";

// CSS
import './index.css';

// Styled Components
import { 
  Container,
  BoardContainer,
  Title
 } from "./styles/styled-components";
 
import { BOARD_TEXT_GRID } from "./game-settings/game-settings-helpers/board-text-grid.js";

function App() {
  return (
    <Container>
      <Title>BoatFight</Title>
      <BoardContainer>
        <p> 
          { BOARD_TEXT_GRID }
        </p>
      </BoardContainer>
    </Container>
  );
}

export default App;

/* Do Next:


*/