import { fleet_type } from "../game-settings";
 
/* State structure:
The boats are in cells on the board, but we also need to know how many boats, and the health and status of each boat. 
The player has the collection of boats, which have statuses. 
The boat can contain the coordinates of each position it occupies on the board.
The Cell can know what boat it contains, and the status - open, hit, miss.

The database can be interconnected as relational database tables. 
When an operation is performed, all relevant state locations must be updated. This should be done in reducers, to protect state changes. 

- [ ] Draw the database tables,
- [ ] create the reducers

Player
	- Fleet 
		- Boats
			- locations array, status (afloat, sunk), health
	- Board
		- Cell
			- contents: a pointer to the Boat, or empty
			- shot status: open, hit, miss

*/


//  CONSTANTS  //

export const EMPTY = "EMPTY";
export const HIT = "HIT";
export const MISS = "MISS";
export const OPEN = "OPEN";


//  CREATE A CELL  //

const createEmptyCell = () => {
  return {
    boat: EMPTY,
    shot: OPEN,
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
	// { boat: EMPTY, shot: OPEN }

  // empty array, length: 10
  const gridContainer = Array(10);

  // fill empty array with rows of empty Cells
  const grid = Array.from(gridContainer, () => createEmptyRow());

  return grid;
};


//  CREATE THE BOATS  //

const createBoat = (name, size) => {
  return {
    name: name,
    hp_max: size,
    hp_current: size,
  };
};

const createFleet = (fleet_type) => {
  return fleet_type.map((boat) => {
    return createBoat(boat.name, boat.size);
  });
};


//  INITIAL STATE  //

const initialState = {
  game: {
    currentPlayer: "1",
    turn: "0",
    gameOver: false,
  },
  players: {
    1: {
      name: "Player 1",
      board: createBoard(),
      fleet: createFleet(fleet_type),
    },
    2: {
      name: "Player 2",
      board: createBoard(),
      fleet: createFleet(fleet_type),
    },
  },
};

export default initialState;
