// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styles, mui
import { Button } from "@mui/material";

const LandingPage = () => {
  return (
    <Link to="/game">
      <Button variant="contained" color="primary">
        Start Game
      </Button>
    </Link>
  );
};

export default LandingPage;
