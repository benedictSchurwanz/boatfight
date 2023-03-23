import { Stack, Box } from "@mui/material";

const ColumnOfRows = () => {
  const output = [];

  for (let i = 0; i < 10; i++) {
    output.push(<Row key={i.toString()} rowNum={i} />);
  }

  return output;
};

const Row = ({ rowNum }) => {
  const row = createBoxRow({ rowNum });

  return (
    <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="space-evenly"
      sx={{
        width: 1,
        height: 1,
        borderBottom: "1px solid black",
      }}
    >
      {row}
    </Stack>
  );
};

const createBoxRow = ({ rowNum }) => {
  const boxrow = [];

  for (let i = 0; i < 10; i++) {
    boxrow.push(<Cell key={rowNum + "" + i} row={rowNum} col={i} />);
  }

  return boxrow;
};

const Cell = ({ row, col, content }) => {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        border: "1px solid black",
        borderTop: 0,
        borderLeft: 0,
        borderBottom: 0,
        textAlign: "center",
      }}
    >
      {content}
    </Box>
  );
};

export default function CreateGridComponents() {
  return (
    <Box
      sx={{
        border: "2px solid blue",
        width: 1,
        margin: 0,
        padding: 0,
      }}
    >
      <Stack
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
        }}
      >
        <ColumnOfRows />
      </Stack>
    </Box>
  );
}
