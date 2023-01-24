import React from "react";

import { BoardContainer } from "../styles/styled-components";
import { BOARD_TEXT_GRID } from "../game-settings/game-settings-helpers/board-text-grid";

const Board = () => {
	return (
		<BoardContainer>
			<p>
				{ BOARD_TEXT_GRID }
			</p>
		</BoardContainer>
	)
}

export default Board;
