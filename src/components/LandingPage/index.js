// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";
// functions
import { useGameSetup } from "../../functions/setup";
import { SetupContext } from "../../state/contexts";

const LandingPage = () => {
	const {dispatch} = useContext(SetupContext)
	
  const useStartGameButton = () => {
		console.log("Start Game button has been clicked");
		
		useGameSetup(dispatch)
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
