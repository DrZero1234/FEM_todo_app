import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import CloseIcon from "/assets/images/icon-cross.svg";
import { CheckBox } from "./Checkbox";

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
      <CheckBox
        todoData={todoData}
        handleChange={handleChange}
        handleEdit={handleEdit}
        isEdit={isEdit}
        editText={editText}
        setEditText={setEditText}
      />
      <div className="todo-item-right">
        <button onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? (
            <FontAwesomeIcon
              icon={faCheck}
              size="xl"
              style={{ color: "#494c6b" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="xl"
              style={{ color: "#494c6b" }}
            />
          )}
        </button>
        <button onClick={() => handleDelete()}>
          <img src={CloseIcon} alt="Delete item" />
        </button>
      </div>
    </>
  );
};
