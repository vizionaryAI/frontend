import styled, { DefaultTheme } from "styled-components";
import Button from "../Button/Button";

export const MessagesContainer = styled.div<{ theme: DefaultTheme }>`
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.chatBotBackground};
`;

export const ChatContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;

  height: 100vh;
  overflow-y: auto;
  margin: auto;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.chatBotBackground};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 4.5rem;
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
`;

export const InputContainer = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotChatBackground};
  padding: 1rem;
  margin: 8px;

  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.border};
  border-radius: 0px;
  color: ${(props) => props.theme.text};
  width: 100%;
  box-sizing: border-box;
  resize: none;
  font-size: 1rem;
  line-height: 1.6;
  height: 2rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    box-sizing: border-box;
    overflow-y: hidden;
    line-height: 1.6;
  }
`;

export const SendButton = styled(Button)<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-left: 0.5rem;
  border-radius: 25px;
  padding: 1.2rem;
  width: 6rem;
  background-color: ${({ theme }) => theme.sendButton};
  color: white;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ErrorBox = styled.div`
  background-color: #ffccbc;
  color: #c62828;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

export const WritingIndicatorContainer = styled.div`
  align-self: flex-start;
  margin-left: 1.5rem;
`;
