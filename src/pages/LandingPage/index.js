// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styles, mui
import { Button } from "@mui/material";
//
import setUpGame from "../../behaviors/setUpGame";
import store from "../../store";

const LandingPage = () => {
  setUpGame();
  
  console.log(store.game)
  
  return (
    <Link to="/game">
      <Button variant="contained" color="primary">
        Start Game
      </Button>
    </Link>
  );
};

export default LandingPage;
