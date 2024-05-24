export const EMPTY = "EMPTY";
export const HIT = "HIT";
export const MISS = "MISS";
export const OPEN = "OPEN";

const initialBoardGrid = Array.from({ length: 10 }, (_, rowIndex) => Array.from({ length: 10 }, (_, colIndex) => {
	return ({ 
		row: rowIndex,
		col: colIndex,
		status: OPEN, 
		boat: EMPTY,
		contents: ""
	})}));

export {initialBoardGrid}

/*  old Board setup:

//  CREATE A CELL  //

const createEmptyCell = () => {
  return {
    boat: EMPTY,
    status: OPEN,
  };
};

//  CREATE THE BOARD  //

const createEmptyRow = () => {
	// row of 10 "emptyCell"s
  return Array.from(
    Array(10), // create an empty array
    () => createEmptyCell() // fill each spot with an empty cell
  );
};

const createBoard = () => {
  // Create an array with 10 arrays,
  // each with 10 empty cell objects: 
	// { boat: EMPTY, status: OPEN }

  // empty array, length: 10
  const gridContainer = Array(10);

  // fill empty array with rows of empty Cells
  const grid = Array.from(gridContainer, () => createEmptyRow());

  return grid;
};
*/

