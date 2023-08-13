import { useState } from "react";
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
  { id: uuidv4(), complete: false, content: "Read for an hour" },
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

const TodoInput = (/*{allTodos,setAllTodos}*/) => {
  return;
};

const TodoList = ({ allTodos }) => {
  return (
    <ul>
      {allTodos.map((todo) => (
        <Todo todoData={todo} />
      ))}
    </ul>
  );
};

const Todo = ({ todoData }) => {
  return (
    <li key={todoData.id}>
      <input type="radio" id={todoData.id}></input>
      <label htmlFor={todoData.id}>{todoData.content}</label>
    </li>
  );
};

const TodoFilter = (
  {
    /**/
  }
) => {};

function App() {
  const [allTodos, setAllTodos] = useState(MOCK_DATA);

  return <TodoList allTodos={allTodos} />;
}

export default App;
