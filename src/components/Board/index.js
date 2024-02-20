import { Stack, Box } from "@mui/material";
import React, { useState } from "react";

import { BoardContainer } from "../../styles";

const Board = () => {
  const columnlabelletters = Array.from(" ABCDEFGHIJ");

  return (
    <BoardContainer>
      <Box
				sx={{
					border: "2px solid blue",
					width: 1,
					margin: 0,
					padding: 0
				}}
			>
        <Stack
          direction="column"
          alignItems="stretch"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
          }}
        >
					<ColumnLabels letters={columnlabelletters} />
          <ColumnOfRows />
        </Stack>
      </Box>
    </BoardContainer>
  );
};

const ColumnLabels = ({ letters }) => {
	// Make the first row into column labels
	const labelsRow = []
	
	for (let i = -1; i < 10; i++) {
    labelsRow.push(<Cell row={0} col={i} content={letters.shift()} />);
  }
	
	return (    
		<Stack
			direction="row"
			alignItems="stretch"
			justifyContent="space-evenly"
			sx={{
				width: 1,
				height: 1,
				borderBottom: "1px solid black",
			}}
		>
			{labelsRow}
		</Stack>
	);
}

const ColumnOfRows = () => { // creates the outer array of the 2x2 matrix, and the row arrays
  const output = [];

  for (let i = 0; i < 10; i++) {
    output.push(<Row rowNum={i} />); // creates an array for each row, adds it to outer array
  }
	
  return output;
};

const Row = ({ rowNum }) => {
  const row = createRowOfBoxes({ rowNum });

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="space-evenly"
      sx={{
				width: 1,
				height: 1,
				borderBottom: "1px solid black",
      }}
    >
      {row}
    </Stack>
  );
};

const createRowOfBoxes = ({ rowNum }) => {
  const rowOfBoxes = [];
	
	rowOfBoxes.push(<Cell row={rowNum} col={-1} content={rowNum} />)
	
  for (let i = 0; i < 10; i++) {
    rowOfBoxes.push(<Cell row={rowNum} col={i} />);
  }

  return rowOfBoxes;
};

const Cell = (props) => {
	const [row, setRow] = useState(props.row)
	const [col, setCol] = useState(props.col)
	const [content, setContent] = useState(props.content)
	
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        border: "1px solid black",
				borderTop: 0,
				borderLeft: 0,
				borderBottom: 0,
        textAlign: "center",
      }}
    >
      {content}
    </Box>
  );
};

export default Board;
