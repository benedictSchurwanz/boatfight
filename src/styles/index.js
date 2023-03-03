import styled from "styled-components";

export const AppContainer = styled.div`
  // border: 10px solid gray; // for debugging

  display: flex;
  flex: 0 1 auto;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  // border: 1px solid gray; // for debugging

  width: auto;
`;

export const GameContainer = styled.div`
  // border: 1px solid gray; // for debugging
	
  // display: block;
  display: flex;
  flex-direction: row;
  width: 100vw;
	padding: 1rem;
	
	* {
		margin-left: 1rem;
	}
`;

export const BoardContainer = styled.div`
	// border: 1px solid gray; // for debugging

  width: 61.8vw;

  display: flex;
  justify-content: center;
  background-color: lightblue;
  border-radius: 1em;

	padding: 1.62rem;
  padding-bottom: 2rem;

  * {
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 0.825rem;
    line-height: 1.175rem;
  }
`;

export const BoardGridContent = styled.div`
	// border: 1px solid gray; // for debugging
	
	width: 100%;
	margin: 0rem;
	font-size: 0.725rem;
`;

export const GameInfoContainer = styled.div`
  // border: 1px solid red; // for debugging

  width: 38.2vw;

  display: flex;
  flex-direction: column;
  background-color: lightblue;
  border-radius: 1em;

	margin-right: 1rem;
  padding-bottom: 2.2rem;

  * {
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 0.825rem;
    line-height: 1.175rem;
  }

	> * {
		padding: 0.62rem;
	}
`;

export const GameInfoHeader = styled.h2`
	// border: 1px solid gray; // for debugging

  color: slategray;
  font-size: 1.1rem;
  padding-left: 2rem;
  padding-top: 0.5rem;
  margin: 0;
`;

export const UL = styled.ul`
	// border: 1px solid gray; // for debugging
	
	padding: 1rem;
  padding-bottom: 2rem;
	margin: 1rem;
  border-bottom: 1px solid lightslategray;
`;

export const FormContainer = styled.div`
	// border: 1px solid red; // for debugging
  
  display: flex;
  flex-direction: column;
	
	margin: 0rem 1rem;
	padding: 1.62rem;
	
  * {
    // border: 1px solid brown;
		margin: 0;
  }
`;

export const FireButton = styled.div`
  display: flex;
  justify-content: center;
`;
