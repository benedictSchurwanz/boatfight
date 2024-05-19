// Dependencies
import React, { useContext } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import { CssBaseline } from "@mui/material";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";
// state
import { GameContext, PlayersContext } from "./state/contexts";

export default function App() {
  const { state: gamestate } = useContext(GameContext);
  const { state: players } = useContext(PlayersContext);
	const player1 = players[1]
	const player2 = players[2]

  console.log("state from GameContext", gamestate);
  console.log("state from playersContext", players);
  console.log("player 1, board [0,0]", player1.board[0][0]);

  return (
    <AppContainer>
      <CssBaseline />
      <Title>BoatFight!</Title>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AppContainer>
  );
}
