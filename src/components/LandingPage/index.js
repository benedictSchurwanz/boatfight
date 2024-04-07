// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";

const LandingPage = () => {
	const clickHandler = () => {
		console.log("Start Game button has been clicked")
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
