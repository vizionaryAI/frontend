import styled, { DefaultTheme } from "styled-components";

export const LoginLayout = styled.div<{ theme: DefaultTheme }>`
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
  justify-content: center;
  align-items: center;
`;

export const AppLayout = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.appLayoutBackground || "#fff"};
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  flex-direction: column;
`;

export const Layout = styled.div<{ theme: DefaultTheme; open: boolean }>`
  min-width: 320px;
  min-height: 100vh;
  position: relative;
  left: ${(props) => (props.open ? "20rem" : "0")};
  transition: left 0.3s ease;
  top: 0;
  width: ${(props) => (props.open ? "calc(100% - 20rem)" : "100%")};
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 768px) {
    left: 0;
    top: 2.5rem;
    width: 100%;
  }
`;
