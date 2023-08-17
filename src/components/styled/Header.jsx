import { styled } from "styled-components";
import desktopBackgroundLight from "/assets/images/bg-desktop-light.jpg";

export const StyledHeader = styled.header`
  display: grid;
  min-width: 100%;
  background: url(${desktopBackgroundLight});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  place-content: center;

  input[type="text"] {
    border: none;
  }
`;
