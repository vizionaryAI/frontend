import styled, { DefaultTheme } from "styled-components";
import { animated } from "react-spring";
import sunIcon from "../../assets/sun.png";
import moonIcon from "../../assets/moon.png";

export const SwitchContainer = styled.div<{
  theme: DefaultTheme;
}>`
  width: 4rem;
  height: 2rem;
  border-radius: 20px;
  border: 0.5px solid;
  background-color: ${({ theme }) => theme.text};
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
  filter: ${({ theme }) =>
    theme.mode === "light"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};

  &:hover {
    transform: scale(1.3);
  }
`;
