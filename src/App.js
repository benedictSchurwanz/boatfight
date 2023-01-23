// Dependencies
import React from "react";

// CSS
import './index.css';

// Styled Components
import { 
  Container,
  BoardContainer,
  Title
 } from "./styles/styled-components"
 
 import { BOARD_GRID_STRING } from "./game-settings/game-settings-helpers/text-grid.js";

function App() {
  return (
    <Container>
      <Title>BoatFight</Title>
      <BoardContainer>{ BOARD_GRID_STRING }</BoardContainer>
    </Container>
  );
}

export default App;

/* Do Next:

- board grid


*/