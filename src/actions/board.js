// Board.js
// Functions acting upon a given board.
// A Board is a 2-dimensional array of 10 rows and 10 columns,
// each with an object like this: 
// { boat: 'EMPTY'/pointer to boat object, 
//	 status: OPEN/HIT/MISS }

export const get_cell = (board, [row, col]) => {
	// coordinates shall be an array of length two, with numbers 0-9, [row, col]
	return board[row][col]
}

export const cell_empty = (board, [row, col]) => {
	return get_cell(board, [row, col]).boat == "EMPTY"
}