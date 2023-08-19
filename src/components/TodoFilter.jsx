import { StyledTodoFilter } from "./styled/TodoFilter";

export const TodoFilter = ({
  filteredTodos,
  setFilterdTodos,
  handleFilter,
  activeFilter,
}) => {
  return (
    <StyledTodoFilter activeFilter={activeFilter}>
      <span>{filteredTodos.length} item left</span>
      <ul className="filter-buttons">
        <li>
          <button onClick={() => handleFilter("all")}>All</button>
        </li>
        <li>
          <button onClick={() => handleFilter("active")}>
            Active
          </button>
        </li>
        <li>
          <button onClick={() => handleFilter("completed")}>
            Completed
          </button>
        </li>
      </ul>
      <button onClick={() => handleFilter("clear")}>
        Clear Completed
      </button>
    </StyledTodoFilter>
  );
};
