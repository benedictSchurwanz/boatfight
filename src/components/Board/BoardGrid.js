import React from "react";
import { Grid } from "@mui/material";

import { BoardGridContent, GridRowContainer } from "../../styles";

export const BoardGrid = () => {
  return (
    <BoardGridContent>
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </BoardGridContent>
  );
};

const GridRow = () => {
  return (
    <GridRowContainer>
      <Grid container spacing={2} columns="10" justifyContent="space-evenly">
        <Grid item xs={0.95}>
          <div className="square">💥</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">🌊</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
        <Grid item xs={0.95}>
          <div className="square">X</div>
        </Grid>
      </Grid>
    </GridRowContainer>
  );
};
