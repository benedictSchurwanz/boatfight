// Board.js
// Functions acting upon a given board.

// A Board is a 2-dimensional array of 10 rows and 10 columns,
// each with an object like this: 
// { boat: 'EMPTY'/pointer to boat object, 
//	 status: OPEN/HIT/MISS }

export const get_cell = (board, [row, col]) => {
	// row & col are numbers 0-9
	return board[row][col]
}

export const cell_is_empty = (board, [row, col]) => {
	return get_cell(board, [row, col]).boat == "EMPTY"
}