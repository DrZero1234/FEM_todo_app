import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import desktopBackground from "/assets/images/bg-desktop-dark.jpg";

import { v4 as uuidv4 } from "uuid";

const MOCK_DATA = [
  {
    id: uuidv4(),
    complete: false,
    content: "Jog around the park 3x",
  },
  { id: uuidv4(), complete: true, content: "Read for an hour" },
  { id: uuidv4(), complete: false, content: "Pick up groceries" },
];

const ThemeBtn = (
  {
    /*{currentTheme, setCurrentTheme}*/
  }
) => {};

const Header = (/*{currentTheme}*/) => {
  return;
};

const TodoInput = ({ allTodos, setAllTodos }) => {
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

const TodoList = ({
  allTodos,
  setAllTodos,
  filteredTodos,
  setFilterdTodos,
  handleFilter,
}) => {
  const getTodoById = (id) => {
    return filteredTodos.find((todo) => todo.id === id);
  };

  return (
    <>
      {filteredTodos.length ? (
        <ul>
          {filteredTodos.map((todo) => (
            <li key={todo.id}>
              <Todo
                allTodos={allTodos}
                setAllTodos={setAllTodos}
                todoData={todo}
                filteredTodos={filteredTodos}
                setFilterdTodos={setFilterdTodos}
                getTodoById={getTodoById}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>No Item</h1>
      )}

      <TodoFilter
        filteredTodos={filteredTodos}
        setFilterdTodos={setFilterdTodos}
        handleFilter={handleFilter}
      />
    </>
  );

  /*
  return (
    <>
      {filteredTodos.length ? (
        <>
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id}>
                <Todo
                  todoData={todo}
                  filteredTodos={filteredTodos}
                  setFilterdTodos={setFilterdTodos}
                  getTodoById={getTodoById}
                />
              </li>
            ))}
          </ul>
          <TodoFilter
            filteredTodos={filteredTodos}
            setFilterdTodos={setFilterdTodos}
            handleFilter={handleFilter}
            allTodos={allTodos}
          />
        </>
      ) : (
        <h1>No item</h1>
      )}
    </>
  );
  */
};

const Todo = ({ todoData, allTodos, setAllTodos, getTodoById }) => {
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
        <label htmlFor={todoData.id}>{todoData.content}</label>
      )}

      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      <button onClick={() => handleDelete()}>X</button>
    </>
  );
};

const TodoFilter = ({
  filteredTodos,
  setFilterdTodos,
  handleFilter,
}) => {
  return (
    <>
      <ul>
        <span>{filteredTodos.length} item left</span>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>
          Completed
        </button>
        <button onClick={() => handleFilter("clear")}>
          Clear Completed
        </button>
      </ul>
    </>
  );
};

function App() {
  const [allTodos, setAllTodos] = useState(MOCK_DATA);
  const [filteredTodos, setFilterdTodos] = useState(allTodos);

  const handleFilter = (action) => {
    if (action === "all") {
      setFilterdTodos(allTodos);
    } else if (action === "active") {
      setFilterdTodos(allTodos.filter((todo) => !todo.complete));
    } else if (action === "completed") {
      setFilterdTodos(allTodos.filter((todo) => todo.complete));
    } else if (action === "clear") {
      let allTodosCopy = allTodos.filter((todo) => !todo.complete);
      setAllTodos(allTodosCopy);
    }
  };

  useEffect(() => {
    setFilterdTodos(allTodos);
  }, [allTodos]);

  return (
    <>
      <TodoInput allTodos={allTodos} setAllTodos={setAllTodos} />
      <TodoList
        allTodos={allTodos}
        setAllTodos={setAllTodos}
        filteredTodos={filteredTodos}
        setFilterdTodos={setFilterdTodos}
        handleFilter={handleFilter}
        // Only for Filter
        allTodos={allTodos}
      />
    </>
  );
}

export default App;
