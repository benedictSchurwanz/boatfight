// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
// Styles
import "./index.css";
import { AppContainer, Title, GameContainer } from "./styles";
// Components
import Board from "./components/Board/Board";
import GameInfoBox from "./components/GameInfoBox/GameInfoBox.js";


function App() {
  const dispatch = useDispatch()
  
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
