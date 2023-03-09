import { Stack, Box } from "@mui/material";
import React from "react";

import { BoardContainer, GridContainer, RowContainer } from "../../styles";

const Board = () => {
	const columnlabels = Array.from("ABCDEFGHIJ");
	const rowlabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const rowOfBoxes = createBoxRow()
		
  return (
    <BoardContainer>
      <GridContainer>
        <Stack 
					direction="column" 
					alignItems="stretch"
					justifyContent="center"
					sx={{
						width: 1,
						height: 1
					}}
				>
					<ColumnOfRows row={createBoxRow()}/>
				</Stack>
      </GridContainer>
    </BoardContainer>
  );
};

export default Board;

const ColumnOfRows = ({row}) => {
	const output = []
	
	for (let i = 0; i < 10; i++) {
		output.push(
			<Row row={row}/>
		)
	}
	
	return output
}

const Row = ({row}) => {
  return (
			<Stack 
				direction="row" 
				alignItems="stretch"
				justifyContent="space-evenly"
				border={[1, 0]}
				borderColor="red"
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

const createBoxRow = () => {
	const boxrow = []
	
	for (let i = 0; i < 10; i++) {
		boxrow.push(
			<Box 
				sx={{
					width: 1,
					height: 1,
					border: [0, 1, 0, 0],
					borderColor: "black",
					textAlign: "center"
				}}
			>
				X
			</Box>
			)
	}
	
	return (boxrow)
};
