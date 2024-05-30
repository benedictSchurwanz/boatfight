import { Stack, Box } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { GameContext, PlayersContext, SetupContext } from "../../state/contexts";
import { BoardContainer } from "../../styles/index";
import { place_a_boat } from "../../functions/setup";

const Board = () => {
	const { state: gamestate } = useContext(GameContext)
  const { state: playerstate } = useContext(PlayersContext);
	const { state: setupstate } = useContext(SetupContext)
	
  const [activeCell, setActiveCell] = useState({row: null, col: null});
	const [isHorizontal, setIsHorizontal] = useState(true)
	
  const column_label_letters = Array.from("💥ABCDEFGHIJ");
  const currentBoat = setupstate.currentBoat;

  const gridClickHandler = ({ row, col }) => {
    console.log(`gridClickHandler`, row, col, " activeCell: ", activeCell);

    if (activeCell && row == activeCell.row && col == activeCell.col) {
      setActiveCell({row: null, col: null});
    } else {
      setActiveCell({row, col});
    }
		
		place_a_boat({activeCell: {row, col}, isHorizontal})
		
		// console.log("currentBoat (Board)", currentBoat)
		// console.log("placeBoatHighlightColor", setupstate.placeBoatHighlightColor)
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
          <Grid gridClickHandler={gridClickHandler} activeCell={activeCell} />
        </Stack>
      </Box>
    </BoardContainer>
  );
};

const Cell = ({ row, col, content, activeCell, gridClickHandler }) => {
  const { state: setupstate, dispatch: setupdispatch } = useContext(SetupContext);
  const [clicked, setClicked] = useState(false);
	
	const match = activeCell && row == activeCell.row && col == activeCell.col;
	
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        borderRight: "1px solid black",
        textAlign: "center",
        backgroundColor: match ? setupstate.placeBoatHighlightColor : "",
      }}
      onClick={() => gridClickHandler({ row, col })}
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

const Row = ({ rowNum, activeCell, gridClickHandler }) => {
  // const row = createRow({ rowNum });
  const newRow = [];

  // the first position has the row number label
  newRow.push(
    <Cell key={`$rowNum` + `-1`} row={rowNum} col={-1} content={rowNum + 1} />
  );

  // create the rest of the row
  for (let i = 0; i < 10; i++) {
    newRow.push(
      <Cell
        key={`$rowNum` + i}
        row={rowNum}
        col={i}
        activeCell={activeCell}
        gridClickHandler={gridClickHandler}
      />
    );
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

const Grid = ({ gridClickHandler, activeCell }) => {
  // the container for the rows
  const rowsArray = [];

  // creates each row, adds it to the container
  for (let i = 0; i < 10; i++) {
    rowsArray.push(
      <Row
        key={i}
        rowNum={i}
        activeCell={activeCell}
        gridClickHandler={gridClickHandler}
      />
    );
  }

  return <Stack>{rowsArray}</Stack>;
};

export default Board;
