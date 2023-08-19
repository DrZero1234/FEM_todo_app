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
    grid-template-rows: repeat(2, 1fr);
    gap: 1em;

    &li:nth-child(3) {
      grid-row-start: 1;
    }

    .filter-buttons:nth-child(2) {
      grid-row-start: 2;
    }
  }
`;
