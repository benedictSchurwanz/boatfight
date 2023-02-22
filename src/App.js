// Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";
// Styles
import "./index.css";
import { AppContainer, Title } from "./styles";
// App Components
import LandingPage from "./components/LandingPage";
import Game from "./components/Game";

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
