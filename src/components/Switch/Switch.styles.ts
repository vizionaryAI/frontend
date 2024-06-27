import styled, { DefaultTheme } from "styled-components";
import { animated } from "react-spring";
import voice from "../../assets/voice.png";
import keyboard from "../../assets/keyboard.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem;
`;

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

export const Slider = styled(animated.div).withConfig({
  shouldForwardProp: (prop) => prop !== "isVoiceMessage",
})<{ isVoiceMessage: boolean; theme: DefaultTheme }>`
  position: absolute;

  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;

  border: 0.5px solid;
  background-color: white;

  background-position: center;
  transition: 0.4s;

  right: ${({ isVoiceMessage }) => (isVoiceMessage ? "50%" : "0%")};
`;

export { voice, keyboard };
