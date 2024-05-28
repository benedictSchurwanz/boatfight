// Dependencies
import React, { useContext } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";
import { useGameSetup } from "./functions/setup";
import { GameContext, PlayersContext, SetupContext } from "./state/contexts";

export default function App() {
	const { dispatch: setupdispatch } = useContext(SetupContext);
  const { state: gamestate } = useContext(GameContext);
  const { state: playerstate } = useContext(PlayersContext);

	const useTitleClick = () => {
		useGameSetup({gamestate, playerstate, setupdispatch})
	}
	
  return (
    <AppContainer>
      <Title
				onClick={useTitleClick}
			>BoatFight!</Title>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AppContainer>
  );
}
