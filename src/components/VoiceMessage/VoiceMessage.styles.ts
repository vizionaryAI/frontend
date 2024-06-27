import styled, { DefaultTheme } from "styled-components";

export const ChatContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  margin: auto;

  background-color: ${({ theme }) => theme.chatBotBackground};

  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin: 0;
    margin-bottom: 8rem;
    margin-top: 5rem;

    max-height: 100vh;
    width: 100%;
    min-width: 0;

    box-shadow: none;
  }
`;

export const Button = styled.button<{ theme: DefaultTheme }>`
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
  margin-top: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const StartButton = styled.button<{ theme: DefaultTheme }>`
  width: 8rem;
  height: 2rem;
  border-radius: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text};
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
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
