import { styled } from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;

  #todo-list {
    display: flex;
    flex-direction: column;
  }
  form input[type="text"] {
    border: none;
    border-radius: 4px;
  }

  .
  // TODO list items
  #todo-list  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid black;
  }
`;
