// Dependencies
import React, { useState } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import { CssBaseline } from "@mui/material";
import "./styles/app.css";
// React Components
import LandingPage from "./view-components/LandingPage";
import Game from "./view-components/Game";
// state
import initialState from "./state/initialState";
import { GameContext, PlayersContext } from "./state/contexts";
// hooks
import { usePlayer, useCurrentPlayer, useBoard } from "./state/hooks";

export default function App() {
  const [game, setGame] = useState(initialState.game);
  const [players, setPlayers] = useState(initialState.players);
	
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
