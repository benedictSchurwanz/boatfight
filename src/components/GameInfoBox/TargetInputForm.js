import React from "react";

import { setup } from "../../reducers/gameReducer.js";

import { FormContainer, FireButton } from "../../styles";
import { TextField, Button } from "@mui/material";

const TargetInputForm = (props) => {
  return (
    <FormContainer>
      <TextField
        id="target-input"
        label="Identify target:"
        variant="outlined"
        helperText="example: A1"
      />
      <FireButton>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          onClick={() => {
            console.log("Fire button was clicked")
            // props.dispatch(setup())
          }}
        >
          Fire
        </Button>
      </FireButton>
    </FormContainer>
  );
};

export default TargetInputForm;
