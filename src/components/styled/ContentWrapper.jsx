import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  min-width: 30em;
  margin: 3.5em;

  li,
  input {
    width: 100%;
    padding: 1em;
    background-color: white;
  }

  @media (max-width: 375px) {
    min-width: 20em;
  }
`;
