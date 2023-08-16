import { styled } from "styled-components";

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: red;
  width: 0.25em;
  height: 0.25em;
  border: 0.1em solid black;
  border-radius: 1em;
  transform: translateY(-0.075em);
`;
