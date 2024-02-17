import { ROW, COL } from "../helpers/constants.js"

const getCellAt = () => {
	
}

const pickACell = (boardGridArrays, row, col) => {
	
}


// Write words of what you want to do,
// Turn the words into functions
// Don't be fancy, be direct, be simple
// Omit needless words :D 
// It doesn't matter how it gets implemented;
// try to be simple, but get it done,
// revise it later.

SupportingFunctions = 
theBoatWillFit
	thereIsEnoughSpace
	boatsAreInTheWay
putTheBoatInPlace

// go ahead and repeat your code,
// DRY it later

const thereIsEnoughSpace = (length, position, direction) => {
	return ((length + position) < 10)
}

const boatsAreInTheWay = (length, direction, grid) => {
	
}

const theProposedLocationOfThisBoat = () => {
	get the string of cells where the boat would go, so we can check for boats in the cell
	check the given location for boats
	are there boats in the way?
}


export const placeOneBoat = (boat, grid, direction, row, col) => {
	// grid at row, col is target
	// direction is ROW or COL
	const length = boat.length
	const coords = {row: row, col: col}
	const cellsArray = []
	
	if (direction == ROW)
		will the boat fit?
			thereIsEnoughSpace(length, coords[direction]) &&
			boatsInTheWay(length, direction)
			
				at row=row, from col to col+boat.length,
					is Cell.boat==empty? 
		
	if no: return failure
	
	put boat in grid at row, col coordinates
		if direction is ROW:
			at row, from col to col+boat.length
				cell.boat = currentPlayer.name + "-" + boat.name
		if direction is COL:
			at col, from row to row+boat.length
				cell.boat = currentPlayer.name + "-" + boat.name

	return success
}
