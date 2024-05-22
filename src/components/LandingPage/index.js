// Dependencies
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";
import { SetupContext } from "../../state/contexts";
import { PLACE_BOATS } from "../../state/constants";

const LandingPage = () => {
	const {state: setup, dispatch: setupdispatch} = useContext(SetupContext)
	
	const clickHandler = () => {
		console.log("Start Game button has been clicked")
		console.log("Load boat placement")
		setupdispatch({type: PLACE_BOATS})
	}
	
  return (
    <Link to="/game">
      <Button 
				variant="contained"
				onClick={clickHandler}
			>
        Start Game
      </Button>
    </Link>
  );
};

export default LandingPage;
