import React from "react";
import { FormContainer, FireButton } from "../../styles";
import { TextField, Button } from "@mui/material";

const TargetInputForm = () => {
  return (
    <FormContainer>
      <TextField
        id="target-input"
        label="Select your target:"
        variant="outlined"
        helperText="example: A1"
      />
      <FireButton>
        <Button variant="contained" size="medium" color="warning">
          Fire
        </Button>
      </FireButton>
    </FormContainer>
  );
};

export default TargetInputForm;
