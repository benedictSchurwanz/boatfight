import styled from "styled-components";

export const AppContainer = styled.div`
  // border: 10px solid red;

  display: flex;
  flex: 0 1 auto;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  // border: 1px solid red;

  width: auto;
`;

export const GameDisplay = styled.div`
  // display: flex;
  // flex-direction: row;
  display: block;
  width: 100%;
`;

// Board
export const BoardContainer = styled.div`
  border: 1px solid red;

  width: 50vw;
  // height: 50vw;

  align-self: flex-start;
  background-color: lightblue;
  border-radius: 1em;

  margin: 1em;
  padding: 1rem;
  padding-bottom: 2.2rem;

  * {
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 0.825rem;
    line-height: 1.175rem;
  }
`;

export const BoardGridContent = styled.div`
  font-size: 0.725rem;
`