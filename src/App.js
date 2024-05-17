// Dependencies
import React, { useState } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import { CssBaseline } from "@mui/material";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";
// state
import initialState from "./state/initialState";
import { GameContext, PlayersContext } from "./state/contexts";

export default function App() {
  const [game, setGame] = useState(initialState.game);
  const [players, setPlayers] = useState(initialState.players);

	console.log("initialState", initialState)
	console.log("game: ", game)
	console.log("players: ", players)
	
  return (
    <GameContext.Provider value={{ game, setGame }}>
      <PlayersContext.Provider value={{ players, setPlayers }}>
        <CssBaseline />
        <AppContainer>
          <Title>BoatFight!</Title>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </AppContainer>
      </PlayersContext.Provider>
    </GameContext.Provider>
  );
}
