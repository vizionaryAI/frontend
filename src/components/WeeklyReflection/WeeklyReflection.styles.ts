import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50rem;
  width: 100%;
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

export const Title = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
  position: absolute;
  left: 50%;
  font-size: 1.2rem;
  transform: translateX(-50%);
  margin: 0;
`;
