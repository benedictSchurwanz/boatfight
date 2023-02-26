// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styles, mui
import Button from "@mui/material/Button";

const LandingPage = () => {
  return (
    <Link to="/game">
      <Button variant="contained">
        Start Game
      </Button>
    </Link>
  );
};

export default LandingPage;
