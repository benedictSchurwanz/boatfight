// Dependencies
import React, {  } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import { CssBaseline } from "@mui/material";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";
// state
import { GameProvider, PlayersProvider } from "./state/contexts";

export default function App() {
	// console.log("initialState", initialState)
	// console.log("game: ", game)
	// console.log("players: ", players)
	
  return (
    <GameProvider>
      <PlayersProvider>
        <CssBaseline />
        <AppContainer>
          <Title>BoatFight!</Title>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </AppContainer>
      </PlayersProvider>
    </GameProvider>
  );
}
