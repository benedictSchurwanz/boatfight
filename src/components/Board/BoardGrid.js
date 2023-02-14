import React from "react";

import { BOARD_TEXT_GRID } from "../../game-settings/game-settings-helpers/board-text-grid";
import { BoardGridContent } from "../../styles";

export const BoardGrid = () => {
return (
		<BoardGridContent>
			{ BOARD_TEXT_GRID }
		</BoardGridContent>
	)	
}