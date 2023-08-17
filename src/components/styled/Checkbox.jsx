import { styled } from "styled-components";

export const StyledCheckbox = styled.label`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5em;
  margin-top: 1em;
  word-break: break-all;
  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: inherit;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: blue;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid black;
    border-radius: 100vw;
    transform: translateY(-0.5em);
    display: grid;
    place-content: center;
  }

  input[type="text"] {
    border: 2px solid ${({ theme }) => theme.borderColor};
  }

  input[type="checkbox"]::before {
    content: "";
    border-radius: inherit;
    height: 1.15em;
    width: 1.15em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em red;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
