import { styled } from "styled-components";

export const StyledTodoFilter = styled.ul`
  display: flex;
  padding: 1em;
  justify-content: space-around;
  background: ${({ theme }) => theme.listItemBackgroundColor};
  color: ${({ theme }) => theme.filterStatusColor};
  button {
    background: inherit;
    border: hidden;
    color: inherit;
  }

  div {
    display: inline-flex;
    gap: 1em;
  }

  div button {
    color: ${({ theme }) => theme.filterButtonColor};
  }
`;
