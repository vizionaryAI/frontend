import styled, { DefaultTheme } from "styled-components";

export const BGContainer = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
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
  margin-top: 1rem;
`;
