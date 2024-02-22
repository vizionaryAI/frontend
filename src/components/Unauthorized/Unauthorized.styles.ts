import styled, { DefaultTheme } from "styled-components";

export const Dialog = styled.h1<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text || "#000"};
  text-align: center;
`;

export const Description = styled.p<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text || "#000"};
  text-align: center;
`;
