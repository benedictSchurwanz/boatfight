// Dependencies
import React, { createContext, useEffect, useState } from "react";
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

export const GameContext = createContext();

export default function App() {
  const [game, setGame] = useState(initialState);

	// console.log("", game[1].board[0][0])
	
  return (
    <>
		<CssBaseline />
		<GameContext.Provider value={{ game, setGame }}>
			<AppContainer>
				<Title>BoatFight!</Title>
				<Routes>
					<Route exact path="/" element={<LandingPage />} />
					<Route path="/game" element={<Game />} />
				</Routes>
			</AppContainer>
		</GameContext.Provider>
    </>
  );
}
