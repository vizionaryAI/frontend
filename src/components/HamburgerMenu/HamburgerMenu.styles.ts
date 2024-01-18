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
  padding-top: 1.25rem;

  overflow: auto;
  border-right: 0.0625rem solid;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  position: fixed;
  top: 1rem;
  z-index: 200;
`;

export const MenuItem = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin-top: 2rem;
  cursor: pointer;
  text-align: center;

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
  padding-bottom: 2rem;
`;
