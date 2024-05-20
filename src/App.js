// Dependencies
import React, { useContext } from "react";
import { Routes, Route } from "react-router";
// Styles
import { AppContainer, Title } from "./styles";
import "./styles/app.css";
// React Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";

export default function App() {
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
