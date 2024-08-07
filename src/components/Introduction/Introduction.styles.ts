import styled, { DefaultTheme } from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BGContainer = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;

export const MessagesContainer = styled.div<{ theme: DefaultTheme }>`
  overflow-y: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor};
`;

export const Container = styled.div<{ theme: DefaultTheme }>`
  z-index: 1;
  display: flex;
  flex-direction: column;

  max-width: 50rem;
  width: 100%;
  height: 100%;

  border-radius: 15px;
  background-color: ${({ theme }) => theme.mainColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 100%;
    width: 100%;

    box-shadow: none;
    border-radius: 0px;
  }
`;

export const Message = styled.div`
  padding: 10px 15px;
  margin: 8px;
  border-radius: 20px;
  max-width: 80%;
  line-height: 1.4;
`;

export const UserMessage = styled(Message)<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.highlightColor};
  color: ${({ theme }) => theme.mainColor};
  align-self: flex-end;
`;

export const BotMessage = styled(Message)<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotMessageBackground};
  color: ${({ theme }) => theme.text};
  align-self: flex-start;
`;

export const InputContainer = styled.div<{ theme: DefaultTheme }>`
  background-color: ${({ theme }) => theme.chatBotChatBackground};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;

  display: flex;
  align-items: flex-end;
  flex-direction: row;

  @media (max-width: 768px) {
    padding-bottom: 28%;
  }
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
  cursor: pointer;
  background-color: ${({ theme }) => theme.highlightColor};

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<{
  theme: DefaultTheme;
}>`
  color: ${({ theme }) => theme.mainColor};
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

  color: ${({ theme }) => theme.mainColor};
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Title = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0;
  padding: 0.5rem;
`;
