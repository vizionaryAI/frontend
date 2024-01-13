import styled, { DefaultTheme } from "styled-components";
import { animated } from "react-spring";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";

export const SwitchContainer = styled.div<{
  color: string;
}>`
  width: 4rem;
  height: 100%;
  border-radius: 20px;
  border: 0.5px solid;
  background-color: ${({ color }) => color};
  position: relative;
  cursor: pointer;
`;

export const Slider = styled(animated.div)<{ theme: DefaultTheme }>`
  position: absolute;
  top: 0%;
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background-color: transparent;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ theme }) =>
    theme.mode === "dark" ? `url(${moonIcon})` : `url(${sunIcon})`};
  &:hover {
    transform: scale(1.3);
  }
`;
