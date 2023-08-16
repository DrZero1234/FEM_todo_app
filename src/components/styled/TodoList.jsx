import { styled } from "styled-components";

export const StyledTodoList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: none;

  input[type="checkbox"]  {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: red;
    width: 0.25em;
    height: 0.25em;
    border: 0.1em solid black;
    border-radius: 1em;
    transform: translateY(-0.075em);
  }
  input[type="checkbox"]:checked {
    background: red;
  }

  li label:hover {
    cursor: pointer;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }

  // Border bottom for that

  .todo-item-left > label,
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
  }
`;
