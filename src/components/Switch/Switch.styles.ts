import styled, { DefaultTheme } from "styled-components";
import { animated } from "react-spring";
import voice from "../../assets/voice.png";
import keyboard from "../../assets/keyboard.png";

export const SwitchContainer = styled.div<{
  theme: DefaultTheme;
}>`
  width: 4rem;
  height: 2rem;
  border-radius: 20px;
  border: 0.5px solid;
  background-color: ${({ theme }) => theme.switcherBackground};
  position: relative;
  cursor: pointer;
`;

export const Slider = styled(animated.div)<{
  theme: DefaultTheme;
  isVoiceMessage: boolean;
}>`
  position: absolute;
  top: 0%;
  width: 50%;
  height: 100%;
  border-radius: 15px;
  background-color: transparent;
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${({ isVoiceMessage }) =>
    isVoiceMessage ? `url(${voice})` : `url(${keyboard})`};
  right: ${({ isVoiceMessage }) => (isVoiceMessage ? "50%" : "0%")};
  filter: ${({ theme }) =>
    theme.mode === "light"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};

  &:hover {
    transform: scale(1.3);
  }
`;
