import React, { useContext, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { SetupContext } from "../../state/contexts";
import { PLACE_BOAT_ORIENTATION_FLIP } from "../../state/constants";

const HorizontalToggle = () => {
  const { state: setupstate, dispatch: setupdispatch } =
    useContext(SetupContext);
  const { placeBoatIsHorizontal } = setupstate;
  const [selection, setSelection] = useState(true);

  console.log(placeBoatIsHorizontal ? "horizontal" : "vertical");

  const handleToggle = (event, newSelection) => {
    setupdispatch({ type: PLACE_BOAT_ORIENTATION_FLIP });
  };

  return (
    <div style={{ display: "flex", alignItems: "center"}}>
      <ToggleButtonGroup
        value={placeBoatIsHorizontal}
        exclusive
        onChange={handleToggle}
        sx={{ height: "1em", alignItems: "center"}}
      >
        <span>Horizontal  </span>
        <ToggleButton value={true}>➡️</ToggleButton>
        <ToggleButton value={false}>⬇️</ToggleButton>
        <span>  Vertical</span>
      </ToggleButtonGroup>
    </div>
  );
};

export default HorizontalToggle;
