import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.headerBackground};
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.headerColor};
  padding: 0.5rem;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  padding-left: 1.5rem;
`;
