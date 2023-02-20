// Dependencies
import React from "react";
import { useDispatch } from "react-redux";

// React Components
import Board from "./components/Board/Board";
import GameInfoBox from "./components/GameInfoBox/GameInfoBox.js";

// Styles
import "./index.css";
import { AppContainer, Title, GameContainer } from "./styles";

function App() {
  const dispatch = useDispatch()
  
  return (
    <AppContainer>
      <Title>BoatFight</Title>
      <GameContainer>
        <Board />
        <GameInfoBox dispatch={dispatch}/>
      </GameContainer>
    </AppContainer>
  );
}

export default App;
