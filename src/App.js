// Dependencies
import React from "react";

// React Components
import Board from "./components/Board"

// CSS
import './index.css';

// Styled Components
import { 
  Container,
  Title
 } from "./styles/styled-components";
 
function App() {
  return (
    <Container>
      <Title>BoatFight</Title>
      <Board />
    </Container>
  );
}

export default App;

/* Do Next:

*/
