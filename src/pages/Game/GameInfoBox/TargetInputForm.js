// Dependencies
import React from "react";
// Styles
import { TextField, Button } from "@mui/material";
import { FormContainer, FireButton } from "../../../styles";

const TargetInputForm = () => {
  return (
    <FormContainer>
      <TextField
        id="target-input"
        label="Identify target:"
        variant="outlined"
        helperText="Example: A1"
      />
      <FireButton>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          onClick={() => {
            console.log("Fire button was clicked")
          }}
        >
          Fire
        </Button>
      </FireButton>
    </FormContainer>
  );
};

export default TargetInputForm;
