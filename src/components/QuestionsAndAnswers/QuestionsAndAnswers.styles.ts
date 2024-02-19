import styled, { DefaultTheme } from "styled-components";
import Button from "../Button/Button";

export const MessagesContainer = styled.div`
  overflow-y: auto;
  padding: 0 20px;
  margin-bottom: 10px;
  flex-grow: 1;
`;

export const NotebookPage = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.notebookBackground};
  color: ${(props) => props.theme.text};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  line-height: 1.6;

  background-size: 100% 32px;
  margin-top: 4.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 8rem;
  }
`;

export const Question = styled.h2`
  margin: 0;
  padding: 10px 0;
`;

export const Subtitle = styled.p`
  color: #666;
  margin: 0;
  padding: 5px 0;
  margin-bottom: 2rem;
`;

export const Message = styled.div<{ role: string; theme: DefaultTheme }>`
  background: ${(props) =>
    props.role === "user"
      ? props.theme.userTextBackground
      : props.theme.adviserTextBackground};
  border-radius: 8px;
  margin-bottom: 0.8rem;

  font-weight: ${(props) => (props.role !== "user" ? "bold" : "normal")};
  word-wrap: break-word;
  word-break: break-word;
`;

export const ErrorBox = styled.div`
  background-color: #ffccbc;
  color: #c62828;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
`;

export const Input = styled.textarea<{ theme: DefaultTheme }>`
  background: ${(props) => props.theme.notebookBackground};
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

  &::placeholder {
    color: ${(props) => props.theme.placeholderText};
  }

  @media (max-width: 768px) {
    flex-grow: 1;
    box-sizing: border-box;
    overflow-y: hidden;
    line-height: 1.6;
  }
`;

export const InputContainer = styled.div`
  padding-left: 1rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const SendButton = styled(Button)<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 1.2rem;
  align-self: flex-end;
  cursor: pointer;
  background-color: ${(props) => props.theme.sendButton};
  color: #fff;

  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
