// Dependencies
import React from "react";
import styled from "styled-components";

// CSS
import './index.css';

// Styled Components
import { 
  Container,
  BoardContainer,
  Title
 } from "./styles/styled-components"

function App() {
  return (
    <Container>
      <Title>BoatFight</Title>
      <BoardContainer>Hello.</BoardContainer>
    </Container>
  );
}

export default App;

/* Do Next:
- style BoardContainer
- put it in App
- have a look

Title: 
  - align: center
*/