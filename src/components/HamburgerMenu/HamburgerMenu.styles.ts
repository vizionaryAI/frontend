import styled, { DefaultTheme } from "styled-components";

export const MenuContainer = styled.div`
  position: relative;
`;

export const MenuIcon = styled.div<{ theme: DefaultTheme }>`
  cursor: pointer;
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
`;

export const MenuContent = styled.div<{ isopen: string }>`
  display: ${(props) => (props.isopen === "true" ? "flex" : "none")};
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: ${(props) => props.theme.menuBackground || "#f9f9f9"};
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  min-width: 160px;
  transform: translateX(45%);
  align-items: center;

  & > * {
    margin: 5px 0; // Egyenletes térköz a gombok között
  }
`;
