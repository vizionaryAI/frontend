import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.hamburgerMenuBackground || "#fff"};
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 0.125rem 0 0.3125rem rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  border-color: ${(props) => props.theme.hamburgerMenuBorder || "#eee"};
  border-style: solid;
  border-width: 0 0.0625rem 0 0;
  overflow: auto;
  transition: left 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuIcon = styled.div<{ theme: DefaultTheme }>`
  cursor: pointer;
  position: fixed;
  top: 2rem;
  z-index: 200;
  left: 2rem;
  color: ${(props) => props.theme.text || "#000"};
`;

export const MenuItem = styled.div<{ theme: DefaultTheme }>`
  width: 100%;
  padding: 1rem 0;
  margin-top: 2rem;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.theme.text || "#000"};

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  &:hover {
    background-color: ${(props) =>
      props.theme.hamburgerMenuHoverBackground || "#f9efdb"};
  }
`;

export const ThemeToggleWrapper = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 5rem;
`;
