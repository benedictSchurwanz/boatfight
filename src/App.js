// Dependencies
import React from "react";
import { Routes, Route } from "react-router";
// React Components
import LandingPage from "./components/LandingPage"
import Game from "./components/Game"
// Styles
import { AppContainer, Title } from "./styles";
import "./index.css";

const initialGameState = {
  game_id: 0,
  player1: {},
  player2: {},
  score: {},
  winner: 0,
};

const initialPlayerState = {
  player_id: 0,
  player_name: "",
  board: [],
  fleet: [],
  boats_floating: null,
};

const initialFleetState = [];

const initialBoatState = {
  boat_name: "",
  boat_length: 0,
  boat_status: [], // array containing the squares of the boat, containing hit/miss/open
};

function App() {
  return (
    <AppContainer>
      <Title>BoatFight!</Title>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/game" element={<Game />}/>
      </Routes>
    </AppContainer>
  );
}

export default App;
