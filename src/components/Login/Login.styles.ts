import styled, { DefaultTheme } from "styled-components";

export const Title = styled.h1<{ theme: DefaultTheme }>`
  z-index: 1;
  color: ${(props) => props.theme.text};
`;
