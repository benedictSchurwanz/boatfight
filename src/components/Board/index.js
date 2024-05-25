import { Stack, Box } from "@mui/material";
import React, { useState, useContext } from "react";
import {
  GameContext,
  PlayersContext,
  BoardContext,
  SetupContext,
} from "../../state/contexts";
import { BoardContainer } from "../../styles/index";
import * as muiStyles from "../../styles/muiStyles";

const Board = () => {
  const column_label_letters = Array.from("💥ABCDEFGHIJ");
  const { state: boardState, dispatch: boardDispatch } =
    useContext(BoardContext);

  const gridClickHandler = (clickedCell) => {
    console.log("gridClickHandler was clicked");
  };

  return (
    <BoardContainer>
      <Box sx={{ border: "2px solid blue", width: 1, margin: 0, padding: 0 }}>
        <Stack
          direction="column"
          alignItems="stretch"
          justifyContent="center"
          sx={{ width: 1, height: 1 }}
        >
          <ColumnLabels letters={column_label_letters} />
          <Grid
          // onClick={() => gridClickHandler()}
          // gridClickHandler={gridClickHandler}
          />
        </Stack>
      </Box>
    </BoardContainer>
  );
};

const Cell = ({ row, col, content, gridClickHandler }) => {
  const { state: setupState } = useContext(SetupContext);
  const [clicked, setClicked] = useState(false);
  // const content = props.content;

  const clickHandler = (event) => {
    console.log(`Cell click handler: ${row},${col} was clicked`);

    setClicked(!clicked);

    if (setupState.status) {
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        borderRight: "1px solid black",
        textAlign: "center",
        backgroundColor: clicked ? "#e53935" : "transparent",
      }}
      onClick={clickHandler}
    >
      {content}
    </Box>
  );
};

const ColumnLabels = ({ letters }) => {
  // Make the first row into column labels
  const labelsRow = [];

  for (let i = -1; i < 10; i++) {
    labelsRow.push(
      <Cell key={"-1" + i} row={-1} col={i} content={letters.shift()} />
    );
  }

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="space-evenly"
      sx={{ width: 1, height: 1, borderBottom: "1px solid black" }}
    >
      {labelsRow}
    </Stack>
  );
};

const Row = ({ rowNum }) => {
  // const row = createRow({ rowNum });
	const newRow = [];

  // the first position has the row number label
  newRow.push(
    <Cell key={`$rowNum` + `-1`} row={rowNum} col={-1} content={rowNum + 1} />
  );

  // create the rest of the row
  for (let i = 0; i < 10; i++) {
    newRow.push(<Cell key={`$rowNum` + i} row={rowNum} col={i} />);
  }

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="space-evenly"
      sx={{ width: 1, height: 1, borderBottom: "1px solid black" }}
    >
      {newRow}
    </Stack>
  );
};

const Grid = () => {
  // the container for the rows
  const rowsArray = [];

  // creates each row, adds it to the container
  for (let i = 0; i < 10; i++) {
    rowsArray.push(<Row key={i} rowNum={i} />);
  }

  return (
		<Stack>
			{rowsArray}
		</Stack>
	)
};

export default Board;
