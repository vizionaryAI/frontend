import styled, { DefaultTheme } from "styled-components";

export const Container = styled.div<{ theme: DefaultTheme }>`
  background-color: ${(props) => props.theme.headerBackground};
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;
