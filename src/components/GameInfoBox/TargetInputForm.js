import React from "react";
import { FormContainer } from "../../styles";
import { Button, Form, Input } from 'antd';

const finishHandler = () => {
	console.log('Success. ')
}

const TargetInputForm = () => {
  return (
		<FormContainer>
			<Form 
				name="target-input-form"
				onFinish={finishHandler}
			>
				
			</Form>
		</FormContainer>
	);
};

export default TargetInputForm;
