import styled, { DefaultTheme, keyframes } from "styled-components";

const scaleLong = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
  }
`;

export const Wrapper = styled.div<{ theme: DefaultTheme }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background: ${({ theme }) => theme.loaderBackground || "black"};
`;

export const Svg = styled.svg`
  animation: ${scaleLong} 1s infinite alternate-reverse;
  width: 100%;
  height: 10%;
`;

const strokeLong = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 10000;
  }
`;

export const Path = styled.text<{ theme: DefaultTheme }>`
  transform: scale(40%) translate(1%, 25%);
  fill: transparent !important;
  stroke: ${({ theme }) => theme.loaderColor || "white"};
  stroke-width: 15px;
  stroke-dasharray: 1800 200;
  animation: ${strokeLong} 10s alternate-reverse;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
