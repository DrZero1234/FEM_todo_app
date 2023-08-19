import { styled } from "styled-components";
import { devices } from "../../utils/devices";

export const StyledTodoFilter = styled.ul`
  display: flex;
  justify-content: space-around;
  background: ${({ theme }) => theme.listItemBackgroundColor};
  color: ${({ theme }) => theme.filterStatusColor};
  align-items: center;
  li,
  button {
    background: inherit;
    border: hidden;
    color: inherit;
  }

  // Clear complete button
  button:hover {
    color: var(--primary-600);
    cursor: pointer;
  }

  .filter-buttons {
    display: inline-flex;
    gap: 0.5em;
    list-style-type: none;
    color: ${({ theme }) => theme.filterButtonColor};
  }

  .filter-buttons > li > button:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.itemFontColor};
  }

  // Active filter buttons style
  .filter-buttons li:nth-child(${(props) => props.activeFilter}) {
    color: var(--primary-600);
  }

  @media (${devices.mobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    row-gap: 1em;
    justify-content: center;
    align-items: center;
    background: inherit;

    .filter-buttons {
      grid-column: 1 / -1;
      background: ${({ theme }) => theme.listItemBackgroundColor};
    }

    button:nth-child(3) {
      gird-column-start: 2;
    }

    button:nth-child(3),
    span:nth-child(1) {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-row-start: 1;
      background: ${({ theme }) => theme.listItemBackgroundColor};
      width: 100%;
      height: 100%;
      text-align: center;
    }
  }
`;
