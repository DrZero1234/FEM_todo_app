import { useEffect, useState } from "react";

import darkThemeSwitch from "/assets/images/icon-moon.svg";
import lightThemeSwitch from "/assets/images/icon-sun.svg";

import { v4 as uuidv4 } from "uuid";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { StyledHeader } from "./components/styled/Header";
import { TitleWrapper } from "./components/styled/TitleWrapper";
import { MainWrapper } from "./components/styled/MainWrapper";
import { ContentWrapper } from "./components/styled/ContentWrapper";

import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { Container } from "./components/styled/Container";
import { ThemeButton } from "./components/ThemeButton";

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

function App() {
  const [allTodos, setAllTodos] = useState(MOCK_DATA);
  const [filteredTodos, setFilterdTodos] = useState(allTodos);

  const [activeFilter, setActiveFilter] = useState(null);

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const lightTheme = {
    backgroundColor: "hsl(0, 0%, 98%)",
    listItemBackgroundColor: "white",
    itemFontColor: "rgba(79,77,98,255)",
    borderColor: "rgba(79, 77, 98, 255)",
    filterStatusColor: "rgba(184,183,190,255)",
    filterButtonColor: "rgba(147,147,158,255)",
  };

  const darkTheme = {
    backgroundColor: "hsl(235, 21%, 11%)",
    listItemBackgroundColor: "rgba(37,39,60,255)",
    itemFontColor: "rgba(127,129,151,255)",
    borderColor: "rgba(55,57,78,255)",
    filterStatusColor: "rgba(67,69,94,255)",
    filterButtonColor: "rgba(93,94,123,255)",
  };

  const handleFilter = (action) => {
    if (action === "all") {
      setFilterdTodos(allTodos);
      setActiveFilter(1);
    } else if (action === "active") {
      setFilterdTodos(allTodos.filter((todo) => !todo.complete));
      setActiveFilter(2);
    } else if (action === "completed") {
      setFilterdTodos(allTodos.filter((todo) => todo.complete));
      setActiveFilter(3);
    } else if (action === "clear") {
      let allTodosCopy = allTodos.filter((todo) => !todo.complete);
      setAllTodos(allTodosCopy);
    }
  };

  useEffect(() => {
    setFilterdTodos(allTodos);
  }, [allTodos]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <StyledHeader>
          <ContentWrapper>
            <TitleWrapper>
              <h1>todo</h1>
              <ThemeButton
                switchTheme={switchTheme}
                isDarkTheme={isDarkTheme}
              />
            </TitleWrapper>
            <MainWrapper>
              <TodoInput
                allTodos={allTodos}
                setAllTodos={setAllTodos}
              />
              <TodoList
                allTodos={allTodos}
                setAllTodos={setAllTodos}
                filteredTodos={filteredTodos}
                setFilterdTodos={setFilterdTodos}
                handleFilter={handleFilter}
                activeFilter={activeFilter}
                // Only for Filter
              />
            </MainWrapper>
          </ContentWrapper>
        </StyledHeader>
      </Container>
    </ThemeProvider>
  );
}

export default App;
