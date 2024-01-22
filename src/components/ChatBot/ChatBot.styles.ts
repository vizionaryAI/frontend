import styled, { DefaultTheme } from "styled-components";
import Button from "../Button/Button";

export const MessagesContainer = styled.div<{ theme: DefaultTheme }>`
  overflow-y: auto;
  padding: 0 20px;
  margin-bottom: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.chatBotMessageBackground};
`;

export const ChatContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  height: 100vh;
  overflow-y: auto;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.chatBotBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 4.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    max-height: 100vh;
    margin-top: 1.5rem;
    margin-bottom: 2.8rem;
  }
`;

export const Message = styled.div`
  padding: 10px 15px;
  margin: 8px;
  border-radius: 20px;
  max-width: 80%;
  word-wrap: break-word;
  line-height: 1.4;
`;

export const UserMessage = styled(Message)<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotUserMessageBackground};
  color: ${({ theme }) => theme.text};
  align-self: flex-end;
`;

export const BotMessage = styled(Message)<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotMessageBackground};
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
  border: 1px solid ${({ theme }) => theme.border};
`;

export const InputContainer = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotChatBackground};
  padding: 0.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Input = styled.textarea<{ theme: DefaultTheme }>`
  flex: 1;
  width: 100%;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  background-color: ${({ theme }) => theme.chatBotBackground};
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  color: ${({ theme }) => theme.text};
  resize: none;
  min-height: 6rem;
  padding: 0.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #999;
  }
`;

export const SendButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
