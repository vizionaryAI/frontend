import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.mainColor || "#fff"};
  position: fixed;
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  border-color: ${(props) => props.theme.border || "#eee"};
  border-style: solid;
  border-width: 0 0.0625rem 0 0;
  overflow: auto;

  box-shadow: 5px 0 5px -2px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuIcon = styled.div<{ theme: DefaultTheme }>`
  cursor: pointer;
  position: fixed;
  margin-top: 1.5em;
  z-index: 200;
  left: 2rem;
  color: ${(props) => props.theme.text || "#000"};
`;

export const MenuItem = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  padding: 1rem 0;
  margin-top: 2rem;
  cursor: pointer;
  text-align: start;
  padding-left: 3rem;
  color: ${({ theme }) => theme.text};

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  &:hover {
    background-color: ${(props) => props.theme.highlightColor};
    color: ${({ theme }) => theme.mainColor};
  }

  @media (max-width: 768px) {
    padding-left: 0rem;
    text-align: center;
  }
`;

export const ThemeToggleWrapper = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;
