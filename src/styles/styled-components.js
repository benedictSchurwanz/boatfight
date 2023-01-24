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
	
	width: 50vw;
	height: 50vw;
	align-self: flex-start;
  background-color: lightblue;
	border-radius: 1em;
	
	margin: 1em;
	padding: 1em;
	padding-left: 2.5em;
	padding-right: 0em;
	
	* {
		white-space: pre-wrap;
		font-family: monospace;
		font-size: 1.15em;
		line-height: 1.8em;
	}
`
