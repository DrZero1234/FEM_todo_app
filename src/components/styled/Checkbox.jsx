import React from "react";
import { styled, keyframes } from "styled-components";
import CheckMark from "/assets/images/icon-check.svg";

export const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, 50%) scale(1.5);
}

to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  margin: 0.6em 1em;
`;

export const Indicator = styled.div`
  border: 1px solid;
  border-radius: 1em;
  width: 1.2em;
  height: 1.2em;
  position: absolute;
  top: 0;
  left: -1.5em;

  ${Label}:hover & {
    background: #ccc;
    border-color: linear-gradient(
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
  }

  ${Input}:checked + &::after {
    display: grid;
    place-content: center;
    content: url(${CheckMark});
    border: 1px solid #263238;
    border-radius: 1em;
    background: linear-gradient(
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    width: 1.2em;
    height: 1.2em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: ${popIn};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }

  ${Input}:disabled + & {
    pointer-events: none;
    opacity: 0.6;
    background: #e6e6e6;
  }
`;
