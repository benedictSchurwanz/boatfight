import React, { useContext } from "react";
import { SetupContext } from "../../state/contexts";

const GameSetup = () => {
  const { state: setupstate } = useContext(SetupContext);
  const currentBoat = setupstate.currentBoat;
  // console.log("currentBoat (GameSetup)", currentBoat);
  // console.log("currentBoat.length (GameSetup)", currentBoat.length);

  return <></>;
};

export default GameSetup;
