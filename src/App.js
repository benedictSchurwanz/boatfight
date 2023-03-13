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
import { useCurrentPlayer } from "./state/get";

export const GameContext = createContext(initialState);
export const ThemeContext = createContext('light');

export default function App() {
  const [game, setGame] = useState(initialState);
	
  return (
		<>
		<GameContext.Provider value={{ game, setGame }}>
		<CssBaseline />
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

