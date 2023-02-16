import styled from "styled-components";

export const AppContainer = styled.div`
  // border for debugging purposes:
  // border: 10px solid gray;

  display: flex;
  flex: 0 1 auto;

  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  // border for debugging purposes:
  // border: 1px solid gray;

  width: auto;
`;

export const GameContainer = styled.div`
  // border for debugging purposes:
  // border: 1px solid gray;

  // display: block;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const BoardContainer = styled.div`
  // border for debugging purposes:
  // border: 1px solid gray;

  width: 50vw;
  // height: 50vw;

  display: flex;
  // align-self: flex-start;
  background-color: lightblue;
  border-radius: 1em;

  margin: 0.5em;
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
  // border for debugging purposes:
  font-size: 0.725rem;
`;

export const GameInfoContainer = styled.div`
  // border for debugging purposes:
  // border: 1px solid gray;

  width: 40vw;
  // height: 50vw;

  display: flex;
  flex-direction: column;
  background-color: lightblue;
  border-radius: 1em;

  margin: 0.5em;
  padding: 1rem;
  padding-bottom: 2.2rem;

  * {
    white-space: pre-wrap;
    font-family: monospace;
    font-size: 0.825rem;
    line-height: 1.175rem;
  }
`;

export const GameInfoHeader = styled.h2`
  color: slategray;
  font-size: 1.1rem;
  padding-left: 2rem;
  padding-top: 0.5rem;
  margin: 0;
`

export const UL = styled.ul`
  padding-bottom: 2rem;
  border-bottom: 1px solid lightslategray;
`;

export const FormContainer = styled.div`
  border: 1px solid brown;
  padding: 2rem;
`