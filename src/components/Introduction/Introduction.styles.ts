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

export const Container = styled.div<{ theme: DefaultTheme }>`
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
  color: ${({ theme }) => theme.textLight};
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
  font-family: "Inter";

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

export const EndConversationButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const EndConversationButton = styled(Button)<{ theme: DefaultTheme }>`
  background-color: transparent;
  border: 0.3px solid
    ${(props) => (props.theme.mode === "light" ? "#747474" : props.theme.text)};
  color: ${(props) =>
    props.theme.mode === "light" ? "#747474" : props.theme.text};
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
`;

export const SwitchLabel = styled.label.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  background-color: ${(props) => (props.isActive ? "#4CAF50" : "#ccc")};

  border-radius: 34px;
  transition: background-color 0.2s;
`;

export const SwitchButton = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isActive",
})<{ isActive: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: ${(props) =>
    props.isActive ? "translateX(26px)" : "translateX(0)"};
`;

export const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Title = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0;
  padding: 0.5rem;
`;
