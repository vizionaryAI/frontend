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
  height: 100vh;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  background: ${(props) => props.theme.notebookBackground};
  color: ${(props) => props.theme.text};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  line-height: 1.6;
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 31px,
    ${(props) => props.theme.border} 31px
  );
  background-size: 100% 32px;
  margin-top: 4.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin: 0;
    border-radius: 0;
    max-height: 100vh;
    margin-top: 1.5rem;
    margin-bottom: 2.8rem;
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
`;

export const Message = styled.div<{ role: string; theme: DefaultTheme }>`
  background: ${(props) =>
    props.role === "user"
      ? props.theme.userTextBackground
      : props.theme.adviserTextBackground};
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  display: inline-block;
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

export const Input = styled.textarea`
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.text};
  padding: 8px 10px;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 0px solid ${(props) => props.theme.highlight};
  }

  &::placeholder {
    color: #999;
  }
`;

export const InputContainer = styled.div`
  padding: 0.5rem 1rem;
`;

export const SendButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 5px;
  align-self: flex-start;
  cursor: pointer;
`;
