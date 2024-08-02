import styled, { DefaultTheme } from "styled-components";
import Button from "../Button/Button";

export const ChatContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin: auto;

  background-color: ${({ theme }) => theme.mainColor};

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin: 0;
    max-height: 85%;
    width: 100%;
    min-width: 0;

    box-shadow: none;
  }
`;

export const VoiceButton = styled.button<{ theme: DefaultTheme }>`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.text};
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StatusText = styled.p<{ theme: DefaultTheme }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const ButtonTitle = styled.p<{ theme: DefaultTheme }>`
  font-size: 1rem;
  color: ${({ theme }) => theme.mainColor};
`;

export const AnimationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const RecorderButtonContainer = styled.div`
  display: flex;

  align-items: center;
  height: 80%;
`;

export const EndConversationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EndConversationButton = styled(Button)<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.mainColor};
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  width: 100%;
  @media (max-width: 768px) {
    height: 60%;
  }
`;

export const Logo = styled.img<{ theme: DefaultTheme }>`
  width: 20%;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.highlightColor};
  font-weight: 100;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.highlightColor};
  font-weight: 300;
  font-style: italic;
  margin: 0;
`;

export const StartButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartButton = styled.button<{ theme: DefaultTheme }>`
  margin-top: 1rem;
  width: 14rem;
  height: 2rem;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.highlightColor};
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 0.4rem 1rem
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.4)"
          : "rgba(128, 128, 128, 0.7)"};
  }
`;
