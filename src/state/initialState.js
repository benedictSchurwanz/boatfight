import { fleet_type } from "../game-settings";

// CONSTANTS
export const EMPTY = "EMPTY";
export const HIT = "HIT";
export const MISS = "MISS";
export const OPEN = "OPEN";

const createEmptyCell = () => {
  return {
    boat: EMPTY,
    shot: OPEN,
  };
};

// row of 10 "emptyCell"s
const createEmptyRow = () => {
  return Array.from(
    Array(10), // create an empty array
    () => createEmptyCell() // fill each spot with an empty cell
  );
};

const createBoard = () => {
  // Create an array with 10 copies of
  // an array with 10 copies of
  // this object: { boat: EMPTY, shot: OPEN }

  // empty array, length: 10
  const gridContainer = Array(10);

  // fill empty array with rows of empty Cells
  const grid = Array.from(gridContainer, () => createEmptyRow());

  return grid;
};

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
