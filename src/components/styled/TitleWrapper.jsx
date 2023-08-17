import { styled } from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;

  h1 {
    color: white;
    font-size: 2rem;
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
