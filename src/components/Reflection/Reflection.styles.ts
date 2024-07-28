import styled, { DefaultTheme } from "styled-components";

export const BGContainer = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.highlightColor};
  }

  &:before {
    clip-path: polygon(51.4% 0%, 100% 26.8%, 100% 0%);
  }

  &:after {
    clip-path: polygon(0% 100%, 82.4% 100%, 0% 64.5%);
    right: 0;
    top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${({ theme }) => theme.highlightColor};
    }

    &:before {
      clip-path: polygon(100% 0%, 100% 31%, 60.6% 0%);
    }

    &:after {
      clip-path: polygon(0% 100%, 82.4% 100%, 0% 77.5%);
      right: 0;
      top: 0;
    }
  }
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
