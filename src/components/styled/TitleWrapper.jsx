import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  h1 {
    font-size: 2rem;
    color: white;
    font-weight: var(--fw-bold);
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  button {
    background: inherit;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
`;
