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
Learn how to do a grid in React
- do a cell
- do lots of cells

*/
