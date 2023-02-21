import React from "react";
import fleet from "../../../game-settings";
import { UL } from "../../../styles";

const BoatList = () => {
  const boatList = fleet;

  return (
    <UL>
      {boatList.map((boat) => (
        <li key={boat.name}>{boat.name}</li>
      ))}
    </UL>
  );
};

export default BoatList;
