// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline } from "@mui/material";

// Components
import App from "./App";

import { GameProvider, PlayersProvider } from "./state/contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GameProvider>
      <PlayersProvider>
        <CssBaseline />
        <App />
      </PlayersProvider>
    </GameProvider>
  </BrowserRouter>
);
