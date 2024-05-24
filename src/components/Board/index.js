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
  const column_label_letters = Array.from("🚢ABCDEFGHIJ");
  const { state: boardState, dispatch: boardDispatch } =
    useContext(BoardContext);

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
          <RowsContainer />
        </Stack>
      </Box>
    </BoardContainer>
  );
};

const Cell = ({content}) => {
  const { state: setupState } = useContext(SetupContext);
	// const content = props.content;
  const clickHandler = () => {
    if (setupState.status) {
			console.log("a cell was clicked")
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        borderRight: "1px solid black",
        textAlign: "center",
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

const createRow = ({ rowNum }) => {
  const rowOfBoxes = [];

  rowOfBoxes.push(
    <Cell key={`$rowNum` + `-1`} row={rowNum} col={-1} content={rowNum + 1} />
  );

  for (let i = 0; i < 10; i++) {
    rowOfBoxes.push(<Cell key={`$rowNum` + i} row={rowNum} col={i} />);
  }

  return rowOfBoxes;
};

const Row = ({ rowNum }) => {
  const row = createRow({ rowNum });

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="space-evenly"
      sx={{ width: 1, height: 1, borderBottom: "1px solid black" }}
    >
      {row}
    </Stack>
  );
};

const RowsContainer = () => {
  // creates the outer array of the 2x2 matrix, and the row arrays
  const output = [];

  for (let i = 0; i < 10; i++) {
    output.push(<Row key={i} rowNum={i} />); // creates an array for each row, adds it to outer array
  }

  return output;
};

export default Board;
