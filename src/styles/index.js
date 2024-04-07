import styled from "styled-components";

export const AppContainer = styled.div`
  // border: 1px solid gray; 
	// background-color: lightgrey;
	
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  // border: 1px solid gray; 
	
	font-size: 2rem;
	font-weight: bold;
	
	margin: 0.38rem;
`;


///////// Game Display //////////////////////////


export const GameContainer = styled.div`
  // border: 1px solid black; 

  width: 100vw;
	
  display: flex;
  justify-content: space-evenly;

	> * {
		margin: 0.38rem;
	}
`;


///////// Game Board ////////////////////////////


export const BoardContainer = styled.div`
  // border: 2px solid red; 

  background-color: lightblue;
  border-radius: 1rem;
  width: 59vw;

  display: flex;
	flex-direction: row;
	
	padding: 1rem 1rem 1rem 1rem;
`;

// not being used currently: 
// export const GridContainer = styled.div`
//  // border: 2px solid blue; 
	
//  width: 100%;
  
// 	display: flex;
// 	// flex-direction: column;
// 	// align-items: stretch; 
	
// 	margin: 0;
// 	padding: 0;
// `;

export const Cell = styled.div`
  // border: 1px solid gray; 
	
  display: flex;
  justify-content: center;
  align-items: center;
`;


///////// Game Info Box /////////////////


export const GameInfoContainer = styled.div`
  // border: 1px solid red; 

  background-color: lightblue;
  border-radius: 1rem;
	
  width: 36vw;
  display: flex;
  flex-direction: column;
	
  margin-left: 0;
`;

export const GameInfoHeader = styled.h2`
  // border: 1px solid gray; 

  color: slategray;
	font-family: monospace;
  font-size: 1.25rem;
	text-decoration: underline;
	
	margin: 0;
	padding: 0.5rem 1.5rem 0;
`;

export const BoatListUL = styled.ul`
  // border: 1px solid gray; 

  border-bottom: 1px solid lightslategray;

	margin: 0;
	padding: 0.5rem 2rem 0;
`;


///////// Target Input Form /////////////


export const FormContainer = styled.div`
  // border: 1px solid red; 

  display: flex;
  flex-direction: column;
	
	padding: 1rem;
`;

export const FireButton = styled.div`
  // border: 1px solid red; 

  display: flex;
  justify-content: center;
`;
