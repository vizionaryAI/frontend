import styled, { DefaultTheme } from "styled-components";
import { RecordingState } from "../../types/chatbot";

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

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "state",
})<{ state: string }>`
  padding: 10% 10%;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ state }) => {
    switch (state) {
      case RecordingState.Recording:
        return "#f44336";
      case RecordingState.Waiting:
        return "#ff9800";
      case RecordingState.Listening:
        return "#3f51b5";
      default:
        return "#4caf50";
    }
  }};
  color: white;
  border: none;
  border-radius: 50%;

  &:hover {
    background-color: ${({ state }) => {
      switch (state) {
        case RecordingState.Recording:
          return "#d32f2f";
        case RecordingState.Waiting:
          return "#f57c00";
        case RecordingState.Listening:
          return "#303f9f";
        default:
          return "#388e3c";
      }
    }};
  }

  &:active {
    background-color: ${({ state }) => {
      switch (state) {
        case RecordingState.Recording:
          return "#d32f2f";
        case RecordingState.Waiting:
          return "#f57c00";
        case RecordingState.Listening:
          return "#303f9f";
        default:
          return "#388e3c";
      }
    }};
  }
`;

export const StatusText = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
`;
