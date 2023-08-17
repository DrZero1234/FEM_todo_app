import { StyledTodoFilter } from "./styled/TodoFilter";

export const TodoFilter = ({
  filteredTodos,
  setFilterdTodos,
  handleFilter,
}) => {
  return (
    <StyledTodoFilter>
      <span>{filteredTodos.length} item left</span>
      <div>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>
          Completed
        </button>
      </div>
      <button onClick={() => handleFilter("clear")}>
        Clear Completed
      </button>
    </StyledTodoFilter>
  );
};
