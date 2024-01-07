import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { ButtonVariant } from "./Button";

export const Container = styled.button<{ variant: ButtonVariant }>`
  border-radius: 0.5rem;
  border: none;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-family: inherit;
  background-color: #3348dc;
  color: white;
  cursor: pointer;
  transition: all 0.125s ease-in-out;
  outline: 0.0625rem solid transparent;

  &:hover {
    background-color: #5568fc;
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
