import { styled } from "styled-components";
import { devices } from "../../utils/devices";

export const ContentWrapper = styled.div`
  min-width: 40em;
  margin: 3.5em;

  li,
  input {
    width: 100%;
    padding: 1em;
    background-color: white;
  }

  @media (${devices.desktop}) {
    min-width: 30em;
  }

  @media (${devices.mobile}) {
    min-width: 20em;
  }
`;
