// Dependencies
import React from "react";
import { useDispatch } from "react-redux";
// Styles
import { TextField, Button } from "@mui/material";
import { FormContainer, FireButton } from "../../styles";
// Components
import { setup } from "../../state/reducers/gameReducer.js";

const TargetInputForm = () => {
  const dispatch = useDispatch();
  
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
            dispatch(setup("hi"))
          }}
        >
          Fire
        </Button>
      </FireButton>
    </FormContainer>
  );
};

export default TargetInputForm;
