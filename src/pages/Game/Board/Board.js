import React from "react";

import { BoardGrid } from "./BoardGrid";
import { BoardContainer } from "../../../styles";

const Board = () => {
  return (
    <BoardContainer>
      <BoardGrid />
    </BoardContainer>
  );
};

export default Board;
