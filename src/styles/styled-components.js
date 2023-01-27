import styled from "styled-components";

export const Container = styled.div`
	// border: 10px solid red;
	
	display: flex;
	flex: 0 1 auto;
	
	flex-direction: column;
	align-items: center;
`

export const Title = styled.h1`
	// border: 1px solid red;
	
	width: auto;
`

// Board
export const BoardContainer = styled.div`
	// border: 1px solid red;
	
	// width: 50vw;
	// height: 50vw;
	width: 550px;
	height: 440px;
	
	align-self: flex-start;
  background-color: lightblue;
	border-radius: 1em;
	
	margin: 1em;
	padding: 1rem;
	padding-top: 0.2rem;
	padding-left: 1rem;
	padding-right: 0rem;
	
	* {
		white-space: pre-wrap;
		font-family: monospace;
		font-size: 0.825rem;
		line-height: 1.175rem;
	}
`
