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
    gap: 1em;
  }

  .todo-item-right {
    visibility: hidden;
  }

  li button {
    background: inherit;
    border: none;
    transition-property: transform;
    transition-duration: 0.2s;
    transition-timing-function: ease-in;
  }

  li button:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  li:hover {
    .todo-item-right {
      visibility: visible;
    }
  }
`;
