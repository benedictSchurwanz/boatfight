import { Stack, Box } from "@mui/material";
import React from "react";

import { BoardContainer, GridContainer } from "../../styles";

const Board = () => {
	const columnlabels = Array.from("ABCDEFGHIJ");
	const rowlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		
  return (
    <BoardContainer>
      <GridContainer>
        <Stack 
					direction="column" 
					alignItems="stretch"
					justifyContent="center"
					sx={{
						width: 1,
						height: 1,
					}}
				>
					<ColumnOfRows />
				</Stack>
      </GridContainer>
    </BoardContainer>
  );
};

export default Board;

const ColumnOfRows = () => {
	const output = []
	
	for (let i = 0; i < 10; i++) {
		output.push(
			<Row rowNum={i}/>
		)
	}
	
	return output
}

const Row = ({rowNum}) => {
	const row = createBoxRow({rowNum})
	
  return (
			<Stack 
				direction="row" 
				alignItems="stretch"
				justifyContent="space-evenly"
				border={[[1, 0], "solid", "red"]}
				sx={{
					height: 1,
					width: 1,
					gap: 0
				}}
				>
				{row}
			</Stack>
	)
};

const createBoxRow = ({rowNum}) => {
	const boxrow = []
	
	for (let i = 0; i < 10; i++) {
		boxrow.push(
				<Cell row={rowNum} col={i}/>
			)
	}
	
	return (boxrow)
};

const Cell = ({row, col, content}) => {
	return (
		<Box 
			sx={{
				width: 1,
				height: 1,
				borderLeft: 2,
				borderColor: "black",
				textAlign: "center"
			}}
		>
			{content}
		</Box>
	)
}
