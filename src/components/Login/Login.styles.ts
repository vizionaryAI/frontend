import styled, { DefaultTheme } from "styled-components";

export const Title = styled.h1<{ theme: DefaultTheme }>`
  z-index: 1;
  font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
  color: ${(props) => props.theme.text};
`;
