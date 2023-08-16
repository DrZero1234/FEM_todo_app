import { styled } from "styled-components";

export const StyledTodoFilter = styled.ul`
  display: flex;
  padding: 1em;
  justify-content: space-around;

  button  {
    background: inherit;
    border: hidden;
  }

  div {
    display: inline-flex;
    gap: 1em;
  }
`;
