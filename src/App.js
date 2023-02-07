// Dependencies
import React from "react";

// React Components
import Board from "./components/Board/Board"

// CSS
import './index.css';

// Styled Components
import { 
  AppContainer,
  Title
 } from "./styles/styled-components";
 
function App() {
  return (
    <AppContainer>
      <Title>BoatFight</Title>
      <Board />
    </AppContainer>
  );
}

export default App;

/* Do Next:

*/
