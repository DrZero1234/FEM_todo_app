import { styled } from "styled-components";

export const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  color: ${({ theme }) => theme.itemFontColor};
  box-shadow: -22px 42px 153px -67px rgba(193, 210, 232, 0.75);
  -webkit-box-shadow: -22px 42px 153px -67px rgba(193, 210, 232, 0.75);
  -moz-box-shadow: -22px 42px 153px -67px rgba(193, 210, 232, 0.75);

  li label:hover {
    cursor: pointer;
  }
  li {
    background-color: ${({ theme }) => theme.listItemBackgroundColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-color: ${({ theme }) => theme.borderColor};
    border-bottom: 1px solid black;
  }

  // Border bottom for that

  .todo-item-right {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .todo-item-right {
    visibility: hidden;
  }

  li:hover {
    .todo-item-right {
      visibility: visible;
    }

    input[type="text"] {
      border 2px solid ${({ theme }) => theme.borderColor}
    }
  }
`;
