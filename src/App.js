// Dependencies
import React from "react";

// React Components
import Board from "./components/Board/Board";
import GameInfoBox from "./components/GameInfoBox/GameInfoBox.js";

// CSS
import "./index.css";

// Styled Components
import { AppContainer, Title, GameContainer } from "./styles";

const initialGameState = {
  game_id: 0,
  player1: {},
  player2: {},
  score: {},
  winner: 0
}

const initialPlayerState = {
  player_id: 0,
  player_name: "",
  board: [],
  fleet: [],
  boats_floating: null,
}

const initialFleetState = []

const initialBoatState = {
  boat_name: "",
  boat_length: 0,
  boat_status: [], // array containing the squares of the boat, containing hit/miss/null
}



function App() {
  
  
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
