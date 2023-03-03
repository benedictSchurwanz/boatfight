import React from "react";
import { Grid } from "@mui/material";

import { BoardGridContent } from "../../styles";

export const BoardGrid = () => {
  return (
    <BoardGridContent>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={1}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={1}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={1}>
          <div className="square">X</div>
        </Grid>
      </Grid>
    </BoardGridContent>
  );
};
