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

export const StartButton = styled.button<{ theme: DefaultTheme }>`
  margin-top: 1rem;
  width: 12rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.highlightColor};
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 0.4rem 1rem
      ${({ theme }) =>
        theme.mode === "dark"
          ? "rgba(255, 255, 255, 0.4)"
          : "rgba(128, 128, 128, 0.7)"};
  }

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
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

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.6rem;

  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  align-self: center;
  font-weight: bold;

  margin-left: 5rem;
  margin-right: 5rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-left: 5rem;
  margin-right: 5rem;

  color: ${({ theme }) => theme.text};
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    font-size: 0.9rem;
    margin-top: 0rem;
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
