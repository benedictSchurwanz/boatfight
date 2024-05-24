// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";
// functions
import { useGameSetup } from "../../functions/setup";
import { BoardContext, SetupContext } from "../../state/contexts";

const LandingPage = () => {
	const {dispatch} = useContext(SetupContext)
	const {state: boardstate} = useContext(BoardContext)
	
  const useStartGameButton = () => {
		console.log("Start Game button has been clicked");
		console.log("board state", boardstate)	
		
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
