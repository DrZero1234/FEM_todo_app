import { StyledTodoList } from "./styled/TodoList";

import { Todo } from "./Todo";
import { TodoFilter } from "./TodoFilter";

export const TodoList = ({
  allTodos,
  setAllTodos,
  filteredTodos,
  setFilterdTodos,
  handleFilter,
  activeFilter,
}) => {
  const getTodoById = (id) => {
    return filteredTodos.find((todo) => todo.id === id);
  };

  return (
    <div className="main-wrapper">
      <div className="main-content-wrapper">
        {filteredTodos.length ? (
          <StyledTodoList>
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
          </StyledTodoList>
        ) : (
          <h1>No Item</h1>
        )}

        <TodoFilter
          filteredTodos={filteredTodos}
          setFilterdTodos={setFilterdTodos}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        />
      </div>
    </div>
  );
};
