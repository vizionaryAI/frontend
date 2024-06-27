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

  border-radius: 15px;
  background-color: ${({ theme }) => theme.chatBotBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

export const Button = styled.button`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StatusText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
`;
