import styled, { DefaultTheme } from "styled-components";

export const Title = styled.h1<{ theme: DefaultTheme }>`
  color: ${(props) => props.theme.text};
`;
