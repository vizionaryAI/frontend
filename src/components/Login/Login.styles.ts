import styled, { DefaultTheme } from "styled-components";

export const Title = styled.h1<{ theme: DefaultTheme }>`
  z-index: 1;
  font-size: 4rem;
  background: ${({ theme }) => theme.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
