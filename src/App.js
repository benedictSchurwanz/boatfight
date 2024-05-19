// Dependencies
import React, { useContext } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";
// state
import { GameContext, PlayersContext } from "./state/contexts";
// functions
import * as board from "./actions/board";

export default function App() {
  const { state: gamestate } = useContext(GameContext);
  const { state: players } = useContext(PlayersContext);
  const player1 = players[1];
  const player2 = players[2];

  console.log("state from GameContext", gamestate);
  console.log("state from playersContext", players);
  console.log("player 1, board [0,0]", player1.board[0][0]);
	console.log("get cell", board.get_cell(player1.board, [1,1]))
	console.log("is cell empty", board.cell_is_empty(player1.board, [1,1]))

  return (
    <AppContainer>
      <Title>BoatFight!</Title>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AppContainer>
  );
}
