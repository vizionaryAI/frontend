import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { DefaultTheme } from "styled-components";

export const Container = styled.button<{ theme: DefaultTheme }>`
  border-radius: 25px;
  border: none;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  background: ${({ theme }) => theme.blue};
  color: white;
  cursor: pointer;
  transition: all 0.125s ease-in-out;
  outline: 0.0625rem solid transparent;
  height: 1.8rem;

  &:hover {
    filter: brightness(0.8);
  }
  &:active,
  &:focus,
  &:focus-visible {
    outline-color: black !important;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 1rem;
`;
