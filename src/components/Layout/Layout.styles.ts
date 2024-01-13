import styled, { DefaultTheme } from "styled-components";

export const Layout = styled.div<{ theme: DefaultTheme }>`
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.background};
  background-size: cover;
  background-position: center;
  z-index: -1;
  flex-direction: column;

  display: flex;
  justify-content: center; // horizontally center
  align-items: center; // vertically center
`;
