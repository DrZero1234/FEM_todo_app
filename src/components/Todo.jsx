import { useState } from "react";
import { StyledCheckbox } from "./styled/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import CloseIcon from "/assets/images/icon-cross.svg";
import EditIcon from "/assets/images/icon-edit.svg";

export const Todo = ({
  todoData,
  allTodos,
  setAllTodos,
  getTodoById,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todoData.content);

  const todoById = getTodoById(todoData.id);
  const todoIndex = allTodos.indexOf(getTodoById(todoData.id));

  const handleDelete = () => {
    const new_array = allTodos.filter(
      (todo) => todo.id != todoData.id
    );
    setAllTodos(new_array);
  };

  const handleChange = (e) => {
    const allTodosCopy = allTodos.slice();
    if (e.target.checked) {
      todoById.complete = true;
    } else {
      todoById.complete = false;
    }

    allTodosCopy[todoIndex] = todoById;
    setAllTodos(allTodosCopy);
    console.log(allTodos);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const allTodosCopy = allTodos.slice();
    const copy_todo = allTodos[todoIndex];
    copy_todo.content = editText;
    allTodosCopy[todoIndex] = copy_todo;
    setAllTodos(allTodosCopy);

    setIsEdit(!isEdit);
  };

  return (
    <>
      <StyledCheckbox>
        <input
          type="checkbox"
          id={todoData.id}
          defaultValue={todoData.content}
          onChange={(e) => handleChange(e)}
          checked={todoData.complete}
        />

        {isEdit ? (
          <form onSubmit={(e) => handleEdit(e)}>
            <input
              required
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            ></input>
          </form>
        ) : (
          <>{todoData.content}</>
        )}
      </StyledCheckbox>
      <div className="todo-item-right">
        <button onClick={() => setIsEdit(!isEdit)}>
          <FontAwesomeIcon
            icon={faPenToSquare}
            size="xl"
            style={{ color: "#494c6b" }}
          />
        </button>
        <button onClick={() => handleDelete()}>
          <img src={CloseIcon} alt="Delete item" />
        </button>
      </div>
    </>
  );
};
