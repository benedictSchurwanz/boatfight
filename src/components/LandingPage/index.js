// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";
// functions
import { useGameSetup } from "../../functions/setup";
import {
  GameContext,
  PlayersContext,
  SetupContext,
} from "../../state/contexts";

const LandingPage = () => {
  const { dispatch: setupdispatch } = useContext(SetupContext);
  const { state: gamestate } = useContext(GameContext);
  const { state: playerstate } = useContext(PlayersContext);

  const useStartGameButton = () => {
    console.log("Start Game button has been clicked");

    useGameSetup({ gamestate, playerstate, setupdispatch });
  };

  return (
    <Link to="/game">
      <Button variant="contained" onClick={useStartGameButton}>
        Start Game
      </Button>
    </Link>
  );
};

export default LandingPage;
