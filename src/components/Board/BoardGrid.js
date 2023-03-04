import React from "react";
import { Grid } from "@mui/material";

import {
  BoardGridContent,
  ColumnLabelsContainer,
  GridCellSquare,
  GridRowContainer,
} from "../../styles";

export const BoardGrid = () => {
  const columns = Array.from("ABCDEFGHIJ");
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cells = ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X"];

  return (
    <BoardGridContent>
      {/* 10 rows of squares + 1 row of labels: */}
      <Grid container direction={"column"} columns={11}>
        <ColumnLabels />
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
      </Grid>
    </BoardGridContent>
  );
};

const GridRow = () => {
  return (
    <GridRowContainer>
      <Grid
        container
        spacing={"1rem"}
        columns="11"
        justifyContent="space-evenly"
      >
        <RowLabel
          content={`💥
				`}
        />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
      </Grid>
    </GridRowContainer>
  );
};

const ColumnLabels = () => {
  // different name for clarity, but produces the same content
  return <GridRow />;
};

const RowLabel = ({ content }) => {
  return <GridCell content={content} />;
};

const GridCell = ({ content }) => {
  return (
    <GridCellSquare>
      <Grid item xs={0.95}>
        <div className="square">{content}</div>
      </Grid>
    </GridCellSquare>
  );
};
