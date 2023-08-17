import { styled } from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: fixed;
  overflow-y: scroll;
  z-index: 10;
  top: 0;
  left: 0;
`;
