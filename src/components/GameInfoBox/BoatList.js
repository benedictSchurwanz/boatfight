import React, { useContext } from "react";
import { UL } from "../../styles";
import { AppContext } from "../../App";

const BoatList = () => {
  const { state, setState } = useContext(AppContext);
  const fleet = state[state.current_player].fleet

  return (
    <UL>
      {fleet.map((boat) => (
        <li key={boat.name}>{boat.name}</li>
      ))}
    </UL>
  );
};

export default BoatList;
