import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { StyledCheckbox } from "./styled/Checkbox";

export const TodoInput = ({ allTodos, setAllTodos }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleChange = (e) => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTodoText) {
      const todosCopy = allTodos.slice();
      const new_todo = {
        id: uuidv4(),
        complete: false,
        content: newTodoText,
      };

      todosCopy.push(new_todo);
      setAllTodos(todosCopy);
      setNewTodoText("");
    }
    return;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        required
        type="text"
        onChange={handleChange}
        value={newTodoText}
      ></input>
    </form>
  );
};
