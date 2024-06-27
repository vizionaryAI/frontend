import styled, { DefaultTheme } from "styled-components";

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

export const Title = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  margin: 0;
  padding: 0.5rem;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
`;
