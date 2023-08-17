import { styled } from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;

  form input[type="text"] {
    border-radius: 4px;
    background: ${({ theme }) => theme.listItemBackgroundColor};
    color: ${({ theme }) => theme.itemFontColor};
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
