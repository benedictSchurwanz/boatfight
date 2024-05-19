// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./App";

import { GameProvider, PlayersProvider } from "./state/contexts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GameProvider>
      <PlayersProvider>
        <App />
      </PlayersProvider>
    </GameProvider>
  </BrowserRouter>
);
