import styled, { DefaultTheme } from "styled-components";

export const Title = styled.h1<{ theme: DefaultTheme }>`
  z-index: 1;
  font-size: 4rem;
  background: ${({ theme }) => theme.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Logo = styled.img<{ theme: DefaultTheme }>`
  width: 12rem;
  filter: ${({ theme }) =>
    theme.mode === "dark"
      ? "brightness(0) invert(1)"
      : "brightness(0) invert(0)"};
`;

export const Container = styled.div`
  text-align: center;
  padding: 3rem;
  z-index: 100;
`;
