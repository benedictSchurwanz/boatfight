import React from "react";

import { BoardContainer } from "../../styles";
import CreateGridComponents from "./CreateGridComponents"

const Board = () => {
  const columnlabels = Array.from("ABCDEFGHIJ");
  const rowlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <BoardContainer>
      <CreateGridComponents />
    </BoardContainer>
  );
};

export default Board;
